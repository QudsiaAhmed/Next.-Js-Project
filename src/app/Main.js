import { Typography, Grid } from "@mui/material";
import Boxes from "./Boxes";
import Inputfeild from "./Inputfeild";
import Privacypolicy from "./Privacypolicy";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Main() {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          ml: ["3%", "22.5%"],
          mt: "2%",
          fontWeight: "500",
          fontSize: ["2.5rem", "3.5rem"],
          fontFamily: "Google Sans, Helvetica Neue, sans-serif",
          backgroundImage: "linear-gradient(to right, #ff6b6b, #1098ad)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hello, Qudsia
      </Typography>

      <Typography
        sx={{
          display: "flex",
          fontSize: ["2.5rem", "3.5rem"],
          fontWeight: "500",
          mt: ".2%",
          ml: ["3%", "22.5%"],
          color: "#444746",
          fontFamily: "Google Sans,Helvetica Neue,sans-serif",
        }}
      >
        How can I help you today?
      </Typography>

      <Boxes />
      <Inputfeild />
      <Privacypolicy />
    </>
  );
}
