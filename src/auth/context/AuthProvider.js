import { useReducer } from "react"
import { signInWithGoogle, logOut } from "../../firebase/firebase";
import { types } from "../../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
  logged: false,
}

export const AuthProvider = ({children}) => {

  const [ authState, dispatch] =  useReducer( authReducer, initialState )

  const login = async () => {

    const result = await signInWithGoogle();

    const action = {
      type: types.login,
      payload: result
    }

    dispatch(action)
  }

  const logout = () => {
    logOut()
    dispatch({
      type: types.logout
    })
  }
  
  return (
    <AuthContext.Provider value={{...authState, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}