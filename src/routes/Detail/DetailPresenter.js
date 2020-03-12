import React from "react";
import {Container, Columne, Title, Subtitle, Description, Poster} from "./style";
import PropTypes from "prop-types";

const DetailPresenter = ({loading, data}) => (
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
        <Poster bg={data?.movie?.medium_cover_image}/>
    </Container>
);

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};

export default DetailPresenter;