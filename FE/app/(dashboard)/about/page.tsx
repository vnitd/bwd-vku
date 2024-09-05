import React from "react";
import { title } from "@/components/primitives";
import "../../public/style/about.css"; // Import CSS file specific for the About page

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className={title({ class: "about-title" })}>About Us</h1>
      <p className="about-description">
        Welcome to our website! We are a passionate team dedicated to creating
        beautiful and functional web experiences. Our mission is to provide
        exceptional service and innovative solutions to our clients.
      </p>
      <div className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-members">
          {/* Replace with your team member data */}
          <div className="team-member">
            <img
              src="../../public/image/mem1.png"
              alt="Member 1"
              className="team-image"
            />
            <h3 className="team-member-name">John Doe</h3>
            <p className="team-member-role">CEO</p>
          </div>
          <div className="team-member">
            <img
              src="../../public/image/mem1.png"
              alt="Member 2"
              className="team-image"
            />
            <h3 className="team-member-name">Jane Smith</h3>
            <p className="team-member-role">CTO</p>
          </div>
          <div className="team-member">
            <img
              src="../../public/image/mem1.png"
              alt="Member 3"
              className="team-image"
            />
            <h3 className="team-member-name">Alice Johnson</h3>
            <p className="team-member-role">Designer</p>
          </div>
          <div className="team-member">
            <img
              src="../../public/image/mem1.png"
              alt="Member 4"
              className="team-image"
            />
            <h3 className="team-member-name">Bob Brown</h3>
            <p className="team-member-role">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
