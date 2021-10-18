import React from 'react';
import { Center, Flex } from '@chakra-ui/layout';
import CardCounter from './CardCounter';

function CounterInfo() {

    const dataCounter = [
        {
            num: 1287,
            text: 'savings'
        },
        {
            num: 5786,
            text: 'photos'
        },
        {
            num: 1440,
            text: 'rockets'
        },
        {
            num: 7110,
            text: 'globes'
        },
    ]

    return (
        <Flex w="full" bg="#A82D49" h={['full','full','full','166px','166px']} mb="100px" color="white" px="166px" justifyContent="center" >
            <Center gridGap={['40px','40px','40px','100px','100px']} flexDirection={['column','column','column','row','row']} py={['40px','40px','40px','0px', '0px']}>
                {
                    dataCounter.map(item =>
                        <CardCounter
                            key={`${item.num}${Math.random()}`}
                            num={item.num}
                            text={item.text}
                        />)
                }
            </Center>
        </Flex>
    );
}

export default CounterInfo;