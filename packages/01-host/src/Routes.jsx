import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Page1 = React.lazy(() => import("./pages/Page1"));
const Page2 = React.lazy(() => import("./pages/Page2"));

function Home() {
  return <div>...</div>;
}

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
