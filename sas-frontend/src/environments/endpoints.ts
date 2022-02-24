import { query } from "@angular/animations";

export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
        userController: userController(host + '/api/user'),
    }
}

const authController = (baseApiUrl: string) => ({
    login: baseApiUrl + '/login',
})

const userController = (baseApiUrl: string) => ({
    getAllUsers: (query?: string) => baseApiUrl + `/all${query}`,
    getUsersByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getUserSelectOptions: () => baseApiUrl + `/selectOptions`,
    getUserById: (userId: string) => baseApiUrl + `/${userId}`,
    registerUser: () => baseApiUrl + `/register`
});

