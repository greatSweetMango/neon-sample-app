import PostItem from "@/components/post/PostItem";
import { getAllPosts } from "@/lib/actions/post";
import { SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Post } from "@prisma/client";

type PostListProps = {
 posts: Post[]
}

function PostList({posts}: PostListProps) {
  
  if (!posts) return <Text>No posts found</Text>;


  return (
    <SimpleGrid columns={[1, 2, 3]}>
      {
        posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))
      }
    </SimpleGrid>
  )
}


export default async function Home() {
  const allPosts = await getAllPosts();

  return (
    <Stack>
      <Text textStyle={"2xl"}>Hello Posts</Text>
      <PostList posts={allPosts}/>
    </Stack>
  );
}

