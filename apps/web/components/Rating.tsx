import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Rating = (props) => {
  const getColor = () => {
    if (props.voteAvgPercentage >= 70) {
      return 'success'
    } else if (props.voteAvgPercentage >= 40) {
      return 'warning'
    } else {
      return 'error'
    }
  }

  return (
    <React.Fragment>
      <CircularProgress size={props.size} variant="determinate" color={getColor()} thickness={4} value={props.voteAvgPercentage} />
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
          {`${props.voteAvgPercentage}%`}
        </Typography>
      </Box>
    </React.Fragment>
  )
}

Rating.propTypes = {
  size: 40,
  voteAvgPercentage: 0
}

export default Rating