import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Btn from '../../Btn';
import food2 from '../../../images/foodS2.png'

export default function Section2() {
    return (
        <React.Fragment>
            <Flex px="121px" mb="1100px">
                <Center gridGap="30px">
                    <Box w="90%" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <Image src={food2} objectFit="cover" alt="food" borderRadius="lg" />
                    </Box>
                    <Box data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" textColor="#43121D">
                            We pride ourselves on <br />
                            making real food from the <br />
                            best ingredients.
                        </Heading>
                        <Text textColor="gray.600" my="40px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam et purus a odio finibus bibendum in sit amet leo.
                            Mauris feugiat erat tellus.
                        </Text>
                        <Box w="149px" h="48px" >
                            <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                                <Text as="b" display="flex" alignItems="center" justifyContent="center" gridGap="6px" >Learn More</Text>
                            </Btn>
                        </Box>
                    </Box>
                </Center>
            </Flex>
        </React.Fragment>
    );
}