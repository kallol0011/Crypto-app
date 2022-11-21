import { Box, Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
    return (
        <VStack>
            <Box>
                <Spinner size={"xl"} />
            </Box>
        </VStack>
    );
};

export default Loader;
