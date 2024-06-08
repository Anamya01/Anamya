import axios from "axios";
const url = 'http://localhost:3001'
export async function fetchBlogs(){
    try{return await axios.get(url); }
    catch(err){
        return [];
    } 
}