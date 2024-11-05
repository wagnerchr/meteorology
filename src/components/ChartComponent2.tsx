'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useFetchRegisters from '../hooks/useFetchRegisters';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent2: React.FC = () => {
  const { registers, loading, error } = useFetchRegisters();
  const labels = registers.map((_, index) => `Item ${index + 1}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Quantidade de Chuva',
        data: registers.map(item => item.qntChuva),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Temperatura',
        data: registers.map(item => item.temperatura),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Umidade',
        data: registers.map(item => item.umidade),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Umidade do Solo',
        data: registers.map(item => item.umidadeSolo),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Vibração',
        data: registers.map(item => item.vibracao),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Dados Ambientais',
      },
    },
  };

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className='flex justify-center h-auto mb-8 mx-auto w-[800px] bg-white border border-gray-200 rounded-lg shadow-md p-4 m-8'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent2;
