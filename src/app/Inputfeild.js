import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MicIcon from "@mui/icons-material/Mic";
import GalleryIcon from "@mui/icons-material/InsertPhoto";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";

export default function InputField() {
  return (
    <TextField
      placeholder="Enter a prompt here"
      sx={{
        color: "#ffffff",
        ml: ["3%", "23%"],
        mt: "10.5%",
        width: ["85%", "56%"], // Set width to 90% on small screens
      }}
      style={{
        borderRadius: 32,
        backgroundColor: "#1E1F20",
      }}
      InputProps={{
        style: {
          color: "#ffffff",
          borderRadius: 32,
        },
        endAdornment: (
          <InputAdornment position="end">
            <MicIcon style={{ color: "white", marginRight: 20 }} />
            <GalleryIcon style={{ color: "white", marginRight: 20 }} />
            <SendIcon style={{ color: "white" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
