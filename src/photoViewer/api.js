import axios from "axios";

export const fetchPhotos = () =>
	axios.get("https://picsum.photos/v2/list").then((response) => response.data);
