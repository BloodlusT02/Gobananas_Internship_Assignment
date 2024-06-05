import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PostList from "./Components/PostList";

function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Post List</Typography>
        </Toolbar>
      </AppBar>
      <PostList />
    </div>
  );
}

export default App;
