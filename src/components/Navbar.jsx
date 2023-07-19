import { AppBar, styled, Typography, Toolbar, InputBase, Badge, Avatar } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material';
import React from 'react'

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })

const Search = styled("div")(({theme}) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}));

const Icons = styled("Box")(({theme}) => ({
    
}));

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant='h6' sx={{display: { xs:'none', sm:'block'}}}>
                Peer
            </Typography> 
            <Pets sx={{display: { xs:'block', sm:'none'}}} />
            <Search><InputBase placeholder="search..." /></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{width:'30', height:'30'}} src='https://console.cloudinary.com/console/c-586dd6f72d53ce0c2712038f92f778/media_library/search?q='/>
            </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar