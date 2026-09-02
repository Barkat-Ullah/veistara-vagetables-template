import React, { Suspense } from "react";

export default function Section404() {
  return (
    <div
      className="framer-fdmki7"
      data-framer-name="404"
      style={{
        padding: "60px 20px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "1140px",
        margin: "0 auto",
      }}
    >
      {/* 404 Visual Hero Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Badge Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "9999px",
            backgroundColor: "rgba(10, 65, 47, 0.08)",
            border: "1px solid rgba(10, 65, 47, 0.15)",
            color: "var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, #0A412F)",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          <span style={{ fontSize: "16px" }}>🌿</span>
          <span>404 Error • Page Not Found</span>
        </div>

        {/* Big 404 Graphic Number */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 0 16px",
            userSelect: "none",
          }}
        >
          <span
            style={{
              fontSize: "clamp(90px, 16vw, 170px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, #0A412F)",
              opacity: 0.95,
              textShadow: "0 10px 30px rgba(10, 65, 47, 0.1)",
              fontFamily: '"Outfit", "Manrope", sans-serif',
            }}
          >
            4
            <span
              style={{
                display: "inline-block",
                color: "#EFCC6C",
                margin: "0 4px",
                transform: "scale(1.05)",
              }}
            >
              0
            </span>
            4
          </span>
        </div>

        {/* Heading */}
        <h1
          className="framer-text"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "var(--token-f183dd4a-ffdc-43b0-a338-9aeb78e4c861, rgb(5, 33, 24))",
            margin: "0 0 16px",
            maxWidth: "700px",
            fontFamily: '"Outfit", "Manrope", sans-serif',
          }}
        >
          Oops! That Harvest Page Isn't Here
        </h1>

        {/* Subtitle */}
        <p
          className="framer-text"
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: 1.6,
            color: "var(--token-90c2ab70-b23e-4699-8f03-f6a41fb5be8e, rgb(67, 86, 80))",
            margin: "0 0 36px",
            maxWidth: "600px",
            fontWeight: 500,
          }}
        >
          The page you're looking for may have been moved, deleted, or never existed in our fields. Let's get you back to the fresh produce!
        </p>

        {/* Primary Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "56px",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "15px 34px",
              backgroundColor: "var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, rgb(10, 65, 47))",
              color: "#FFFFFF",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(10, 65, 47, 0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 24px rgba(10, 65, 47, 0.35)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(10, 65, 47, 0.25)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Back to Homepage</span>
          </a>

          <a
            href="/product"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "15px 30px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, rgb(10, 65, 47))",
              color: "var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, rgb(10, 65, 47))",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.04)",
              transition: "background-color 0.2s ease, transform 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(10, 65, 47, 0.05)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Browse Products</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Quick Suggestion Cards Section */}
        <div
          style={{
            width: "100%",
            maxWidth: "960px",
            borderTop: "1px solid rgba(10, 65, 47, 0.12)",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--token-90c2ab70-b23e-4699-8f03-f6a41fb5be8e, rgb(67, 86, 80))",
              marginBottom: "20px",
            }}
          >
            Popular Destinations
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: "🥬",
                title: "Organic Products",
                desc: "Explore fresh vegetables & fruits",
                link: "/product",
              },
              {
                icon: "🌾",
                title: "Our Farms",
                desc: "Learn about sustainable farming",
                link: "/farms",
              },
              {
                icon: "🌿",
                title: "About Vesteira",
                desc: "Discover our mission & values",
                link: "/about",
              },
              {
                icon: "💬",
                title: "Contact Team",
                desc: "Reach out for help & questions",
                link: "/contact",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "20px 22px",
                  borderRadius: "16px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(10, 65, 47, 0.1)",
                  textDecoration: "none",
                  textAlign: "left",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(10, 65, 47, 0.08)";
                  e.currentTarget.style.borderColor = "var(--token-7b82bf98-3eeb-42d4-90fc-c6c75460703b, rgb(10, 65, 47))";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(10, 65, 47, 0.1)";
                }}
              >
                <div
                  style={{
                    fontSize: "26px",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--token-f183dd4a-ffdc-43b0-a338-9aeb78e4c861, rgb(5, 33, 24))",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--token-90c2ab70-b23e-4699-8f03-f6a41fb5be8e, rgb(67, 86, 80))",
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
