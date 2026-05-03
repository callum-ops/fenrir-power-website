export default function App() {
  return (
    <div style={{ background: "#0b0b0b", color: "white", fontFamily: "Arial" }}>

      {/* NAVBAR */}
      <div style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "rgba(11,11,11,0.7)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}>
        <img
          src="/logo.png"
          alt="Fenrir Power"
          style={{ height: "50px" }}
        />

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingInline: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "clamp(40px, 6vw, 80px)",
          lineHeight: "1.05",
          letterSpacing: "1px",
          maxWidth: "950px",
          margin: 0
        }}>
          HIGH-VOLTAGE SAFETY,<br />
          COMMISSIONING & CONTROL
        </h1>

        <p style={{
          marginTop: "24px",
          fontSize: "20px",
          maxWidth: "760px",
          color: "#bbb",
          lineHeight: "1.6"
        }}>
          Specialist HV support for offshore wind, substations and critical infrastructure — including SAP services, switching, commissioning and energisation planning.
        </p>

        <a href="mailto:info@fenrirpower.com">
          <button
            style={{
              marginTop: "34px",
              padding: "16px 28px",
              background: "#f5b642",
              color: "#111",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}
            onMouseOver={e => e.target.style.background = "#ffffff"}
            onMouseOut={e => e.target.style.background = "#f5b642"}
          >
            Discuss a Project
          </button>
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", margin: 0 }}>Services</h2>

        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          marginInline: "auto"
        }}>
          {[
            "SAP & HV Safety Services",
            "HV Commissioning & Testing",
            "Energisation Planning",
            "Control Room Support",
            "Compliance & Documentation",
            "Renewable Infrastructure"
          ].map((item) => (
            <div key={item} style={{
              padding: "24px",
              border: "1px solid #222",
              borderRadius: "12px",
              background: "#111"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* AUTHORITY */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#111"
      }}>
        <h2 style={{ fontSize: "40px", margin: 0 }}>Why Fenrir Power</h2>

        <p style={{
          marginTop: "20px",
          maxWidth: "800px",
          marginInline: "auto",
          color: "#bbb",
          lineHeight: "1.6"
        }}>
          Delivered by an experienced HV professional operating at Senior Authorised Person level across offshore wind and critical infrastructure projects.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px", margin: 0 }}>Contact</h2>

        <p style={{ marginTop: "20px", color: "#bbb" }}>
          info@fenrirpower.com
        </p>
      </section>

    </div>
  );
}
