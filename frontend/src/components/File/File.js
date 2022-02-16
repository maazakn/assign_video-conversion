import React, { useState, useEffect } from "react";
import "./File.css";
import { handleVideos } from "../../actions/FileAction";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const File = () => {
  const loader = useSelector((state) => state.LoaderReducer.loader);
  const history = useHistory();
  let token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const [state, setState] = useState({
    video: "",
  });
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  });
  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setState(files[0]);
    }
  };
  const uploadFiles = () => {
    const formData = new FormData();
    formData.append("video", state);
    return formData;
  };
  const Video = () => {
    try {
      dispatch(handleVideos(uploadFiles()));
    } catch (e) {
      console.log("Exception e", e.message);
    }
  };
  return (
    <>
      <div class="containerf center">
        <div class="row">
          <div class="col-md-12">
            <h1 class="white">Video Upload</h1>
  
          </div>
        </div>

        <form
          name="upload"
          method="post"
          action="#"
          enctype="multipart/form-data"
          accept-charset="utf-8"
        >
          <div class="row">
            <div class="col-md-6 col-md-offset-3 center">
              <div class="btn-container">
                <h1 class="imgupload">
                  <i class="fa fa-file-image-o"></i>
                </h1>
                <h1 class="imgupload ok">
                  <i class="fa fa-check"></i>
                </h1>
                <h1 class="imgupload stop">
                  <i class="fa fa-times"></i>
                </h1>

                <p id="namefile">Only Videos allowed! </p>

                <input
                className="fileup"
                  type="file"
                  id="video"
                  onChange={handleChange}
                  accept="video/*"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
           {
             state.video!==""? <button
             type="button"
             class="btn btn-default"
             onClick={() => Video()}
             id="fakebtn"
           >
           Start Uploading .. 
           </button>:
            <button
            type="button"
            class="btn btn-default"
            disabled
            id="fakebtn"
          >
          Start Uploading .. 
          </button>
           }
            
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default File;
