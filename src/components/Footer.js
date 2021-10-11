import React from 'react';
import { Box, Center, Flex, Link, Stack, Text } from '@chakra-ui/layout'

function Footer() {

    const footerNav = ['Register', 'Forum', 'Affiliate', 'FAQ']

    const copyRight = '© 2021. carlosvargs. All rights reserved.'

    const icons = [
        {
            socialNetwork: 'Facebook',
            url: '',
        },
    ]

    return (
        <React.Fragment>
            <Box as="footer" display="flex" alignItems="center" justifyContent="center" backgroundColor="#A82D49" h="270px" w="full" color="white" >
                <Stack direction="column" gridGap="30px">
                    <Center gridGap="30px">
                        {
                            footerNav.map((e) => <Text as="span" fontFamily="'Nunito', sans-serif" fontSize="18px" >
                                {e}
                            </Text>)
                        }
                    </Center>
                    <Center >
                        {
                            icons.map(e => <Link href={e.url} key={e.socialNetwork} isExternal>{e.socialNetwork}</Link>)
                        }
                    </Center>
                    <Center fontSize="14px" >
                        {copyRight}
                    </Center>
                </Stack>
            </Box>
        </React.Fragment>
    );
}

export default Footer;