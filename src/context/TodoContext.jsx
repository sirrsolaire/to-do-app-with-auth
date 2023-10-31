import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialStates = {
  auth: false,
  getUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        auth: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        getUser: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ logout, auth, getUser }, dispatch] = useReducer(
    reducer,
    initialStates,
  );

  function handleAuth() {
    dispatch({ type: "SET_AUTH", payload: true });
  }

  function handleUser(user) {
    dispatch({ type: "SET_USER", payload: user });
  }

  return (
    <AuthContext.Provider value={{ auth, handleAuth, handleUser, getUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Unknown action");
  return context;
}

export { useAuth, AuthProvider };
