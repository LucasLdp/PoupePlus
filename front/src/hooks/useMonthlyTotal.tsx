import { useState, useEffect } from 'react';
import { UserRequestTypes } from '@/types/user-types';

interface MonthlyTotals {
  totalBalances: number;
  totalExpenses: number;
}

export function useMonthlyTotals(user: UserRequestTypes, month: number, year: number): MonthlyTotals {
  const [totals, setTotals] = useState<MonthlyTotals>({ totalBalances: 0, totalExpenses: 0 });

  useEffect(() => {
    const calculateTotals = () => {
      // Filtra as receitas e despesas do mês específico
      const balances = user.balances.filter(balance => {
        const transactionDate = new Date(balance.createdAt);
        return (
          transactionDate.getMonth() === month &&
          transactionDate.getFullYear() === year
        );
      });

      const expenses = user.expenses.filter(expense => {
        const transactionDate = new Date(expense.createdAt);
        return (
          transactionDate.getMonth() === month &&
          transactionDate.getFullYear() === year
        );
      });

      // Soma os valores das receitas e despesas
      const totalBalances = balances.reduce((sum, balance) => sum + balance.amount, 0);
      const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

      setTotals({ totalBalances, totalExpenses });
    };

    calculateTotals();
  }, [user, month, year]);

  return totals;
}
