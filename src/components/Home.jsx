import fileUpload from "../assets/file-upload.svg";

export const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex justify-between w-2/4">
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col justify-center">
            <h1 className="h1 text-center font-Rubik font-bold">
              STUPIDLY SIMPLE
            </h1>
            <span className="h1 text-center font-Rubik font-bold">
              File Converter
            </span>
          </div>
          <h2 class="tracking-widest text-center max-w-lg m-auto">
            No Ads, No BS, No Charge. Just a guy who needed to convert some damn
            image files and figured others would need to as well.
          </h2>
          <div
            fileUpload
            className="flex gap-3 flex-col justify-center items-center bg-white border-2 border-gray border-dashed rounded-md mt-5 p-5"
          >
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
