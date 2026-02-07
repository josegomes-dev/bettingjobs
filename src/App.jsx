import { Users, Globe, Shield, MapPin, Building2, Clock } from "lucide-react";

function App() {
  return (
    <div style={{ fontFamily: "system-ui", lineHeight: 1.6 }}>
      
      {/* Hero */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1>
          Betting & iGaming Jobs <br />
          <span style={{ color: "#0d9488" }}>in the Netherlands</span>
        </h1>
        <p style={{ maxWidth: 600, margin: "1rem auto" }}>
          Connecting Dutch talent with licensed betting and iGaming companies
          in the Netherlands and Malta.
        </p>
      </section>

      {/* Value props */}
      <section style={{ padding: "3rem 2rem" }}>
        <h2 style={{ textAlign: "center" }}>Why Choose BettingJobs.nl?</h2>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>
          <div>
            <Users />
            <h3>Dutch-Speaking Talent Pool</h3>
            <p>Qualified professionals with Dutch language skills.</p>
          </div>

          <div>
            <Globe />
            <h3>NL & Malta Focus</h3>
            <p>Specialized in key European iGaming hubs.</p>
          </div>

          <div>
            <Shield />
            <h3>Regulated Market Expertise</h3>
            <p>Focus on licensed operators and compliance.</p>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section style={{ padding: "3rem 2rem", background: "#f8fafc" }}>
        <h2 style={{ textAlign: "center" }}>Featured Opportunities</h2>

        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>
          <div>
            <h3>Compliance Officer</h3>
            <p><Building2 /> Leading NL Operator</p>
            <p><MapPin /> Amsterdam, NL</p>
            <p><Clock /> Full-time</p>
          </div>

          <div>
            <h3>CRM Manager</h3>
            <p><Building2 /> iGaming Scale-up</p>
            <p><MapPin /> Malta</p>
            <p><Clock /> Full-time</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
