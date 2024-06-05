import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../JS_files/api';
import { List, ListItem, ListItemText, Container, TextField } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setFilteredPosts(data);
    };
    getPosts();
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, posts]);

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List>
        {filteredPosts.map(post => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostList;
