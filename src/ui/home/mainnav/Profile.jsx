import { connect } from "react-redux";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import userplaceholder from "../../../assets/userplaceholder.png";
import { motion } from "framer-motion";
import { logout as logoutAction } from "../../../redux/slices/user/userSlice";
import { resetLoginState } from "../../../redux/slices/user/loginSlice";

function ProfileComponent({ userName, logout, resetLoginStateDispatch }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    resetLoginStateDispatch();
    logout();
    handleClose();
  };

  return (
    <div className="relative">
      <div className="m-4 flex items-center space-x-3 text-[#070707] relative">
        <img
          src={userplaceholder}
          width={50}
          height={50}
          className="rounded-full border-gray-400 border-2"
          alt="user"
        />

        <div className="max-w-[150px]">
          <p className="font-bold text-ellipsis overflow-hidden">{userName}</p>
        </div>

        <div className="absolute right-0">
          <IconButton onClick={handleClick}>
            {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        component={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const mapState = (state) => ({
  userName: state.user.userName,
});

const mapDispatch = {
  logout: logoutAction,
  resetLoginStateDispatch: resetLoginState,
};

const Profile = connect(mapState, mapDispatch)(ProfileComponent);

export default Profile;
