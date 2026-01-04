//@ts-nocheck
function MessageBubble({ message }) {
  const isUser = message.role === "user";
  
  return (
    <div
      style={{
        ...styles.bubble,
        alignSelf: isUser ? "flex-end" : "flex-start",
        backgroundColor: isUser
          ? "var(--user-bubble)"
          : "var(--assistant-bubble)",
        color: isUser ? "#000" : "var(--text-main)",
      }}
    >
      {message.text}
    </div>
  );
}

const styles = {
  bubble: {
    padding: "12px 14px",
    borderRadius: "10px",
    maxWidth: "85%",
    lineHeight: "1.6",
    whiteSpace: "pre-wrap",
    
  },
};

export default MessageBubble;
