import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
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
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          position: "relative",
        }}
      >
        {/* Brand 'C' Monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: "system-ui, -apple-system, sans-serif",
            lineHeight: 1,
            marginTop: -2,
          }}
        >
          C
        </div>

        {/* Brand underline accent bar matching logo.tsx */}
        <div
          style={{
            display: "flex",
            width: 14,
            height: 2.5,
            backgroundColor: "#22c55e",
            borderRadius: 2,
            marginTop: 2,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
