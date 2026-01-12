export default function Home() {
  return (
    <main style={{ fontFamily: "'Inter', 'Segoe UI', Roboto, Arial, sans-serif", lineHeight: 1.6, color: "#1f2937", backgroundColor: "#fff" }}>
      
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #8aa4ea 0%, #3b82f6 100%)",
          color: "#fff",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "24px", letterSpacing: "-0.025em" }}>
          Memorial Transportation LLC
        </h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "0 auto", opacity: 0.9, fontWeight: "400" }}>
          Your Trusted Partner in Nationwide Freight Solutions. Reliable, efficient, and committed to delivering excellence across the United States.
        </p>
      </section>

      {/* About Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh", // Increased height to allow for vertical centering
          padding: "100px 20px",
          backgroundColor: "#f8fafc",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px", color: "#1e3a8a" }}>About Us</h2>
          <p style={{ fontSize: "1.25rem", color: "#4b5563", marginBottom: "20px" }}>
            Memorial Transportation LLC is a premier trucking company built on the pillars of <strong>reliability, professionalism, and integrity</strong>. 
          </p>
          <p style={{ fontSize: "1.25rem", color: "#4b5563" }}>
            Our dedicated team works tirelessly to provide outstanding customer service, ensuring your freight needs are met with precision and care. We don't just move cargo; we move your business forward.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "50px", color: "#1e3a8a" }}>
          Our Specialized Services
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          maxWidth: "1100px", 
          margin: "0 auto" 
        }}>
          <div style={{ padding: "40px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🚛</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>Regional & Long-Haul</h3>
            <p style={{ color: "#6b7280" }}>Comprehensive freight solutions covering short and extensive distances with guaranteed safety.</p>
          </div>
          <div style={{ padding: "40px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📦</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>Dedicated Contract Loads</h3>
            <p style={{ color: "#6b7280" }}>Tailored logistics partnerships providing exclusive resources for your consistent shipping needs.</p>
          </div>
          <div style={{ padding: "40px", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "20px" }}>📍</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>Real-Time Tracking</h3>
            <p style={{ color: "#6b7280" }}>Advanced monitoring capabilities offering full visibility and peace of mind for every shipment.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#1e3a8a",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "40px" }}>Get In Touch</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "1.25rem" }}>
          <p>📞 <strong>Phone:</strong> (470) 546-9468</p>
          <p>✉️ <strong>Email:</strong> info@memorialtransportation.com</p>
          <p>📍 <strong>Location:</strong> Georgia, USA</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          backgroundColor: "#0f172a",
          color: "#94a3b8",
          fontSize: "0.875rem"
        }}
      >
        © {new Date().getFullYear()} Memorial Transportation LLC. All rights reserved.
      </footer>
    </main>
  );
}