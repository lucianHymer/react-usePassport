import React, { useEffect } from "react";
import { usePassport } from "./lib/index";

const App = () => {
  const passport = usePassport();

  useEffect(() => {
    passport.activate({
      address: process.env.ADDRESS,
      mode: "read",
    });
  }, []);

  return <div>{passport.active && passport.issuanceDate.toString()}</div>;
};
export default App;
