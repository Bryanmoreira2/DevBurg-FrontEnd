import { createContext, useContext,useState,useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const [userInfo,setUserInfo] = useState({});

    const putUserData=(userInfo)=>{
        setUserInfo(userInfo)


        localStorage.setItem('devburg:userData',JSON.stringify(userInfo))
    }

    const logout=() =>{
        setUserInfo({})
        localStorage.removeItem('devburg:userData')

       
    };

    useEffect (()=>{

        const userInfolocalStorage = localStorage.getItem('devburg:userData')

        if(userInfolocalStorage){

            setUserInfo(JSON.parse(userInfolocalStorage))
            
        }

    },[])

    return(
        <UserContext.Provider value={{userInfo,putUserData,logout}}>{children}</UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);

    if(!context){
        throw new Error('useUser must be used within a UserProvider')
    }

    return context;
}
