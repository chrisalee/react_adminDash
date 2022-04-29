import { createContext, useReducer } from "react";
import DarkmodeReducer from "./darkmodeReducer";

const INITIAL_STATE = {
    darkmode: false,
};

export const DarkmodeContext = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkmodeReducer, INITIAL_STATE);

    return (
        <DarkmodeContext.Provider value={{ darkmode: state.darkmode, dispatch }}>
            {children}
        </DarkmodeContext.Provider>
    )
};