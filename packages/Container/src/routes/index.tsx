import { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as RoutesContainer,
} from "react-router-dom";
import Container from "../Container";

const PhotoList = lazy(() => import("photolist/src/PhotoList"));
const PhotoDetail = lazy(() => import("photodetail/src/PhotoDetail"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesContainer>
          <Route path="/" element={<Container />} />
          <Route path="/photolist" element={<PhotoList />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
        </RoutesContainer>
      </Suspense>
    </Router>
  );
};

export default Routes;
