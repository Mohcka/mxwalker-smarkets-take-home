/**
 * Formats the provided date to be used in the date input
 * @param date The `Date` to format
 * @see https://stackoverflow.com/questions/57198151/how-to-set-the-date-in-angular-reactive-forms-using-patchvalue
 */
export function formatDate(date: string): string {
  const d = new Date(date)
  let month = "" + (d.getMonth() + 1)
  let day = "" + d.getDate()
  const year = d.getFullYear()
  if (month.length < 2) {
    month = "0" + month
  }
  if (day.length < 2) {
    day = "0" + day
  }
  return [year, month, day].join("-")
}