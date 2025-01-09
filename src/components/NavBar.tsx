import { Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Flex 
      as="nav" 
      p={4} 
      position="sticky" 
      top={0} 
      bg="gray.200" 
      zIndex={1}
      justify="space-between"
      align="center"
      boxShadow="sm"
    >
      <Link 
        as={NextLink} 
        href="/" 
        fontSize="2xl" 
        fontWeight="bold" 
        color="red.500" 
        _hover={{ textDecoration: 'none', color: 'red.600' }}
      >
        Jaehyuki Blog
      </Link>
      
      <Link 
        as={NextLink} 
        href="/posts/create"
        _hover={{ textDecoration: 'none' }}
      >
        <Button 
          colorScheme="red" 
          size="md"
          _hover={{ bg: 'red.600' }}
        >
          Create Post
        </Button>
      </Link>
    </Flex>
  )
}