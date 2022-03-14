import { useQuery } from '@apollo/client';
import gql from "graphql-tag"
import { useEffect, useState } from 'react';

const PopularMovieQuery = gql`
  query PopularMovieQuery($page: Int!) {
    popularMovieQuery(page: $page) {
      total_pages
      total_results
      results {
        id
        title
        overview
        release_date
        poster_path
        vote_average
        original_language
      }
    }
  }
`

let results = [];
let pageFetched = 0;

const MovieData = (props) => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(PopularMovieQuery, {
    fetchPolicy: "cache-and-network",
    variables: { page },
  })

  useEffect(() => {
    const atEnd = () => {
      const c = [document.scrollingElement.scrollHeight, document.body.scrollHeight, document.body.offsetHeight].sort(function(a,b){return b-a})
      return (window.innerHeight + window.scrollY + 2 >= c[0]) // compare with scroll position + some give
    }
    const handleScroll = () => {
      if (atEnd() && !loading && !error) {
        setPage(page + 1)
      }
    }

    window.addEventListener('scroll', handleScroll);

    // cleanup this component
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  if (pageFetched < page && !loading && !error) {
    if (results.length === 0 || results[results.length - 1].id !== data.popularMovieQuery.results[data.popularMovieQuery.results.length - 1].id) {
      results = results.concat(data.popularMovieQuery.results);
      pageFetched++;
    }
  }

  return (
    props.render({
      loading,
      error,
      results,
    })
  );
};

export default MovieData