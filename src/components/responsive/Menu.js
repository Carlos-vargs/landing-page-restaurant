import React, { Fragment, useState } from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { MenuAlt1Icon } from '@heroicons/react/outline';

export default function Menu({ data }) {

    const [isOpen, setisOpen] = useState(false)
    const [valueTransform, setValueTransform] = useState(0)


    function setOpen() {
        setisOpen(true)
    }

    function setClose() {
        setisOpen(false)
    }

    function handleClick() {
        if (isOpen) {
            setValueTransform(0)

            setTimeout(() => {

                setClose()
            }, 501);

        } else {
            setOpen()

            setTimeout(() => {
                setValueTransform(1)

            }, 100);
        }
    }

    return (
        <Fragment>
            <Box
                onClick={handleClick}
                cursor="pointer"
                alignItems="center"
                color="gray.800"
                display='flex'
                width="30px"
                height="30px"
            >
                <MenuAlt1Icon />
            </Box>
            {
                isOpen && <Stack
                    transform={`scaleY(${valueTransform})`}
                    transition='transform 0.5s ease'
                    transformOrigin='top'
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    w="full"
                    h="230px"
                    top="80px"
                    bgColor="#262626"
                    position="absolute"
                    left="0"
                >
                    {data.map(e =>
                        <Link href={e.url} textDecoration="none !important" key={`${e.url}${Math.random}`} onClick={handleClick}>
                            <Text as="b"  >
                                {e.title}
                            </Text>
                        </Link>
                    )}
                </Stack>
            }
        </Fragment >
    )
}
