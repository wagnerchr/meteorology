// types/socketTypes.ts

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    newData: (data: { temperature: number; humidity: number }) => void; // Adicionado
}

export interface ClientToServerEvents {
    hello: () => void;
    data: (data: { temperature: number; humidity: number }) => void; // Adicionado
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}