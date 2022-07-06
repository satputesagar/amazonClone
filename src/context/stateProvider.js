import React ,{createContext,useContext,useReducer} from "react";

// prepare the datalaywr
export const StateContext =createContext();

//wrap our app 
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);


