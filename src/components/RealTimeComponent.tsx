'use client'
import { useEffect } from 'react';

export default function RealtimeComponent() {
  useEffect(() => {
    const eventSource = new EventSource('/api/stream');

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Dados recebidos:', data);
    };

    return () => eventSource.close();
  }, []);

  return <div>Recebendo dados em tempo real...</div>;
}
