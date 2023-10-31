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
    case "CURRENT_USER":
      return {
        ...state,
        getUser: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(null);
  const [{ auth, getUser }, dispatch] = useReducer(reducer, initialStates);

  // useEffect(() => {
  //   setLoading(true);
  //   const retrieveUser = async () => {
  //     const { data, error } = await supabase.auth.getSession();
  //     const { session } = data;
  //     // console.log(session);
  //     dispatch({ type: "SET_USER", payload: session?.user ?? null });
  //     if (getUser !== null) {
  //       navigate("/app");
  //       console.log(session);
  //     }
  //     setLoading(false);
  //   };
  //   retrieveUser();
  //
  //   const { data } = supabase.auth.onAuthStateChange((event, session) => {
  //     if (event === "SIGNED_IN") {
  //       console.log("SIGNED_IN", session);
  //       dispatch({ type: "SET_USER", payload: session.user });
  //       dispatch({ type: "SET_AUTH", payload: true });
  //       navigate("/app");
  //     } else if (event === "SIGNED_OUT") {
  //       dispatch({ type: "SET_USER", payload: null });
  //       dispatch({ type: "SET_AUTH", payload: false });
  //       navigate("/");
  //     }
  //   });
  //   return () => {
  //     data.subscription.unsubscribe();
  //   };
  // }, [navigate]);

  function handleSetUser(user) {
    dispatch({ type: "SET_USER", payload: user });
  }

  return (
    <AuthContext.Provider value={{ auth, getUser, handleSetUser }}>
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
