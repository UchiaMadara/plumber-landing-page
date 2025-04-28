import React, { useState } from "react";

const QuoteCalculator = () => {
  const [service, setService] = useState("");
  const [urgency, setUrgency] = useState("");
  const [quote, setQuote] = useState(null);

  const calculateQuote = () => {
    let basePrice = 0;

    switch (service) {
      case "leak":
        basePrice = 80;
        break;
      case "boiler":
        basePrice = 350;
        break;
      case "bathroom":
        basePrice = 1200;
        break;
      case "emergency":
        basePrice = 150;
        break;
      default:
        basePrice = 0;
    }

    if (urgency === "today") {
      basePrice *= 1.3; // +30% for emergency
    } else if (urgency === "3days") {
      basePrice *= 1.1; // +10% if urgent but not immediate
    }

    setQuote(Math.round(basePrice));
  };

  return (
    <section>
      <h2>Get a Quick Plumbing Quote</h2>

      <label>Select Service:</label>
      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="">-- Choose a service --</option>
        <option value="leak">Leak Repair</option>
        <option value="boiler">Boiler Installation</option>
        <option value="bathroom">Bathroom Plumbing</option>
        <option value="emergency">Emergency Callout</option>
      </select>

      <label>How soon do you need it?</label>
      <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
        <option value="">-- Choose urgency --</option>
        <option value="today">Today</option>
        <option value="3days">Within 3 Days</option>
        <option value="7days">Within 7 Days</option>
      </select>

      <button onClick={calculateQuote} className="button">
        Calculate Quote
      </button>

      {quote !== null && (
        <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
          <strong>Estimated Price: £{quote}</strong>
          <br />
          <a
            href="tel:0123456789"
            className="button"
            style={{ marginTop: "10px" }}
          >
            Call Now to Confirm
          </a>
        </div>
      )}
    </section>
  );
};

export default QuoteCalculator;
