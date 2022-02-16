import { axiosInstance } from "../helper/useFetch";

export const handleVideos = (video) => {
  return (dispatch) => {
    alert("file has started uploading")
    return axiosInstance
      .post("http://localhost:5000/convert", video)
      
      .then((res) => {
        dispatch({
          type: "FILE",
          payload: video,
        });

        if (!res) {
          dispatch({ type: "LOADER_START" });
        } else {
          alert("file succefully uploaded")
          dispatch({ type: "LOADER_END" });
        }
      })

      .catch((e) => {
        console.log("e", e);
      });
  };
  return false;
};
