import React from "react";
import HomePresenter from "./HomePresenter";
//import movieQuery from "./movieQuery";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MOVIES = gql`
    query {
        movies {
            id
            medium_cover_image
            isLiked @client
        }
    }
`;
// eslint-disable-next-line react/display-name
export default () => {
    const {loading, data} = useQuery(GET_MOVIES);
    
    return (
        <HomePresenter
            loading={loading}
            data={data}
        />
    );
};