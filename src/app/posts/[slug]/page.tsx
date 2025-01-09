import { Container, Heading, Text, Stack, Box, HStack, Center } from "@chakra-ui/react";
import { getPostBySlug } from "@/lib/actions/post";

export default async function PostDetailPage({params}: {params: {slug: string}}) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return <Text color="red.500">No post found</Text>; // 글씨색 변경
    }
    return (
        <Center>
        <Container maxW="container.md" py={10} bg="gray.50" borderRadius="md" boxShadow="lg">
            <Stack gap={8}>
                <Box>
                    <Heading 
                        size="xl"
                        color="white" 
                        bgGradient="linear(to-r, teal.600, blue.600)"
                        mb={4}
                        textAlign="center"
                    >
                        {post?.title}
                    </Heading>
                </Box>

                <Box 
                    bg="white" 
                    p={6} 
                    borderRadius="lg" 
                    boxShadow="md"
                    border="1px"
                    borderColor="gray.200"
                >
                    <Text 
                        fontSize="lg" 
                        lineHeight="tall"
                        whiteSpace="pre-wrap"
                        color="gray.900" // 글씨색 변경
                    >
                        {post?.content}
                    </Text>
                </Box>
                <HStack justify="center" gap={4}>
                        <Box textAlign="center">
                            <Text fontWeight="bold" fontSize="lg" color="blue.600">{post?.author || "작성자"}</Text> {/* 글씨색 변경 */}
                            <Text fontSize="sm" color="gray.800"> {/* 글씨색 변경 */}
                                {post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : "작성일"}
                            </Text>
                        </Box>
                    </HStack>
            </Stack>
        </Container>
        </Center>
    )
}