import React from 'react';
import { Box, Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image';
import { Input } from "@chakra-ui/react"
import photo from '../../../images/bgAtch.jpg'
import { PlayIcon } from '@heroicons/react/solid';
import FoodCard from '../../FoodCard';
import Btn from '../../Btn';


//data-aos="flip-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"

export default function Section3() {
    return (
        <React.Fragment>
            <Box className="image" mt="130px" mb="250px">
                <Image src={photo} objectFit="cover" alt="food" borderRadius="lg" w="100%" h="450px" />
                <Stack direction={'column'} textAlign="center" mt="-360px">
                    <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" mb="6px" lineHeight="46px" textColor="#A82D49" whiteSpace="pre-wrap" >
                        When a man's stomach is full it makes no <br />
                        difference whether he is rich or poor.
                    </Heading>
                    <Text as="span" whiteSpace="pre-wrap" textColor="gray.600" fontSize="18px" lineHeight="34px" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                    </Text>
                    <Text cursor="pointer" as="span" mt="16px !important" display="flex" alignItems="center" justifyContent="center" gridGap="6px" color="#43121D" fontSize="18px"><PlayIcon width="26px" height="26px" /> Watch Out Story</Text>
                </Stack>
            </Box>
            <Stack direction={'column'} textAlign="center" mb="98px">
                <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" mb="6px" lineHeight="46px" textColor="#43121D" whiteSpace="pre-wrap" mb="30px" >
                    Explore Our Foods
                </Heading>
                <Text textColor="gray.600" fontSize="19px" lineHeight="30px" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br />
                    leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br />
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                </Text>
            </Stack>
            <Flex justifyContent="center" >
                <Center gridGap="40px" mb="310px">
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </Center>
            </Flex>
            <Flex className="boxAttach"  height="190px" justifyContent="center" mb="128px">
                <Center gridGap="218px" >
                    <Heading as="h2" color="white" size="lg" fontFamily="'Nunito', sans-serif" >Baked fresh daily by bakers with passion.</Heading>
                    <Box w="149px" h="48px" >
                        <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                            <Text as="b" display="flex" alignItems="center" justifyContent="center">Learn More</Text>
                        </Btn>
                    </Box>
                </Center>
            </Flex>
            <Stack direction="column" alignItems="center">
                <Heading color="#43121D" whiteSpace="pre-wrap" textAlign="center" fontFamily="'Nunito', sans-serif" mb="40px">
                    Hurry up! Subscribe our newsletter <br />
                    and get 25% Off
                </Heading>
                <Text as="span" color="gray.600" letterSpacing="1px" mb="34px !important">Limited time offer for this month. No credit card required.</Text>
                <Flex h="50px" mb="130px !important">
                    <Center gridGap="30px" >
                        <Input w="396px" placeholder="Email Address here" borderWidth="2px" borderRadius="0" borderColor="gray.300" />
                        <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                            <Text as="b" display="flex" alignItems="center" fontSize="14px" justifyContent="center">Subscribe</Text>
                        </Btn>
                    </Center>
                </Flex>
            </Stack>
        </React.Fragment>
    );
}