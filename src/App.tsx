import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={4000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <AppLayout />
      </SnackbarProvider>
    </div>
  );
}

export default App;
