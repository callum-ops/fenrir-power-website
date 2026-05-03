export default function App() {
  return (
    <div style={{
      background: "#0b0b0b",
      color: "white",
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
        HIGH-VOLTAGE SAFETY,<br/>
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
    </div>
  );
}
