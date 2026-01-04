//@ts-nocheck
function ChatInput({ input, setInput, onSend, loading }) {
    return (
    <div className="input-card" style={styles.wrapper}>
        <input
        value={input}
        disabled={loading}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question..."
        style={styles.input}
        onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <button
        onClick={onSend}
        disabled={loading}
        style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
        }}
        >
        Send
        </button>
    </div>
);
}

const styles = {
    wrapper: {
    padding: "12px",
    display: "flex",
    gap: "8px",
    margin: "0 16px 16px 16px",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    // border: "1px solid var(--border)",
    borderTop: "none",
    backgroundColor: "var(--bg-panel)",
    boxShadow:
    "0 1px 2px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
},

    input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid var(--border)",
    backgroundColor: "var(--bg-input)",
    color: "var(--text-main)",
    fontSize: "15px",
    },
    button: {
    padding: "12px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "var(--button)",
    color: "#fff",
    cursor: "pointer",
    },
};

export default ChatInput;
