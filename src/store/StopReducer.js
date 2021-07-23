const types = {
    authLogin: 'auth-login',
    authLogout: 'auth-logout',
    productDeleteAll: 'product-delete-all',
    productChange: 'product-change',
}

const initialStore = {
    user: { id: 1, name: 'Luis' },
    products: [
        { id: 1, title: 'product No1' },
        { id: 2, title: 'product No2' },
    ]
}

const stopReducer = (state, action) => {
    switch (action.type) {
        case types.authLogout:
            return {
                ...state,
                user: null
            }
        case types.authLogin:
            return {
                ...state,
                user: action.payload
            }
        case types.productDeleteAll:
            return {
                ...state,
                products: []
            }
        case types.productChange:
            return {
                ...state,
                products: [{ id: 3, title: 'product No3' }]
            }
        default:
            return state
    }
}

export { initialStore, types }
export default stopReducer
