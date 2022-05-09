import * as React from 'react';
import { PersonQueryResponse } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: PersonQueryResponse;
}

const className = 'Person';
const PersonDetail: React.FC<Props> = ({ data }) => {
    const {person, success } = data;
  if (!person || !success ) {
    return <div>No information available. An Error Occured</div>;
  }
 const { name, gender, mass, height, homeworld } = person;
  return (
    <div className={className}>
      <div className={`${className}__main`}>
        <h2>Profile for {name} </h2>
        <h5> Gender: {gender}</h5>
        <h5> Mass: {mass}</h5>
        <h5>Height: {height}</h5>
        <h6> Visit <span><a href={homeworld}>homeworld here</a> </span> </h6>
      </div>
    </div>
  );
};
export default PersonDetail;