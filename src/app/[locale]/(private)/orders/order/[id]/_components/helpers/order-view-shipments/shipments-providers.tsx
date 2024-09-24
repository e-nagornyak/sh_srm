import { type FC, type FunctionComponent, type JSX } from "react"

const Enum = {
  allegro: "allegro",
  dhl_pl: "dhl_pl",
  dpd_pl: "dpd_pl",
  inpost_kurier: "inpost_kurier",
  inpost_paczkomaty: "inpost_paczkomaty",
  poczta_polska: "poczta_polska",
  gls_pl: "gls_pl",
  fedex_pl: "fedex_pl",
  dpd_cz: "dpd_cz",
  tnt: "tnt",
  ups: "ups",
  hermes_de: "hermes_de",
  royal_mail: "royal_mail",
  yodel: "yodel",
  other: "other",
} as const

type ListOfProvidersKeys = keyof typeof Enum

interface ShipmentProvider {
  key: ListOfProvidersKeys
  displayName: string
  controller: FunctionComponent
}

const listOfProviders: { [key in ListOfProvidersKeys]: ShipmentProvider } = {
  allegro: {
    key: "allegro",
    displayName: "Allegro",
    controller: () => <div>allegro</div>,
  },
  dhl_pl: {
    key: "dhl_pl",
    displayName: "DHL PL",
    controller: () => <div>dhl_pl</div>,
  },
  dpd_pl: {
    key: "dpd_pl",
    displayName: "DPD PL",
    controller: () => <div>dpd_pl</div>,
  },
  inpost_kurier: {
    key: "inpost_kurier",
    displayName: "InPost Kurier",
    controller: () => <div>inpost_kurier</div>,
  },
  inpost_paczkomaty: {
    key: "inpost_paczkomaty",
    displayName: "InPost Paczkomaty",
    controller: () => <div>inpost_paczkomaty</div>,
  },
  poczta_polska: {
    key: "poczta_polska",
    displayName: "Poczta Polska",
    controller: () => <div>poczta_polska</div>,
  },
  gls_pl: {
    key: "gls_pl",
    displayName: "GLS PL",
    controller: () => <div>gls_pl</div>,
  },
  fedex_pl: {
    key: "fedex_pl",
    displayName: "FedEx PL",
    controller: () => <div>fedex_pl</div>,
  },
  dpd_cz: {
    key: "dpd_cz",
    displayName: "DPD CZ",
    controller: () => <div>dpd_cz</div>,
  },
  tnt: {
    key: "tnt",
    displayName: "TNT",
    controller: () => <div>tnt</div>,
  },
  ups: {
    key: "ups",
    displayName: "UPS",
    controller: () => <div>ups</div>,
  },
  hermes_de: {
    key: "hermes_de",
    displayName: "Hermes DE",
    controller: () => <div>hermes_de</div>,
  },
  royal_mail: {
    key: "royal_mail",
    displayName: "Royal Mail",
    controller: () => <div>royal_mail</div>,
  },
  yodel: {
    key: "yodel",
    displayName: "Yodel",
    controller: () => <div>yodel</div>,
  },
  other: {
    key: "other",
    displayName: "Other",
    controller: () => <div>other</div>,
  },
}

const providers: ListOfProvidersKeys[] = [
  "allegro",
  "dhl_pl",
  "dpd_pl",
  "inpost_kurier",
  "inpost_paczkomaty",
  "poczta_polska",
  "gls_pl",
  "fedex_pl",
  "dpd_cz",
  "tnt",
  "ups",
  "hermes_de",
  "royal_mail",
  "yodel",
  "other",
]

const providersMap = Object.entries(listOfProviders)
  .filter(([key]) => providers?.includes(key as ListOfProvidersKeys))
  .map(([, value]) => value)

export { providersMap, type ShipmentProvider }
