import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Rating from './Rating';
import Commentary from './Commentary';

const MovieCardDetail = (props) => {
  const year = new Date(props.release_date).getFullYear();
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={5}>
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${props.poster_path}`}
          alt={props.title}
          loading="lazy"
        />
        <Stack spacing={2}>
          <Stack>
            <Typography variant="h4" component="h2">
              <b>{props.title}</b> ({year})
            </Typography>
            <Typography>
              {`${(new Date(props.release_date)).toDateString()} (${props.original_language})`}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Box sx={{ display: 'inline-flex', position: 'relative', backgroundColor: 'black', borderRadius: '100%' }}>
              <Rating voteAvgPercentage={props.vote_average * 10} size={60} />
            </Box>
            <Typography>
              <b>User<br />Score</b>
            </Typography>
          </Stack>

          <Typography>
            {props.overview}
          </Typography>
        </Stack>
      </Stack>

      <Commentary {...props} />
    </Stack>
  )
}

export default MovieCardDetail