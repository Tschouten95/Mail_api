
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import * as fs from 'fs';
import { UfficioPostalePricingTariffe, UfficioPostalePricingRates, Option, TranslatedOption, UfficioPostalePricingData, TranslatedUfficioPostalePricingData, UfficioPostalePricingResponse, TranslatedUfficioPostalePricingResponse, TranslatedUfficioPostalePricingOptions, UfficioPostalePricingOptions } from './types';
import fetch from 'node-fetch';


const prisma = new PrismaClient()

function translateRates (tariffe: UfficioPostalePricingTariffe[]): UfficioPostalePricingRates[] {
    return tariffe.map((item): UfficioPostalePricingRates => {
        return {
            postalRateVat: item.iva_tariffa_postale,
            vatEnvelope: item.iva_imbustamento,
            vatPrintEnvelope: item.iva_stampa_imbustamento,
            typology: item.tipologia,
            from: item.da,
            to: item.a,
            postalRate: item.tariffa_postale,
            area: item.zona,
            press: item.stampa,
            enveloping: item.imbustamento,
        }
    })
}

function translateOption(option?: Option): TranslatedOption | undefined {
    if (option) {
        return {
            optionName: option.nome_option,
            sendOptionName: option.nome_option_invio,
            optionPrice: option.prezzo_option,
            VAT: option.iva,
            active: option.attivo,
            optionValue: option.valore_option
        }
    } 
}

function translateOptions (options: UfficioPostalePricingOptions): TranslatedUfficioPostalePricingOptions { 
    return {
        frontBack: translateOption(options.FronteRetro),
        printColors: translateOption(options.StampaColori),
        returnReceipt: translateOption(options.RicevutaRitorno),
        dispatchReceipt: translateOption(options.RicevutaDiInvio)
    }
}

function translateData(data: UfficioPostalePricingData): TranslatedUfficioPostalePricingData {
    return {
        
        typology: data.tipologia,
        product: data.prodotto,
        description: data.descrizione,
        priceReference: data.riferimento_prezzo,
        acceptAttachments: data.accetta_allegati,
        active: data.attivo,
        rates: translateRates(data.tariffe),
        options: translateOptions(data.options)
    }
}

function translateResponse(response: UfficioPostalePricingResponse): TranslatedUfficioPostalePricingResponse {
    const data = []

    for (const item of response.data) {
        data.push(translateData(item))
    }

    return {
        data,
        succes: response.succes,
        message: response.message,
        error: response.error
    }
}

export const getUfficioPostalePricingData = async (req: Request, res: Response) => {
    const Response =  await fetch('https://test.ws.ufficiopostale.com/pricing/', {
        method: 'GET',
        headers: { Authorization: 'Bearer 65018c540c87695ad1493aca' }
    })

    const data = translateResponse(await Response.json())

    res.json(data)
}

const filename = require.resolve('./documenten/voor tim si.pdf');
const email = fs.readFileSync(filename, 'base64');

export const createUfficioPostalePricingData = async (req: any, res: Response) => {
    const { senderId, receiverId } = req.body
    
    const sender = await prisma.user.findUnique({
        where: { id: Number(senderId) },
        include: { address: true, postUnits: true }
    })

    const country1 = await prisma.country.findUnique({
        where: { id: Number(sender?.address.countryId) }
    })

    const receiver = await prisma.user.findUnique({
        where: { id: Number(receiverId) },
        include: { address: true, postUnits: true }
    })


    const country2 = await prisma.country.findUnique({
        where: { id: Number(receiver?.address.countryId) }
    })

    const body =
    {
        opzioni: {
            fronteretro: true,
            colori: false, 
            autoconfirm: false,
            ricevuta: false,
            callback_url: 'https://www.example.com/status_updates',
            callback_field: 'data',
            headers: {session_id: '1234567890'},
            timestamp_invio: '2021-01-01T00:00:00',
            ar: false
        },
        mittente: {
            cognome: sender?.lastName, //surname
            nome: sender?.firstName, //name
            cap: sender?.address.zipcode, //zip code
            comune: sender?.address.city, //city
            dug: sender?.address.streetType, //street type
            indirizzo: sender?.address.street, //street name
            nazione: country1?.code, //country
            civico: sender?.address.houseNumber, //house number
            provincia: sender?.address.provinceCode, //province
        },
        destinatari: [
            {
                cognome: receiver?.firstName, //surname
                nome: receiver?.lastName, //name
                cap: receiver?.address.zipcode, //zip code
                comune: receiver?.address.city, //city
                dug: receiver?.address.streetType, //street type
                indirizzo: receiver?.address.street, //street name
                nazione: country2?.code, //country
                civico: receiver?.address.houseNumber, //house number
                provincia: receiver?.address.provinceCode, //province
            }
        ],
        documento: [
            'data:application/pdf;base64,' + email
          ]
    };

    const response = await fetch('https://test.ws.ufficiopostale.com/ordinarie/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            Authorization: 'Bearer 65018c540c87695ad1493aca'
        }
    })

    const data = await response.json()
    res.json(data)
}