import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gonzalo Viladomiu — Technology Manager at PUIG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF9",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6B6B6B",
            fontWeight: 500,
          }}
        >
          <span>Technology Manager · PUIG</span>
          <span style={{ color: "#2596BE" }}>● Barcelona</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.02,
              color: "#0A0A0A",
            }}
          >
            Gonzalo Viladomiu.
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#6B6B6B",
              maxWidth: 940,
            }}
          >
            Consumer engagement, data and AI.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#6B6B6B",
            fontWeight: 500,
          }}
        >
          <span>gonzaloviladomiu.com</span>
          <span>Building toward CIO</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
