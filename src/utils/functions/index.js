export const getToken = () => {
    return JSON.parse(localStorage.getItem('authToken'))
        ? JSON.parse(localStorage.getItem('authToken'))
        : ''
}
