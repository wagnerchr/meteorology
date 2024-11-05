'use client'

import React, { useState } from 'react';
import useFetchRegisters from '../hooks/useFetchRegisters';

const RegisterTable: React.FC = () => {
    const { registers, loading, error } = useFetchRegisters();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    if (loading) {
        return <div className="text-center text-blue-500">Carregando...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Erro: {error}</div>;
    }

    // Cálculo de índices para a paginação
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = registers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(registers.length / itemsPerPage);

    return (
        <div className="overflow-x-auto mx-auto w-full  bg-white border border-gray-200 rounded-lg shadow-md p-4 m-8">
            <table className="min-w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Título</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Chovendo</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Alagamento</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Quantidade de Chuva</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Temperatura</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Umidade</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Umidade do Solo</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Vibração</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(register => (
                        <tr key={register.id} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">{register.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{register.titulo}</td>
                            <td className="border border-gray-300 px-4 py-2">{String(register.chovendo)}</td>
                            <td className="border border-gray-300 px-4 py-2">{String(register.alagamento)}</td>
                            <td className="border border-gray-300 px-4 py-2">{register.qntChuva}</td>
                            <td className="border border-gray-300 px-4 py-2">{register.temperatura}</td>
                            <td className="border border-gray-300 px-4 py-2">{register.umidade}</td>
                            <td className="border border-gray-300 px-4 py-2">{register.umidadeSolo}</td>
                            <td className="border border-gray-300 px-4 py-2">{register.vibracao}</td>
                            <td className="border border-gray-300 px-4 py-2">{new Date(register.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
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
