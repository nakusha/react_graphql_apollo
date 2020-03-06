import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri:"http://localhost:4000/",
    // 로컬 cache정보 사용 필요
    resolvers:{
        // 요청하는 타입과 같은 이름이어야함
        Movie:{
            // 함수의 기본값 설정
            isLiked: () => false
        },
        Mutation:{
            toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
                cache.writeData({
                    id: `Movie:${id}`,
                    data: {
                        isLiked: !isLiked
                    }
                });
            }
        }
    }
});

export default client