import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import Profile from "./mainnav/Profile";
import ArticleIcon from "@mui/icons-material/Article";

import brand_logo from "../../assets/brand_logo.png";

function SideNav() {
  return (
    <nav
      className="fixed left-0 top-0 bg-blue-800 bg-opacity-[.04] min-h-screen max-h-screen border-r-blue-400 border-opacity-20 shadow-lg shadow-blue-200 border-[1px] text-[#070707]"
      style={{ width: "280px" }}
    >
      <div className="ms-2 mt-3 mb-3">
        <img src={brand_logo} alt="NareshIT" width={240} height={140} />
      </div>

      <Divider />

      <Profile />

      <MenuList>
        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <List sx={{ paddingBlock: 0, marginBlock: 0.4 }} className="w-full">
            <ListItem className="bg-blue-800 bg-opacity-20 rounded">
              <ListItemAvatar>
                <HomeIcon />
              </ListItemAvatar>
              <ListItemText primary="dashboard" />
            </ListItem>
          </List>
        </MenuItem>
      </MenuList>
    </nav>
  );
}

function MainNav() {
  return <SideNav />;
}

export default MainNav;
