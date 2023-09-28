import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllPostalServices = async (req: Request, res: Response) => {
    const allPostalServices = await prisma.postalService.findMany({
      include: { postUnitPrices: true }
    })
    res.json(allPostalServices)
}

export const getPostalServiceById = async (req: Request, res: Response) => {
  const { id } = req.params
  const postalService = await prisma.postalService.findUnique({
    where: { id: Number(id) }
  })
  res.json(postalService)
}

export const createPostalService = async (req: Request, res: Response) => {
  const { name } = req.body
  const postalService = await prisma.postalService.create({
    data: { name }
  })
  res.json(postalService)
}

export const updatePostalService = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } = req.body
  const updatedPostalService = await prisma.postalService.update({
    where: { id: Number(id) },
    data: {
      name,
    }
  })
  res.json(updatedPostalService)
}

export const deletePostalService = async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.postalService.delete({
    where: { id: Number(id) }
  })
  res.json({Message: `PostalService ${id} deleted`})
}

