const Card = (data) => {
  return (
    <div className="bg-amber-600/80 cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 bg-white/60 rounded-lg text-black text-xs m-2 py-0.5 px-2">
          {/* {console.log(data)}
          {console.log("id: ", data.data.id)} */}
        </span>
        <img
          className="rounded-lg w-full h-full object-cover"
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="card image"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full w-6 h-6 m-2">
          +
        </div>
      </figure>
      <p className="flex justify-around">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  );
};

export default Card;
