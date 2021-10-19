import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import Btn from '../../Btn';
import food2 from '../../../images/foodS2.png'


export default function BasicIngredientsInfo() {

    const userScreen = window.screen.width
    const nonAnimatedScreen = 1280

    return (
        <Fragment>
            <Flex className="smt" id="aboutUs" textAlign={['center', 'center', 'center', 'left', 'left']} px={['0px', '0px', '0px', '121px', '121px']}>
                <Center flexDirection={['column', 'column', 'column', 'row', 'row']} gridGap="30px">
                    <Box
                        w="90%"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                    >
                        <Image src={food2} objectFit="cover" alt="food" borderRadius="lg" />
                    </Box>
                    <Box
                        w={['100%', '100%', '100%', '60%', '60%']}

                        data-aos={userScreen > nonAnimatedScreen ? 'fade-left' : 'none'}
                        data-aos-delay={userScreen > nonAnimatedScreen ? '50' : 'none'}
                        data-aos-duration={userScreen > nonAnimatedScreen ? '1000' : 'none'}
                        data-aos-easing={userScreen > nonAnimatedScreen ? 'ease-in-out' : 'none'}
                    >
                        <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" textColor="#43121D" lineHeight="48px">
                            We pride ourselves on <br />
                            making real food from the <br />
                            best ingredients.
                        </Heading>
                        <Text textColor="gray.600" my="40px" fontSize="19px" lineHeight="30px" whiteSpace="pre-wrap">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam et purus a odio finibus bibendum in sit amet leo.
                            Mauris feugiat erat tellus.
                        </Text>
                        <Box w="149px" h="48px" mx={['auto', 'auto', 'auto', '0px', '0px']}>
                            <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                                <Text as="b" display="flex" alignItems="center" justifyContent="center" gridGap="6px" >Learn More</Text>
                            </Btn>
                        </Box>
                    </Box>
                </Center>
            </Flex>
        </Fragment>
    );
}