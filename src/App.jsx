export default function App() {
  return (
    <div style={{ background: "#0b0b0b", color: "white", fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}>
        <h1 style={{
          fontSize: "72px",
          lineHeight: "1.1",
          maxWidth: "900px"
        }}>
          HIGH-VOLTAGE SAFETY,<br />
          COMMISSIONING & CONTROL
        </h1>

        <p style={{
          marginTop: "20px",
          fontSize: "20px",
          maxWidth: "700px",
          color: "#bbb"
        }}>
          Specialist HV support for offshore wind, substations and critical infrastructure — including SAP services, switching, commissioning and energisation planning.
        </p>

        <a href="mailto:info@fenrirpower.com">
          <button style={{
            marginTop: "30px",
            padding: "16px 28px",
            background: "#f5b642",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Discuss a Project
          </button>
        </a>
      </section>

      {/* SERVICES */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px" }}>Services</h2>

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
              padding: "20px",
              border: "1px solid #222",
              borderRadius: "10px"
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
        <h2 style={{ fontSize: "40px" }}>Why Fenrir Power</h2>

        <p style={{
          marginTop: "20px",
          maxWidth: "800px",
          marginInline: "auto",
          color: "#bbb"
        }}>
          Delivered by an experienced HV professional operating at Senior Authorised Person level across offshore wind and critical infrastructure projects.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "40px" }}>Contact</h2>

        <p style={{ marginTop: "20px" }}>
          info@fenrirpower.com
        </p>
      </section>

    </div>
  );
}
