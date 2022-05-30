import axios from "axios";

const instance = axios.create({
  baseURL: "https://629221419d159855f0862001.mockapi.io",
});

const getUser = async ()=>{
    const response = await instance.get("/admin");
    return response.data;
}
export  {getUser};