import React, {useEffect} from 'react';
import { PersonQueryResponse } from '../../backuptypes';
import { usePersonQuery } from '../../generated/graphql';
import PersonDetail from './PersonDetail';

interface OwnProps {
    name: string;
  }

const PersonContainer: React.FC<OwnProps> = ({name}) => {
  const { data, error, loading, refetch } = usePersonQuery({ variables: { name } });

  React.useEffect(() => {
    refetch({ name });
  }, [refetch, name]);

  if (loading) {
    return <div>Loading Person...</div>;
  }

  if (error) {
    return <div>An Error Occured</div>;
  }

  if (!name) {
    return <div>Select a character from the list</div>;
  }

  return <PersonDetail data={data?.person as PersonQueryResponse} />;
};

export default PersonContainer;