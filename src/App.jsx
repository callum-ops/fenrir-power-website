const services = [
  {
    title: "SAP & HV Safety Services",
    text: "Senior Authorised Person support, switching, isolation control, permits and safe systems of work."
  },
  {
    title: "Commissioning & Energisation",
    text: "HV commissioning, energisation readiness, test packs, operational reviews and site acceptance support."
  },
  {
    title: "Control Engineer Support",
    text: "Control-room support, switching schedules, safety document tracking, event logging and live system coordination."
  },
  {
    title: "Project Engineer Consultancy",
    text: "Technical project support across design review, construction interfaces, commissioning planning and delivery coordination."
  },
  {
    title: "Project Management Support",
    text: "Practical project management support for HV scopes, contractor coordination, programme risk and delivery control."
  },
  {
    title: "HV Documentation & Compliance",
    text: "Permit packs, energisation packs, isolation plans, commissioning records, audits and compliance documentation."
  }
];

const sectors = [
  "Onshore & Offshore Wind",
  "Solar PV",
  "Energy from Waste",
  "Grid Networks",
  "HV Substations",
  "Battery Storage",
  "Transformer Systems",
  "GIS / AIS Switchgear"
];

const values = [
  "Safety-led delivery",
  "Clear operational control",
  "Strong documentation discipline",
  "Practical site experience",
  "Project-focused execution",
  "Commercial awareness"
];

