import React, { useState } from "react";
import Headers from "../Components/Header";
import ProductFeatureSection from "../Components/FeatureSection";
import PopularProducts from "../Components/ProductSection";
import Footer from "../Components/Footer";
import Carasuel from "../Components/Carasuel";
import NewsletterPopup from "../Components/Newletterpopup";
import Chat from "../Components/chat";  // import your Chat component

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* <Headers /> */}
      <NewsletterPopup />
      <Carasuel />
      <ProductFeatureSection />
      <PopularProducts />
      <Footer />

      {/* Floating Chat Icon Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          fontSize: 28,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          userSelect: "none",
        }}
        aria-label={chatOpen ? "Close chat" : "Open chat"}
        title={chatOpen ? "Close chat" : "Open chat"}
      >
        {chatOpen ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {chatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 100,
            right: 30,
            width: 400,
            maxHeight: "70vh",
            zIndex: 1000,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <Chat />
        </div>
      )}
    </div>
  );
}
