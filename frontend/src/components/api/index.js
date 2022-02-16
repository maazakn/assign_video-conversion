// import axios from 'axios';


// export const getPageData = async(page,limit,sortCriteria,param,search,min,max) =>{
    
//     if(search){
//         try{
//             const {data} = await axios.get(`http://localhost:5000/api/city/searching?page=${page}&limit=${limit}&field=${search}`);
//           console.log(data)
//           return data
//         }catch(error){
//             return 'no data found'
//             console.log(error);
//         }
//     }
//     if(min||max){
         
//     try{
//         const {data} = await axios.get(`http://localhost:5000/api/city/filtering?page=${page}&limit=${limit}&min=${min}&max=${max}`);
//       console.log(data)
//       return data
//     }catch(error){
//         return []
//         console.log(error);
//     }
//     }
//     else{
      
//     try{
//         const {data} = await axios.get(`http://localhost:5000/api/city/sorting?page=${page}&limit=${limit}&criteria=${sortCriteria}&param=${param}`);
//       console.log(data)
//       return data
//     }catch(error){
//         return []
//         console.log(error);
//     }
//     }

    
// }


// export const getSearchedData = async(page,limit,search) =>{
    
//     try{
//         const {data} = await axios.get(`http://localhost:5000/api/city/searching?page=${page}&limit=${limit}&field=${search}`);
//       console.log(data)
//       return data
//     }catch(error){
//         return []
//         console.log(error);
//     }
// }


// export const getPopData = async(page,limit,min,max) =>{
    
//     try{
//         const {data} = await axios.get(`http://localhost:5000/api/city/filtering?page=${page}&limit=${limit}&min=${min}&max=${max}`);
//       console.log(data)
//       return data
//     }catch(error){
//         return []
//         console.log(error);
//     }
// }

import axios from 'axios';
export const getCityData = async(page,limit,sortCriteria,param,search,min,max) =>{
        console.log("criteriaaaaaaa",sortCriteria,"parammmmmmmmmmm",param)
            try{
                const {data} = await axios.get(`http://localhost:5000/api/city/check?page=${page}&limit=${limit}&field=${search}&criteria=${sortCriteria}&param=${param}&min=${min}&max=${max}`);
              console.log(data)
              return data
            }catch(error){
                return 'no data found'
                console.log(error);
            }
        }
