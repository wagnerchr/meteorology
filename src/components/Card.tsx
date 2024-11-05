interface CardProps {
    name: string,
    value: boolean | number | string,
    unit?: string
}

const Card: React.FC<CardProps> = ({name, value, unit}) => {

    return (
        <>
            <div className="flex flex-col w-[180px] justify-center items-center text-white font-sans rounded-[10px] bg-slate-600 p-4 m-4" >
                <h1 className="text-[20px] text-center mb-5 leading-[26px]">{name}</h1>
                <h4 className="text-[16px] mb-2">{typeof value === 'boolean' ? value ? "Sim" : "Não" : String(value)} {unit}</h4>
            </div>
        </>
    )
}

export default Card;

 