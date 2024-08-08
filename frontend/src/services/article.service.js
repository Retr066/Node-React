import {API_URL} from '../config/config'


export const fetchArticles = async (url, signal) => {
    try {
        const urlToFetch = `${API_URL}/${url}`;
        const response = await fetch(urlToFetch, { signal });
        if (!response.ok) {
            const errorMessage = `Network response was not ok: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }
        return await response.json();
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Request cancelled");
        } else {
            throw error;
        }
    }
};
