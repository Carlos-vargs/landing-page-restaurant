import React, { Fragment } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/layout';

export default function ExploreFoods() {
    return (
        <Fragment>
            <Stack direction='column' textAlign="center" mb="98px">
                <Heading fontFamily="'Nunito', sans-serif" as="h2" size="xl" lineHeight="46px" textColor="#43121D" mb="30px" >
                    Explore Our Foods
                </Heading>
                <Text textColor="gray.600" fontSize="19px" lineHeight="30px" whiteSpace="pre-wrap">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br />
                    leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br />
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                </Text>
            </Stack>
        </Fragment>

    );
}