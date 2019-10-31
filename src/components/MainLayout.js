import React, { Component } from "react";

export default function MainLayout() {
  return (
    <main>
      <div className="main-layout-body full-height-minus-nav">
        <div className="div-columna-foto-columna full-height-minus-nav">
          <div style={{ backgroundColor: "red", width: "30%" }}></div>
          <div
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              width: "70%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "center",
                  fontWeight: 490,
                  fontSize: "50px",
                  marginBottom: 0
                }}
              >
                One of a Kind.
              </h2>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeigth: "100%"
                }}
                src="http://www.bac-mono.com/images/galleries/3/images/03_studio_956x540.jpg"
                alt="Bac Mono"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
