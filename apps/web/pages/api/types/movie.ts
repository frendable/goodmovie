import {
  intArg,
  nonNull,
  objectType,
} from 'nexus'
import fetch from 'node-fetch'

export const Movie = objectType({
  name: 'Movie',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('original_title')
    t.nullable.string('overview')
    t.string('release_date')
    t.string('original_language')
    t.nullable.string('poster_path')
    t.nullable.boolean('adult')
    t.nullable.list.field('genre_ids', {
      type: 'String',
    })
    t.nullable.string('backdrop_path')
    t.nullable.float('popularity')
    t.int('vote_count')
    t.boolean('video')
    t.nullable.float('vote_average')
  },
})

export const MovieList = objectType({
  name: 'MovieList',
  definition(t) {
    t.int('page')
    t.list.field('results', {
      type: 'Movie'
    })
    t.int('total_results')
    t.int('total_pages')
  }
})

export const TrendingQuery = (t) => {
  return t.field('trendingMovieQuery', {
    type: 'MovieList',
    resolve: async () => {
      const movieList = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=e402ac10a45433e0460901c120d979c3');
      return movieList.json();
    },
  })
}

export const PopularQuery = (t) => {
  return t.field('popularMovieQuery', {
    type: 'MovieList',
    args: {
      page: nonNull(intArg()),
    },
    resolve: async (_, args) => {
      const movieList = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${args.page}&api_key=e402ac10a45433e0460901c120d979c3`);
      return movieList.json();
    },
  })
}