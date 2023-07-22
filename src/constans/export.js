export const getPressure = (hpa) => {
    return Math.round(hpa * 0.750062)
}
export const getToday = () => {
    return new Date().toLocaleString('en-US', {
        year: 'numeric',
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    })
}
export const getSunTime = (date, timezone) => {
    console.log(date, timezone)
    const dateExcludeTimezone = (date + timezone) * 1000
    return new Date(dateExcludeTimezone).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Atlantic/Azores'
    })
}