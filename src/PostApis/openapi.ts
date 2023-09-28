
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import * as fs from 'fs';
import fetch from 'node-fetch';
import { findProvince } from './getProvince';


const prisma = new PrismaClient()

const findOrCreateRecipient = async (sender: any) => {
    console.log(sender)
    const city = sender.city.replace(/\s*\([A-Z]{2}\)$/, '');

    const zipcode = sender.zipcode.padStart(5, '0');

    const province = await findProvince(Number(zipcode))

    const user = await prisma.recipient.upsert({
        where: {
            zipcode : zipcode,
        },
        update: {},
        create: {
            firstName: sender.firstName,
            lastName: sender.lastName,
            companyName: sender.companyName,
            street: sender.street,
            houseNumber: sender.houseNumber,
            city: city,
            streetType: "Via",
            zipcode: zipcode,
            provinceCode: province,
            countryId: 1
            }
    })

    return user;
}

const filename = require.resolve('./documenten/voor tim si.pdf');
const email = fs.readFileSync(filename, 'base64');

export const sendMultiMail = async (req: Request, res: Response) => {

    const { receiver } = req.body

    try
    {
        const recipient = await findOrCreateRecipient(receiver)

        const body = 
        {
            "mittente": {
                "ragione_sociale":"Metis B.V.",
                "dug": "Via",
                "indirizzo": "Riva Tommaso Gulli",
                "civico": "12",
                "comune": "Trieste",
                "cap": "34123",
                "provincia": "TS",
                "nazione": "IT",
                "email": "info@bymetis.nl"
            },
            "destinatari": [
                {
                    "nome": recipient.firstName,
                    "cognome": recipient.lastName,
                    "ragione_sociale": recipient.companyName,
                    "dug": recipient.streetType,
                    "indirizzo": recipient.street,
                    "civico": recipient.houseNumber,
                    "comune": recipient.city,
                    "cap": recipient.zipcode,
                    "provincia": recipient.provinceCode,
                    "nazione": "IT"
                }
            ],
            "documento": [
                'data:application/pdf;base64,' + email
            ],
            "opzioni": {
                "fronteretro": false,
                "colori": false,
                "autoconfirm": false
            }
        }

        const response = await fetch('https://test.ws.ufficiopostale.com/posta_massiva/', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Authorization: 'Bearer 65018c540c87695ad1493aca'
            }
        })

        const data = await response.json()

        if (data.error === 12180) {
            return res
                .status(422).json({ error: 'Invalid address: Zipcode,City and Province are in conflict' })
        }

        res.json(data)

    } catch (error) {
        console.log(error)
        return res
            .status(400).json({ error })
    }
}