import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r1i6ux0fkx01yx8wn0c4rg/master',
  cache: new InMemoryCache()
});