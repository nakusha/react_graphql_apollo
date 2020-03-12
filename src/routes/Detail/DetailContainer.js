import React from "react";
import DetailPresenter from "./DetailPresenter";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id){
            id
            title
            medium_cover_image
            language
            rating
            description_intro
            isLiked @client
        }
    }
`;

export default () => {
    let { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id:parseInt(id) }
    });
        
    return (
        <DetailPresenter
            loading={loading}
            data={data}
        />
    );
}