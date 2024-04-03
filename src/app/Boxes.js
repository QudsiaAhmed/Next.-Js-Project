import { Grid, Box } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EditIcon from "@mui/icons-material/Edit";

export default function Boxes() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ml: "auto", // Center items on medium screens
        mr: "auto", // Center items on medium screens
        mt: ["2%", "3.5%"], // Adjusted margin top for responsiveness
      }}
    >
      <Grid item xs={6} sm={1.7}>
        <Box
          bgcolor="#1E1F20"
          p={2}
          sx={{
            height: "25vh",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "Google Sans,Helvetica Neue,sans-serif",
            letterSpacing: "normal",
            lineHeight: "1.375rem",
            position: "relative",
            "&:hover": {
              backgroundColor: "#444746",
            },
          }}
        >
          <Box
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#131314",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LightbulbIcon
              sx={{
                fontSize: 25,
                color: "white",
              }}
            />
          </Box>
          Help explain a concept in a kid-friendly way
        </Box>
      </Grid>

      <Grid item xs={6} sm={1.7}>
        <Box
          bgcolor="#1E1F20"
          p={2}
          sx={{
            height: "25vh",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "Google Sans,Helvetica Neue,sans-serif",
            letterSpacing: "normal",
            lineHeight: "1.375rem",
            position: "relative",
            "&:hover": {
              backgroundColor: "#444746",
            },
          }}
        >
          <Box
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#131314",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EditIcon
              sx={{
                fontSize: 25,
                color: "white",
              }}
            />
          </Box>
          Give me a beginner's guide to an activity
        </Box>
      </Grid>
      <Grid item xs={6} sm={1.7}>
        <Box
          bgcolor="#1E1F20"
          p={2}
          sx={{
            height: "25vh",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "Google Sans,Helvetica Neue,sans-serif",
            letterSpacing: "normal",
            lineHeight: "1.375rem",
            position: "relative",
            "&:hover": {
              backgroundColor: "#444746",
            },
          }}
        >
          <Box
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#131314",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LightbulbIcon
              sx={{
                fontSize: 25,
                color: "white",
              }}
            />
          </Box>
          Briefly summarize this concept: urban planning
        </Box>
      </Grid>
      <Grid item xs={6} sm={1.7}>
        <Box
          bgcolor="#1E1F20"
          p={2}
          sx={{
            height: "25vh",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "Google Sans,Helvetica Neue,sans-serif",
            letterSpacing: "normal",
            lineHeight: "1.375rem",
            position: "relative",
            "&:hover": {
              backgroundColor: "#444746",
            },
          }}
        >
          <Box
            style={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#131314",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EditIcon
              sx={{
                fontSize: 25,
                color: "white",
              }}
            />
          </Box>
          Help me craft an OOO message based on a few details
        </Box>
      </Grid>
    </Grid>
  );
}
