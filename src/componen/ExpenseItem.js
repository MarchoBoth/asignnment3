import React from 'react';

// Komponen ExpenseItem untuk menampilkan informasi pengeluaran
const ExpenseItem = () => {
  const expenseDate = '28 Maret 2022';
  const description = 'Listrik';
  const total = 'Rp.500.000';

  return (
    <div>
      <h2>Expense Date : {expenseDate}</h2>
      <p>Description : {description}</p>
      <p>Total : {total}</p>
    </div>
  );
};

export default ExpenseItem;
