import React from "react";
import {Container, Header, Title, Subtitle, Loading, Movies} from "./style";
import PropTypes from "prop-types";
import Movie from "../../components/Movie";

const HomePresenter = ({loading, data}) => (
    <Container>
        <Header>
            <Title>Apollo 2020</Title>
            <Subtitle>I love GraphQL</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}
        <Movies>
            {data?.movies?.map(m => (
                <Movie key={m.id} id={m.id} bg={m.medium_cover_image} isLiked={m.isLiked}/>
            ))}
        </Movies>
    </Container>
);

HomePresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};

export default HomePresenter;