import axios from "axios";

const URL = "http://localhost:8080"

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
        return res.data
      } else {
        return
      }
}

export async function getAlbum() {
    const res = await axios.get(`${URL}/albums`);
    if(res.status === 200) {
        return res.data
      } else {
        return
      }
}

export async function setAlbum() {
    const res = await axios.post(`${URL}/albums`);
    if(res.status === 200) {
        return res.data[0]
      } else {
        return
      }
}