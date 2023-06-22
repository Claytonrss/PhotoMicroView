import {
  ErrorResponse,
  Photo,
  PhotosWithTotalResults,
  createClient,
} from "pexels";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type PhotoListProps = {
  apiKey: string;
};

const PhotoList = ({ apiKey }: PhotoListProps) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const query = "Nature";

  const client = createClient(apiKey);

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
      <h1>Photo Listl</h1>
      {photos.map((photo) => {
        if (!photo.alt) return <> </>;
        return (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <img src={photo.src.small} alt={photo.alt} />
          </Link>
        );
      })}
    </div>
  );
};

export default PhotoList;
