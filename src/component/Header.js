import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import pic from "../image/Logo.png";

const Header=()=> {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    
    return (
        <div className="Header">
          <br />
        <React.Fragment>
          <Box sx={{ display: 'flex' }}>
            <span><img src={pic} /></span>
            
            <Stack direction ="row" spacing ={2} paddingLeft= "1000px">
            <Button variant="text">Contacts</Button>
            
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              </IconButton>
            </Tooltip>
            </Stack>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <ListItemIcon>
                <StarIcon fontSize="small" />
              </ListItemIcon>
               <Link to="/myjob">My Jobs</Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DoneAllIcon fontSize="small" />
              </ListItemIcon>
              <Link to="/">All Jobs</Link>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <PersonOutlineIcon fontSize="small" />
              </ListItemIcon>
               Profile
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Contacts
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Exit
            </MenuItem>
          </Menu>
        </React.Fragment>
        </div>
  );
};

export default Header;