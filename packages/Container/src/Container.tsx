import {
  createClient,
  ErrorResponse,
  Photo,
  PhotosWithTotalResults,
} from "pexels";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const Container = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const client = createClient(API_KEY);
  const query = "Nature";

  useEffect(() => {
    client.photos
      .search({ query, per_page: 10 })
      .then((response: PhotosWithTotalResults | ErrorResponse) => {
        if ("photos" in response) setPhotos(response.photos);
      });
  }, []);

  useEffect(() => {
    console.log("photos: ", photos);
  }, [photos]);

  return (
    <div>
      <h1>Fotos</h1>
    </div>
  );
};

export default Container;
