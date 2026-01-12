export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <h1>Welcome to Memorial Transportation LLC</h1>
        <p>
          This is a Next.js website. We are building it step by step.
        </p>
      </section>

      {/* About Section */}
      <section>
        <h2>About Us</h2>
        <p>
          We are a small trucking company committed to delivering goods safely
          and on time. Our team values reliability, professionalism, and
          excellent customer service.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Regional and long-haul freight</li>
          <li>Dedicated contract loads</li>
          <li>Real-time tracking of shipments</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2>Contact Us</h2>
        <p>Phone: (470) 546-9468</p>
        <p>Email: abdiazizwebsite.com</p>
        <p>Location: Georgia, USA</p>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#1e3a8a",
        color: "#fff"
      }}>
        © {new Date().getFullYear()} Memorial Transportation LLC. All rights reserved.
      </footer>
    </main>
  );
}
