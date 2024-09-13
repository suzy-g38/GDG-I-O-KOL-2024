import React from "react";
import ReactLogo from "../components/ReactLogo";

function CoverageExample() {
  const [showLogo, setShowLogo] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: "2rem"
      }}
    >
      <label style={{ marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={showLogo}
          onChange={e => setShowLogo(e.target.checked)}
        />
        {"React is Awsome"}
      </label>
      <div style={{ width: 400, height: 400 }}>
        {showLogo ? <ReactLogo /> : null}
      </div>
    </div>
  );
}

export default CoverageExample;
