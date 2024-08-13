import { createClient } from "pexels";

const client = createClient(
  "563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74"
);

export const fetchImages = async (query, page) => {
  return client.photos.search({
    query,
    per_page: 20,
    orientation: "landscape",
    color: "black",
    page,
  });
};
