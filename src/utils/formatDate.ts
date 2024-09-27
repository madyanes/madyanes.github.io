export function formatDate(publishDate: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Day of the week
    year: "numeric", // Year
    month: "long", // Month
    day: "numeric", // Date
  };
  return new Intl.DateTimeFormat("id-ID", options).format(publishDate);
}
