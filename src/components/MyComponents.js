import React, { useContext } from 'react'
import { types } from '../store/StopReducer'
import { StoreContext, useDispatch, useStore } from '../store/StoreProvider'

const MyComponents = () => {

    // const [store, dispatch] = useContext(StoreContext)
    const { user, products } = useStore()
    const dispatch = useDispatch()


    return (
        <div>
            <h1>Component</h1>
            <h2>User : {user?.name}</h2>
            <button onClick={() => dispatch({
                type: types.authLogin
            })}>
                Logout
            </button>
            <button onClick={() => dispatch({
                type: types.authLogin,
                payload: { id: 1, name: 'Dave' }
            })}>
                Login
            </button>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({
                type: types.productDeleteAll,
            })}>
                Delete All
            </button>
            <button onClick={() => dispatch({
                type: types.productChange,
            })}>
                Change
            </button>
        </div>
    )
}

export default MyComponents
