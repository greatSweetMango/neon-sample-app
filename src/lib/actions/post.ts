'use server'
import { Post } from "@prisma/client";
import { prismaClient } from "../db/client";

type CreatePostDto = {
    title: string;
    content: string;
    author: string;
    authorId: string;
    slug: string;
}

export async function createPost(dto: CreatePostDto): Promise<Post> {
    console.log("createPost", dto)
    const { title, content, author, authorId, slug } = dto;

    const post = await prismaClient.post.create({ data: { title, content, author, authorId, slug } });

    return post;
}

export async function getAllPosts(): Promise<Post[]> {
    return await prismaClient.post.findMany();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    return await prismaClient.post.findUnique({ where: { slug } });
}

