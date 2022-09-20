
export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
        userController: userController(host + '/api/user'),
        beneficiaryController: beneficiaryController(host + '/api/beneficiary'),
        productController: productController(host + '/api/product'),
        stockController: stockController(host + '/api/stock')
    }
}

const authController = (baseApiUrl: string) => ({
    login: baseApiUrl + '/login',
})

const userController = (baseApiUrl: string) => ({
    getAllUsers: (query?: string) => baseApiUrl + `/all${query}`,
    getUsersByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getUserSelectOptions: () => baseApiUrl + `/select-options`,
    getUserById: (userId: string) => baseApiUrl + `/${userId}`,
    registerUser: () => baseApiUrl + `/register`,
    updateUser: () => baseApiUrl + `/update`,
});

const beneficiaryController = (baseApiUrl: string) => ({
    getAllBeneficiary: (query?: string) => baseApiUrl + `/all${query}`,
    getBeneficiaryByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getBeneficiarySelectOptions: () => baseApiUrl + `/select-options`,
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
    deleteProduct: (id: string) => baseApiUrl + `/delete?id=${id}`,
    getAllProductsForBeneficiary: () => baseApiUrl + `/product-beneficiary`
});

const stockController = (baseApiUrl: string) => ({
    getStockByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    // getStockById: (id: string) => baseApiUrl + `/${id}`,
    // updateStock: () => baseApiUrl + `/update`,
    
    registerStock: () => baseApiUrl + `/register`,
    getAllStock: (query?: string) => baseApiUrl + `/all${query}`,
    getSockSelectOptions: () => baseApiUrl + `/select-options`,
    getRegistrationOptions: () => baseApiUrl + `/registration-options`
});