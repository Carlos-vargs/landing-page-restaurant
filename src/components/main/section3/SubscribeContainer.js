import { Input } from '@chakra-ui/input';
import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';
import Btn from '../../Btn';

export default function SubscribeContainer() {
    return (
        <Fragment>
            <Stack className="smt" id="newsletter" direction="column" alignItems="center">
                <Heading color="#43121D" whiteSpace="pre-wrap" textAlign="center" fontFamily="'Nunito', sans-serif" mb="40px">
                    Hurry up! Subscribe our newsletter <br />
                    and get 25% Off
                </Heading>
                <Text as="span"
                    color="gray.600"
                    letterSpacing="1px"
                    mb="34px !important"
                    px={['30px', '30px', '30px', '0px', '0px']}
                    textAlign={['center', 'center', 'center', 'left', 'left']}
                >
                    Limited time offer for this month. No credit card required.
                </Text>
                <Flex h={['160px', '160px', '160px', '50px', '50px']} mb="130px !important">
                    <Center gridGap="30px" flexDirection={['column', 'column', 'column', 'row', 'row']} >
                        <Input w={['300px', '300px', '300px', '396px', '396px']} placeholder="Email Address here" borderWidth="2px" borderRadius="0" borderColor="gray.300" />
                        <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                            <Text as="b" display="flex" alignItems="center" fontSize="14px" justifyContent="center">Subscribe</Text>
                        </Btn>
                    </Center>
                </Flex>
            </Stack>
        </Fragment>
    );
}
