import { Heading, Stack, Text } from '@chakra-ui/layout';
import React, { Fragment } from 'react';

export default function ExploreFoods() {
    return (
        <Fragment>
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
        </Fragment>

    );
}