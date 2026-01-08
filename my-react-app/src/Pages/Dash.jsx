import React from "react";
import { useState, useEffect } from "react";
import SalesChart from "../Components/Charts/SalesChart";
import ProductChart from "../Components/Charts/ProductChart";

const Dash = () => {
  const [sales, setSales] = useState([]);
  const [showgraph, setgraph] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const toggleProducts = () => setShowProducts(!showProducts);

  const graph = () => {
    setgraph(!showgraph);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${selectedMonth}`)
      .then((res) => res.json())
      .then((data) => setProductsData(data))
      .catch((err) => console.error(err));
  }, [selectedMonth]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sales")
      .then((res) => res.json())
      .then((data) => setSales(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#CFE6E3] via-[#DCEFEB] to-[#E7F3F1]"
    >
      {/* Main Glass Wrapper */}
      <div
        className="
        w-[95%] max-w-8xl h-[90vh]
        bg-white/30
        backdrop-blur-xl
        rounded-3xl
        border border-white/40
        shadow-[0_25px_60px_rgba(31,61,60,0.25)]
        overflow-hidden
      "
      >
        {/* Dashboard Layout */}
        <div className="flex h-full">
          {/* Sidebar */}
          <aside
            className="
            w-72
            bg-white/40
            backdrop-blur-lg
            border-r border-white/30
            p-6
          "
          >
            <h1 className="text-2xl font-bold font-serif text-[#1E3B3A]">
              Radhika Jeweller's
            </h1>

            <ul className="mt-10 space-y-4 text-[#1E3B3A]">
              <li className="cursor-pointer hover:text-[#5FA7A0]">Dashboard</li>
              <li
                className="cursor-pointer hover:text-[#5FA7A0]"
                onClick={toggleProducts}
              >
                Products
              </li>
              <li
                className="cursor-pointer hover:text-[#5FA7A0]"
                onClick={graph}
              >
                Sales
              </li>
              <li className="cursor-pointer hover:text-[#5FA7A0]">Customers</li>
            </ul>
          </aside>

          {/* Main Dashboard Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Cards */}
              <div className="bg-white/40 rounded-2xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-[#1E3B3A]">
                  Total Sales
                </h2>
                <p className="text-2xl font-bold mt-2">₹8,40,000</p>
              </div>

              <div className="bg-white/40 rounded-2xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-[#1E3B3A]">Orders</h2>
                <p className="text-2xl font-bold mt-2">124</p>
              </div>

              <div className="bg-white/40 rounded-2xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-[#1E3B3A]">
                  Customers
                </h2>
                <p className="text-2xl font-bold mt-2">89</p>
              </div>
            </div>
            {/* sales chart */}
            {showgraph && (
              <div className="mt-8 bg-white/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-[#1E3B3A] mb-4">
                  Sales Overview
                </h2>
                <SalesChart data={sales} />
              </div>
            )}
            {/* showproducts */}
            {showProducts && (
              <div className="mt-8 bg-white/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold text-[#1E3B3A] mb-4">
                  Total Products Overview
                </h2>
                <ProductChart data={productsData} />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dash;
