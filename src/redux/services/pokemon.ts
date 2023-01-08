import { apiSlice } from '../slices/api/apiSlice';

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = extendedApi;
