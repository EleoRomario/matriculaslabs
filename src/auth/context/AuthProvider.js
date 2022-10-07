import { useReducer } from "react"
import { signInWithGoogle, logOut } from "../../firebase/firebase";
import { types } from "../../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
  logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"))

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({children}) => {

  const [ authState, dispatch] =  useReducer( authReducer, initialState, init )

  const login = async () => {
    const result = await signInWithGoogle();
    const action = {
      type: types.login,
      payload: result
    }

    localStorage.setItem("user", JSON.stringify(result))

    dispatch(action)
  }

  const logout = () => {
    logOut()
    localStorage.removeItem("user");
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