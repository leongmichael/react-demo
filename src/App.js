import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home")); // components / templates



function App() {
  
  return ( //routes - links
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>

    // overview
    // / - localhost:3000
    // /[sdfsdf] - localhost:3000/[sdfsdf]
    
  );
}

export default App;
