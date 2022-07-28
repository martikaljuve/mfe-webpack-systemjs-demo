import React from "react";
import Routes from "./Routes";
const AppContainer = React.lazy(() => import("app1/AppContainer"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback="Loading App Container from Host">
        <AppContainer routes={Routes} />
      </React.Suspense>
    </div>
  );
};

export default App;
