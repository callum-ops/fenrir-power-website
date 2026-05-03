const services = [
  {
    title: "SAP & HV Safety Services",
    text: "Senior Authorised Person support, switching, isolation control, permits and safe systems of work."
  },
  {
    title: "Commissioning & Energisation",
    text: "Practical support for HV commissioning, energisation readiness, test packs and site acceptance."
  },
  {
    title: "Control Room Support",
    text: "Operational control, switching schedules, safety document tracking and live system coordination."
  },
  {
    title: "HV Documentation",
    text: "Clear, controlled documentation for permits, energisation packs, isolation plans and compliance records."
  },
  {
    title: "Renewable Infrastructure",
    text: "Support across offshore wind, substations, grid connections and high-voltage renewable assets."
  },
  {
    title: "Risk & Interface Control",
    text: "Management of HV interfaces, contractors, boundaries, isolations and project-critical risks."
  }
];

const sectors = [
  "Offshore Wind",
  "Grid Connections",
  "HV Substations",
  "GIS / AIS Switchgear",
  "Transformer Systems",
  "Critical Infrastructure"
];

const values = [
  "Safety-led delivery",
  "Clear operational control",
  "Strong documentation discipline",
  "Practical site experience"
];

export default function App() {
  return (
    <div style={{ background: "#0b0b0b", color: "white", fontFamily: "Arial, sans-serif" }}>

      {/* NAVBAR */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 44px",
        background: "rgba(11,11,11,0.78)",
        backdropFilter: "blur(12px)",
        zIndex: 1000,
        boxSizing: "border-box",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <img
          src="/fulllogo_transparent_nobuffer-White.png"
          alt="Fenrir Power"
          style={{
            height: "clamp(70px, 6vw, 110px)",
            objectFit: "contain",
            display: "block"
          }}
        />

        <div style={{ display: "flex", gap: "30px", fontSize: "15px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#experience" style={{ color: "white", textDecoration: "none" }}>Experience</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </div>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        paddingTop: "150px",
        paddingInline: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
        background: "radial-gradient(circle at 50% 20%, rgba(245,182,66,0.12), transparent 35%)"
      }}>
        <p style={{
          color: "#f5b642",
          letterSpacing: "0.18em",
          fontWeight: "700",
          fontSize: "13px",
          marginBottom: "22px",
          textTransform: "uppercase"
        }}>
          High-Voltage Safety • Commissioning • Control
        </p>

        <h1 style={{
          fontSize: "clamp(44px, 6vw, 88px)",
          lineHeight: "1.02",
          letterSpacing: "1px",
          maxWidth: "1050px",
          margin: 0,
          fontWeight: "900"
        }}>
          HV SUPPORT FOR HIGH-RISK, PROJECT-CRITICAL ENVIRONMENTS
        </h1>

        <p style={{
          marginTop: "28px",
          fontSize: "clamp(17px, 1.5vw, 21px)",
          maxWidth: "820px",
          color: "#c7c7c7",
          lineHeight: "1.7"
        }}>
          Fenrir Power provides specialist SAP, commissioning, energisation and control support for offshore wind, substations, grid connections and critical infrastructure.
        </p>

        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <a href="mailto:info@fenrirpower.com">
            <button
              style={{
                padding: "16px 30px",
                background: "#f5b642",
                color: "#111",
                border: "none",
                fontWeight: "800",
                cursor: "pointer",
                transition: "0.3s",
                borderRadius: "3px"
              }}
              onMouseOver={e => e.target.style.background = "#ffffff"}
              onMouseOut={e => e.target.style.background = "#f5b642"}
            >
              Request Availability
            </button>
          </a>

          <a href="#services">
            <button
              style={{
                padding: "16px 30px",
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
                fontWeight: "700",
                cursor: "pointer",
                borderRadius: "3px"
              }}
            >
              View Services
            </button>
          </a>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section style={{
        padding: "28px 20px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "#101010",
        textAlign: "center",
        color: "#d0d0d0"
      }}>
        SAP-level HV support across offshore wind, substations, grid-connected assets and critical infrastructure.
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "110px 20px",
        boxSizing: "border-box"
      }}>
        <div style={{ maxWidth: "1120px", marginInline: "auto" }}>
          <p style={{
            color: "#f5b642",
            letterSpacing: "0.16em",
            fontWeight: "700",
            fontSize: "13px",
            textTransform: "uppercase"
          }}>
            What I Deliver
          </p>

          <h2 style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            margin: "14px 0 0",
            maxWidth: "780px",
            lineHeight: "1.1"
          }}>
            Practical HV support from planning through to energisation.
          </h2>

          <div style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {services.map((service) => (
              <div key={service.title} style={{
                padding: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                background: "linear-gradient(180deg, #141414, #0f0f0f)"
              }}>
                <h3 style={{ margin: 0, fontSize: "21px" }}>{service.title}</h3>
                <p style={{
                  marginTop: "14px",
                  color: "#bdbdbd",
                  lineHeight: "1.65"
                }}>
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{
        padding: "110px 20px",
        background: "#111",
        boxSizing: "border-box"
      }}>
        <div style={{
          maxWidth: "1120px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          alignItems: "center"
        }}>
          <div>
            <p style={{
              color: "#f5b642",
              letterSpacing: "0.16em",
              fontWeight: "700",
              fontSize: "13px",
              textTransform: "uppercase"
            }}>
              Experience
            </p>

            <h2 style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: "1.1",
              margin: "14px 0 0"
            }}>
              Built for controlled delivery in demanding HV environments.
            </h2>

            <p style={{
              marginTop: "24px",
              color: "#c7c7c7",
              lineHeight: "1.75",
              fontSize: "18px"
            }}>
              Delivered by an experienced HV professional operating at Senior Authorised Person level, with practical control, commissioning and energisation experience across renewable and critical infrastructure projects.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "14px"
          }}>
            {sectors.map((sector) => (
              <div key={sector} style={{
                padding: "18px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0b0b0b",
                borderRadius: "10px",
                color: "#e7e7e7",
                fontWeight: "700"
              }}>
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section style={{
        padding: "110px 20px",
        boxSizing: "border-box"
      }}>
        <div style={{ maxWidth: "1120px", marginInline: "auto", textAlign: "center" }}>
          <p style={{
            color: "#f5b642",
            letterSpacing: "0.16em",
            fontWeight: "700",
            fontSize: "13px",
            textTransform: "uppercase"
          }}>
            How I Work
          </p>

          <h2 style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            margin: "14px 0 0"
          }}>
            Safe. Structured. Controlled.
          </h2>

          <div style={{
            marginTop: "46px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px"
          }}>
            {values.map((value) => (
              <div key={value} style={{
                padding: "26px",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                fontWeight: "800"
              }}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "120px 20px",
        textAlign: "center",
        background: "linear-gradient(180deg, #111, #0b0b0b)",
        boxSizing: "border-box"
      }}>
        <p style={{
          color: "#f5b642",
          letterSpacing: "0.16em",
          fontWeight: "700",
          fontSize: "13px",
          textTransform: "uppercase"
        }}>
          Contact
        </p>

        <h2 style={{
          fontSize: "clamp(36px, 4vw, 58px)",
          margin: "14px 0 0"
        }}>
          Need HV support on your next scope?
        </h2>

        <p style={{
          marginTop: "22px",
          color: "#c7c7c7",
          fontSize: "18px",
          lineHeight: "1.7"
        }}>
          Available for contract and project-based HV support.
        </p>

        <a href="mailto:info@fenrirpower.com" style={{
          display: "inline-block",
          marginTop: "30px",
          color: "#f5b642",
          fontSize: "22px",
          fontWeight: "800",
          textDecoration: "none"
        }}>
          info@fenrirpower.com
        </a>

        <p style={{
          marginTop: "70px",
          color: "#666",
          fontSize: "14px"
        }}>
          © {new Date().getFullYear()} Fenrir Power Limited. High-Voltage Safety, Commissioning & Control.
        </p>
      </section>

    </div>
  );
}
