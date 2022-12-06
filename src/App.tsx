import React from "react";
import { usePassport, PassportProvider } from "./lib/index";

const App = () => {
  const passport = usePassport();
  return (
    <PassportProvider>
      <p>Hello!</p>
    </PassportProvider>
  );
};
export default App;
