import React from 'react'
import styled from 'styled-components';

const ImageBottom = ({movie}) => {
    return (
        <Container>
            <p className="text">Running Time: {movie.runtime}</p>
            <p className="text">Budget: ${movie.budget}</p>
        <p className="text">Revenue: ${movie.revenue}</p>
        </Container>
    )
}

export default ImageBottom


const Container=styled.div`
width: 100%;
height: 6em;
background-color: #1C1C1C;
color: white;
display: flex;
align-items: center;

.text{
    margin-left: 0;
    padding: 2em 2em 2em 12em;
    font-size: 1.5em;
}
`