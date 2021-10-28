export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
        funcionarioController: funcionarioController(host + '/api/funcionarios'),
    }
}

const authController = (baseApiUrl: string) => ({
    login: baseApiUrl + '/login',
    register: baseApiUrl + '/register'
})

const funcionarioController = (baseApiUrl: string) => ({
    getAllFuncionarios: baseApiUrl + '/all'
});