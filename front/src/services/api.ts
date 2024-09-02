import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:3333/api",
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});
