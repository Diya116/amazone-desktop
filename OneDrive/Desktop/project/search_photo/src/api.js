import axios from "axios";
const searchImages=async(item)=>
{
   const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
        Authorization:'Client-ID jEnXORx6YqH7uWroyXDE6EaCO1TfiISczBNp57iIbns'
        },
        params:{
         query:item
        }
    });
    
    return response;
};

export default  searchImages