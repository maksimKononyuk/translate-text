import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Navbar = ({ setIsInputComponent }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setIsInputComponent(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ textAlign: 'center', width: '90%' }}
            variant='h4'
            color='inherit'
            component='div'
          >
            Помощник в переводе английских текстов
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
