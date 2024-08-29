import vine, { SimpleMessagesProvider } from "@vinejs/vine";

const messagesProvider = new SimpleMessagesProvider({
	required: "O campo {{ field }} é obrigatório",
	string: "O valor do campo {{ field }} deve ser uma string",
	email: "o valor do campo {{ field }} deve ser um email válido",
});

vine.messagesProvider = messagesProvider;

export { vine };
