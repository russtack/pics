import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID kUxmpRW1v7T4weALbJU7VUYsth4AfA7oE4SqwwPawMc",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
