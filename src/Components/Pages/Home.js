import { Box, Typography, Container } from '@material-ui/core';
import React from 'react'
import images from '../img/bike.jpg';


function Home() {
    const boxStyle={backgroundImage: `url(${images})`,
    height: "500px",
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem' }
    const blogStyle={paddingTop: '3px'}
    const blogTitle={fontWeight: 800, paddingBottom: '3px'}


    return(
        <div className="home">
            <Box style={boxStyle}>
                <Box>React Blog</Box>
            </Box>
              <Container maxWidth="lg" style={blogStyle}>
                  <Typography variant="h4" style={blogTitle}>
                      Articles
                  </Typography>
              </Container>
        </div>
    );
}

export default Home;