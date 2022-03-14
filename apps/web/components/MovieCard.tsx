import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import MovieCardDetail from './MovieCardDetail';
import Rating from './Rating';

const MovieCard = (props) => {
  const [raised, setRaised] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMouseOver = () => {
    setRaised(true);
  }

  const handleMouseOut = () => {
    setRaised(false);
  }

  const style = {
    display: 'flex',
    position: 'relative',
    bgcolor: 'background.paper',
    maxWidth: '62.5rem',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
    m: 4
  };

  return (
    <React.Fragment>
      <Card raised={raised} elevation={raised ? 24 : 5} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} sx={{ width: '100%' }}
        onClick={handleOpen}
      >
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w440_and_h660_face${props.poster_path}`}
            alt={props.title}
            loading="lazy"
          />
          <CardContent sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', display: 'inline-flex', top: -22, backgroundColor: 'black', borderRadius: '100%' }}>
              <Rating voteAvgPercentage={props.vote_average * 10} />
            </Box>
            <Box sx={{ pt: 2 }}>
              <Typography variant="subtitle2" color="text.primary">
                <b>{props.title}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {(new Date(props.release_date)).toDateString()}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ height: '100vh', width: '100vw', overflow: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <MovieCardDetail {...props}></MovieCardDetail>
          </Box>
        </Fade>
      </Modal>
    </React.Fragment>
  )
}
export default MovieCard