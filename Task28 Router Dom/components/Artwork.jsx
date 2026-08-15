import { useParams } from "react-router-dom";

function Artwork() {
  const { id } = useParams();

  return (
    <div className="text-pink-400 text-xl">
      <h1>Artwork Details</h1>
      <h2>Artwork ID: {id}</h2>
    </div>
  );
}

export default Artwork;