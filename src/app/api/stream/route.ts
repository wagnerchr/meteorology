import { NextRequest } from 'next/server';
import { getLatestData } from '../receive/route';

export function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();

  const intervalId = setInterval(() => {
    const data = getLatestData(); // Obtém os dados mais recentes
    writer.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);

  req.signal.addEventListener('abort', () => {
    clearInterval(intervalId);
    writer.close();
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
