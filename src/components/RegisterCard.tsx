'use client'

import React from 'react';
import Card from './Card';



const RegisterCard: React.FC = (
    
) => {
    return (
        <div className=" mx-auto w-full  bg-white border border-gray-200 rounded-lg shadow-md p-4 m-8">
            <h3 className="text-lg font-bold mb-2">{'Teste'}</h3>
            <div className="flex justify-center  text-sm mb-2 flex-wrap flex-1">
                <Card name={"Chovendo"} value={true}/>
                <Card name={"Quantidade de chuva"} value={2.5} unit='mm/h'/>
                <Card name={"Temperatura"} value={26} unit='ºC'/>
                <Card name={"Úmidade"} value={2.6} unit='%'/>
                <Card name={"Alagamento"} value={false}/>
                <Card name={"Úmidade do solo"} value={7} unit='%'/>
                <Card name={"Vibração"} value={24} unit='Hz'/>
            </div>
        </div>
    );
};

export default RegisterCard;
