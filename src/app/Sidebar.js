"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Add, LockClock, MoreVert } from "@mui/icons-material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HelpIcon from "@mui/icons-material/Help";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import SettingsIcon from "@mui/icons-material/Settings";
import ScheduleIcon from "@mui/icons-material/Schedule";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  backgroundColor: "#11314",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#131314" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Gemini
          </Typography>
        </Toolbar>
      </AppBar>

      {!isSmallerScreen && (
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#1E1F20",
              overflowY: "auto", // Enable vertical scrolling
              "&::-webkit-scrollbar": {
                width: "5px", // width of the scrollbar
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#333333", // color of the track
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#93A8B4", // color of the scrollbar
                borderRadius: "4px", // roundness of the scrollbar thumb
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#93A8B4",
              },
            },
          }}
        >
          <DrawerHeader>
            <MenuIcon onClick={handleDrawerClose} sx={{ color: "#ffffff" }} />
          </DrawerHeader>
          <Divider />
          <List
            sx={{
              color: "#ffffff",
              fontFamily: "Roboto",
              fontSize: "2rem",
              mt: "20%",
            }}
          >
            {[{ text: "New Chat", icon: <Add /> }].map((item) => (
              <>
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      marginBottom: 3,
                      backgroundColor: "#1A1A1C",
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor: "#1A1A1C",
                        borderRadius: "20px",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#666565" }}>
                      {item.icon}
                    </ListItemIcon>
                    {open && (
                      <ListItemText
                        primary={item.text}
                        style={{
                          color: "#666565",
                          fontFamily: "Roboto",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              </>
            ))}
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: "center",
                    color: "#ffffff",
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginLeft: open ? "auto" : "40%",
                    "&:hover": {
                      backgroundColor: "#50535D",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    <ScheduleIcon />
                  </ListItemIcon>
                  {open && <ListItemText primary="Recent Item" />}
                </ListItemButton>
              </ListItem>
            </List>
          </List>
          <List sx={{ marginTop: "auto", color: "#ffffff" }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "12px",
                  marginLeft: open ? "auto" : "40%",
                  "&:hover": {
                    backgroundColor: "#50535D",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  <HelpIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Help" />}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  color: "#ffffff",

                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "12px",
                  marginLeft: open ? "auto" : "40%",
                  "&:hover": {
                    backgroundColor: "#50535D",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  <LockClock />
                </ListItemIcon>
                {open && <ListItemText primary="Activity" />}
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  fontSize: "12px",

                  marginLeft: open ? "auto" : "40%",
                  "&:hover": {
                    backgroundColor: "#50535D",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  <SettingsIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Setting" />}
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,

                  justifyContent: "center",
                  color: "#ffffff",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  // fontSize: "7px",
                  marginLeft: open ? "auto" : "40%",
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  <StarBorderIcon />
                </ListItemIcon>
                {open && <ListItemText primary="Upgrade  Advanced" />}
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
