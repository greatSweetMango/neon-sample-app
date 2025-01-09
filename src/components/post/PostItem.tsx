import { Post } from "@prisma/client";
import { Card, Link, Text } from "@chakra-ui/react";

type PostItemProps = {
    post: Post
  }
  
export default function PostItem({post}: PostItemProps) {
    return (
      <Link href={`/posts/${post.slug}`}>
        <Card.Root bg={"gray.100"} color={"black"}>
        <Card.Header>{post.title}</Card.Header>
        <Card.Body>
            <Text>{post.createdAt.toLocaleDateString()}</Text>
          </Card.Body>
          <Card.Footer>
            <Text>{post.author}</Text>
          </Card.Footer>
        </Card.Root>
      </Link>
    )
  }