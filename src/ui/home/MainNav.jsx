import {
  Box,
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
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TerminalIcon from "@mui/icons-material/Terminal";
import NoteIcon from "@mui/icons-material/Note";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";

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

      <MenuList>
        <Box className="my-3" marginLeft={2}>
          <Typography>Navigation</Typography>
        </Box>
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

      <Divider />

      <MenuList>
        <Box className="my-3" marginLeft={2}>
          <Typography>My Jurny</Typography>
        </Box>
        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <ListItem sx={{ paddingBlock: 0, marginBlock: 0.8 }}>
            <ListItemAvatar>
              <CodeIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">Playground</Typography>
          </ListItem>
        </MenuItem>

        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <ListItem sx={{ paddingBlock: 0, marginBlock: 0.8 }}>
            <ListItemAvatar>
              <AssessmentIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">Assessment</Typography>
          </ListItem>
        </MenuItem>

        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <ListItem sx={{ paddingBlock: 0, marginBlock: 0.8 }}>
            <ListItemAvatar>
              <TerminalIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">Solve Problems</Typography>
          </ListItem>
        </MenuItem>

        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <ListItem sx={{ paddingBlock: 0, marginBlock: 0.8 }}>
            <ListItemAvatar>
              <NoteIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">My Notes</Typography>
          </ListItem>
        </MenuItem>
      </MenuList>

      <MenuList>
        <Box className="my-3" marginLeft={2}>
          <Typography>Exam Track</Typography>
        </Box>

        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <ListItem sx={{ paddingBlock: 0, marginBlock: 0.8 }}>
            <ListItemAvatar>
              <QuizIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">Tests</Typography>
          </ListItem>
        </MenuItem>

        <MenuItem sx={{ paddingBlock: 0, marginBlock: 0 }}>
          <ListItem sx={{ paddingBlock: 0, marginBlock: 0.8 }}>
            <ListItemAvatar>
              <ArticleIcon fontSize="medium" />
            </ListItemAvatar>
            <Typography variant="body1">Results</Typography>
          </ListItem>
        </MenuItem>
      </MenuList>

      <Box
        position="absolute"
        width="100%"
        bottom={8}
        left={0}
        display="flex"
        justifyContent="center"
      >
        <button className="w-[90%] text-[#0f0f0f] py-[.30rem] pt-[.40rem] bg-red-800 bg-opacity-30 rounded hover:bg-opacity-30">
          Need Help<span className="ms-[.08rem]">?</span>
        </button>
      </Box>
    </nav>
  );
}

function MainNav() {
  return <SideNav />;
}

export default MainNav;
