/**
 * Форматирование даты в формат DD.MM.YYYY HH:mm
 * @param date
 * @returns {string}
 */
export default function formatDate(date) {
  const formatedDate = new Date(date * 1000);
  return `${formatedDate.toLocaleDateString("default", {
    month: "numeric",
    day: "numeric",
  })}.${formatedDate.getFullYear()} ${formatedDate.toLocaleTimeString(
    "default",
    {
      hour: "numeric",
      minute: "numeric",
    }
  )}`;
}
