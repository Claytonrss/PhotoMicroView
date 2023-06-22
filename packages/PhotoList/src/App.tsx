import { BrowserRouter } from "react-router-dom";
import PhotoList from "./PhotoList";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <BrowserRouter>
      <PhotoList apiKey={API_KEY} />
    </BrowserRouter>
  );
}

export default App;
