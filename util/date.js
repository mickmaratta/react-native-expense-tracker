export function getFormattedDate(date) {
    const newDate = new Date(date)
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
};

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}