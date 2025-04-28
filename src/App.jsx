import React from "react";
import "./App.css";
import QuoteCalculator from "./QuoteCalculator";

function App() {
  return (
    <>
      <section className="hero">
        <h1>24/7 Emergency Plumbing Services</h1>
        <p>Fast, Reliable Plumbing Solutions in Manchester</p>
        <a href="tel:0123456789" className="button">
          Call Now: 01234 567 890
        </a>
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <p>
          Local Manchester plumbers with over 10 years of experience. Fully
          certified, insured, and trusted by 500+ clients.
        </p>
      </section>

      <QuoteCalculator />

      <section>
        <h2>Contact Us Today</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="How can we help you?" rows="4"></textarea>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default App;
