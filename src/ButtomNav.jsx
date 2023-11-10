import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ButtomNav() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1400,
        }}
      >
        <BottomNavigationAction
          value="recents"
          icon={<RestoreIcon />}
          sx={{ px: 0, minWidth: "40px" }}
        />
        <BottomNavigationAction
          value="favorites"
          icon={<FavoriteIcon />}
          sx={{ px: 0, minWidth: "40px" }}
        />
        <BottomNavigationAction
          value="nearby"
          icon={<LocationOnIcon />}
          sx={{ px: 0, minWidth: "40px" }}
        />
        <BottomNavigationAction
          value="folder"
          icon={<FolderIcon />}
          sx={{ px: 0, minWidth: "40px" }}
        />
        <BottomNavigationAction
          value="folder1"
          icon={<FolderIcon />}
          sx={{ px: 0, minWidth: "40px" }}
        />
      </BottomNavigation>
    </>
  );
}
