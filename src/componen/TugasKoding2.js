import React from 'react';
const expenses = [
  {
    expense_date: '01-Maret-2022',
    description: 'Bayar Angsuran Motor',
    total: 'Rp.1.200.000',
  },
  {
    expense_date: '11-Maret-2022',
    description: 'Bayar Air',
    total: 'Rp.300.000',
  },
];
export const TugasKoding2 = () => {
  // Data pengeluaran

  return (
    <div>
      <hr />
      <h1>Daftar Pengeluaran</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <p>Tanggal: {expense.expense_date}</p>
            <p>Deskripsi: {expense.description}</p>
            <p>Total: {expense.total}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
