import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight(props) {
  console.log(props.theme);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <CssBaseline />
      <AppBar position="fixed" open={open}> */}
      <Toolbar style={{ justifyContent: "end" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {/* </AppBar> */}
      <Main open={open}>
        <DrawerHeader />
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        PaperProps={{
          sx: {
            background: props.theme === "white" ? "white" : "black",
            color:  props.theme === "white" ? "black" : "white",
          }
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}
          
          >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon style={{color: props.theme === "white" ? "black" : "white"}} />
            ) : (
              <ChevronRightIcon  style={{color: props.theme === "white" ? "black" : "white"}} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link
            href="/authentication/auth_select"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 15,
            }}
          >
            <ListItem key={"login"} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            href="/authentication/auth_select"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 15,
            }}
          >
            <ListItem key={"signup"} disablePadding>
              <ListItemButton>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={"Signup"} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <AnchorLink
            href="#testimonial"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            <ListItem key={"Testimonials"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={"Testimonials"} />
              </ListItemButton>
            </ListItem>
          </AnchorLink>

          <AnchorLink
            href="#features"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            <ListItem key={"Features"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={"Features"} />
              </ListItemButton>
            </ListItem>
          </AnchorLink>
          <AnchorLink
            href="#pricing"
            style={{
              fontWeight: 500,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            <ListItem key={"Pricing"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={"Pricing"} />
              </ListItemButton>
            </ListItem>
          </AnchorLink>
        </List>
      </Drawer>
    </div>
  );
}
