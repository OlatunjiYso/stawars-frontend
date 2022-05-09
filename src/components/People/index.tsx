import * as React from 'react';
import { PeopleQueryResponse, usePeopleQuery } from '../../generated/graphql';
import AllPeople from './AllPeople';
import { OwnProps } from './AllPeople';


const PeopleList:React.FC<OwnProps> = ({...props}) => {
    const { data, error, loading } = usePeopleQuery({
        variables: {
            pageNo: 1
        },
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>ERROR</div>;
    }
    return <AllPeople data={data.people as PeopleQueryResponse} {...props}/>;
};

export default PeopleList;