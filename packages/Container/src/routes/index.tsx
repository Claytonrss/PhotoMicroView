import { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as RoutesContainer,
} from "react-router-dom";
import Container from "../Container";

const API_KEY = import.meta.env.VITE_API_KEY;

const PhotoList = lazy(() => import("photolist/src/PhotoList"));
const PhotoDetail = lazy(() => import("photodetail/src/PhotoDetail"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesContainer>
          <Route path="/" element={<Container />} />
          <Route path="/photolist" element={<PhotoList apiKey={API_KEY} />} />
          <Route path="/photo/:id" element={<PhotoDetail apiKey={API_KEY} />} />
        </RoutesContainer>
      </Suspense>
    </Router>
  );
};

export default Routes;
