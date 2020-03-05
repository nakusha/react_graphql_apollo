import React from "react";
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// 첫줄은 클라이언트에서 사용하기 위한것
const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id){
            id
            title
            medium_cover_image
            description_intro
        }
    }
`

export default () => {
    let { id } = useParams();
    id = parseInt(id)
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id }
    });
    if (loading){
        return "loading"
    }

    if (data && data.movie){
        return data.movie.title
    }
    return "Detail";
};