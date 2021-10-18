import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import photo from '../../../images/bgAtch.jpg'
import React, { Fragment } from 'react';
import { PlayIcon } from '@heroicons/react/solid';

export default function AboutOurHistory() {
    return (
        <Fragment>
            <Flex
                id="ourHistory"
                justifyContent="center"
                mt="130px"
                mb={['100px','100px','100px','150px','150px']}
                position="relative"
                bgImg={`url(${photo})`}
                color="white"
                w="full"
                h="450px"
                bgPosition={['right', 'right', 'right', 'center', 'center']}
                bgSize={['auto', 'auto', 'auto', 'cover', 'cover']}
            >
                <Center>
                    <Stack direction={'column'} textAlign="center" px={['26px', '26px', '26px', '0px', '0px']}>
                        <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" mb="6px" lineHeight="46px" textColor="#A82D49" whiteSpace="pre-wrap" >
                            When a man's stomach is full it makes no <br />
                            difference whether he is rich or poor.
                        </Heading>
                        <Text as="span" whiteSpace="pre-wrap" textColor="gray.600" fontSize="18px" lineHeight="34px" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </Text>
                        <Text cursor="pointer" as="span" mt="16px !important" display="flex" alignItems="center" justifyContent="center" gridGap="6px" color="#43121D" fontSize="18px"><PlayIcon width="26px" height="26px" /> Watch Our Story</Text>
                    </Stack>
                </Center>
            </Flex>
        </Fragment>
    );
}