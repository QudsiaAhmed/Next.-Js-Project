import { Typography } from "@mui/material";

export default function Privacypolicy() {
  return (
    <Typography
      sx={{
        mt: ["10%", ".9%"],
        ml: ["3%", "35%"],

        fontSize: "12px",
      }}
    >
      Gemini may display inaccurate info, including about people, so
      double-check its responses.
      <span style={{ textDecoration: "underline" }}>
        Your privacy & Gemini Apps
      </span>
    </Typography>
  );
}
