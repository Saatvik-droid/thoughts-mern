import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Avatar, Grid, IconButton, Menu, MenuItem } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import { LOGOUT } from "../../redux/actionTypes";
import useStyles from "./styles";

const UserAvatar = ({ user, showDropdown }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleMenuArrowCLick = (e) => setAnchorEl(e.currentTarget);

  const closeMenu = () => setAnchorEl(null);

  const userLogout = () => {
    closeMenu();
    dispatch({ type: LOGOUT });
    dispatch(push("/"));
  };

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      xs={3}
      sm={2}
    >
      <Avatar className={classes.avatar}>
        {user.profile.givenName.charAt(0)}
      </Avatar>
      <IconButton
        size="small"
        edge="start"
        onClick={handleMenuArrowCLick}
        disableRipple
      >
        {!anchorEl ? (
          <ArrowDropDownIcon color="primary" />
        ) : (
          <ArrowDropUpIcon color="primary" />
        )}
      </IconButton>
      {showDropdown && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={closeMenu}
        >
          <MenuItem onClick={userLogout}>Logout</MenuItem>
        </Menu>
      )}
    </Grid>
  );
};

export default UserAvatar;
