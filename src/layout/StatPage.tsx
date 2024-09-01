import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import Footer from './Footer';
import Header from './Header';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StatCardProps {
  title: string;
  endpoint: string;
}

interface Data {
  count: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, endpoint }) => {
    const [data, setData] = useState<Data | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Ошибка при загрузке данных:', error);
          setError('Ошибка загрузки');
        });
    }, [endpoint]);
  
    return (
        <div className="bg-[#161616] p-6 rounded-lg shadow-md text-white w-full max-w-[300px]">
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="text-2xl font-bold mb-2">
            {error ? (
                error
            ) : data && typeof data.count !== 'undefined' ? (
                data.count.toLocaleString()
            ) : (
                'Загрузка...'
            )}
            </div>
        </div>
    );
};
  
interface ApiResponse {
    chartLabels: string[];
    chartValues: number[];
    history: Array<{ id: number; recorded_at: string; rate: number }>;
  }

const StatPage: React.FC = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');
    const [chartData, setChartData] = useState<ChartData<'line'>>({
      labels: [],
      datasets: [],
    });
    const [rateHistory, setRateHistory] = useState<ApiResponse['history']>([]);
    const currencies = ['USD', 'EUR', 'GBP', 'TRY_RATE', 'KRW', 'ZAR', 'SAR', 'RUB', 'MXN','JPY', 'AUD', 'CAD', 'BRL', 'ARS', 'GOLD', 'BYN', 'CHF', 'NZD', 'PLN', 'SGD', 'ILS', 'THB', 'AED', 'JOD', 'KWD', 'HKD', 'KYD'];

    useEffect(() => {
        const fetchCurrencyData = async () => {
          try {
            const response = await fetch(`http://sitpayworld.com/api/get_currency_data?currency=${selectedCurrency}`);
            const data: ApiResponse = await response.json();
    
            setChartData({
              labels: data.chartLabels,
              datasets: [
                {
                  label: selectedCurrency,
                  data: data.chartValues,
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
              ],
            });
    
            setRateHistory(data.history);
          } catch (err) {
            console.error('Ошибка при загрузке данных:', err);
          }
        };
    
        fetchCurrencyData();
    }, [selectedCurrency]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="bg-[linear-gradient(114.54deg,_#001131_34.33%,_#161616_95.7%)] bg-[linear-gradient(132.6deg,_#001131_26.05%,_#161616_100%)]">
      <Header />
      <main className="py-8 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Количество монет в системе" endpoint="http://sitpayworld.com/api/get_last_coin_count" />
          <StatCard title="Рыночная капитализация" endpoint="http://sitpayworld.com/api/get_market_cap" />
          <StatCard title="Количество монет добавленных за месяц" endpoint="http://sitpayworld.com/api/get_monthly_coin_addition" />
          <StatCard title="Количество операций за весь период" endpoint="http://sitpayworld.com/api/get_total_operations" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard title="Информация" endpoint="http://sitpayworld.com/api/get_last_coin_count" />
          <StatCard title="Информация" endpoint="http://sitpayworld.com/api/get_last_coin_count" />
          <StatCard title="Информация" endpoint="http://sitpayworld.com/api/get_last_coin_count" />
          <StatCard title="Информация" endpoint="http://sitpayworld.com/api/get_last_coin_count" />
        </div>
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3 bg-[#161616] p-4 rounded-lg shadow-md">
                <h2 className="text-white mb-4">Валюты</h2>
                <ul className="overflow-auto max-h-96">
                {currencies.map((currency) => (
                    <li key={currency} className="mb-2">
                    <button
                        className={`w-full text-left p-2 rounded-md ${selectedCurrency === currency ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'}`}
                        onClick={() => setSelectedCurrency(currency)}
                    >
                        {currency}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
            <div className="col-span-6 bg-[#161616] p-4 rounded-lg shadow-md">
                <h2 className="text-white mb-4">Курс {selectedCurrency}</h2>
                <Line data={chartData} />
            </div>
            <div className="col-span-3 bg-[#161616] p-4 rounded-lg shadow-md">
                <h2 className="text-white mb-4">История курса</h2>
                <ul className="overflow-auto max-h-96">
                {rateHistory.map((item) => (
                    <li key={item.id} className="mb-2 text-gray-300">
                    <div>ID: {item.id}</div>
                    <div>Date: {new Date(item.recorded_at).toLocaleString()}</div>
                    <div>Rate: {item.rate}</div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StatPage;

