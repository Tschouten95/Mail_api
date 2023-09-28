# Notities

## Taken

- Uitzoeken wat alle tarieven betekenen
  - De tarieven verschillen per soort brief (Aangetekende brief, Prioriteit, Normaal, Telegram)
    - De tarieven zijn opgedeeld in:
                          - een basis tarief voor de BTW op de envelopen
                          - een basis tarief voor de BTW op het printen van de envelopen
                          - een tarief voor het verzenden van de brief dat begint met een basistarief dat hoger wordt gebaseerd op de hoeveelheid brieven (verschilt per soort brief)
                          - een tarief voor het drukken van de brief dat hoger wordt per brief
                          - een tarief voor het verpakken? van de brief (vertaling vanuit het italiaans is omhullen, ik ben er nog niet uit of hiermee het verpakken of de envelop      bedoelt wordt)

  - Er zijn ook opties voor (Voor en achter,Kleuren afdrukken, Retourbon, Verzendingsbewijs)
  - De tarieven voor de opties zijn opgedeeld in:
                        - Optieprijs
                        - BTW
  

- Voorstel maken om PostUnitPrice aan te passen:
          - Kolomen voor de opties(Voor en achter,Kleuren afdrukken, Retourbon, Verzendingsbewijs) toevoegen die een boolean value aannemen
          - Kolom voor basis tarief toevoegen
          - Kolom voor tarief per pagina toevoegen
          - Kolom voor de prijs van het afdrukken toevoegen
          - Kolom voor de prijs van de envelopen toevoegen

- PostalRates omzetten naar cent
- Schema aanpassen naar voorstel

- Uitzoeken hoe we de tarieven kunnen gebruiken om een prijs van een verzending te berekenen
                        - Voor iedere soort brief is er een andere API endpoint, gebaseerd op de geselecteerde API worden er basis tarieven vastgesteld
                        - Het totaalbedrag bestaat uit:
                                          - Prijs voor de pagina's
                                          - Prijs voor het afdrukken
                                          - Prijs voor de envelopen
                                          - Prijs voor en achterkant printen (Optioneel)
                                          - Prijs voor in kleur printen (Optioneel)
                                          - Prijs voor het retourBon (Optioneel)
                                          - Prijs voor het verzendingsbewijs (Optioneel)


- tarieven gebruiken om prijs van verzending te berekenen

## Multi Mail endpoint

-Schema van request aanpassen om overeen te komen met de data modelen
-Schema aanpassen naar data van User en Recipient
-Endpoint aanpassen om eerst een User en Recipient op te slaan
-Endpoint aanpassen om data van aangemaakte User en Recipient te gebruiken bij POST Request

- Ik kan de volgende data niet vinden:
      -Provincies in businesses
      -Countrycode van letter
      -Italianse klanten data

Manier vinden om op basis van city/zipcode de bijbehorende provinciecode te vinden

country van klant gebruiken we niet
businesses hebben country code die we gebruiken voor het verzenden
klant heeft een systemId die gebonden is aan een land
aanvrager van de postverzending levert het return address

- Error messages vertalen
- Endpoints aanpassen om Users inclusief relaties op te slaan
- i18Next-http-middleware instellen/gebruiken
- Vertalingen maken voor steden en landen
## Samenvatting brieven versturen

- Wie wil sturen
- Wat sturen
- Wie gaat afhandelen
- Hoeveel kost afhandeling

## Ontwerp data modellen

```yaml
address
  - street
  - houseNumber
  - postalCode
  - city
  - country
  - relations (one of):
    - user nullable
    - recipient nullable

user
  - id
  - name
  - password / token
  - relations:
    - address
    - [postUnits]
    - [recipients]

postUnit
  - text
  - relations:
    - user
    - recipient

recipient
  - relations:
    - address
    - [postUnits]

postalService
  - id
  - name
  - relation: [postUnitPrices]

postUnitPrice
  - id
  - priceInCents
  - relations:
    - postalService
    - country

country
  - id
  - name
  - relation: [postUnitPrices]
```
