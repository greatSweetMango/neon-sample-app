'use client'
import { createPost } from "@/lib/actions/post";
import { Button, Input, Container, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const slugifySentences = (sentence: string): string => {
    const slug = sentence
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/s+/g, "-");
  
    const randomLetters = Array.from({ length: 5 }, () =>
      String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join("");
  
    return `${slug}-${randomLetters}`;
  };

export default function PostCreatePage() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const title = formData.get("title") as string;
            const content = formData.get("content") as string;
            
            if (!title || !content) {
                alert("제목과 내용을 모두 입력해주세요.");
                return;
            }
            
            const slug = slugifySentences(title);
            const author = "test author"
            const authorId = "test author id"
            
            await createPost({ title, content, author, authorId, slug });
            router.push(`/`);
        } catch (error) {
            console.error("포스트 생성 중 오류 발생:", error);
            alert("포스트를 생성하는 중 오류가 발생했습니다.");
        }
    }

    return (
        <Container maxW="container.md" py={8}>
            <VStack gap={8} align="stretch">
                <Heading size="lg" textAlign="center">새 포스트 작성</Heading>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        padding: "1rem",
                        borderWidth: "1px",
                        borderRadius: "lg",
                        boxShadow: "sm"
                    }}
                >
                    <VStack gap={4}>
                        <Input type="text" name="title" placeholder="제목" size="lg" />
                        <Input type="text" name="content" placeholder="내용" size="lg" />
                        <Button
                            type="submit"
                            colorScheme="blue"
                            width="full"
                            size="lg"
                            mt={4}
                        >
                            포스트 작성
                        </Button>
                    </VStack>
                </form>
            </VStack>
        </Container>
    )
}