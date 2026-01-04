//@ts-nocheck
import axios from "axios";

const API_URL = "http://backend:8000/chat";

export async function sendMessageToBackend(question, history) {
const response = await axios.post(API_URL, {
    query: question,
    history: history,
});

return response.data;
}