import React, { Fragment } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import Btn from '../../Btn';
import food3 from '../../../images/food3.png'
import { CheckCircleIcon } from '@heroicons/react/solid';

export default function FullIngredientsInfo({ ingredients }) {

    const userScreen = window.screen.width
    const nonAnimatedScreen = 1280

    return (
        <Fragment>
            <Flex id="aboutUs" mt="146px" px={['0px', '0px', '0px', '121px', '121px']} textAlign={['center', 'center', 'center', 'left', 'left']}>
                <Center gridGap="40px" flexDirection={['column', 'column', 'column', 'row', 'row']}>
                    <Box
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        w={['100%', '100%', '100%', '50%', '50%']}
                        px="20px"
                    >
                        <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" lineHeight="46px" textColor="#43121D" whiteSpace="pre-wrap">
                            We make everything by hand
                            with the best possible
                            ingredients.
                        </Heading>
                        <Text textColor="gray.600" whiteSpace="pre-wrap" mt="36px" mb="46px" fontSize="19px" lineHeight="34px" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam et purus a odio finibus bibendum in sit amet leo.
                            Mauris feugiat erat tellus. Far far away, behind the word
                            mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </Text>
                        <Box mb="44px" pl={['20px', '20px', '20px', '0px', '0px']}>
                            {
                                ingredients.map(e => <Text
                                    display="flex"
                                    fontSize="19px"
                                    justifyContent='flex-start'
                                    alignItems="center"
                                    my="8px"
                                    textColor="#43121D"
                                    as="span"
                                    key={`${e}${Math.random()}`}
                                    gridGap="12px"
                                >
                                    <CheckCircleIcon width="26px" height="26px" /> {e}
                                </Text>)
                            }
                        </Box>
                        <Box w="148px" mx={['auto', 'auto', 'auto', '0px', '0px']}>
                            <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white" shw="lg" >
                                <Text as="b" display="flex" alignItems="center" justifyContent="center" gridGap="6px" >Learn More</Text>
                            </Btn>
                        </Box>
                    </Box>
                    <Box
                        data-aos={userScreen > nonAnimatedScreen ? 'fade-left' : 'none'}
                        data-aos-delay={userScreen > nonAnimatedScreen ? '50' : 'none'}
                        data-aos-duration={userScreen > nonAnimatedScreen ? '1000' : 'none'}
                        data-aos-easing={userScreen > nonAnimatedScreen ? 'ease-in-out' : 'none'}
                    >
                        <Image src={food3} objectFit="cover" alt="food" borderRadius="lg" />
                    </Box>
                </Center>
            </Flex>
        </Fragment>
    );
}
