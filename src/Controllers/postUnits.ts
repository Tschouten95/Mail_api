import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllPostUnits = async (req: Request, res: Response) => {
    const allPosts = await prisma.postUnit.findMany(
      { include: { user: true} }
    )
    res.json(allPosts)
}

export const getPostUnitById = async (req: Request, res: Response) => {
    const { id } = req.params
    const post = await prisma.postUnit.findUnique({
      where: { id: Number(id) }
    })
    res.json(post)
}

export const createPostUnit = async (req: Request, res: Response) => {
    const { text, userId, recipientId } = req.body
    const post = await prisma.postUnit.create({
      data: { text, userId, recipientId }
    })
    res.json(post)
}

export const updatePostUnit = async (req: Request, res: Response) => {
    const { id } = req.params
    const { text, userId } = req.body
    const updatedPost = await prisma.postUnit.update({
      where: { id: Number(id) },
      data: {
        text,
        userId,
      }
    })
    res.json(updatedPost)
}

export const deletePostUnit = async (req: Request, res: Response) => {
    const { id } = req.params
    await prisma.postUnit.delete({
        where: { id: Number(id) }
    })
    res.json({Message: `Post ${id} deleted`})
}
