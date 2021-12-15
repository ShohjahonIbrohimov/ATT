import React from "react";
import { Image } from "antd";
import img from "../../assets/defaultImage.png";
import axios from "axios";
import styles from "../../styles/Reusable/ImageUpload.module.css";
import baseurl from "../../utils/baseurl";

const ImageUpload = ({
  imageUrl,
  setimageUrl,
  type,
  videoUrl,
  setvideoUrl,
}) => {
  const handleChange = (e) => {
    var formData = new FormData();
    formData.append(type === "image" ? "image" : "file", e.target.files[0]);

    axios({
      url: `${baseurl}/api/users/${
        type === "image" ? "uploadImage" : "uploadFile"
      }`,
      method: "POST",
      data: formData,
    }).then((res) =>
      type === "image" ? setimageUrl(res.data.path) : setvideoUrl(res.data.path)
    );
  };

  return (
    <div className={styles.upload_img}>
      {type === "image" && (
        <Image width='100%' src={!imageUrl ? img : `${baseurl}/${imageUrl}`} />
      )}
      {type === "video" && <span>{videoUrl}</span>}
      <label className={styles.upload_btn_wrapper}>
        {type === "image" ? "Rasm" : "Video"} yuklash
        <input
          type='file'
          name='file'
          id='file'
          class='inputfile'
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ImageUpload;
