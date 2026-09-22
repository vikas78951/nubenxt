import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Apple touch icon generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          borderRadius: 36,
          border: "2px solid rgba(255, 255, 255, 0.12)",
          position: "relative",
        }}
      >
        {/* Brand 'C' Monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 98,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1,
            marginTop: -8,
          }}
        >
          C
        </div>

        {/* Brand underline accent bar matching logo.tsx */}
        <div
          style={{
            display: "flex",
            width: 70,
            height: 12,
            backgroundColor: "#22c55e",
            borderRadius: 8,
            marginTop: 8,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
