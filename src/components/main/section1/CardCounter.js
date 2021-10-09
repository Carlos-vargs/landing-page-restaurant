import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';

function CardCounter({num, text}) {
    return (
        <React.Fragment>
            <Box display="flex" alignContent="center" justifyContent="center" flexDirection="column" textAlign="center" >
                <Heading fontFamily="'Nunito', sans-serif" as="span" size="xl" color="white" w="200px" >{`${num}+`}</Heading>
                <Heading as="span" size="sm" mt="6px" textTransform="uppercase" >{text}</Heading>
            </Box>
        </React.Fragment>
    );
}

export default CardCounter;