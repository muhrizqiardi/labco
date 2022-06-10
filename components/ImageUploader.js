import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function ImageUploader({ label, fileSrc, setFileSrc }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const fileData = await res.json();
    setFileSrc(fileData.secure_url);
    setIsLoading(false);
  };

  return (
    <div className="mb-3 flex items-center gap-4">
      {isLoading ? <LoadingSpinner /> : <></>}
      {fileSrc && !isLoading ? (
        <img
          src={fileSrc}
          alt=""
          className="w-24 h-24 object-cover rounded-full border-2 border-black flex-shrink-0"
        />
      ) : (
        <></>
      )}
      <div className="">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 "
          for="file_input"
        >
          {label ?? "Upload file"}
        </label>
        <input
          className="block w-full text-sm text-gray-900 bg-gray-50 cursor-pointer  focus:outline-none   "
          id="file_input"
          name="file"
          type="file"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}
export default ImageUploader;
