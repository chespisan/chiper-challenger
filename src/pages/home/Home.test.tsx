/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import axios from 'axios'
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import debounce from "lodash/debounce";

import { BikesServices } from '../../services/bikeServices';
import { Home } from './Home';

const bikeService = new BikesServices();

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('lodash/debounce', () => jest.fn(fn => fn));

const mockCall = () => {
  mockedAxios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        bikes: [
          {
            "date_stolen": 1646414049,
            "description": "Folding bike",
            "frame_colors": [
              "Blue"
            ],
            "frame_model": "Touring",
            "id": 865816,
            "is_stock_img": false,
            "large_img": "https://files.bikeindex.org/uploads/Pu/325671/large_490F803A-EF1F-4889-96B5-FBA0FF247AD4.jpeg",
            "location_found": null,
            "manufacturer_name": "Riese und Müller",
            "external_id": null,
            "registry_name": null,
            "registry_url": null,
            "serial": "PG18040377",
            "status": "stolen",
            "stolen": true,
            "stolen_coordinates": null,
            "stolen_location": "US",
            "thumb": "https://files.bikeindex.org/uploads/Pu/325671/small_490F803A-EF1F-4889-96B5-FBA0FF247AD4.jpeg",
            "title": "2019 Riese und Müller Touring",
            "url": "https://bikeindex.org/bikes/865816",
            "year": 2019
          }
        ],
        stolen: 10000
      }
    }))
}

const mockRejectCall = () => {
  mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error('internal err~')))
}

describe('Test Home Component', () => {
  let component: any;
  
  beforeEach(async () => {
    mockCall()
    jest.useFakeTimers();
    await act(async () => {
      component = render(<Home />)
    })
  });

  test('render home', async () => {
    expect(component.getByTestId('home')).not.toBeUndefined();
  });

  test('Method success getBikesStolen', async () => {
    const res = await bikeService.getBikesStolen({ page: 1 })
    expect(res).not.toBeNull()
  });

  test('Method success getAllBikesCount', async () => {
    const res = await bikeService.getAllBikesCount()
    expect(res).not.toBeNull()
  });

  test('Method error', async () => {
    mockRejectCall()
    await act(async () => {
      component = render(<Home />)
    })
    const res = await bikeService.getBikesStolen({ page: 1 })
    expect(res).not.toBeNull()
  });

  test('input:', () => {
    const input = component.getByTestId('input-search')
    fireEvent.change(input, { target: { value: 'bike' } })
    jest.advanceTimersByTime(1000);
  });

  test('button clean:', () => {
    const button = component.getByTestId('action-clean-filter')
    fireEvent.click(button);
  });

});