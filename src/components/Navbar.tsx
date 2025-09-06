import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { NavLink, useNavigate } from "react-router-dom";
import viscrowLogo from "../assets/viscrowLogo.png";

const pages = [
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Solutions" },
  { name: "Resources" },
  { name: "AI Scribe Product", path: "/ai-scribe-product" },
];

function Navbar() {
  const navigate = useNavigate();

  // mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((v) => !v);

  // Solutions dropdown
  const [solutionsEl, setSolutionsEl] = useState<null | HTMLElement>(null);
  const solutionsOpen = Boolean(solutionsEl);
  const handleSolutionsHover = (e: React.MouseEvent<HTMLElement>) => setSolutionsEl(e.currentTarget);
  const closeSolutions = () => setSolutionsEl(null);

  // Resources dropdown
  const [resourcesEl, setResourcesEl] = useState<null | HTMLElement>(null);
  const resourcesOpen = Boolean(resourcesEl);
  const openResources = (e: React.MouseEvent<HTMLElement>) => setResourcesEl(e.currentTarget);
  const closeResources = () => setResourcesEl(null);

  // Enhanced mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: "100vw",
        bgcolor: "background.paper",
        color: "text.primary",
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      }}
      role="presentation"
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          py: 2.5,
          background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
          color: "white",
        }}
      >
        <Box
          component={NavLink}
          to="/"
          sx={{ 
            textDecoration: "none", 
            display: "inline-flex", 
            gap: 1.5,
            alignItems: "center",
          }}
          onClick={handleDrawerToggle}
        >
          <Box 
            component="img" 
            src={viscrowLogo} 
            alt="Viscrow Logo" 
            sx={{ 
              width: 45,
              filter: "brightness(0) invert(1)",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "scale(1.05)" }
            }} 
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontFamily: "Merriweather, serif",
              color: "white",
              fontSize: "1.1rem"
            }}
          >
            Viscrow Health
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "white",
            transition: "all 0.2s ease",
            "&:hover": { 
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "rotate(90deg)"
            },
          }}
          aria-label="Close menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ pt: 2 }}>
        {pages.map((page, index) => (
          <Slide key={page.name} direction="right" in timeout={300 + index * 100}>
            <ListItem disablePadding sx={{ mx: 2, mb: 1 }}>
              <ListItemButton 
                onClick={() => page.path && navigate(page.path)}
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    backgroundColor: "primary.light",
                    color: "white",
                    transform: "translateX(8px)",
                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)"
                  },
                }}
              >
                <ListItemText 
                  primary={page.name}
                  sx={{ 
                    "& .MuiListItemText-primary": {
                      fontWeight: 500,
                      fontSize: "1rem"
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Slide>
        ))}

        {/* Solutions submenu */}
        <Box sx={{ mx: 2, mt: 2 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "text.secondary", 
              fontWeight: 600,
              px: 2,
              mb: 1,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: 1
            }}
          >
            Solutions
          </Typography>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => navigate("/medical-billing-solutions")}
              sx={{
                borderRadius: 2,
                py: 1.2,
                pl: 3,
                transition: "all 0.2s ease",
                "&:hover": { 
                  backgroundColor: "secondary.light",
                  color: "white",
                  transform: "translateX(8px)"
                },
              }}
            >
              <ListItemText primary="Medical Billing Solutions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => navigate("/solutions")}
              sx={{
                borderRadius: 2,
                py: 1.2,
                pl: 3,
                transition: "all 0.2s ease",
                "&:hover": { 
                  backgroundColor: "secondary.light",
                  color: "white",
                  transform: "translateX(8px)"
                },
              }}
            >
              <ListItemText primary="AI Scribe Solution" />
            </ListItemButton>
          </ListItem>
        </Box>

        {/* Resources submenu */}
        <Box sx={{ mx: 2, mt: 2 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "text.secondary", 
              fontWeight: 600,
              px: 2,
              mb: 1,
              textTransform: "uppercase",
              fontSize: "0.75rem",
              letterSpacing: 1
            }}
          >
            Resources
          </Typography>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => navigate("/blog")}
              sx={{
                borderRadius: 2,
                py: 1.2,
                pl: 3,
                transition: "all 0.2s ease",
                "&:hover": { 
                  backgroundColor: "secondary.light",
                  color: "white",
                  transform: "translateX(8px)"
                },
              }}
            >
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => navigate("/roi-calculator")}
              sx={{
                borderRadius: 2,
                py: 1.2,
                pl: 3,
                transition: "all 0.2s ease",
                "&:hover": { 
                  backgroundColor: "secondary.light",
                  color: "white",
                  transform: "translateX(8px)"
                },
              }}
            >
              <ListItemText primary="ROI Calculator" />
            </ListItemButton>
          </ListItem>
        </Box>
      </List>

      {/* Call-to-actions */}
      <Box sx={{ px: 3, mt: 4 }}>
        <Button
          component={NavLink}
          to="/contact"
          fullWidth
          sx={{ 
            mb: 2, 
            fontWeight: 600, 
            fontSize: "1rem", 
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            transition: "all 0.2s ease",
            "&:hover": { 
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }
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
            mb: 2, 
            fontWeight: 600, 
            fontSize: "1rem", 
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            borderWidth: 2,
            transition: "all 0.2s ease",
            "&:hover": { 
              borderWidth: 2,
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)"
            }
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
            fontWeight: 600, 
            fontSize: "1rem", 
            textTransform: "none",
            py: 1.5,
            borderRadius: 2,
            background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
            transition: "all 0.2s ease",
            "&:hover": { 
              background: "linear-gradient(45deg, #1565c0 30%, #1976d2 90%)",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(25, 118, 210, 0.4)"
            }
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
          bgcolor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: "70px" }}>
            {/* Enhanced brand for mobile */}
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
                gap: 1.5,
                fontFamily: "Merriweather, serif",
                fontWeight: 700,
                textDecoration: "none",
                color: "primary.main",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.02)" }
              }}
            >
              <Box 
                component="img" 
                src={viscrowLogo} 
                alt="Viscrow Logo" 
                sx={{ 
                  width: 50,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "rotate(5deg)" }
                }} 
              />
              Viscrow Health
            </Typography>

            {/* Enhanced desktop nav */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {pages.map((page) => {
                if (page.name === "Solutions") {
                  return (
                    <Box key="Solutions" onMouseLeave={closeSolutions}>
                      <Button
                        onMouseEnter={handleSolutionsHover}
                        sx={{
                          my: 2,
                          mx: 0.25,
                          px: 1.5,
                          py: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          fontWeight: 500,
                          fontSize: "0.95rem",
                          textTransform: "none",
                          borderRadius: 2,
                          position: "relative",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": { 
                            color: "primary.main",
                            backgroundColor: "rgba(25, 118, 210, 0.04)",
                            transform: "translateY(-1px)"
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            bottom: "-1px",
                            left: "50%",
                            background: "linear-gradient(90deg, rgba(25, 118, 210, 0.6), rgba(66, 165, 245, 0.4), rgba(25, 118, 210, 0.6))",
                            borderRadius: "1px",
                            transition: "all 0.3s ease-out",
                            transform: "translateX(-50%)",
                            opacity: 0
                          },
                          "&:hover::after": {
                            width: "75%",
                            opacity: 1
                          },
                          ...(solutionsOpen && {
                            color: "primary.main",
                            backgroundColor: "rgba(25, 118, 210, 0.02)",
                            "&::after": {
                              width: "75%",
                              opacity: 1
                            }
                          })
                        }}
                      >
                        Solutions
                        <KeyboardArrowDownIcon 
                          sx={{ 
                            fontSize: "16px",
                            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)"
                          }} 
                        />
                      </Button>
                      <Menu
                        anchorEl={solutionsEl}
                        open={solutionsOpen}
                        onClose={closeSolutions}
                        TransitionComponent={Fade}
                        MenuListProps={{ onMouseLeave: closeSolutions }}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                        sx={{
                          mt: 0.5,
                          "& .MuiPaper-root": {
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                            borderRadius: 2,
                            minWidth: 200,
                            border: "1px solid",
                            borderColor: "rgba(0, 0, 0, 0.06)",
                            overflow: "visible",
                            background: "rgba(255, 255, 255, 0.98)",
                            backdropFilter: "blur(8px)",
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              left: 16,
                              width: 8,
                              height: 8,
                              background: "rgba(255, 255, 255, 0.98)",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                              border: "1px solid rgba(0, 0, 0, 0.06)",
                              borderBottom: "none",
                              borderRight: "none"
                            },
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            closeSolutions();
                            navigate("/medical-billing-solutions");
                          }}
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            px: 2,
                            py: 1.2,
                            color: "text.primary",
                            transition: "all 0.2s ease",
                            borderRadius: "6px",
                            mx: 0.5,
                            my: 0.25,
                            "&:hover": { 
                              backgroundColor: "rgba(25, 118, 210, 0.08)",
                              color: "primary.main",
                              transform: "translateX(2px)"
                            },
                          }}
                        >
                          Medical Billing Solutions
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            closeSolutions();
                            navigate("/solutions");
                          }}
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            px: 2,
                            py: 1.2,
                            color: "text.primary",
                            transition: "all 0.2s ease",
                            borderRadius: "6px",
                            mx: 0.5,
                            my: 0.25,
                            "&:hover": { 
                              backgroundColor: "rgba(25, 118, 210, 0.08)",
                              color: "primary.main",
                              transform: "translateX(2px)"
                            },
                          }}
                        >
                          AI Scribe Solution
                        </MenuItem>
                      </Menu>
                    </Box>
                  );
                }

                if (page.name === "Resources") {
                  return (
                    <Box key="Resources" onMouseLeave={closeResources}>
                      <Button
                        onMouseEnter={openResources}
                        sx={{
                          my: 2,
                          mx: 0.25,
                          px: 1.5,
                          py: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          fontWeight: 500,
                          fontSize: "0.95rem",
                          textTransform: "none",
                          borderRadius: 2,
                          position: "relative",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": { 
                            color: "primary.main",
                            backgroundColor: "rgba(25, 118, 210, 0.04)",
                            transform: "translateY(-1px)"
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: "0%",
                            height: "2px",
                            bottom: "-1px",
                            left: "50%",
                            background: "linear-gradient(90deg, rgba(25, 118, 210, 0.6), rgba(66, 165, 245, 0.4), rgba(25, 118, 210, 0.6))",
                            borderRadius: "1px",
                            transition: "all 0.3s ease-out",
                            transform: "translateX(-50%)",
                            opacity: 0
                          },
                          "&:hover::after": {
                            width: "75%",
                            opacity: 1
                          },
                          ...(resourcesOpen && {
                            color: "primary.main",
                            backgroundColor: "rgba(25, 118, 210, 0.02)",
                            "&::after": {
                              width: "75%",
                              opacity: 1
                            }
                          })
                        }}
                      >
                        Resources
                        <KeyboardArrowDownIcon 
                          sx={{ 
                            fontSize: "16px",
                            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)"
                          }} 
                        />
                      </Button>
                      <Menu
                        anchorEl={resourcesEl}
                        open={resourcesOpen}
                        onClose={closeResources}
                        TransitionComponent={Fade}
                        MenuListProps={{ onMouseLeave: closeResources }}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                        sx={{
                          mt: 0.5,
                          "& .MuiPaper-root": {
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                            borderRadius: 2,
                            minWidth: 180,
                            border: "1px solid",
                            borderColor: "rgba(0, 0, 0, 0.06)",
                            overflow: "visible",
                            background: "rgba(255, 255, 255, 0.98)",
                            backdropFilter: "blur(8px)",
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              left: 16,
                              width: 8,
                              height: 8,
                              background: "rgba(255, 255, 255, 0.98)",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                              border: "1px solid rgba(0, 0, 0, 0.06)",
                              borderBottom: "none",
                              borderRight: "none"
                            },
                          },
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            closeResources();
                            navigate("/blog");
                          }}
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            px: 2,
                            py: 1.2,
                            color: "text.primary",
                            transition: "all 0.2s ease",
                            borderRadius: "6px",
                            mx: 0.5,
                            my: 0.25,
                            "&:hover": { 
                              backgroundColor: "rgba(25, 118, 210, 0.08)",
                              color: "primary.main",
                              transform: "translateX(2px)"
                            },
                          }}
                        >
                          Blog
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            closeResources();
                            navigate("/roi-calculator");
                          }}
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            px: 2,
                            py: 1.2,
                            color: "text.primary",
                            transition: "all 0.2s ease",
                            borderRadius: "6px",
                            mx: 0.5,
                            my: 0.25,
                            "&:hover": { 
                              backgroundColor: "rgba(25, 118, 210, 0.08)",
                              color: "primary.main",
                              transform: "translateX(2px)"
                            },
                          }}
                        >
                          ROI Calculator
                        </MenuItem>
                      </Menu>
                    </Box>
                  );
                }

                // Enhanced normal buttons
                return (
                  <Button
                    key={page.name}
                    onClick={() => page.path && navigate(page.path)}
                    sx={{
                      my: 2,
                      mx: 0.25,
                      px: 1.5,
                      py: 1,
                      display: "block",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      textTransform: "none",
                      borderRadius: 2,
                      position: "relative",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": { 
                        color: "primary.main",
                        backgroundColor: "rgba(25, 118, 210, 0.04)",
                        transform: "translateY(-1px)"
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "2px",
                        bottom: "-1px",
                        left: "50%",
                        background: "linear-gradient(90deg, rgba(25, 118, 210, 0.6), rgba(66, 165, 245, 0.4), rgba(25, 118, 210, 0.6))",
                        borderRadius: "1px",
                        transition: "all 0.3s ease-out",
                        transform: "translateX(-50%)",
                        opacity: 0
                      },
                      "&:hover::after": {
                        width: "75%",
                        opacity: 1
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Box>

            {/* Enhanced right actions */}
            <Box sx={{ flexGrow: 0 }} gap={1} display={{ xs: "none", md: "flex" }}>
              <Button
                component={NavLink}
                to="/contact"
                color="primary"
                sx={{
                  my: 2,
                  px: 2,
                  py: 1,
                  display: "block",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    backgroundColor: "rgba(25, 118, 210, 0.04)",
                    transform: "translateY(-1px)"
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
                variant="outlined"
                color="primary"
                sx={{
                  my: 2,
                  px: 2,
                  py: 1,
                  display: "block",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  borderRadius: 2,
                  borderWidth: 1.5,
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    borderWidth: 1.5,
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.15)"
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
                  px: 2,
                  py: 1,
                  display: "block",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  borderRadius: 2,
                  background: "linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)",
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    background: "linear-gradient(45deg, #1565c0 30%, #1976d2 90%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(25, 118, 210, 0.3)"
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>

            {/* Enhanced mobile menu button */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleDrawerToggle}
                sx={{
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    backgroundColor: "rgba(25, 118, 210, 0.04)",
                    transform: "scale(1.05)"
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
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            transition: "transform 0.3s ease-in-out"
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;