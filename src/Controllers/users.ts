import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await prisma.user.findMany({
      include: { address:{
        include: { country: true }
      }, postUnits: true}
    })
    res.json(allUsers)
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { address: {
        include: { country: true }
      }, postUnits: true}
    })
    res.json(user)
}

export const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, addressId, email, recipientId } = req.body
    const user = await prisma.user.create({
      data: { 
        firstName,
        lastName,
        addressId,
      },
      include: { address: true, postUnits: true}
    })
    res.json(user)
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { firstName, lastName, email, addressId } = req.body
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        firstName,
        lastName,
        addressId: addressId,
      }
    })
    res.json(updatedUser)
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    await prisma.user.delete({
      where: { id: Number(id) }
    })
    res.json({Message: `User ${id} deleted`})
}

