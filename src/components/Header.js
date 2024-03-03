import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <AppBar sx={{backgroundColor : '#232f3d'}} position="sticky">
        <Toolbar>
          <Typography onClick={(e) => navigate('/books')}>
            <LibraryBooksIcon />
          </Typography>
          <Tabs
            sx={{ml : 'auto'}}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to='/add' label="Add product" />
            <Tab LinkComponent={NavLink} to='/books' label="Books" />
            <Tab LinkComponent={NavLink} to='/about' label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
