import React from 'react';
import { Box } from '@chakra-ui/layout';

export default function Btn({ shw, sizeMl, sizePx, sizePy, children, bgC, colorTxt }) {

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
                backgroundColor: 'transparent',
                color: "#A82D49",
                borderColor: '#A82D49',
                borderWidth: '4px',
                cursor: 'pointer',
                transition: 'all 0.5s ease'
            }}>
            {children}
        </Box>
    );
}
