export class ApiError {
	constructor(
		public readonly message: string,
		public readonly status: number,
	) {
		this.message = message;
		this.status = status;
	}
}

export class NotFound extends ApiError {
	constructor(message: string) {
		super(message, 404);
	}
}

export class BadRequest extends ApiError {
	constructor(message: string) {
		super(message, 400);
	}
}

export class Unauthorized extends ApiError {
	constructor(message: string) {
		super(message, 401);
	}
}

export class Forbidden extends ApiError {
	constructor(message: string) {
		super(message, 403);
	}
}
