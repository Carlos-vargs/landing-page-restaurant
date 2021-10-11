import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import Btn from '../../Btn';
import breadImage from '../../../images/food4.jpg'


export default function FreshBakedContainer() {
    return (
        <Fragment>
            <Flex
                height="190px"
                justifyContent="center"
                mb="128px"
                position="relative"
                backgroundImage={`url(${breadImage})`}
                bgRepeat="no-repeat"
                backgroundSize="cover"
                backgroundAttachment="fixed"
            >
                <Box w="full" h="190px" bgColor="#000" opacity="0.4" position="absolute">
                </Box>
                <Center gridGap="218px" position="absolute" top="40%">
                    <Heading as="h2" color="white" size="lg" fontFamily="'Nunito', sans-serif" >Baked fresh daily by bakers with passion.</Heading>
                    <Box w="149px" h="48px" >
                        <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                            <Text as="b" display="flex" alignItems="center" justifyContent="center">Learn More</Text>
                        </Btn>
                    </Box>
                </Center>
            </Flex>
        </Fragment>
    );
}