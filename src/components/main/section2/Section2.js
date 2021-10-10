import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import Btn from '../../Btn';
import food2 from '../../../images/foodS2.png'
import food3 from '../../../images/food3.png'
import { CheckCircleIcon } from '@heroicons/react/solid';

export default function Section2() {

    const data = [
        ' Etiam sed dolor ac diam volutpat.',
        'Erat volutpat aliquet imperdiet.',
        'purus a odio finibus bibendum.'
    ]

    return (
        <React.Fragment>
            <Flex px="121px">
                <Center gridGap="30px">
                    <Box w="90%" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <Image src={food2} objectFit="cover" alt="food" borderRadius="lg" />
                    </Box>
                    <Box w="60%" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" textColor="#43121D" lineHeight="48px" > 
                            We pride ourselves on <br />
                            making real food from the <br />
                            best ingredients.
                        </Heading>
                        <Text textColor="gray.600" my="40px" fontSize="19px"  lineHeight="30px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Etiam et purus a odio finibus bibendum in sit amet leo. <br />
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
            <Flex mt="146px" px="121px">
                <Center gridGap="40px">
                    <Box data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" w="50%">
                        <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" lineHeight="46px" textColor="#43121D">
                            We make everything by hand <br />
                            with the best possible <br />
                            ingredients.
                        </Heading>
                        <Text textColor="gray.600" whiteSpace="pre-wrap" mt="36px" mb="46px" fontSize="19px" lineHeight="34px" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam et purus a odio finibus bibendum in sit amet leo.
                            Mauris feugiat erat tellus. Far far away, behind the word
                            mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.
                        </Text>
                        <Box mb="44px" >
                            {
                                data.map(e => <Text display="flex" fontSize="19px" alignItems="center" my="8px" textColor="#43121D" as="span" key={`${e}${Math.random()}`} gridGap="12px" >
                                    <CheckCircleIcon width="26px" height="26px" /> {e}
                                </Text>)
                            }
                        </Box>
                        <Box w="148px">
                            <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white" shw="lg" >
                                <Text as="b" display="flex" alignItems="center" justifyContent="center" gridGap="6px" >Learn More</Text>
                            </Btn>
                        </Box>
                    </Box>
                    <Box data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                        <Image src={food3} objectFit="cover" alt="food" borderRadius="lg" />
                    </Box>
                </Center>
            </Flex>
        </React.Fragment>
    );
}
