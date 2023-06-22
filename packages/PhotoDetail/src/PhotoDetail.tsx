import { Photo, createClient } from "pexels";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getPhotoById(apiKey: string, id: string): Promise<Photo | null> {
  try {
    const client = createClient(apiKey);
    const photo = await client.photos.show({ id });
    if ("id" in photo) return photo;
    return null;
  } catch (error) {
    console.error("Erro ao buscar a foto:", error);
    return null;
  }
}

type PhotoDetailProps = {
  apiKey: string;
};

const PhotoDetail = ({ apiKey }: PhotoDetailProps) => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    async function getPhoto() {
      if (!id) return;
      const photo = await getPhotoById(apiKey, id);
      setPhoto(photo);
    }
    getPhoto();
  }, [apiKey, id, setPhoto]);

  return (
    <div>
      {photo && photo.alt ? (
        <>
          <h1>{photo.alt}</h1>
          <img src={photo.src.large2x} alt={photo.alt} />
          <p>{photo.photographer}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PhotoDetail;
