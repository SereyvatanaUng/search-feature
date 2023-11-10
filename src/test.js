import CloseIcon from "@mui/icons-material/Close";
<Toolbar>
  <CloseIcon
    color="inherit"
    aria-label="close drawer"
    edge="end"
    onClick={handleDrawerToggle}
    sx={{ ml: 22, display: { sm: "none" } }}
  ></CloseIcon>
</Toolbar>;
