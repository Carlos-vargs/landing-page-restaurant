import React from 'react';
import { Image } from '@chakra-ui/image';
import { Heading, Text, Stack, Flex } from '@chakra-ui/layout';
import food from '../../../images/food.png'
import ButtonsContainer from './ButtonsContainer';
import CounterInfo from './CounterInfo';

function Seccion1() {
    return (
        <React.Fragment>
            <Flex>
                <Stack direction={"column"} textColor="#43121D" pl="90px" w="50%" cursor="pointer" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <Heading fontFamily="'Nunito', sans-serif" mt="194px" as="h1" size="3xl" mb="26px">
                        Good food choices <br />
                        are good <br />
                        investments. <br />
                    </Heading>
                    <Text as="span" textColor="gray.600" mb="26px !important">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Etiam et purus a odio finibus bibendum amet leo.
                    </Text>
                    <ButtonsContainer />
                </Stack>
                <Image src={food} objectFit="cover" alt="food" w="55%" mt="100px" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" />
            </Flex>
            <CounterInfo />
        </React.Fragment>
    );
}

export default Seccion1;