// @flow

export type Show = {
    title: string,
    year: string,
    description: string,
    poster: string,
    imdbID: number,
    trailer: string
  };

declare var module : {
	hot: {
		accept(path: string , callback: () => void): void
	}

};