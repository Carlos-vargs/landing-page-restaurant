import React from 'react';
import { ChevronRightIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { Text, Stack, Box, Flex } from '@chakra-ui/layout';
import Btn from '../../Btn';

function ButtonsContainer() {
    return (
        <Flex   mx={['auto !important', 'auto !important', 'auto !important', '0px !important', '0px !important']} userSelect="none"  >
            <Btn sizePx="16px" sizePy="6px" sizeMl="0px" bgC="#A82D49" colorTxt="white">
                <Text as="b" display="flex" alignItems="center" justifyContent="center" gridGap="6px" >Order Now<Text as="span"><ShoppingCartIcon width="20px" /></Text></Text>
            </Btn>
            <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="white" shw="lg" colorTxt="gray.800">
                <Text as="b" display="flex" alignItems="center" justifyContent="center" >Learn More<Text as="span"><ChevronRightIcon width="20px" /></Text></Text>
            </Btn>
        </Flex>
    );
}

export default ButtonsContainer;