import axios from "axios";

const URL = "https://asmr-x3i5.onrender.com"

export async function getMembers() {
    const res = await axios.get(`${URL}/members`);
    if(res.status === 200) {
        return res.data
      } else {
        return
      }
}

export async function getAlbums() {
    const res = await axios.get(`${URL}/albums`);
    if(res.status === 200) {
        return res.data[0]
      } else {
        return
      }
}