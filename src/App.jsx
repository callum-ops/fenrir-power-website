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
        padding: "18px 40px",
        background: "rgba(11,11,11,0.75)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        boxSizing: "border-box"
      }}>
        <img
          src="/fulllogo_transparent_nobuffer-White.png"
          alt="Fenrir Power"
          style={{
            height: "clamp(70px, 6vw, 110px)",
            objectFit: "contain",
            display: "block",
            transform: "translateY(-2px)"
          }}
        />

        <div style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        paddingTop: "140px",
        paddingInline: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box"
      }}>
        <h1 style={{
          fontSize: "clamp(42px, 6vw, 82px)",
          lineHeight: "1.05",
          letterSpacing: "1px",
          maxWidth: "980px",
          margin: 0,
          fontWeight: "800"
        }}>
          HIGH-VOLTAGE SAFETY,<br />
          COMMISSIONING & CONTROL
        </h1>

        <p style={{
          marginTop: "26px",
          fontSize: "clamp(17px, 1.5vw, 21px)",
          maxWidth: "780px",
          color: "#c7c7c7",
          lineHeight: "1.65"
        }}>
          Specialist HV support for offshore wind, substations and critical infrastructure — including SAP services, switching, commissioning and energisation planning.
        </p>

        <a href="mailto:info@fenrirpower.com">
          <button
            style={{
              marginTop: "36px",
              padding: "16px 30px",
              background: "#f5b642",
              color: "#111",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s",
              borderRadius: "2px"
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
        padding: "110px 20px",
        textAlign: "center",
        boxSizing: "border-box"
      }}>
        <h2 style={{ fontSize: "42px", margin: 0 }}>Services</h2>

        <div style={{
          marginTop: "45px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "28px",
          maxWidth: "1050px",
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
              padding: "28px",
              border: "1px solid #242424",
              borderRadius: "12px",
              background: "#111",
              fontWeight: "600"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* AUTHORITY */}
      <section style={{
        padding: "110px 20px",
        textAlign: "center",
        background: "#111",
        boxSizing: "border-box"
      }}>
        <h2 style={{ fontSize: "42px", margin: 0 }}>Why Fenrir Power</h2>

        <p style={{
          marginTop: "22px",
          maxWidth: "820px",
          marginInline: "auto",
          color: "#c7c7c7",
          lineHeight: "1.7",
          fontSize: "18px"
        }}>
          Delivered by an experienced HV professional operating at Senior Authorised Person level across offshore wind and critical infrastructure projects.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "110px 20px",
        textAlign: "center",
        boxSizing: "border-box"
      }}>
        <h2 style={{ fontSize: "42px", margin: 0 }}>Contact</h2>

        <p style={{ marginTop: "22px", color: "#c7c7c7", fontSize: "18px" }}>
          info@fenrirpower.com
        </p>
      </section>

    </div>
  );
}
