import { Image } from '@chakra-ui/image';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import Btn from './Btn'

export default function FoodCard({ url, title, timer, serviceCount, price, offerPrice, }) {
    return (
        <React.Fragment>
            <Stack direction="column" w="384px" h="290px" mb="1200px" textTransform="capitalize" data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <Image src="http://demo.tutsflow.com/foodera/images/foods/03.jpg" borderRadius="lg" objectFit="cover" />
                <Box mt="18px !important" px="12px">
                    <Heading as="h4" size="md" color="#48121D" fontFamily="'Nunito', sans-serif">vegetarian burger</Heading>
                    <Text as="span" mb="32px" fontFamily="'Nunito', sans-serif">time: 30 - 45 minutes | serves: 1</Text>
                    <Flex alignItems="center" gridGap="8px" mt="30px" mb="30px">
                        <Heading size="md" color="#A82D49" fontFamily="'Nunito', sans-serif" fontSize="26px" >$9.20</Heading>
                        <Heading size="md" color="#999999" textDecoration="line-through" fontFamily="'Nunito', sans-serif" fontSize="26px">$10.50</Heading>
                    </Flex>
                    <Divider />
                    <Box w="144px" mt="18px">
                        <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                            <Text as="b" display="flex" alignItems="center" justifyContent="center" gridGap="6px" >Order Now</Text>
                        </Btn>
                    </Box>
                </Box>
            </Stack>
        </React.Fragment>
    );
}