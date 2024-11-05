'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import useFetchRegisters from '../hooks/useFetchRegisters';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartComponent: React.FC = () => {
  const { registers, loading, error } = useFetchRegisters();
  const labels = registers.map((_, index) => `Item ${index + 1}`);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Quantidade de Chuva',
        data: registers.map(item => item.qntChuva),
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Temperatura',
        data: registers.map(item => item.temperatura),
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Umidade',
        data: registers.map(item => item.umidade),
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Umidade do Solo',
        data: registers.map(item => item.umidadeSolo),
        fill: true,
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
      {
        label: 'Vibração',
        data: registers.map(item => item.vibracao),
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.4)',
        borderColor: 'rgba(255, 206, 86, 1)',
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
    <>
    <div className='flex justify-center h-[800px] mb-8 mx-auto w-full  bg-white border border-gray-200 rounded-lg shadow-md p-4 m-8'>
        <Line data={chartData} options={options} />;
        </div>
    </>
    )

};

export default ChartComponent;
