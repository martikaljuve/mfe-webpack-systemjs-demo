import React from "react";

import { loadFederatedModule } from "../utils/loadFederatedModule";

const Dialog = React.lazy(() => loadFederatedModule("app2/Dialog"));

export default function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <React.Suspense fallback="Loading Material UI Dialog...">
        <Dialog />
      </React.Suspense>
    </div>
  );
}
