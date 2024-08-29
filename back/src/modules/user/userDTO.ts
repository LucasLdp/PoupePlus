export interface createUserDTO {
	name: string;
	email: string;
	totalAmount?: number;
	password: string;
}

export interface updateUserDTO extends Partial<createUserDTO> {}
