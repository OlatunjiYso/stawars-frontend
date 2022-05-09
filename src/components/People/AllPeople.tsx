import * as React from 'react';
import { PeopleQueryResponse } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
    handleNameChange: (newName: string) => void;
}

interface Props extends OwnProps {
  data: PeopleQueryResponse | undefined;
}

const className = 'People';
const PeopleList: React.FC<Props> = ({ data, handleNameChange }) => {
    const { people, count, page } = data!;

  return (<div className={className}>
    <h3>Star Wars</h3>
    <h5> Showing {people.length} of {count}</h5>
    <ol className={`${className}__list`}>
      { people?.length> 0 &&
        people.map(
          (person, i) =>
            !!person && (
              <li 
              key={i}
               className={`${className}__item`}
               onClick={() => handleNameChange(person.name)}
               >
                Name: {person.name} | {person.gender} | {person.height} cm
              </li>
            )
        )}
    </ol>
  </div>)
};

export default PeopleList;