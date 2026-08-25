import { ImageResponse } from "next/og";

export const alt = "Webble — Vi skapar hemsidor för framtiden";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#2c2c2b",
          padding: 72,
          borderBottom: "16px solid #dd0001",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, letterSpacing: 6 }}>
          <span>WEBBLE</span>
          <span style={{ width: 14, height: 14, background: "#dd0001", borderRadius: 14 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, letterSpacing: 2, textTransform: "uppercase" }}>
            Vi skapar hemsidor för framtiden
          </div>
          <div style={{ fontSize: 28, color: "#5c5c5b", maxWidth: 820 }}>
            Serverrenderat. Redigerbart. Byggt för att sälja — utan att ni blir utvecklare.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#818181" }}>
          <span>webble.se</span>
          <span>Sverige · Italien · globalt</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
