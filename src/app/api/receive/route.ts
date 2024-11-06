import { NextRequest, NextResponse } from 'next/server';

let latestData = {}; // Variável para armazenar os dados mais recentes

export async function POST(req: NextRequest) {
  const data = await req.json();
  latestData = data; // Armazena os dados recebidos
  return NextResponse.json({ message: 'Dados recebidos com sucesso' });
}

// Função para acessar os dados no endpoint SSE
export function getLatestData() {
  return latestData;
}
