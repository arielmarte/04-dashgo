import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Ariel Marte</Text>
                <Text color="gray.300" fontSize="small">meuemail@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Ariel Marte" src="https://github.com/arielmarte.png">

            </Avatar>
        </Flex>
    );
}