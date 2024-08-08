import { useState, useEffect } from 'react';
import { fetchArticles } from '../services/article.service'; // Asegúrate de que esta ruta sea correcta

const useFetchArticles = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        setController(abortController);

        const loadArticles = async () => {
            try {
                const result = await fetchArticles(url, signal);
                setData(result);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Request was aborted');
                } else {
                    setError(error.message || 'Failed to fetch articles');
                }
            } finally {
                setLoading(false);
            }
        };

        loadArticles();

        return () => abortController.abort();

    }, []);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError('Request cancelled');
        }
    };

    return { data, loading, error, handleCancelRequest };
};

export default useFetchArticles;
