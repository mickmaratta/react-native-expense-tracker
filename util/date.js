export function getFormattedDate(date) {
    const newDate = new Date(date)
    const date2 = newDate.toISOString().substr(0, 10);
    return date2;
    //return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
};

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}