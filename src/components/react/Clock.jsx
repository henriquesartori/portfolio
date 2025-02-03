import { useState, useEffect } from 'react';

const Clock = () => {
    const [current, setCurrent] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (date) => {
        return new Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }

    return <>{format(current)}</>;
};

export default Clock;