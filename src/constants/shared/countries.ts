// Create an interface for the country with an optional icon field
interface CountryType {
  code: string
  label: string
}

// Array of available country codes
const countryCodes = [
  "AF",
  "AX",
  "AL",
  "DZ",
  "AS",
  "AD",
  "AO",
  "AI",
  "AQ",
  "AG",
  "AR",
  "AM",
  "AW",
  "AU",
  "AT",
  "AZ",
  "A2",
  "BS",
  "BH",
  "BD",
  "BB",
  "BY",
  "BE",
  "BZ",
  "BJ",
  "BM",
  "BT",
  "BO",
  "BQ",
  "BA",
  "BW",
  "BV",
  "BR",
  "IO",
  "BN",
  "BG",
  "BF",
  "BI",
  "KH",
  "CM",
  "CA",
  "IC",
  "CV",
  "KY",
  "CF",
  "TD",
  "CL",
  "CN",
  "CX",
  "CC",
  "CO",
  "KM",
  "CG",
  "CD",
  "CK",
  "CR",
  "CI",
  "HR",
  "CU",
  "CW",
  "CY",
  "CZ",
  "DK",
  "DJ",
  "DM",
  "DO",
  "EC",
  "EG",
  "SV",
  "GQ",
  "ER",
  "EE",
  "ET",
  "FK",
  "FO",
  "FJ",
  "FI",
  "FR",
  "GF",
  "PF",
  "TF",
  "GA",
  "GM",
  "GE",
  "DE",
  "GH",
  "GI",
  "GR",
  "GL",
  "GD",
  "GP",
  "GU",
  "GT",
  "GG",
  "GN",
  "GW",
  "GY",
  "HT",
  "HM",
  "VA",
  "HN",
  "HK",
  "HU",
  "IS",
  "IN",
  "ID",
  "IR",
  "IQ",
  "IE",
  "IM",
  "IL",
  "IT",
  "JM",
  "JP",
  "JE",
  "JO",
  "KZ",
  "KE",
  "KI",
  "KR",
  "XK",
  "KO",
  "KW",
  "KG",
  "LA",
  "LV",
  "LB",
  "LS",
  "LR",
  "LY",
  "LI",
  "LT",
  "LU",
  "MO",
  "MK",
  "MG",
  "M3",
  "MW",
  "MY",
  "MV",
  "ML",
  "MT",
  "MH",
  "MQ",
  "MR",
  "MU",
  "YT",
  "MX",
  "FM",
  "MD",
  "MC",
  "MN",
  "ME",
  "MS",
  "MA",
  "MZ",
  "MM",
  "NA",
  "NR",
  "NP",
  "NL",
  "AN",
  "NC",
  "NZ",
  "NI",
  "NE",
  "NG",
  "NU",
  "NF",
  "NB",
  "MP",
  "NO",
  "OM",
  "PK",
  "PW",
  "PS",
  "PA",
  "PG",
  "PY",
  "PE",
  "PH",
  "PN",
  "PO",
  "PL",
  "PT",
  "PR",
  "QA",
  "RE",
  "RO",
  "RT",
  "RU",
  "RW",
  "S1",
  "BL",
  "SH",
  "KN",
  "LC",
  "MF",
  "PM",
  "VC",
  "SP",
  "WS",
  "SM",
  "ST",
  "SA",
  "SN",
  "RS",
  "SC",
  "SL",
  "SG",
  "SK",
  "SI",
  "SB",
  "SO",
  "ZA",
  "GS",
  "ES",
  "LK",
  "SW",
  "C3",
  "E2",
  "UV",
  "SX",
  "VL",
  "SD",
  "SR",
  "SJ",
  "SZ",
  "SE",
  "CH",
  "SY",
  "TA",
  "TW",
  "TJ",
  "TZ",
  "TH",
  "TL",
  "TI",
  "TG",
  "TK",
  "TO",
  "ZZ",
  "TT",
  "TU",
  "TN",
  "TR",
  "TM",
  "TC",
  "TV",
  "UG",
  "UA",
  "UI",
  "AE",
  "GB",
  "US",
  "UM",
  "UY",
  "UZ",
  "VU",
  "VE",
  "VN",
  "VR",
  "VG",
  "VI",
  "WF",
  "EH",
  "YA",
  "YE",
  "ZM",
  "ZW",
] as const

