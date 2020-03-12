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

export default () => useQuery(GET_MOVIES);