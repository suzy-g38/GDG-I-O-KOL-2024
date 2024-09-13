import React from "react";

const ReactLogoOpti = React.lazy(() => import("../components/ReactLogoOpti"));

function CoverageExampleOpti() {
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
        <React.Suspense fallback={<div>Loading Logo...</div>}>
          {showLogo ? <ReactLogoOpti /> : null}
        </React.Suspense>
      </div>
    </div>
  );
}

export default CoverageExampleOpti;
