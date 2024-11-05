'use client'

import React, { useState } from 'react';
import useFetchRegisters from '../hooks/useFetchRegisters';

interface Register {
    id: number;
    titulo: string;
    chovendo: boolean;
    alagamento: boolean;
    qntChuva: number;
    temperatura: number;
    umidade: number;
    umidadeSolo: number;
    vibracao: number;
    createdAt: string;
}

const RegisterTable: React.FC = () => {
    const { registers, loading, error } = useFetchRegisters();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Register; direction: 'asc' | 'desc' } | null>(null);
    const itemsPerPage = 10;

    if (loading) {
        return <div className="text-center text-blue-500">Carregando...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Erro: {error}</div>;
    }

    const sortedRegisters = [...registers];

    // Função de ordenação
    if (sortConfig !== null) {
        sortedRegisters.sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedRegisters.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(registers.length / itemsPerPage);

    const requestSort = (key: keyof Register) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="overflow-x-auto mx-auto w-full bg-white border border-gray-200 rounded-lg shadow-md p-4 m-8">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th onClick={() => requestSort('titulo')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Título</th>
                        <th onClick={() => requestSort('chovendo')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Chovendo</th>
                        <th onClick={() => requestSort('alagamento')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Alagamento</th>
                        <th onClick={() => requestSort('qntChuva')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Quantidade de Chuva</th>
                        <th onClick={() => requestSort('temperatura')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Temperatura</th>
                        <th onClick={() => requestSort('umidade')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Umidade</th>
                        <th onClick={() => requestSort('umidadeSolo')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Umidade do Solo</th>
                        <th onClick={() => requestSort('vibracao')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Vibração</th>
                        <th onClick={() => requestSort('createdAt')} className="cursor-pointer border border-gray-300 px-4 py-2 text-left">Data</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(register => {
                        const date = new Date(register.createdAt);
                        return (
                            <tr key={register.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{register.titulo}</td>
                                <td className="border border-gray-300 px-4 py-2">{String(register.chovendo)}</td>
                                <td className="border border-gray-300 px-4 py-2">{String(register.alagamento)}</td>
                                <td className="border border-gray-300 px-4 py-2">{register.qntChuva}</td>
                                <td className="border border-gray-300 px-4 py-2">{register.temperatura}</td>
                                <td className="border border-gray-300 px-4 py-2">{register.umidade}</td>
                                <td className="border border-gray-300 px-4 py-2">{register.umidadeSolo}</td>
                                <td className="border border-gray-300 px-4 py-2">{register.vibracao}</td>
                                <td className="border border-gray-300 px-4 py-2">{date.toLocaleDateString()}</td>
                                <td className="border border-gray-300 px-4 py-2">{date.toLocaleTimeString()}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Botões de navegação */}
            <div className="flex justify-between mt-4">
                <button 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Anterior
                </button>
                <span className="self-center">Página {currentPage} de {totalPages}</span>
                <button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default RegisterTable;
