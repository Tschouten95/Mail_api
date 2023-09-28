import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()
import crypto from 'crypto'

export const createApiKey = async (req: Request, res: Response) => {
    crypto.randomBytes(48, async function(err, buffer) {
        let token = buffer.toString('hex');

        await prisma.apiKey.create({
            data: { token: token as string }
            })
      });

      
    res.json({Message: `Api key created`})
}

export const getAllApiKeys = async (req: Request, res: Response) => {
    await prisma.apiKey.findMany()
    .then((data) => {
        res.json(data)
    }
    )
}

export const validateApiKey = async (req: any, res: any, next: any) =>  {
    try
    {
      const checkApiKey = await prisma.apiKey.findUnique({ where: 
        { token: req.headers.authorization } 
      })
    
      if (checkApiKey){
        return next()
      }
    
      return res.status(401).send('Unauthorized')
    } catch (error) {
      return res.status(401).send('Unauthorized')
    }
    
  }