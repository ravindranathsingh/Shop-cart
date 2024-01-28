import React from 'react'
import "../styles/Privacy.css"

export function Privacy() {
  return (
    <div className="main-section">
        <h1 className="text-center about-heading">Policy Privacy</h1>
        <div className="card-policy">
          <div className="card-left">
            <ul>
              <li>Getting Started</li>
              <li>Overview</li>
            </ul>
            <ul>
              <li>Privacy</li>
              <li>ShopCart private policy</li>
              <li>Policy FAQ</li>
            </ul>
            <ul>
              <li>Data Request</li>
              <li>Data request policy</li>
              <li>Data request overview</li>
              <li>Transparency report</li>
            </ul>
            <ul>
              <li>Compliance</li>
              <li>Cookie policy</li>
              <li>ShopCart's GDPR commitment</li>
              <li>
                California consumer privacy act
                <br />
                (CCPA) FAQ
              </li>
              <li>CCPA metric disclosure</li>
            </ul>
          </div>
          <div className="card-right">
            <section className="policy-text">
              <h5>Effective date: 14th January 2024</h5>
              <p>
                This Privacy Policy describes how ShopCart collects, uses and
                discloses information and what choices you have with respect to
                the information.
              </p>
              <p>
                When we refer to "ShopCart", we mean the ShopCart entity that acts as
                the controller or processor of your information, as explained in
                more detail in the "Identifying the Data Controller and
                Processor" section below.
              </p>
            </section>
            <section className="policy-table">
              
              <ul className="policy-table">
              <li>Table of contents:</li>
                <li>Applicability of this Privacy Policy</li>
                <li>Information we collect and receive</li>
                <li>How we use information</li>
                <li>Data retention</li>
                <li>How we share and disclose information</li>
                <li>Security</li>
                <li> Age limitations</li>
                <li> Changes to this Privacy Policy</li>
                <li>International data transfers</li>
                <li> Data Protection Officer</li>
                <li> Identifying the Data Controller and Processor</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
  )
}

export default Privacy