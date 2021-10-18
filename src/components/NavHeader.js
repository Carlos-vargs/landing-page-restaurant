import React, { Fragment } from 'react';
import { Link, Text } from '@chakra-ui/layout';
import Btn from './Btn';

function NavHeader({ data, phoneNumber }) {
    return (
        <Fragment>
            {data.map(e =>
                <Link href={e.url} textDecoration="none !important" mx="12px" key={`${e.url}${Math.random}`}>
                    <Text as="b"  >
                        {e.title}
                    </Text>
                </Link>
            )}
            <Btn sizePx="16px" sizePy="6px" sizeMl="6px" bgC="#A82D49" colorTxt="white">
                <Text as="b">{phoneNumber} </Text>
            </Btn>
        </Fragment>
    );
}

export default NavHeader;