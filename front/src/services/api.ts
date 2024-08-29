const baseUrl = "http://localhost:3333";

const headers: HeadersInit = {
	"Content-Type": "application/json",
	Autorization: `Bearer ${localStorage.getItem("token")}`,
};

export const api = {
	async get(url: string) {
		const response = await fetch(`${baseUrl}${url}`, {
			headers,
		});
		return await response.json();
	},

	async post(url: string, body: any) {
		const response = await fetch(`${baseUrl}${url}`, {
			method: "POST",
			headers,
			body: JSON.stringify(body),
		});
		return await response.json();
	},

	async put(url: string, body: any) {
		const response = await fetch(`${baseUrl}${url}`, {
			method: "PUT",
			headers,
			body: JSON.stringify(body),
		});
		return await response.json();
	},

	async delete(url: string) {
		const response = await fetch(`${baseUrl}${url}`, {
			method: "DELETE",
			headers,
		});
		return await response.json();
	},
};
