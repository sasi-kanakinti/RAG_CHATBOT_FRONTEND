//@ts-nocheck

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendMessage(query, history) {
    const response = await fetch(`${API_BASE_URL}/chat`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query,
        history,
    }),
    });

    if (!response.ok) {
    throw new Error("API request failed");
    }

    const data = await response.json();
    return data;
}
