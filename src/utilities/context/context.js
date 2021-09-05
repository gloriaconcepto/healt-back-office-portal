import React, { useState, createContext, useContext } from "react";

export const UserDetailsContext = createContext();

/* eslint-disable */
const useContextFactory = (name, context) => {
    return () => {
        const ctx = useContext(context);
        if (ctx === undefined) {
            throw new Error(`use${name}Context must be used withing a ${name}ContextProvider.`);
        }
        return ctx;
    };
};
/* eslint-enable */

// export const useGlobalUserDetailsContext = useContextFactory("Users", UserDetailsContext);

const GlobalContextProvider = (props) => {
    const [userDetails, setUserDetails] = useState({ name: null, login: false, auth: false });
    // const value=React.useMemo(()=>({

    // }))
    return <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>{props.children}</UserDetailsContext.Provider>;
};

export default GlobalContextProvider;
