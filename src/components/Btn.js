import React from 'react';
import { Box } from '@chakra-ui/layout';

export default function Btn({shw, sizeMl ,sizePx, sizePy, children, bgC, colorTxt }) {
    return (
        <Box
            bgColor={bgC}
            ml={sizeMl}
            borderWidth="4px"
            py={sizePy}
            boxShadow={shw}
            px={sizePx}
            color={colorTxt}
            borderColor="transparent"
            _hover={{
                backgroundColor: "white",
                color: "#A82D49",
                borderColor: '#A82D49',
                borderWidth: '4px',
                cursor: 'pointer',
                transition: 'all 1s ease'
            }}>
            {children}
        </Box>
    );
}
