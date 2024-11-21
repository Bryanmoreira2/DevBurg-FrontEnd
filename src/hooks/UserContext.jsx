import { createContext, useContext,useState,useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [userInfo,setUserInfo] = useState({ide: 55,name:'bryan33'});

    return(
        <UserContext.Provider value={{userInfo,}}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error('useUser must be used within a UserProvider')
    }

    return context;
}
