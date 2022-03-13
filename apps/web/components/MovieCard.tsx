import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const MovieCard = (props) => {
  const [raised, setRaised] = useState(false);

  const handleMouseOver = () => {
    setRaised(true);
  }

  const handleMouseOut = () => {
    setRaised(false);
  }

  const voteAvgPercentage = props.vote_average * 10;

  const getColor = () => {
    if (voteAvgPercentage >= 70) {
      return 'success'
    } else if (voteAvgPercentage >= 40) {
      return 'warning'
    } else {
      return 'error'
    }
  }

  return (
    <Card raised={raised} elevation={raised ? 24 : 5} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} sx={{ width: '100%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w440_and_h660_face${props.poster_path}`}
          alt={props.title}
        />
        <CardContent sx={{ height: '100%', position: 'relative' }}>
          <Box sx={{ position: 'absolute', display: 'inline-flex', top: -22, backgroundColor: 'black', borderRadius: '100%' }}>
            <CircularProgress variant="determinate" color={getColor()} thickness={4} value={voteAvgPercentage} />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="caption" component="div" color="primary.contrastText">
                {`${voteAvgPercentage}%`}
              </Typography>
            </Box>
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
  )
}
export default MovieCard