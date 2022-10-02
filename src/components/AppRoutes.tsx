import React from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./Utility/Loading";
import { ApiResponse, useGetApi } from "../hooks/useGetApiHook";
import Watchlist from "../pages/Watchlist";

const Home = React.lazy(() => import("../pages/Home"));
const AssetDetails = React.lazy(() => import("../pages/AssetDetails"));
const Categories = React.lazy(() => import("../pages/Categories"));
const MoviesByCategory = React.lazy(() => import("../pages/MoviesByCategory"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Popular = React.lazy(() => import("../pages/Popular"));

type Page = {
  id: string;
  label: string;
  route: string;
};

function AppRoutes() {
  const menu: ApiResponse = useGetApi(
    "https://video-proxy.3rdy.tv/api/static/menu?="
  );

  return (
    <React.Suspense fallback={<Loading />}>
      {!menu.loading ? (
        <Routes>
          {menu.data?.data.map((page: Page) => (
            <Route
              key={page.id}
              path={page.route}
              element={
                page.label === "Home" ? (
                  <Home />
                ) : page.label === "Categories" ? (
                  <Categories />
                ) : (
                  <Popular />
                )
              }
            />
          ))}

          <Route path="/movies/:category_id" element={<MoviesByCategory />} />
          <Route path="/asset/:id" element={<AssetDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : null}
    </React.Suspense>
  );
}

export default AppRoutes;
