import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<UserContextData | null>(null);

type Props = {
  children: React.ReactNode;
};

type UserContextData = {
  isAuthenticated: boolean;
  setAuthenticationStatus: (data: boolean) => void;
};

export default function UserContextProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("User context running");

  useEffect(() => {
    const user = window.localStorage.getItem("access-token");
    if (user) {
      console.log(user);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setAuthenticationStatus: setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
