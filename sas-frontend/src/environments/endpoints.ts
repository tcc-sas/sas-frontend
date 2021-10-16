export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
    }
}

const authController = (baseApiUrl: string) => ({
    login: baseApiUrl + '/login'
})