const projects = [
  ["East Anglia THREE Offshore Wind Farm", "400kV Control Engineer / Control Person"],
  ["Sofia Offshore Wind Farm", "Offshore 66kV SAP"],
  ["Baltic Eagle Offshore Wind Farm", "Offshore 66kV SAP"],
  ["Fécamp Offshore Wind Farm", "Offshore HV SAP"],
  ["Yunlin Offshore Wind Farm", "HV Supervisor / Offshore Installation Manager"],
  ["Onshore Renewable & Grid Infrastructure", "HV commissioning, energisation, SAP and project engineering support"]
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
          <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
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
          HV Safety • Commissioning • Control • Project Delivery
        </p>

        <h1 style={{
          fontSize: "clamp(44px, 6vw, 88px)",
          lineHeight: "1.02",
          letterSpacing: "1px",
          maxWidth: "1100px",
          margin: 0,
          fontWeight: "900"
        }}>
          HV SUPPORT FOR HIGH-RISK, PROJECT-CRITICAL ENVIRONMENTS
        </h1>

        <p style={{
          marginTop: "28px",
          fontSize: "clamp(17px, 1.5vw, 21px)",
          maxWidth: "860px",
          color: "#c7c7c7",
          lineHeight: "1.7"
        }}>
          Fenrir Power provides specialist SAP, control engineering, commissioning, energisation,
          project engineering and project management support for HV projects across onshore and offshore wind,
          solar, energy from waste, network infrastructure and critical power systems.
        </p>

        <div style={{
          marginTop: "40px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
          <a href="mailto:info@fenrirpower.com">
            <button style={{
              padding: "16px 30px",
              background: "#f5b642",
              color: "#111",
              border: "none",
              fontWeight: "800",
              cursor: "pointer",
              transition: "0.3s",
              borderRadius: "3px"
            }}>
              Request Availability
            </button>
          </a>

          <a href="#services">
            <button style={{
              padding: "16px 30px",
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.25)",
              fontWeight: "700",
              cursor: "pointer",
              borderRadius: "3px"
            }}>
              View Services
            </button>
          </a>
        </div>
      </section>

      {/* HIRE STRIP */}
      <section style={{
        padding: "40px 20px",
        background: "#f5b642",
        color: "#111",
        textAlign: "center",
        fontWeight: "900",
        fontSize: "18px",
        lineHeight: "1.6"
      }}>
        Available for HV SAP, Control Engineer, Commissioning, Project Engineer and Project Management support.
        <br />
        UK • Europe • Onshore • Offshore • Contract or Consultancy
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
        SAP-level HV support across onshore and offshore energy projects, substations, grid networks and critical infrastructure.
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "110px 20px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1120px", marginInline: "auto" }}>
          <p style={{
            color: "#f5b642",
            letterSpacing: "0.16em",
            fontWeight: "700",
            fontSize: "13px",
            textTransform: "uppercase"
          }}>
            What Fenrir Power Delivers
          </p>

          <h2 style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            margin: "14px 0 0",
            maxWidth: "820px",
            lineHeight: "1.1"
          }}>
            Practical HV support from planning through to energisation and operational handover.
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
                <p style={{ marginTop: "14px", color: "#bdbdbd", lineHeight: "1.65" }}>
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "110px 20px", background: "#111", boxSizing: "border-box" }}>
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
              Sector Experience
            </p>

            <h2 style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: "1.1",
              margin: "14px 0 0"
            }}>
              Built for controlled delivery across HV energy and infrastructure projects.
            </h2>

            <p style={{
              marginTop: "24px",
              color: "#c7c7c7",
              lineHeight: "1.75",
              fontSize: "18px"
            }}>
              Experience across renewable generation, grid-connected assets, substations and critical power systems —
              supporting clients from construction and commissioning through to energisation, operational readiness and handover.
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

      {/* TRUST SIGNALS */}
      <section style={{ padding: "95px 20px", background: "#0b0b0b", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: 0 }}>
          High-voltage experience that reduces project risk.
        </h2>

        <ul style={{
          marginTop: "30px",
          color: "#bbb",
          lineHeight: "1.9",
          textAlign: "left",
          maxWidth: "650px",
          marginInline: "auto",
          fontSize: "18px"
        }}>
          <li>13+ years electrical power and HV experience</li>
          <li>Senior Authorised Person level capability</li>
          <li>400kV Control Engineer / Control Person experience</li>
          <li>Onshore and offshore project delivery background</li>
          <li>Experienced in energisation, switching and Safety from the System</li>
        </ul>
      </section>

      {/* CONTROL ENGINEER */}
      <section style={{ padding: "110px 20px", background: "#111", boxSizing: "border-box" }}>
        <div style={{
          maxWidth: "1120px",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "50px",
          alignItems: "start"
        }}>
          <div>
            <p style={{
              color: "#f5b642",
              letterSpacing: "0.16em",
              fontWeight: "700",
              fontSize: "13px",
              textTransform: "uppercase"
            }}>
              Control Engineer
            </p>

            <h2 style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              lineHeight: "1.1",
              margin: "14px 0 0"
            }}>
              HV control-room support from SAP level through to 400kV operations.
            </h2>

            <p style={{
              marginTop: "24px",
              color: "#c7c7c7",
              lineHeight: "1.75",
              fontSize: "18px"
            }}>
              Fenrir Power provides control-room and operational support for high-voltage construction,
              commissioning and energisation works, including live system control, switching review,
              safety document coordination, operational interface management and project-critical event logging.
            </p>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {[
              "400kV Control Person / Control Engineer support",
              "Safety from the System coordination",
              "Switching schedule review and operational planning",
              "Permit, sanction and limitation document tracking",
              "Control room communication and event logging",
              "Contractor interface and boundary control",
              "Energisation readiness and operational risk review"
            ].map((item) => (
              <div key={item} style={{
                padding: "18px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0b0b0b",
                borderRadius: "10px",
                color: "#e7e7e7",
                fontWeight: "700"
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "110px 20px", background: "#0b0b0b", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1120px", marginInline: "auto" }}>
          <p style={{
            color: "#f5b642",
            letterSpacing: "0.16em",
            fontWeight: "700",
            fontSize: "13px",
            textTransform: "uppercase"
          }}>
            Selected Project Experience
          </p>

          <h2 style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: "1.1",
            margin: "14px 0 42px"
          }}>
            HV project experience across wind, renewables, network infrastructure and critical power systems.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px"
          }}>
            {projects.map(([project, role]) => (
              <div key={project} style={{
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px",
                background: "#111"
              }}>
                <h3 style={{ margin: 0, fontSize: "21px", color: "white" }}>
                  {project}
                </h3>

                <p style={{
                  marginTop: "12px",
                  color: "#f5b642",
                  fontWeight: "800",
                  lineHeight: "1.5"
                }}>
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section style={{ padding: "110px 20px", boxSizing: "border-box", background: "#111" }}>
        <div style={{ maxWidth: "1120px", marginInline: "auto", textAlign: "center" }}>
          <p style={{
            color: "#f5b642",
            letterSpacing: "0.16em",
            fontWeight: "700",
            fontSize: "13px",
            textTransform: "uppercase"
          }}>
            How Fenrir Power Works
          </p>

          <h2 style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            margin: "14px 0 0"
          }}>
            Safe. Structured. Controlled.
          </h2>

        <div style={{
  marginTop: "46px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "22px",
  maxWidth: "900px",
  marginInline: "auto"
}}>
            {values.map((value) => (
              <div key={value} style={{
                padding: "26px",
                background: "#0b0b0b",
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
          Available for contract, consultancy and project-based HV support.
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

        <p style={{ marginTop: "70px", color: "#666", fontSize: "14px" }}>
          © {new Date().getFullYear()} Fenrir Power Limited. HV Safety, Commissioning, Control & Project Delivery.
        </p>
      </section>

    </div>
  );
}
