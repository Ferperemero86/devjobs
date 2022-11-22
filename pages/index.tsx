import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import withApollo from '../lib/withApollo';
import { CHARACTERS_QUERY } from '../graphql/queries';

interface Episode {
  id: string;
  episode: string;
  air_date: string;
}

interface Origin {
  dimension: string;
  id: string;
}

interface Person {
  episode: Episode[];
  id: string;
  image: string;
  name: string;
  gender: string;
  origin: Origin;
}

function Home() {
  const { data, loading } = useQuery(CHARACTERS_QUERY);

  if (loading) return <p>Loading...</p>;

  const jsData = JSON.parse(JSON.stringify(data));
  console.log(jsData);
  return (
    <div>
      {jsData.characters.results.map((person: Person) => (
        <p>{person.name}</p>
      ))}
    </div>
  );
}

export default withApollo(Home);
