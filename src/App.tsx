import React from "react";
import "./App.css";

import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { WatchlistProvider } from "./contexts/WatchlistContext/WatchlistProvider";

function App() {
  return (
    <div>
      <WatchlistProvider>
        <Header />
        <AppRoutes />
      </WatchlistProvider>
    </div>
  );
}

export default App;
