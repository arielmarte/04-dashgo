import { Button, HStack, Stack } from "@chakra-ui/react";

export function Pagination(){
    return(
        <HStack
        spacing="6"
        mt='8'
        justify='space-between'
        align='center'

        >
            <Stack direction='row' spacing='2'>
            <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='pink'
            _disabled={{
                bgColor: 'pink.500',
                cursor: 'default',
            }}
            >
                1
            </Button>
            <Button
            size='sm'
            fontSize='xs'
            width='4'
            bgColor='gray.700'
            _hover={{
                bgColor: 'gray.500'
            }}
            >
                2
            </Button>
            <Button
            size='sm'
            fontSize='xs'
            width='4'
            bgColor='gray.700'
            _hover={{
                bgColor: 'gray.500'
            }}
            >
                3
            </Button>
            </Stack>


            
        </HStack>
    );
}