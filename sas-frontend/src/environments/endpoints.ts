
export function endpoints(host: string) {
    return {
        host: host,
        authController: authController(host + '/api/auth'),
        userController: userController(host + '/api/user'),
        beneficiaryController: beneficiaryController(host + '/api/beneficiary'),
        memoController: memoController(host + '/api/memo'),
        productController: productController(host + '/api/product'),
        stockController: stockController(host + '/api/stock'),
        coveredController: coveredController(host + '/api/covered')
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
    deleteBeneficiary: (id: string) => baseApiUrl + `/delete?id=${id}`,

    registerBeneficiaryProducts: () => baseApiUrl + `/register-beneficiary-product`,
    getBeneficiaryProducts: (id: string) => baseApiUrl  + `/beneficiary-products?id=${id}`,
    benefitBeneficiary: () => baseApiUrl  + `/benefit-beneficiary`
});

const memoController = (baseApiUrl: string) => ({
    getAllMemo: (query?: string) => baseApiUrl + `/all${query}`,
    getMemoByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getMemoSelectOptions: () => baseApiUrl + `/select-options`,
    getMemoRegisterSelectOptions: () => baseApiUrl + `/register-select-options`,
    getMemoById: (beneficiaryId: string) => baseApiUrl + `/${beneficiaryId}`,
    registerMemo: () => baseApiUrl + `/register`,
    updateMemo: () => baseApiUrl + `/update`,
    deleteMemo: (id: string) => baseApiUrl + `/delete?id=${id}`,
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

const coveredController = (baseApiUrl: string) => ({
    getAllCovered: (query?: string) => baseApiUrl + `/all${query}`,
    getCoveredByFilter: (query: string) => baseApiUrl + `/filter${query}`,
    getCoveredSelectOptions: () => baseApiUrl + `/select-options`,
});