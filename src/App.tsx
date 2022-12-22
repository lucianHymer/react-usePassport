import React from "react";
import { PassportProvider } from "./lib/index";
import PassportTool from "./PassportTool";

const App = () => (
  <PassportProvider>
    <PassportTool />
  </PassportProvider>
);

export default App;
