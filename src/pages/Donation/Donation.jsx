import React from 'react';
import './Donation.css';

export default function Donation() {
  return (
    <div className="donation-container">
      <h2>Support Our Ministry</h2>

      <section className="intro">
        <h3 className="fade-in">Why Give?</h3>
        <p className="fade-in">
          Your generosity helps us continue the work God has called us to do ;
          from community outreach and youth programs to worship services and missions. 
          Every donation makes a difference and brings hope to many lives.
        </p>

        <h3 className="fade-in">Ways to Give</h3>

        <div className="donation-method fade-in">
          <h4>Bank Transfer</h4>
          <p><strong>Account Number:</strong> 9769785476</p>
          <p><strong>Sort Code:</strong> 553536</p>
          <p><strong>Account Name:</strong> city of refuge international ministries</p>

        </div>

        <div className="donation-method fade-in">
          <h4>PayPal</h4>
          <p>
            You can donate securely via PayPal using the email below:
          </p>
          <p><strong>Email:</strong> corim@gmail.com</p>
        </div>

        <div className="donation-method fade-in">
          <h4>Tithes & Offerings</h4>
          <p>
            If you'd like to give your tithe, sow a seed, or contribute a special offering, 
            please include a note with your donation so we can allocate it properly.
          </p>
        </div>

        <div className="donation-method fade-in">
          <h4>Need Help?</h4>
          <p>
            If you have questions or need help with giving, please don’t hesitate to contact us 
            at <strong>07903912594</strong> or speak to a leader after service.
          </p>
        </div>
      </section>

      <section className="footer-note fade-in">
        <p>
          Thank you for your faithfulness and generosity. May God bless you richly!
        </p>
      </section>
    </div>
  );
}
