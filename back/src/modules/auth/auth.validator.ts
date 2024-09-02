import { vine } from "@/config/validator.config";

vine.convertEmptyStringsToNull = true;

export const loginSchema = vine.compile(
	vine.object({
		email: vine.string().email(),
		password: vine.string(),
	}),
);

export const registerSchema = vine.compile(
	vine.object({
		name: vine.string(),
		email: vine.string().email(),
		password: vine.string(),
	}),
);
