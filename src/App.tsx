import React from "react";
import "./App.css";

import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { WatchlistProvider } from "./contexts/WatchlistContext/WatchlistContext";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div>
      <WatchlistProvider>
        <Header />
        <AppRoutes />
      </WatchlistProvider>
      <GlobalStyle />
    </div>
  );
}

export default App;
