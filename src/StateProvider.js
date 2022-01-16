import {createContext, useContext, useReducer} from "react";

export const StateContext = createContext();
// data layer 준비

// wrapping 후 data layer 제공하는 부분 생성

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// 각 component에 제공해줄 수 있는 메소드 ( data layer 정보를 가져 올 수 있는 layer )
// useStateValue를 import해야만 context와 reducer간 정보전달이 가능하다
export const useStateValue = () => useContext(StateContext);