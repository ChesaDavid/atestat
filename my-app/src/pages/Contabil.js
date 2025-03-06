import React, { useState, useRef, useEffect } from 'react';

function Contabil() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const venit = useRef();
  const cheltuiala = useRef();
  const [isSorted, setIsSorted] = useState('');
  const prediction = useRef();

  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  useEffect(() => {
    if (isSorted === 'suma') {
      setTransactions((prevTransactions) =>
        [...prevTransactions].sort((a, b) => b.amount - a.amount)
      );
    }
    if (isSorted === 'data') {
      setTransactions((prevTransactions) =>
        [...prevTransactions].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }, [isSorted]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const currentDate = new Date().toLocaleString();

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date: currentDate,
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  const handleCheltuiala = () => {
    if (amount) {
      setAmount(-Math.abs(Number(amount)));
    }
  };

  const handleVenit = () => {
    if (amount) {
      setAmount(Math.abs(Number(amount)));
    }
  };

  return (
    <div className="w-full mt-20 content-center justify-items-center justify-self-center h-screen max-w-md p-6 bg-white rounded-xl shadow-lg flex-col justify-center">
      <h1 className="text-2xl font-bold text-center mb-4">Venituri & Cheltuieli</h1>
      <h2 className={`text-xl text-center mb-4 ${total >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        Balanță: {total} RON
      </h2>
      <h2
        ref={prediction}
        style={{ visibility: 'hidden' }}
        className={`text-xl text-center mb-4 ${total >= 0 ? 'text-green-500' : 'text-red-500'}`}
      >
        Prediction: {total} RON
      </h2>
      <form onSubmit={addTransaction} className="mb-4">
        <input
          type="text"
          placeholder="Descriere"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Suma"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="flex gap-2">
          <button
            ref={cheltuiala}
            type="submit"
            onClick={handleCheltuiala}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Cheltuiala
          </button>
          <button
            ref={venit}
            type="submit"
            onClick={handleVenit}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Venit
          </button>
        </div>
        <div className="flex gap-2 mt-2">
          <button
            type="button"
            onClick={() => setIsSorted('suma')}
            className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-600"
          >
            Sorteaza dupa suma
          </button>
          <button
            type="button"
            onClick={() => setIsSorted('data')}
            className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-600"
          >
            Sorteaza dupa data
          </button>
        </div>
        <button
          type="button"
          className="w-full mt-3 bg-pink-400 text-white py-2 rounded hover:bg-pink-600"
          onClick={() => {
            const predictionValue = Math.round((total * 0.7) * 12);
            prediction.current.textContent = `Prediction: ${predictionValue} RON`;
            prediction.current.style.visibility = 'visible';
            setTimeout(() => {
              prediction.current.style.visibility = 'hidden';
            }, 3000);
          }}
        >
          Make a one year prediction
        </button>
      </form>

      <ul>
        {transactions.map((t) => (
          <li key={t.id} className="flex justify-between items-center border-b py-4 px-2">
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{t.description}</span>
                <span className={t.amount >= 0 ? 'text-green-500' : 'text-red-500'}>{t.amount} RON</span>
              </div>
              <div className="mt-1">
                <span className="text-gray-400 text-sm">{t.date}</span>
              </div>
            </div>
            <button
              onClick={() => deleteTransaction(t.id)}
              className="ml-4 text-white bg-red-500 p-2 rounded hover:bg-red-600"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Contabil;
