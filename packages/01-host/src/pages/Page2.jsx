import React, { Suspense } from "react";

import { loadFederatedModule } from "../utils/loadFederatedModule";

const Button = React.lazy(() => loadFederatedModule("app3/Button"));

export default function Page2() {
  return (
    <div>
      <h1>Page 2</h1>
      <Suspense fallback="Loading Styled Component Button...">
        <Button>&#128133; Button</Button>
      </Suspense>
    </div>
  );
}
