import { BrowserRouter } from "react-router-dom";
import PhotoDetail from "./PhotoDetail";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <BrowserRouter>
      <PhotoDetail apiKey={API_KEY} />
    </BrowserRouter>
  );
}

export default App;
