import styled from "styled-components";
import {Link} from "react-router-dom";


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
            <Title>FLEXBOX FROGGY</Title>
            <Summary>
                <a href="https://flexboxfroggy.com/">https://flexboxfroggy.com/</a>
            </Summary>
        </Wrapper>
    )
}

export default CSSLayout;