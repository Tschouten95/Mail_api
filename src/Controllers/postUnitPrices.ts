import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllPostUnitPrices = async (req: Request, res: Response) => {
    const allPostUnitPrices = await prisma.postUnitPrice.findMany({
      include: { postalService: true }
    })
    res.json(allPostUnitPrices)
}

export const getPostUnitPriceById = async (req: Request, res: Response) => {
    const { id } = req.params
    const postUnitPrice = await prisma.postUnitPrice.findUnique({
      where: { id: Number(id) },
      include: { postalService: true }
    })
    res.json(postUnitPrice)
}

export const createPostUnitPrice = async (req: Request, res: Response) => {
    const { priceInCents, priceInCentsPerPage, priceInCentsPrinting, priceInCentsEnvelope,priceInCentsfrontAndBack, priceInCentsColoredPages, priceInCentsReturnReceipt, priceInCentsShippingReceipt,  postalServiceId, countryId } = req.body
    const postUnitPrice = await prisma.postUnitPrice.create({
      data: { priceInCents, priceInCentsPerPage,priceInCentsPrinting, priceInCentsEnvelope, priceInCentsfrontAndBack, priceInCentsColoredPages, priceInCentsReturnReceipt, priceInCentsShippingReceipt, postalServiceId, countryId }
    })
    res.json(postUnitPrice)
}

export const updatePostUnitPrice = async (req: Request, res: Response) => {
    const { id } = req.params
    const { priceInCents, postalServiceId } = req.body
    const updatedPostUnitPrice = await prisma.postUnitPrice.update({
      where: { id: Number(id) },
      data: {
        priceInCents,
        postalServiceId,
      }
    })
    res.json(updatedPostUnitPrice)
}

export const deletePostUnitPrice = async (req: Request, res: Response) => {
    const { id } = req.params
    await prisma.postUnitPrice.delete({
      where: { id: Number(id) }
    })
    res.json({Message: `PostUnitPrice ${id} deleted`})
}

