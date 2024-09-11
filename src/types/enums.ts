export const DeliveryCountryCodeList = {
  CZ: "CZ",
  EE: "EE",
  GR: "GR",
  HR: "HR",
  LT: "LT",
  LV: "LV",
  NL: "NL",
  PL: "PL",
  SI: "SI",
  SK: "SK",
} as const

export type DeliveryCountryCodeKeys = keyof typeof DeliveryCountryCodeList
export const DeliveryCountryCodeMap = Object.keys(DeliveryCountryCodeList)

export const DeliveryMethodList = {
  ["Kurier DPD"]: "Kurier DPD",
  ["kurier dpd + paczka zwrotna"]: "kurier dpd + paczka zwrotna",
  ["Allegro Automat DHL BOX 24/7"]: "Allegro Automat DHL BOX 24/7",
  ["Allegro Automat DHL POP BOX"]: "Allegro Automat DHL POP BOX",
  ["Allegro Automat ORLEN Paczka (важна до 10.10.2024)"]:
    "Allegro Automat ORLEN Paczka (важна до 10.10.2024)",
  ["Allegro Automat Pocztex"]: "Allegro Automat Pocztex",
  ["Allegro Automaty Paczkowe DPD Czechy"]:
    "Allegro Automaty Paczkowe DPD Czechy",
  ["Allegro Automaty Paczkowe DPD Słowacja"]:
    "Allegro Automaty Paczkowe DPD Słowacja",
  ["Allegro International Automaty Paczkowe Czechy"]:
    "Allegro International Automaty Paczkowe Czechy",
  ["Allegro International Automaty Paczkowe Czechy pobranie"]:
    "Allegro International Automaty Paczkowe Czechy pobranie",
  ["Allegro International Kurier Czechy"]:
    "Allegro International Kurier Czechy",
  ["Allegro International Kurier Czechy pobranie"]:
    "Allegro International Kurier Czechy pobranie",
  ["Allegro International Odbiór w Punkcie Czechy"]:
    "Allegro International Odbiór w Punkcie Czechy",
  ["Allegro International Odbiór w Punkcie Czechy pobranie"]:
    "Allegro International Odbiór w Punkcie Czechy pobranie",
  ["Allegro Kurier DHL"]: "Allegro Kurier DHL",
  ["Allegro Kurier DHL Chorwacja"]: "Allegro Kurier DHL Chorwacja",
  ["Allegro Kurier DHL Czechy"]: "Allegro Kurier DHL Czechy",
  ["Allegro Kurier DHL Czechy pobranie"]: "Allegro Kurier DHL Czechy pobranie",
  ["Allegro Kurier DHL Holandia"]: "Allegro Kurier DHL Holandia",
  ["Allegro Kurier DHL Słowacja"]: "Allegro Kurier DHL Słowacja",
  ["Allegro Kurier DHL Słowacja pobranie"]:
    "Allegro Kurier DHL Słowacja pobranie",
  ["Allegro Kurier DPD"]: "Allegro Kurier DPD",
  ["Allegro Kurier DPD Czechy"]: "Allegro Kurier DPD Czechy",
  ["Allegro Kurier DPD Czechy pobranie"]: "Allegro Kurier DPD Czechy pobranie",
  ["Allegro Kurier DPD Litwa"]: "Allegro Kurier DPD Litwa",
  ["Allegro Kurier DPD Słowacja"]: "Allegro Kurier DPD Słowacja",
  ["Allegro Kurier DPD Słowacja pobranie"]:
    "Allegro Kurier DPD Słowacja pobranie",
  ["Allegro Kurier DPD Słowenia"]: "Allegro Kurier DPD Słowenia",
  ["Allegro Kurier DPD Łotwa"]: "Allegro Kurier DPD Łotwa",
  ["Allegro Kurier Pocztex"]: "Allegro Kurier Pocztex",
  ["Allegro Kurier UPS"]: "Allegro Kurier UPS",
  ["Allegro Kurier24 InPost"]: "Allegro Kurier24 InPost",
  ["Allegro MiniPrzesyłka"]: "Allegro MiniPrzesyłka",
  ["Allegro Odbiór w Punkcie DHL"]: "Allegro Odbiór w Punkcie DHL",
  ["Allegro Odbiór w Punkcie DPD Pickup"]:
    "Allegro Odbiór w Punkcie DPD Pickup",
  ["Allegro Odbiór w Punkcie DPD Pickup Czechy"]:
    "Allegro Odbiór w Punkcie DPD Pickup Czechy",
  ["Allegro Odbiór w Punkcie DPD Pickup Słowacja"]:
    "Allegro Odbiór w Punkcie DPD Pickup Słowacja",
  ["Allegro Odbiór w Punkcie ORLEN Paczka"]:
    "Allegro Odbiór w Punkcie ORLEN Paczka",
  ["Allegro Odbiór w Punkcie ORLEN Paczka (важна до 10.10.2024)"]:
    "Allegro Odbiór w Punkcie ORLEN Paczka (важна до 10.10.2024)",
  ["Allegro Odbiór w Punkcie Pocztex"]: "Allegro Odbiór w Punkcie Pocztex",
  ["Allegro Odbiór w Punkcie UPS"]: "Allegro Odbiór w Punkcie UPS",
  ["Allegro One Box"]: "Allegro One Box",
  ["Allegro One Box, DPD"]: "Allegro One Box, DPD",
  ["Allegro One Box, UPS"]: "Allegro One Box, UPS",
  ["Allegro One Punkt"]: "Allegro One Punkt",
  ["Allegro One Punkt, DPD"]: "Allegro One Punkt, DPD",
  ["Allegro One Punkt, UPS"]: "Allegro One Punkt, UPS",
  ["Allegro Paczkomaty InPost"]: "Allegro Paczkomaty InPost",
  ["Allegro Przesyłka polecona"]: "Allegro Przesyłka polecona",
  ["Allegro Wysyłka z Polski do Czech - Automaty Paczkowe Packeta"]:
    "Allegro Wysyłka z Polski do Czech - Automaty Paczkowe Packeta",
  ["Allegro Wysyłka z Polski do Czech - Automaty Paczkowe Packeta pobranie"]:
    "Allegro Wysyłka z Polski do Czech - Automaty Paczkowe Packeta pobranie",
  ["Allegro Wysyłka z Polski do Czech - Odbiór w Punkcie Packeta"]:
    "Allegro Wysyłka z Polski do Czech - Odbiór w Punkcie Packeta",
  ["Allegro Wysyłka z Polski do Czech - Odbiór w Punkcie Packeta pobranie"]:
    "Allegro Wysyłka z Polski do Czech - Odbiór w Punkcie Packeta pobranie",
  ["Allegro Wysyłka z Polski do Słowacji - Automaty Paczkowe Packeta"]:
    "Allegro Wysyłka z Polski do Słowacji - Automaty Paczkowe Packeta",
  ["Allegro Wysyłka z Polski do Słowacji - Automaty Paczkowe Packeta pobranie"]:
    "Allegro Wysyłka z Polski do Słowacji - Automaty Paczkowe Packeta pobranie",
  ["Allegro Wysyłka z Polski do Słowacji - Odbiór w Punkcie Packeta"]:
    "Allegro Wysyłka z Polski do Słowacji - Odbiór w Punkcie Packeta",
  ["Allegro Wysyłka z Polski do Słowacji - Odbiór w Punkcie Packeta pobranie"]:
    "Allegro Wysyłka z Polski do Słowacji - Odbiór w Punkcie Packeta pobranie",
  ["Cross-border"]: "Cross-border",
  ["dpd kurier"]: "dpd kurier",
  ["dpd kurier paczka zwrotna"]: "dpd kurier paczka zwrotna",
  ["dpd_pickup (crossdocking)"]: "dpd_pickup (crossdocking)",
  ["Inpost kurier"]: "Inpost kurier",
  ["inpost paczkomat"]: "inpost paczkomat",
  ["InPost Paczkomaty (wysyłka do 17.00)"]:
    "InPost Paczkomaty (wysyłka do 17.00)",
  ["InPost Paczkomaty (wysyłка до 19.00)"]:
    "InPost Paczkomaty (wysyłка до 19.00)",
  ["InPost Paczkomaty 24/7"]: "InPost Paczkomaty 24/7",
  ["InPost Paczkomaty 24/7 Paczka w Weekend"]:
    "InPost Paczkomaty 24/7 Paczka w Weekend",
  ["InPost Paczkomaty Paczka w Weekend (wysyłka до 17.00)"]:
    "InPost Paczkomaty Paczka w Weekend (wysyłка до 17.00)",
  ["InPost Paczkomaty Paczka w Weekend (wysyłка до 19.00)"]:
    "InPost Paczkomaty Paczka w Weekend (wysyłка до 19.00)",
  ["itela_smartpost (crossdocking)"]: "itela_smartpost (crossdocking)",
  ["KURIER"]: "KURIER",
  ["Kurier - płatność za pobрaniem"]: "Kurier - płatność за pobрaniem",
  ["Kurier DHL"]: "Kurier DHL",
  ["Kurier DPD paczka zwrotna"]: "Kurier DPD paczka zwrotna",
  ["Kurier DPD pczka zwrotna"]: "Kurier DPD pczka zwrotna",
  ["Kurier DPD pobranie"]: "Kurier DPD pobranie",
  ["Kurier InPost"]: "Kurier InPost",
  ["kurier inpost за pobрaniem"]: "kurier inpost за pobрaniem",
  ["Kurier InPost за pobрaniem (wysyłка до 17.00)"]:
    "Kurier InPost за pobрaniem (wysyłка до 17.00)",
  ["Kurier InPost (wysyłka до 19.00)"]: "Kurier InPost (wysyłка до 19.00)",
  ["Kurier InPost pobranie (wysyłka до 19.00)"]:
    "Kurier InPost pobranie (wysyłка до 19.00)",
  ["Kurier InPost płatność online (wysyłka до 17.00)"]:
    "Kurier InPost płatność online (wysyłка до 17.00)",
  ["Kurier InPost płatność online (wysyłка до 19.00)"]:
    "Kurier InPost płatność online (wysyłка до 19.00)",
  ["Kurtier DPD"]: "Kurtier DPD",
  ["lp_express (crossdocking)"]: "lp_express (crossdocking)",
  ["odbiór osobisty"]: "odbiór osobisty",
  ["ORLEN Paczka"]: "ORLEN Paczka",
  ["our_terminal (crossdocking)"]: "our_terminal (crossdocking)",
  ["Paczkomat"]: "Paczkomat",
  ["Paczkomat Inpost"]: "Paczkomat Inpost",
  ["Paczkomat inpost paczka weekendowa"]: "Paczkomat inpost paczka weekendowa",
  ["Paczkomat inpost weekendowa"]: "Paczkomat inpost weekendowa",
  ["Paczkomat inpost weekendowa paczka"]: "Paczkomat inpost weekendowa paczka",
  ["Paczkomat inpost за pobрaniem"]: "Paczkomat inpost за pobрaniem",
  ["paczkomat paczka weekendowa"]: "paczkomat paczka weekendowa",
  ["Paczkomaty InPost"]: "Paczkomaty InPost",
  ["Paczkomaty Paczka w Weekend"]: "Paczkomaty Paczka w Weekend",
  ["Poczta Polska (Dostawa 5-7 dni)"]: "Poczta Polska (Dostawa 5-7 dni)",
  ["post_24"]: "post_24",
  ["post_24 (crossdocking)"]: "post_24 (crossdocking)",
  ["post_ee (crossdocking)"]: "post_ee (crossdocking)",
  ["post_lt (crossdocking)"]: "post_lt (crossdocking)",
  ["post_lv"]: "post_lv",
  ["post_lv (crossdocking)"]: "post_lv (crossdocking)",
  ["post_lv_terminal (crossdocking)"]: "post_lv_terminal (crossdocking)",
  ["remote_self"]: "remote_self",
  ["remote_self (crossdocking)"]: "remote_self (crossdocking)",
  ["shipment"]: "shipment",
  ["shipment (crossdocking)"]: "shipment (crossdocking)",
} as const

export type DeliveryMethodKeys = keyof typeof DeliveryMethodList
export const DeliveryMethodMap = Object.keys(DeliveryMethodList)

export const CurrencyList = {
  CZK: "CZK",
  PLN: "PLN",
  EUR: "EUR",
} as const

export type CurrencyKeys = keyof typeof CurrencyList
export const CurrencyMap = Object.keys(CurrencyList)

export const OrderSourceList = {
  shop: "shop",
  personal: "personal",
  allegro: "allegro",
  empik: "empik",
  skroutz: "skroutz",
  pigu: "pigu",
}

export type OrderSourceKeys = keyof typeof OrderSourceList
export const OrderSourceMap = Object.keys(OrderSourceList)
