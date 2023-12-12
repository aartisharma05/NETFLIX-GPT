

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" text-black bg-white hover:bg-opacity-80 p-4 px-10 text-xl rounded-md">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-10 text-xl opacity-50 rounded-md">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
