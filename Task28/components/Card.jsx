function Card(props) {
  return (
    
<div className="w-[350px] bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 p-[2px] rounded-2xl">
  <div className="bg-black rounded-2xl p-6">
    
    
    <img
        className="w-70 h-70 object-cover p-10"
        src={props.link || "Title Placeholder"}
        alt="Sunset"
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2 text-blue-600">
          {props.title || "Title Placeholder"}
        </h2>

        <p className="text-blue-400">
          {props.desc || "Description Placeholder"}
        </p>
      </div>

    </div>
</div>
  );
}

export default Card;