// Create a type for available country codes
type CountryCodes = (typeof countryCodes)[number]

// List of countries using country code as key
const countryList: { [key in CountryCodes]: CountryType } = {
  AF: { code: "AF", label: "Afghanistan" },
  AX: { code: "AX", label: "Aland Islands" },
  AL: { code: "AL", label: "Albania" },
  DZ: { code: "DZ", label: "Algeria" },
  AS: { code: "AS", label: "American Samoa" },
  AD: { code: "AD", label: "Andorra" },
  AO: { code: "AO", label: "Angola" },
  AI: { code: "AI", label: "Anguilla" },
  AQ: { code: "AQ", label: "Antarctica" },
  AG: { code: "AG", label: "Antigua And Barbuda" },
  AR: { code: "AR", label: "Argentina" },
  AM: { code: "AM", label: "Armenia" },
  AW: { code: "AW", label: "Aruba" },
  AU: { code: "AU", label: "Australia" },
  AT: { code: "AT", label: "Austria" },
  AZ: { code: "AZ", label: "Azerbaijan" },
  A2: { code: "A2", label: "Azores" },
  BS: { code: "BS", label: "Bahamas" },
  BH: { code: "BH", label: "Bahrain" },
  BD: { code: "BD", label: "Bangladesh" },
  BB: { code: "BB", label: "Barbados" },
  BY: { code: "BY", label: "Belarus" },
  BE: { code: "BE", label: "Belgium" },
  BZ: { code: "BZ", label: "Belize" },
  BJ: { code: "BJ", label: "Benin" },
  BM: { code: "BM", label: "Bermuda" },
  BT: { code: "BT", label: "Bhutan" },
  BO: { code: "BO", label: "Bolivia" },
  BQ: { code: "BQ", label: "Bonaire, St. Eustatius, Saba" },
  BA: { code: "BA", label: "Bosnia And Herzegovina" },
  BW: { code: "BW", label: "Botswana" },
  BV: { code: "BV", label: "Bouvet Island" },
  BR: { code: "BR", label: "Brazil" },
  IO: { code: "IO", label: "British Indian Ocean Territory" },
  BN: { code: "BN", label: "Brunei Darussalam" },
  BG: { code: "BG", label: "Bulgaria" },
  BF: { code: "BF", label: "Burkina Faso" },
  BI: { code: "BI", label: "Burundi" },
  KH: { code: "KH", label: "Cambodia" },
  CM: { code: "CM", label: "Cameroon" },
  CA: { code: "CA", label: "Canada" },
  IC: { code: "IC", label: "Canary Islands" },
  CV: { code: "CV", label: "Cape Verde" },
  KY: { code: "KY", label: "Cayman Islands" },
  CF: { code: "CF", label: "Central African Republic" },
  TD: { code: "TD", label: "Chad" },
  CL: { code: "CL", label: "Chile" },
  CN: { code: "CN", label: "China" },
  CX: { code: "CX", label: "Christmas Island" },
  CC: { code: "CC", label: "Cocos (Keeling) Islands" },
  CO: { code: "CO", label: "Colombia" },
  KM: { code: "KM", label: "Comoros" },
  CG: { code: "CG", label: "Congo" },
  CD: { code: "CD", label: "Congo, Democratic Republic" },
  CK: { code: "CK", label: "Cook Islands" },
  CR: { code: "CR", label: "Costa Rica" },
  CI: { code: "CI", label: "Cote D'Ivoire" },
  HR: { code: "HR", label: "Croatia" },
  CU: { code: "CU", label: "Cuba" },
  CW: { code: "CW", label: "Curaçao (Netherlands Antilles)" },
  CY: { code: "CY", label: "Cyprus" },
  CZ: { code: "CZ", label: "Czech Republic" },
  DK: { code: "DK", label: "Denmark" },
  DJ: { code: "DJ", label: "Djibouti" },
  DM: { code: "DM", label: "Dominica" },
  DO: { code: "DO", label: "Dominican Republic" },
  EC: { code: "EC", label: "Ecuador" },
  EG: { code: "EG", label: "Egypt" },
  SV: { code: "SV", label: "El Salvador" },
  GQ: { code: "GQ", label: "Equatorial Guinea" },
  ER: { code: "ER", label: "Eritrea" },
  EE: { code: "EE", label: "Estonia" },
  ET: { code: "ET", label: "Ethiopia" },
  FK: { code: "FK", label: "Falkland Islands (Malvinas)" },
  FO: { code: "FO", label: "Faroe Islands" },
  FJ: { code: "FJ", label: "Fiji" },
  FI: { code: "FI", label: "Finland" },
  FR: { code: "FR", label: "France" },
  GF: { code: "GF", label: "French Guiana" },
  PF: { code: "PF", label: "French Polynesia" },
  TF: { code: "TF", label: "French Southern Territories" },
  GA: { code: "GA", label: "Gabon" },
  GM: { code: "GM", label: "Gambia" },
  GE: { code: "GE", label: "Georgia" },
  DE: { code: "DE", label: "Germany" },
  GH: { code: "GH", label: "Ghana" },
  GI: { code: "GI", label: "Gibraltar" },
  GR: { code: "GR", label: "Greece" },
  GL: { code: "GL", label: "Greenland" },
  GD: { code: "GD", label: "Grenada" },
  GP: { code: "GP", label: "Guadeloupe" },
  GU: { code: "GU", label: "Guam" },
  GT: { code: "GT", label: "Guatemala" },
  GG: { code: "GG", label: "Guernsey" },
  GN: { code: "GN", label: "Guinea" },
  GW: { code: "GW", label: "Guinea-Bissau" },
  GY: { code: "GY", label: "Guyana" },
  HT: { code: "HT", label: "Haiti" },
  HM: { code: "HM", label: "Heard Island & Mcdonald Islands" },
  VA: { code: "VA", label: "Holy See (Vatican City State)" },
  HN: { code: "HN", label: "Honduras" },
  HK: { code: "HK", label: "Hong Kong" },
  HU: { code: "HU", label: "Hungary" },
  IS: { code: "IS", label: "Iceland" },
  IN: { code: "IN", label: "India" },
  ID: { code: "ID", label: "Indonesia" },
  IR: { code: "IR", label: "Iran, Islamic Republic Of" },
  IQ: { code: "IQ", label: "Iraq" },
  IE: { code: "IE", label: "Ireland" },
  IM: { code: "IM", label: "Isle Of Man" },
  IL: { code: "IL", label: "Israel" },
  IT: { code: "IT", label: "Italy" },
  JM: { code: "JM", label: "Jamaica" },
  JP: { code: "JP", label: "Japan" },
  JE: { code: "JE", label: "Jersey" },
  JO: { code: "JO", label: "Jordan" },
  KZ: { code: "KZ", label: "Kazakhstan" },
  KE: { code: "KE", label: "Kenya" },
  KI: { code: "KI", label: "Kiribati" },
  KR: { code: "KR", label: "Korea" },
  XK: { code: "XK", label: "Kosovo" },
  KO: { code: "KO", label: "Kosrae" },
  KW: { code: "KW", label: "Kuwait" },
  KG: { code: "KG", label: "Kyrgyzstan" },
  LA: { code: "LA", label: "Lao People's Democratic Republic" },
  LV: { code: "LV", label: "Latvia" },
  LB: { code: "LB", label: "Lebanon" },
  LS: { code: "LS", label: "Lesotho" },
  LR: { code: "LR", label: "Liberia" },
  LY: { code: "LY", label: "Libyan Arab Jamahiriya" },
  LI: { code: "LI", label: "Liechtenstein" },
  LT: { code: "LT", label: "Lithuania" },
  LU: { code: "LU", label: "Luxembourg" },
  MO: { code: "MO", label: "Macao" },
  MK: { code: "MK", label: "Macedonia" },
  MG: { code: "MG", label: "Madagascar" },
  M3: { code: "M3", label: "Madeira" },
  MW: { code: "MW", label: "Malawi" },
  MY: { code: "MY", label: "Malaysia" },
  MV: { code: "MV", label: "Maldives" },
  ML: { code: "ML", label: "Mali" },
  MT: { code: "MT", label: "Malta" },
  MH: { code: "MH", label: "Marshall Islands" },
  MQ: { code: "MQ", label: "Martinique" },
  MR: { code: "MR", label: "Mauritania" },
  MU: { code: "MU", label: "Mauritius" },
  YT: { code: "YT", label: "Mayotte" },
  MX: { code: "MX", label: "Mexico" },
  FM: { code: "FM", label: "Micronesia, Federated States Of" },
  MD: { code: "MD", label: "Moldova" },
  MC: { code: "MC", label: "Monaco" },
  MN: { code: "MN", label: "Mongolia" },
  ME: { code: "ME", label: "Montenegro" },
  MS: { code: "MS", label: "Montserrat" },
  MA: { code: "MA", label: "Morocco" },
  MZ: { code: "MZ", label: "Mozambique" },
  MM: { code: "MM", label: "Myanmar" },
  NA: { code: "NA", label: "Namibia" },
  NR: { code: "NR", label: "Nauru" },
  NP: { code: "NP", label: "Nepal" },
  NL: { code: "NL", label: "Netherlands" },
  AN: { code: "AN", label: "Netherlands Antilles" },
  NC: { code: "NC", label: "New Caledonia" },
  NZ: { code: "NZ", label: "New Zealand" },
  NI: { code: "NI", label: "Nicaragua" },
  NE: { code: "NE", label: "Niger" },
  NG: { code: "NG", label: "Nigeria" },
  NU: { code: "NU", label: "Niue" },
  NF: { code: "NF", label: "Norfolk Island" },
  NB: { code: "NB", label: "Northern Ireland" },
  MP: { code: "MP", label: "Northern Mariana Islands" },
  NO: { code: "NO", label: "Norway" },
  OM: { code: "OM", label: "Oman" },
  PK: { code: "PK", label: "Pakistan" },
  PW: { code: "PW", label: "Palau" },
  PS: { code: "PS", label: "Palestinian Territory, Occupied" },
  PA: { code: "PA", label: "Panama" },
  PG: { code: "PG", label: "Papua New Guinea" },
  PY: { code: "PY", label: "Paraguay" },
  PE: { code: "PE", label: "Peru" },
  PH: { code: "PH", label: "Philippines" },
  PN: { code: "PN", label: "Pitcairn" },
  PO: { code: "PO", label: "Pohnpei" },
  PL: { code: "PL", label: "Poland" },
  PT: { code: "PT", label: "Portugal" },
  PR: { code: "PR", label: "Puerto Rico" },
  QA: { code: "QA", label: "Qatar" },
  RE: { code: "RE", label: "Reunion" },
  RO: { code: "RO", label: "Romania" },
  RT: { code: "RT", label: "Rota" },
  RU: { code: "RU", label: "Russian Federation" },
  RW: { code: "RW", label: "Rwanda" },
  S1: { code: "S1", label: "Saba" },
  BL: { code: "BL", label: "Saint Barthelemy" },
  SH: { code: "SH", label: "Saint Helena" },
  KN: { code: "KN", label: "Saint Kitts And Nevis" },
  LC: { code: "LC", label: "Saint Lucia" },
  MF: { code: "MF", label: "Saint Martin" },
  PM: { code: "PM", label: "Saint Pierre And Miquelon" },
  VC: { code: "VC", label: "Saint Vincent And Grenadines" },
  SP: { code: "SP", label: "Saipan" },
  WS: { code: "WS", label: "Samoa" },
  SM: { code: "SM", label: "San Marino" },
  ST: { code: "ST", label: "Sao Tome And Principe" },
  SA: { code: "SA", label: "Saudi Arabia" },
  SN: { code: "SN", label: "Senegal" },
  RS: { code: "RS", label: "Serbia" },
  SC: { code: "SC", label: "Seychelles" },
  SL: { code: "SL", label: "Sierra Leone" },
  SG: { code: "SG", label: "Singapore" },
  SK: { code: "SK", label: "Slovakia" },
  SI: { code: "SI", label: "Slovenia" },
  SB: { code: "SB", label: "Solomon Islands" },
  SO: { code: "SO", label: "Somalia" },
  ZA: { code: "ZA", label: "South Africa" },
  GS: { code: "GS", label: "South Georgia And Sandwich Isl." },
  ES: { code: "ES", label: "Spain" },
  LK: { code: "LK", label: "Sri Lanka" },
  SW: { code: "SW", label: "St. Christopher" },
  C3: { code: "C3", label: "St. Croix" },
  E2: { code: "E2", label: "St. Eustatius" },
  UV: { code: "UV", label: "St. John" },
  SX: { code: "SX", label: "St. Maarten And St. Martin" },
  VL: { code: "VL", label: "St. Thomas" },
  SD: { code: "SD", label: "Sudan" },
  SR: { code: "SR", label: "Suriname" },
  SJ: { code: "SJ", label: "Svalbard And Jan Mayen" },
  SZ: { code: "SZ", label: "Swaziland" },
  SE: { code: "SE", label: "Sweden" },
  CH: { code: "CH", label: "Switzerland" },
  SY: { code: "SY", label: "Syrian Arab Republic" },
  TA: { code: "TA", label: "Tahiti" },
  TW: { code: "TW", label: "Taiwan" },
  TJ: { code: "TJ", label: "Tajikistan" },
  TZ: { code: "TZ", label: "Tanzania" },
  TH: { code: "TH", label: "Thailand" },
  TL: { code: "TL", label: "Timor-Leste" },
  TI: { code: "TI", label: "Tinian" },
  TG: { code: "TG", label: "Togo" },
  TK: { code: "TK", label: "Tokelau" },
  TO: { code: "TO", label: "Tonga" },
  ZZ: { code: "ZZ", label: "Tortola" },
  TT: { code: "TT", label: "Trinidad And Tobago" },
  TU: { code: "TU", label: "Truk" },
  TN: { code: "TN", label: "Tunisia" },
  TR: { code: "TR", label: "Turkey" },
  TM: { code: "TM", label: "Turkmenistan" },
  TC: { code: "TC", label: "Turks And Caicos Islands" },
  TV: { code: "TV", label: "Tuvalu" },
  UG: { code: "UG", label: "Uganda" },
  UA: { code: "UA", label: "Ukraine" },
  UI: { code: "UI", label: "Union Island" },
  AE: { code: "AE", label: "United Arab Emirates" },
  GB: { code: "GB", label: "United Kingdom" },
  US: { code: "US", label: "United States" },
  UM: { code: "UM", label: "United States Outlying Islands" },
  UY: { code: "UY", label: "Uruguay" },
  UZ: { code: "UZ", label: "Uzbekistan" },
  VU: { code: "VU", label: "Vanuatu" },
  VE: { code: "VE", label: "Venezuela" },
  VN: { code: "VN", label: "Viet Nam" },
  VR: { code: "VR", label: "Virgin Gorda" },
  VG: { code: "VG", label: "Virgin Islands, British" },
  VI: { code: "VI", label: "Virgin Islands, U.S." },
  WF: { code: "WF", label: "Wallis And Futuna" },
  EH: { code: "EH", label: "Western Sahara" },
  YA: { code: "YA", label: "Yap State" },
  YE: { code: "YE", label: "Yemen" },
  ZM: { code: "ZM", label: "Zambia" },
  ZW: { code: "ZW", label: "Zimbabwe" },
}

const countryMapEU = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
]

const countryListEU = Object.entries(countryList)
  .filter(([key]) => countryMapEU?.includes(key as CountryCodes))
  .map(([, value]) => value)

export { countryList, countryListEU, type CountryType, type CountryCodes }
