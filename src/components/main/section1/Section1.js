import React, { Fragment } from 'react';
import { Heading, Text, Stack, Flex } from '@chakra-ui/layout';
import food from '../../../images/food.jpg'
import ButtonsContainer from './ButtonsContainer';
import CounterInfo from './CounterInfo';

export default function Seccion1() {

    const userScreen = window.screen.width
    const nonAnimatedScreen = 1280

    return (
        <Fragment>
            <Flex
                id="home"
                className="smt"
                position="relative"
                bgImg={`url(${food})`}
                color="white"
                w="full"
                h="740px"
                bgPosition={['center', 'center', 'center', 'right', 'right']}
                bgSize="cover"

                data-aos={userScreen > nonAnimatedScreen ? 'fade-left' : 'none'}
                data-aos-delay={userScreen > nonAnimatedScreen ? '50' : 'none'}
                data-aos-duration={userScreen > nonAnimatedScreen ? '1000' : 'none'}
                data-aos-easing={userScreen > nonAnimatedScreen ? 'ease-in-out' : 'none'}
            >
                <Stack
                    direction={"column"}
                    textColor="#43121D"
                    textAlign={['center', 'center', 'center', 'left', 'left']}
                    pl={['0px', '0px', '0px', '90px', '90px']}
                    cursor="pointer"

                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <Heading fontFamily="'Nunito', sans-serif" mt="194px" as="h1" size='3xl' mb="26px">
                        Good food choices <br />
                        are good <br />
                        investments. <br />
                    </Heading>
                    <Text as="span" textColor="gray.600" mb="26px !important" fontSize="19px" lineHeight="34px" px={['40px', '40px', '20px', '0px', '0px']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Etiam et purus a odio finibus bibendum amet leo.
                    </Text>
                    <ButtonsContainer />
                </Stack>
            </Flex >
            <CounterInfo />
        </Fragment >
    );
}