import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import { WatchlistProvider } from "./contexts/WatchlistContext/WatchlistContext";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div>
      <WatchlistProvider>
        <Navbar />
        <AppRoutes />
      </WatchlistProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
