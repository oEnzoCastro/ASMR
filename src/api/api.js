import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

export async function getMembers() {
  try {
    const res = await axios.get(`${URL}/members`);
    if (res.status === 200) {
      return res.data;
    } else {
      return;
    }
  } catch (error) {
    return null;
  }
}

export async function getAlbums() {
  const res = await axios.get(`${URL}/albums`);
  if (res.status === 200) {
    return res.data;
  } else {
    return res.status;
  }
}

export async function getAlbum() {
  const res = await axios.get(`${URL}/albums`);
  if (res.status === 200) {
    return res.data;
  } else {
    return;
  }
}

export async function getCategories() {
  const res = await axios.get(`${URL}/albums`);
  if (res.status === 200) {
    var categories = [];

    res.data.forEach((element) => {
      categories.push(element.category);
    });

    console.log(categories);

    return res.data;
  } else {
    return;
  }
}

export async function createAlbum(album) {
  const res = await axios.post(`${URL}/albums`, album);
  console.log(res.status)
  if (res.status === 200) {
    return true;
  } else {
    return false;
  }
}
