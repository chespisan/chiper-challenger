import { createGlobalStyle } from 'styled-components';


export const colorPrimary = '#3498db';
export const colorSecondary = '#f2f2f2';
export const colorTertiary = '#fff';
export const colorWaring = '#efc13b';
export const colorDanger = '#e74c3c';


export const GlobalStyles = createGlobalStyle `

body {
  background-color: ${colorSecondary};
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	border: none;
	outline: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;