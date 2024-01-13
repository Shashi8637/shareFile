import axios from 'axios';

const API_URL='https://sharefile-a2cn.onrender.com';


export const  uploadFile = async(data)=>{
    try {
       let res = await axios.post(`${API_URL}/upload`,data);
       return res.data;
    } catch (error) {
        console.log('error while calling the api',error.message);
    }

}


