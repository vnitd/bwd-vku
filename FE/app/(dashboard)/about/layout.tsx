import React from "react";
import "../../public/style/about.css"; // Import CSS file specific for the About page

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="about-layout-container">
      <div className="about-content">{children}</div>
    </section>
  );
}
