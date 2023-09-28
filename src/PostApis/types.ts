export interface Option {
    nome_option: string
    nome_option_invio: string
    prezzo_option: number
    iva: number
    attivo: number
    valore_option: string
}

export const pricingOptionKeys = [
    'FronteRetro',
    'StampaColori',
    'RicevutaRitorno',
    'RicevutaDiInvio',
] as const
export type PricingOptionKey = (typeof pricingOptionKeys)[number]
export type UfficioPostalePricingOptions = Record<PricingOptionKey, Option>

export interface UfficioPostalePricingTariffe {
    iva_tariffa_postale: number
    iva_imbustamento: number
    iva_stampa_imbustamento: number
    tipologia: string
    da: number
    a: number
    tariffa_postale: number
    zona: number
    stampa: number
    imbustamento: number
}

export interface UfficioPostalePricingData {
    tariffe: UfficioPostalePricingTariffe[]
    tipologia: string
    prodotto: string
    descrizione: string
    riferimento_prezzo: string
    accetta_allegati: number
    attivo: number
    options: UfficioPostalePricingOptions
}

export interface UfficioPostalePricingResponse {
    data: UfficioPostalePricingData[]
    succes: boolean
    message: string
    error: string | null
}

export interface TranslatedOption {
    optionName: string
    sendOptionName: string
    optionPrice: number
    VAT: number
    active: number
    optionValue: string
}

export const translatedPricingOptionKeys = [
    'frontBack',
    'printColors',
    'returnReceipt',
    'dispatchReceipt',
] as const
export type TranslatedPricingOptionKey = (typeof translatedPricingOptionKeys)[number]
export type TranslatedUfficioPostalePricingOptions = Partial<Record<TranslatedPricingOptionKey, TranslatedOption>>

export interface UfficioPostalePricingRates {
    postalRateVat: number
    vatEnvelope: number
    vatPrintEnvelope: number
    typology: string
    from: number
    to: number
    postalRate: number
    area: number
    press: number
    enveloping: number
}

export interface TranslatedUfficioPostalePricingData {
    rates: UfficioPostalePricingRates[]
    typology: string
    product: string
    description: string
    priceReference: string
    acceptAttachments: number
    active: number
    options: TranslatedUfficioPostalePricingOptions
}

export interface TranslatedUfficioPostalePricingResponse extends Omit<UfficioPostalePricingResponse, 'data'> {
    data: TranslatedUfficioPostalePricingData[]
}

