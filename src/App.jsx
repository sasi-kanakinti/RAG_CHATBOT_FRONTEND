//@ts-nocheck
import { useState, useEffect } from "react";
import { sendMessage } from "./api/chatApi";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", text: input };
    const updatedHistory = [...messages, userMsg];

    setMessages(updatedHistory);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessage(input, updatedHistory);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            data.response ||
            data.answer ||
            data.output ||
            data.content ||
            "No response from server",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: err+"Error contacting backend" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={theme} style={styles.container}>
      <div style={styles.header}>
        <h2>RAG Chatbot</h2>
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
          style={styles.toggle}
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      <ChatWindow messages={messages} loading={loading} />

      <ChatInput
        input={input}
        setInput={setInput}
        onSend={handleSend}
        loading={loading}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    height: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--bg-main)",
    color: "var(--text-main)",
  },
  header: {
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--border)",
  },
  toggle: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid var(--border)",
    background: "transparent",
    color: "var(--text-main)",
    cursor: "pointer",
  },
};

export default App;
