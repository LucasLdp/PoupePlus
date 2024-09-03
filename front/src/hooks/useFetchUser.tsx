import { api } from "@/services/api";
import { UserRequestTypes } from "@/types/user-request";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

export function useFetchUser(id: string) {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<UserRequestTypes | null>(
		{} as UserRequestTypes,
	);

	const fetchUser = async () => {
		try {
			setIsLoading(true);
			const { data } = await api.get(`/users/${id}`);
			setUser(data);
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
			}
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [id]);

	return {
		user,
		isLoading,
	};
}
