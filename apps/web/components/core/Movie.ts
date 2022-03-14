import { createContext, useContext } from 'react';

export const MovieContext = createContext(null);

export const useMovie = () => {
	const movieObject = useContext(MovieContext);

	if (!movieObject) {
		throw new Error('Please wrap using movie provider');
	}

	return movieObject;
};
