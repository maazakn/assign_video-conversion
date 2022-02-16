import { axiosInstance } from "../helper/useFetch";

export const handleCities = () => {
    return (dispatch) => {
      dispatch({ type: "LOADER_START" });
      return axiosInstance
        .get("http://localhost:5000/api/city/pagination?page=1&limit=2", {

        })
        .then((res) => {
          console.log(res.data)
        
          if(res.data.results)
          {
         
       
       
           dispatch({
              type: "CITY",
              payload: res.data.results,
            });
            dispatch({ type: "LOADER_END" });
          }
        })
      
        .catch((e) => {
          console.log("e", e);
          dispatch({ type:"LOADER_START" });
        });
    };
    return false;
  };
  