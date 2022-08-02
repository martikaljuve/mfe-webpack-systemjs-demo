import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

// const Page1 = React.lazy(() => import("./pages/Page1"));
// const Page2 = React.lazy(() => import("./pages/Page2"));

export default function Routes1() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/page1"
        element={
          <Suspense fallback="...">
            <Page1 />
          </Suspense>
        }
      />
      <Route
        path="/page2"
        element={
          <Suspense fallback="...">
            <Page2 />
          </Suspense>
        }
      />
    </Routes>
  );
}
