import React from "react";
import {useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

// 첫줄은 클라이언트에서 사용하기 위한것
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
        suggestions(id: $id){
            id
            medium_cover_image
        }
    }
`

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Columne = styled.div`
    margin-left: 10px;
    width:50%;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 28px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`

const Poster = styled.div`
    background-image : url(${props => props.bg});
    width: 25%;
    height 60%;
    background-size: cover;
    background-color: transparent;
    background-position: center center
`

export default () => {
    let { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id:parseInt(id) }
    });
    console.log(data)
    
    return (
        <Container>
            <Columne>
                <Title>
                    {loading
                        ? "Loading..."
                        : `${data.movie.title} ${data.movie.isLiked ? "💖" : "😞"}`}
                </Title>
                <Subtitle>{data?.movie?.language} / {data?.movie?.rating}</Subtitle>
                <Description>{data?.movie?.description_intro}</Description>
            </Columne>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>
        </Container>
    );
};