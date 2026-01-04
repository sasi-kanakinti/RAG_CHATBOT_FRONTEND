//@ts-nocheck
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, loading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-card" style={styles.chatBox}>
      {messages.length === 0 && !loading && (
        <div style={styles.empty}>
          Ask a question to start the conversation.
        </div>
      )}

      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}

      {loading && (
        <div style={styles.typing}>Assistant is typing...</div>
      )}

      <div ref={endRef} />
    </div>
  );
}

const styles = {
  chatBox: {
  flex: 1,
  margin: "0 16px",
  padding: "16px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  borderBottom: "none",
  backgroundColor: "var(--bg-panel)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflowY: "auto",
  boxShadow:
    "0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
},

  empty: {
    margin: "auto",
    color: "var(--text-muted)",
  },
  typing: {
    color: "var(--text-muted)",
    fontSize: "14px",
  },
};

export default ChatWindow;
