import React, { useContext, useState } from "react";
import api from "../api/api";
import axios from "axios";
import { UserContext } from "../context/UserContextProvider";

type UserFormData = {
  email: string;
  password: string;
};

function useAuthentication() {
  const [authenticated, setAuthenticated] = useState(false);
  const userContext = useContext(UserContext);

  const loginUrl = async (userData: UserFormData) => {
    try {
      const res = await api.post("/user/authenticate", userData);
      setAuthenticated(true);
      const token = res.data.token;
      window.localStorage.setItem("access-token", token);
      console.log(res.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e.response);
      }
      setAuthenticated(false);
    }
  };
  return { authenticated, loginUrl };
}

export default useAuthentication;
