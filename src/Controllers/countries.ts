import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()


export const getAllCountries = async (req: Request, res: Response) => {
    const allCountries = await prisma.country.findMany({
      include: { addresses: true}
    })
    res.json(allCountries)
}

export const getCountryById = async (req: Request, res: Response) => {
  const { id } = req.params
  const country = await prisma.country.findUnique({
    where: { id: Number(id) }
  })
  res.json(country)
}

export const createCountry = async (req: Request, res: Response) => {
  const { name, code } = req.body
  const country = await prisma.country.create({
    data: { name, code }
  })
  res.json(country)
}

export const updateCountry = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, code } = req.body
  const updatedCountry = await prisma.country.update({
    where: { id: Number(id) },
    data: {
      name,
      code,
    }
  })
  res.json(updatedCountry)
}

export const deleteCountry = async (req: Request, res: Response) => {
  const { id } = req.params
  await prisma.country.delete({
    where: { id: Number(id) }
  })
  res.json({Message: `Country ${id} deleted`})
}
