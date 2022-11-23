import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import withApollo from '../lib/withApollo';
import { CHARACTERS_QUERY } from '../graphql/queries';

function Home() {
  const { data, loading } = useQuery(CHARACTERS_QUERY);

  if (loading) return <p>Loading...</p>;

  //const jsData = JSON.parse(JSON.stringify(data));
  console.log(data);
  return <div>Home</div>;
}

export default withApollo(Home);
