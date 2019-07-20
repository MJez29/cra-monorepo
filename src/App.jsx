import React, { Suspense } from 'react';
import './App.css';

let Site = null;

// With both sites
if (process.env.REACT_APP_SITE === "a") {
  Site = React.lazy(() => import("./sites/SiteA"));
} else if (process.env.REACT_APP_SITE === "b") {
  Site = React.lazy(() => import("./sites/SiteB"));
}

// With only one site
// Site = React.lazy(() => import("./sites/SiteA"));

const App = () => (
  <div id="content">
    <div id="nav">CRA Monorepo Demo</div>
    <Suspense fallback={null}>
      <Site />
    </Suspense>
  </div>
)

export default App;
