import { Image } from '@chakra-ui/image';
import { Center, Flex } from '@chakra-ui/layout';
import React from 'react';
import logo from '../images/logoRNW.png'
import NavHeader from './NavHeader';
import Menu from './responsive/Menu';

export default function Header() {


    const nav = [
        { title: 'Home', url: '#home' },
        { title: 'About Us', url: '#aboutUs' },
        { title: 'Our History', url: '#ourHistory' },
        { title: 'Explore Foods', url: '#exploreFoods' },
        { title: 'Newsletter', url: '#newsletter' },
    ]

    const phoneNumber = '1800 789 123'

    const userScreen = window.screen.width

    return (
        <Flex
            justifyContent="space-between"
            h={['80px', '80px', '80px', '100px', '100px']}
            bgColor="white"
            px={['30px', '30px', '90px', '90px', '90px']}
            py={['10px', '10px', '10px', '0px', '0px']}
            position="fixed"
            w="full"
            textColor="white"
            zIndex="25"
        >
            <Center>
                <Image src={logo} w={['100px', '100px', '100px', '130px', '130px']} alt="app logo" />
            </Center>
            <Center textColor="#A82D49" cursor="pointer" display='flex' >
                {
                    userScreen > 1280
                        ? <NavHeader data={nav} phoneNumber={phoneNumber} />
                        : <Menu data={nav} />
                }
            </Center>
        </Flex>
    );
}