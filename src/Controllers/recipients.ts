import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllRecipients = async (req: Request, res: Response) => {
    const allRecipients = await prisma.recipient.findMany()
    res.json(allRecipients)
}

export const getRecipientById = async (req: Request, res: Response) => {
    const { id } = req.params
    const recipient = await prisma.recipient.findUnique({
      where: { id: Number(id) }
    })
    res.json(recipient)
}

export const createRecipient = async (req: Request, res: Response) => {
    const { firstName, lastName, companyName, street, houseNumber, city, streetType, zipcode, provinceCode, countryId } = req.body
    const recipient = await prisma.recipient.create({
      data: {
        firstName,
        lastName,
        companyName,
        street,
        houseNumber,
        city,
        streetType,
        zipcode,
        provinceCode,
        countryId
      }
      
    })
    res.json(recipient)
}

export const updateRecipient = async (req: Request, res: Response) => {
    const { id } = req.params
    const { firstName, lastName, companyName, street, houseNumber, city, streetType, zipcode, provinceCode, countryId } = req.body
    const updatedRecipient = await prisma.recipient.update({
      where: { id: Number(id) },
      data: {
        firstName,
        lastName,
        companyName,
        street,
        houseNumber,
        city,
        streetType,
        zipcode,
        provinceCode,
        countryId
      }
    })
    res.json(updatedRecipient)
}

export const deleteRecipient = async (req: Request, res: Response) => {
    const { id } = req.params
    await prisma.recipient.delete({
      where: { id: Number(id) }
    })
    res.json({Message: `Recipient ${id} deleted`})
}

