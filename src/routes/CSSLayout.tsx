import styled from "styled-components";


const Wrapper = styled.div`
    padding-top: 50px;
    background: black;
    padding-bottom: 200px;
`;

const Title = styled.div`
    margin-top: 10px;
    padding-left: 20px;
    font-size: 18px;
`;

const Summary = styled.div`
    padding-left: 20px;
    font-size: 12px;
`;


function CSSLayout() {
    return (
        <Wrapper>
            <Title>시작!</Title>
            <Summary>컴포넌트가 늘어나니 컴퓨터가 엄청 느려지고 비행기 소리가 그치지 않는다. FLEX FROGGY 연결하기</Summary>
        </Wrapper>
    )
}

export default CSSLayout;