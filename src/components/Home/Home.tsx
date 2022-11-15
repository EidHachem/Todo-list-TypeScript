import React from 'react';
import { FaList, FaMoneyBill } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-orange-600 py-12">Welcome</h1>
      <div className="mx-auto max-w-[20%] grid grid-cols-2 gap-5">
        <Link to="/todos" className="hover:scale-110">
          <div className="border-2 border-white flex flex-col items-center justify-center gap-4 py-10">
            <FaList className="text-6xl text-orange-600 mx-auto block" />
            <p className="text-center text-2xl text-white">Todo List</p>
          </div>
        </Link>
        <Link to="/expenses" className="hover:scale-110">
          <div className="border-2 border-white flex flex-col items-center justify-center gap-4 py-10">
            <FaMoneyBill className="text-6xl text-orange-600 mx-auto block" />
            <p className="text-center text-2xl text-white">Expenses</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
