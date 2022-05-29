
export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
        userController: userController(host + '/api/user'),
        beneficiaryController: beneficiaryController(host + '/api/beneficiary'),
        productController: productController(host + '/api/product')
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
    registerUser: () => baseApiUrl + `/register`,
    updateUser: () => baseApiUrl + `/update`,
});

const beneficiaryController = (baseApiUrl: string) => ({
    getAllBeneficiary: (query?: string) => baseApiUrl + `/all${query}`,
    getBeneficiaryByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getBeneficiarySelectOptions: () => baseApiUrl + `/selectOptions`,
    getBeneficiaryById: (beneficiaryId: string) => baseApiUrl + `/${beneficiaryId}`,
    registerBeneficiary: () => baseApiUrl + `/register`,
    updateBeneficiary: () => baseApiUrl + `/update`,
    deleteProduct: (id: string) => baseApiUrl + `/delete?id=${id}`
});

const productController = (baseApiUrl: string) => ({
    getAllProducts: (query?: string) => baseApiUrl + `/all${query}`,
    getProductsByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getProductById: (id: string) => baseApiUrl + `/${id}`,
    registerProduct: () => baseApiUrl + `/register`,
    updateProduct: () => baseApiUrl + `/update`,
    deleteProduct: (id: string) => baseApiUrl + `/delete?id=${id}`
});