import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import viscrowLogo from "../assets/viscrowLogo.png";

const pages = [
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Solutions" }, // no direct path
  { name: "AI Scribe Product", path: "/ai-scribe-product" },
  { name: "ROI Calculator", path: "/roi-calculator" },
];

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleSolutionsHover = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const drawer = (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "background.paper",
        color: "text.primary",
        height: "100%",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 2,
          gap: 1,
        }}
      >
        <Box
          component={NavLink}
          to="/"
          sx={{ textDecoration: "none", display: "inline-flex", gap: 1 }}
        >
          <Box component="img" src={viscrowLogo} alt="Viscrow Logo" sx={{ width: 40 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "Merriweather, serif",
              color: "primary.main",
            }}
          >
            Viscrow Health
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            transition: "filter 0.2s ease",
            "&:hover": {
              filter: "brightness(0.8)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton onClick={() => page.path && navigate(page.path)}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ m: 2 }} />
      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          component={NavLink}
          to="/contact"
          fullWidth
          sx={{
            mb: 1,
            fontWeight: 500,
            fontSize: "0.95rem",
            textTransform: "none",
          }}
        >
          Contact Us
        </Button>
        <Button
          component="a"
          variant="outlined"
          href={import.meta.env.VITE_APP_URL}
          target="_blank"
          fullWidth
          sx={{
            mb: 1,
            fontWeight: 500,
            fontSize: "0.95rem",
            textTransform: "none",
          }}
        >
          Login
        </Button>
        <Button
          component="a"
          href={import.meta.env.VITE_APP_URL + "/signup"}
          target="_blank"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            fontWeight: 500,
            fontSize: "0.95rem",
            textTransform: "none",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                flex: { xs: 1, md: "none" },
                alignItems: "center",
                gap: 1,
                fontFamily: "Merriweather, serif",
                fontWeight: 700,
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              <Box component="img" src={viscrowLogo} alt="Viscrow Logo" sx={{ width: 50 }} />
              Viscrow Health
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => {
                if (page.name === "Solutions") {
                  return (
                    <Box key="Solutions" onMouseLeave={handleClose}>
                      <Button
                        onMouseEnter={handleSolutionsHover}
                        sx={{
                          my: 2,
                          display: "block",
                          fontWeight: 500,
                          fontSize: "0.95rem",
                          textTransform: "none",
                          transition: "filter 0.2s ease, color 0.2s ease",
                          "&:hover": {
                            color: "primary.main",
                            filter: "brightness(0.85)",
                          },
                        }}
                      >
                        Solutions
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                        sx={{
                          mt: 1,
                          "& .MuiPaper-root": {
                            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.07)",
                            borderRadius: 2,
                            minWidth: 220,
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            navigate("/medical-billing-solutions");
                          }}
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            px: 3,
                            py: 1.5,
                            color: "text.primary",
                            transition: "background-color 0.2s ease",
                            "&:hover": {
                              backgroundColor: "#f0f0f0",
                              color: "primary.main",
                            },
                          }}
                        >
                          Medical Billing Solutions
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            handleClose();
                            navigate("/solutions");
                          }}
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            px: 3,
                            py: 1.5,
                            color: "text.primary",
                            transition: "background-color 0.2s ease",
                            "&:hover": {
                              backgroundColor: "#f0f0f0",
                              color: "primary.main",
                            },
                          }}
                        >
                          AI Scribe Solution
                        </MenuItem>
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Button
                    key={page.name}
                    onClick={() => {
                      if (page.path) navigate(page.path);
                    }}
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      textTransform: "none",
                      transition: "filter 0.2s ease, color 0.2s ease",
                      "&:hover": {
                        color: "primary.main",
                        filter: "brightness(0.85)",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Box>

            <Box
              sx={{ flexGrow: 0 }}
              gap={2}
              display={{ xs: "none", md: "flex" }}
            >
              <Button
                component={NavLink}
                to="/contact"
                color="primary"
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  transition: "filter 0.2s ease",
                  "&:hover": {
                    filter: "brightness(0.85)",
                  },
                }}
              >
                Contact Us
              </Button>
              <Button
                component="a"
                href={import.meta.env.VITE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  transition: "filter 0.2s ease",
                  "&:hover": {
                    filter: "brightness(0.85)",
                  },
                }}
              >
                Login
              </Button>
              <Button
                component="a"
                href={import.meta.env.VITE_APP_URL + "/signup"}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  transition: "filter 0.2s ease",
                  "&:hover": {
                    filter: "brightness(0.85)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleDrawerToggle}
                sx={{
                  transition: "filter 0.2s ease",
                  "&:hover": {
                    filter: "brightness(0.8)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
