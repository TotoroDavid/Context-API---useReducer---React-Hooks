import React, { createContext, useReducer, useContext } from 'react'
import stopReducer, { initialStore } from './StopReducer'

const StoreContext = createContext()

const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(stopReducer, initialStore)

    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useDispatch, useStore }
export default StoreProvider