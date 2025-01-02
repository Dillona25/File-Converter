import fileUpload from "../assets/file-upload.svg";

export const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex justify-between w-2/4">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="h1 text-center font-Rubik font-bold">
            Convert Images Files Here <span>For Free</span>
          </h1>
          <h2 class="tracking-widest text-center">
            I often found myself only finding conversion sites that would
            display add after add or would only let me go so far before needing
            to wait for the next day or pay. So I created one myself. Oh, and
            its FREE.
          </h2>
          <div className="flex gap-3 flex-col justify-center items-center bg-white border-2 border-gray border-dashed rounded-md mt-5 p-5">
            <img src={fileUpload} alt="Upload Your Image" />
            <p className="text-sm">
              Drop file to upload or{" "}
              <button className="underline text-blue-500">browse</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
