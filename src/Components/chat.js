import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmessage, addmessagebot } from "../Redux/data/chat";

export default function Chat() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chatbot.messages || []);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    dispatch(addmessage(input));

    setTimeout(() => {
      const botReply =
        "Thank you for reaching out! At [Your Brand Name], we take pride in offering a curated selection of premium watches that blend timeless elegance with cutting-edge technology. Whether you're looking for a classic analog timepiece, a modern smartwatch, or a limited edition collector's item, we have something to match your style and needs. Our watches are crafted with precision, using high-quality materials to ensure durability and sophistication. Plus, we offer expert customer support to help you choose the perfect watch, guide you through our warranty services, and provide care tips to keep your timepiece ticking flawlessly for years to come. Feel free to ask me any questions about our collections, current offers, or how to take care of your watch—I’m here to help you make every second count!";
      dispatch(addmessagebot(botReply));
    }, 500);

    setInput("");
  };

  return (
    <div
      style={{
        background:
          "url('https://images.unsplash.com/photo-1519183071298-a2962cc0f5d1?auto=format&fit=crop&w=800&q=80') no-repeat center center/cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          width: 400,
          maxHeight: "80vh",
          borderRadius: 16,
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 20,
            borderBottom: "1px solid #ddd",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 transparent",
          }}
          // Custom scrollbar styles for webkit browsers
          className="messages-container"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                textAlign: msg.user === "sender" ? "right" : "left",
                marginBottom: 16,
                display: "flex",
                justifyContent:
                  msg.user === "sender" ? "flex-end" : "flex-start",
              }}
            >
              <span
                style={{
                  maxWidth: "75%",
                  padding: "10px 16px",
                  borderRadius: 20,
                  backgroundColor:
                    msg.user === "sender" ? "#4caf50" : "#f1f0f0",
                  color: msg.user === "sender" ? "white" : "black",
                  boxShadow:
                    msg.user === "sender"
                      ? "0 2px 8px rgba(76, 175, 80, 0.3)"
                      : "0 2px 8px rgba(0,0,0,0.1)",
                  fontSize: 14,
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div
          style={{
            padding: 10,
            display: "flex",
            borderTop: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 24,
              border: "1px solid #ccc",
              outline: "none",
              fontSize: 14,
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
            }}
          />
          <button
            onClick={handleSend}
            style={{
              marginLeft: 10,
              backgroundColor: "#4caf50",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              color: "white",
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(76, 175, 80, 0.4)",
            }}
            aria-label="Send message"
          >
            ➤
          </button>
        </div>
      </div>

      {/* Add custom scrollbar styles globally */}
      <style>
        {`
          .messages-container::-webkit-scrollbar {
            width: 6px;
          }
          .messages-container::-webkit-scrollbar-track {
            background: transparent;
          }
          .messages-container::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 3px;
          }
          .messages-container::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
        `}
      </style>
    </div>
  );
}
