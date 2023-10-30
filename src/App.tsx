import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import AppProviders from "./components/providers/app-providers";
import MuiMode from "./components/mui/mui-mode";
import Users from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/*<Counter />*/}
        <MuiMode />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
