import styled from "styled-components";


const Wrapper = styled.div`
    padding-top: 50px;
    background: black;
    padding-bottom: 200px;
`;

const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
`;

function CSSLayout() {
    return (
        <Wrapper>
            <Box/>
        </Wrapper>
    )
}

export default CSSLayout;