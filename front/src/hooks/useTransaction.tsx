import { UserRequestTypes } from '@/types/user-types';

export function useTransactions(user: UserRequestTypes) {
  const transactions = [
    ...user.balances.map(balance => ({
      id: balance.id,
      description: balance.description,
      amount: balance.amount,
      type: 'Receita',
      createdAt: balance.createdAt,
    })),
    ...user.expenses.map(expense => ({
      id: expense.id,
      description: expense.description,
      amount: expense.amount,
      type: 'Despesa',
      createdAt: expense.createdAt,
    })),
  ];

  return transactions; // Retorna o array de transações
}
