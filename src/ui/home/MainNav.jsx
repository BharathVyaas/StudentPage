import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import Profile from "./mainnav/Profile";
import ArticleIcon from "@mui/icons-material/Article";

import brand_logo from "../../assets/brand_logo.png";
import { useLocation, useNavigate } from "react-router";

function SideNav() {
  const navigate = useNavigate();

  const location = useLocation();

  const dashboard = () => {
    navigate("/");
  };

  const programResults = () => {
    //navigate("/program-results");
  };

  return (
    <nav
      className="fixed left-0 top-0 bg-blue-800 bg-opacity-[.04] min-h-screen max-h-screen border-r-blue-400 border-opacity-20 shadow-lg shadow-blue-200 border-[1px] text-[#070707]"
      style={{ width: "280px" }}
    >
      <div className="ms-2 mt-3 mb-3">
        <img src={brand_logo} alt="NareshIT" width={240} height={140} />
      </div>

      <Divider />

      <div className="relative w-full m-2">
        <Profile />
      </div>

      <MenuList>
        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }} onClick={dashboard}>
          <List sx={{ paddingBlock: 0, marginBlock: 0.4 }} className="w-full">
            <ListItem
              style={{
                backgroundColor:
                  location.pathname === "/" ? "rgba(30,64,175,.20)" : null,
              }}
              className="rounded"
            >
              <ListItemAvatar>
                <HomeIcon />
              </ListItemAvatar>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>
        </MenuItem>

        <MenuItem
          sx={{ paddingBlock: 0, marginBlock: 0 }}
          onClick={programResults}
        >
          <ListItem
            style={{
              backgroundColor:
                location.pathname === "/program-results"
                  ? "rgba(30,64,175,.20)"
                  : null,
            }}
            className="rounded"
          >
            <ListItemAvatar>
              <ArticleIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">Results</Typography>
          </ListItem>
        </MenuItem>
      </MenuList>
    </nav>
  );
}

function MainNav() {
  return <SideNav />;
}

export default MainNav;
