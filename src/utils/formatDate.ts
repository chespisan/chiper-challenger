
export const formatDate = (date: number | null): String | undefined  => {
  if(date) {
    const timestamp = date * 1000;
    const newDate = new Date(timestamp).toDateString();
    return newDate;
  }
} 