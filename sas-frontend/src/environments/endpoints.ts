export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
        userController: userController(host + '/api/user'),
    }
}

const authController = (baseApiUrl: string) => ({
    login: baseApiUrl + '/login',
    register: baseApiUrl + '/register'
})

const userController = (baseApiUrl: string) => ({
    getAllUsers: (query?: string) => baseApiUrl + `/all${query}`,
    getUsersByFilter: (query: string) => baseApiUrl + `/filter${query}`
});

