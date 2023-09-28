import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()


export const getAllAddresses = async(req: Request, res: Response) => {
    const allAddresses = await prisma.address.findMany({
      include: { country: true }
    })
    res.json(allAddresses)
  }

export const getAddressById = async (req: Request, res: Response) => {
    const { id } = req.params
    const address = await prisma.address.findUnique({
      where: { id: Number(id) },
      include: { country: true }
    })
    res.json(address)
}

export const createAddress = async (req: Request, res: Response) => {
    const { street, houseNumber, city, streetType, zipcode, provinceCode, countryId } = req.body
  
    const address = await prisma.address.create({
      data: { street, houseNumber, city, streetType, zipcode, provinceCode, countryId }
    })
  
    res.json(address)
}

export const updateAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    const { street, houseNumber, city, streetType, zipcode, provinceCode, countryId } = req.body
    const updatedAddress = await prisma.address.update({
      where: { id: Number(id) },
      data: {
        street,
        houseNumber,
        city,
        streetType,
        zipcode,
        provinceCode,
        countryId,
      },
      include: { country: true }
    })
    res.json(updatedAddress)
}

export const deleteAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    await prisma.address.delete({
      where: { id: Number(id) }
    })
    res.json({Message: `Address ${id} deleted`})
}
