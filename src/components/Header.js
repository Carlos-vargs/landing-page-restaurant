import { Image } from '@chakra-ui/image';
import { Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import logo from '../images/logo.png'
import Btn from './Btn';




export default function Header() {

    const nav = ['Home', 'About Us', 'Explore', 'Foods', 'Reviews', 'FAQ']
    const phoneNumber = '1800 789 123'

    return (
        <Flex h="100px" bgColor="white" px="90px" position="fixed" w="100%" textColor="white" zIndex="25">
            <Center>
                <Image src={logo} alt="app logo" />
            </Center>
            <Spacer />
            <Center textColor="#A82D49" cursor="pointer">
                {nav.map(e =>
                    <Text as="b" key={`${e}${Math.random}`} mx="12px">{e}</Text>
                )}
            </Center>
            <Center>
                <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                    <Text as="b">{phoneNumber} </Text>
                </Btn>
            </Center>
        </Flex>
    );
}