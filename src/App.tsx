import React from "react";
// import "./App.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import { WatchlistProvider } from "./contexts/WatchlistContext";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div>
      <WatchlistProvider>
        <GlobalStyle />
        <Navbar />
        <AppRoutes />
      </WatchlistProvider>
    </div>
  );
}

export default App;
