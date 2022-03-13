import Layout from "../components/Layout"
import MovieCard from '../components/MovieCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Grid';
import MovieData from '../components/HOC/MovieData';

const Movie = () => {
  return (
    <Layout>
      <Box sx={{ pt: 5, pb: 5, pl: 10, pr: 10 }}>
        <Grid sx={{ flexGrow: 1 }} container spacing={5}>
          <MovieData render={({results}) => {
            return (
              results.map(result => {
                return (
                  <Grid key={result.id} item xs={2.4}>
                    <Stack sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                      <MovieCard key={result.id} {...result} />
                    </Stack>
                  </Grid>
                )
              })
            )
          }} />
        </Grid>
      </Box>
    </Layout>
  )
}

export default Movie
