'use client'

import { useEffect, useState } from 'react';

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

const useFetchRegisters = () => {
    const [registers, setRegisters] = useState<Register[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRegisters = async () => {
            try {
                const response = await fetch('/api/registers');
                if (!response.ok) {
                    throw new Error('Erro ao buscar os registros');
                }
                const data = await response.json();
                setRegisters(data.registers);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRegisters();
    }, []);

    return { registers, loading, error };
};

export default useFetchRegisters;
