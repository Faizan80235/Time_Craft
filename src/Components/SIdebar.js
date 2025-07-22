import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Chart from "./Chart"; // 👈 chart component import
import AnalyticsCharts from "./Anayltics";
import ProductManager from "./ProductManager";

const navSections = [
  {
    title: "Main",
    links: [
      { label: "Dashboard", icon: "bi-house-fill", active: true },
      { label: "Analytics", icon: "bi-bar-chart-fill" },
      { label: "Sales", icon: "bi-cash-stack" },
    ],
  },
  {
    title: "Management",
    links: [
      { label: "Orders", icon: "bi-bag-fill" },
      { label: "Products", icon: "bi-box-seam" },
      { label: "Customers", icon: "bi-people-fill" },
      { label: "Inventory", icon: "bi-archive-fill" },
    ],
  },
  {
    title: "Settings",
    links: [
      { label: "Profile", icon: "bi-person-circle" },
      { label: "Payments", icon: "bi-credit-card" },
      { label: "Notifications", icon: "bi-bell-fill" },
      { label: "Security", icon: "bi-shield-lock-fill" },
      { label: "System Logs", icon: "bi-file-earmark-text" },
    ],
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Dashboard"); // 👈 track selected

  const colors = {
    bg: "#0F172A",
    text: "#E0E7FF",
    accent: "#6366F1",
    hover: "#1E293B",
    activeBg: "#312E81",
    border: "#334155",
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: collapsed ? 80 : 280,
          backgroundColor: colors.bg,
          color: colors.text,
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem 1rem",
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.5)",
          transition: "width 0.3s ease",
          position: "fixed",
          height: "100vh",
          userSelect: "none",
          zIndex: 1000,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: collapsed ? "center" : "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            paddingBottom: "0.5rem",
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          {!collapsed && (
            <h1
              style={{
                fontWeight: "700",
                fontSize: "1.6rem",
                color: colors.text,
                letterSpacing: "2px",
                margin: 0,
                fontFamily:
                  "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              ECOM DASH
            </h1>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              background: "none",
              border: "none",
              color: colors.text,
              fontSize: "2rem",
              cursor: "pointer",
              padding: "6px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              transition: "color 0.2s, background-color 0.2s",
              userSelect: "none",
              borderRadius: "6px",
            }}
            aria-label="Toggle sidebar"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.accent;
              e.currentTarget.style.backgroundColor = colors.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.text;
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <i
              className={`bi ${
                collapsed ? "bi-arrow-bar-right" : "bi-arrow-bar-left"
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav
          style={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "calc(100vh - 220px)",
            paddingRight: "6px",
          }}
        >
          {navSections.map(({ title, links }) => (
            <section key={title} style={{ marginBottom: "2rem" }}>
              {!collapsed && (
                <h6
                  style={{
                    color: colors.accent,
                    fontWeight: "700",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    fontFamily:
                      "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                  }}
                >
                  {title}
                </h6>
              )}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {links.map(({ label, icon, active }) => (
                  <li key={label}>
                    <a
                      href="#"
                      onClick={() => setSelectedPage(label)} // 👈 Update selected page
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: collapsed ? "center" : "flex-start",
                        padding: collapsed ? "0.4rem 0" : "0.7rem 1rem",
                        height: 44,
                        minWidth: 44,
                        borderRadius: "0.5rem",
                        color:
                          selectedPage === label ? colors.accent : colors.text,
                        backgroundColor:
                          selectedPage === label ? colors.activeBg : "transparent",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "background-color 0.3s, color 0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        if (selectedPage !== label) {
                          e.currentTarget.style.backgroundColor = colors.hover;
                          e.currentTarget.style.color = colors.accent;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedPage !== label) {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = colors.text;
                        }
                      }}
                    >
                      <i
                        className={`bi ${icon}`}
                        style={{
                          fontSize: "1.3rem",
                          width: 28,
                          textAlign: "center",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      {!collapsed && (
                        <span
                          style={{
                            fontWeight:
                              selectedPage === label ? "700" : "500",
                            fontFamily:
                              "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            userSelect: "none",
                          }}
                        >
                          {label}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        {/* Profile */}
        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: collapsed ? 0 : "1rem",
            justifyContent: collapsed ? "center" : "flex-start",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=64&v=4"
            alt="Admin Profile"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              objectFit: "cover",
              display: collapsed ? "none" : "block",
              boxShadow: `0 0 6px ${colors.accent}`,
            }}
          />
          {!collapsed && (
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  color: colors.text,
                  userSelect: "none",
                }}
              >
                Admin User
              </p>
              <a
                href="#"
                style={{
                  fontSize: "0.9rem",
                  color: colors.accent,
                  textDecoration: "none",
                  userSelect: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
   <main
  style={{
    marginLeft: collapsed ? 80 : 280,
    padding: "2.5rem 3rem",
    backgroundColor: "#f8fafc",
    width: "100%",
    height: "100vh",
    overflowY: "auto",
    transition: "margin-left 0.3s ease",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1e293b",
  }}
>
  {selectedPage === "Dashboard" && (
    <>
      <p
        style={{
          maxWidth: 750,
          lineHeight: 1.7,
          fontSize: "1.05rem",
        }}
      >
      </p>
      <Chart /> {/* Chart component for Dashboard */}
    </>
  )}

  {selectedPage === "Analytics" && (
    <>
      <AnalyticsCharts /> {/* AnalyticsCharts component */}
    </>
  )}

  {selectedPage === "Sales" && (
    <>
      <h1>Sales</h1>
      <p>View sales reports and performance metrics here.</p>
    </>
  )}

  {selectedPage === "Orders" && (
    <>
      <h1>Orders</h1>
      <p>Manage and review your customer orders here.</p>
      {/* Orders ka table ya component yahan show karen */}
    </>
  )}

  {selectedPage === "Products" && (
    <>
      <ProductManager></ProductManager>

    </>
  )}

  {selectedPage === "Customers" && (
    <>
      <h1>Customers</h1>
      <p>See and manage your customers.</p>
      {/* Customers list ya analytics */}
    </>
  )}

  {selectedPage === "Inventory" && (
    <>
      <h1>Inventory</h1>
      <p>Manage inventory levels and stock here.</p>
      {/* Inventory management component */}
    </>
  )}

  {selectedPage === "Profile" && (
    <>
      <h1>Profile Settings</h1>
      <p>Update your profile information.</p>
      {/* Profile form */}
    </>
  )}

  {selectedPage === "Payments" && (
    <>
      <h1>Payments</h1>
      <p>Manage your payment methods and billing.</p>
      {/* Payment info */}
    </>
  )}

  {selectedPage === "Notifications" && (
    <>
      <h1>Notifications</h1>
      <p>Manage notification preferences.</p>
      {/* Notification settings */}
    </>
  )}

  {selectedPage === "Security" && (
    <>
      <h1>Security</h1>
      <p>Update password and security settings.</p>
      {/* Security settings */}
    </>
  )}

  {selectedPage === "System Logs" && (
    <>
      <h1>System Logs</h1>
      <p>Review system activity logs.</p>
      {/* Logs viewer */}
    </>
  )}
</main>

    </div>
  );
};

export default Sidebar;
