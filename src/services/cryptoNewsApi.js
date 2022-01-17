import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// var options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//   params: { textFormat: 'Raw', safeSearch: 'Off' },
//   headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '1708072068msh4818cef13dc6bcep14bf8bjsn57ac547b8e29',
//   },
// };

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '1708072068msh4818cef13dc6bcep14bf8bjsn57ac547b8e29',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
