import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import Axios from 'axios';
import 'react-dropdown/style.css';

const Converter = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('USD');
  const [rate, setRate] = useState(0);

  useEffect(() => {
    Axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}`).then((response) => {
      setRate(response.data.info.rate);
    });
  }, [from, to]);

  useEffect(() => {
    Axios.get('https://api.exchangerate.host/symbols').then((response) => {
      setCurrencyList(response.data.symbols);
    });
  }, []);

  const handleFromChange = (e: any) => {
    setFrom(e.value);
  };

  const handleToChange = (e: any) => {
    setTo(e.value);
  };

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResult(amount * rate);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold text-orange-600 mt-20 mb-20">Currency Converter</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-1/2">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            className="w-1/2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
          <Dropdown
            options={Object.keys(currencyList)}
            onChange={handleFromChange}
            value={from}
            placeholder="Select an option"
            className="w-1/2 mb-6"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 w-full mb-10">
          <button
            type="button"
            onClick={handleSwitch}
            className="flex justify-center items-center gap-3 p-2 bg-white text-orange-600 rounded-md focus:outline-none">
            <HiSwitchHorizontal className="text-2xl" />
          </button>
          <Dropdown
            options={Object.keys(currencyList)}
            onChange={handleToChange}
            value={to}
            placeholder="Select an option"
            className="w-1/2"
          />
        </div>
        <button
          type="submit"
          className="p-2 px-20 mt-4 text-white text-lg bg-orange-600 rounded-md focus:outline-none hover:bg-green-600">
          Convert
        </button>
      </form>
      <div className="flex items-center justify-center w-1/2 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Result: {result}</h1>
        <h1 className="ml-2 text-4xl font-bold text-gray-800">{to}</h1>
      </div>
    </div>
  );
};

export default Converter;
