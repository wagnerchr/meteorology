'use client'

import React, { useEffect } from 'react';
import Card from './Card';

const RegisterCard: React.FC = () => {
    const data = {
        titulo: 'Teste',
        chovendo: true,
        alagamento: false,
        qntChuva: 2.5,
        temperatura: 26,
        umidade: 2.6,
        umidadeSolo: 7,
        vibracao: 24,
        createdAt: new Date().toISOString()
    };

    const postData = async () => {
        try {
            const response = await fetch('/api/registers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.error("Erro ao enviar dados:", await response.json());
            } else {
                console.log("Dados enviados com sucesso!");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
        }
    };

    useEffect(() => {
        postData();
        const interval = setInterval(postData, 3600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto w-full bg-white border border-gray-200 rounded-lg shadow-md p-4 m-8">
            <h3 className="text-lg font-bold mb-2">{data.titulo}</h3>
            <div className="flex justify-center text-sm mb-2 flex-wrap flex-1">
                <Card name="Chovendo" value={data.chovendo} />
                <Card name="Quantidade de chuva" value={data.qntChuva} unit="mm/h" />
                <Card name="Temperatura" value={data.temperatura} unit="ºC" />
                <Card name="Umidade" value={data.umidade} unit="%" />
                <Card name="Alagamento" value={data.alagamento} />
                <Card name="Umidade do solo" value={data.umidadeSolo} unit="%" />
                <Card name="Vibração" value={data.vibracao} unit="Hz" />
            </div>
        </div>
    );
};

export default RegisterCard;
