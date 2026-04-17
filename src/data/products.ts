export interface Product {
  name: string;
  link: string;
}

export const products: Record<string, Product> = {
  "husqvarna-143rs": {
    name: "Husqvarna 143rs",
    link: "https://meli.la/2XM9of6"
  },
  "vulcan-vr520h": {
    name: "Vulcan VR520H",
    link: "https://amzn.to/3NTJALP"
  },
  "trapp-master-1000": {
    name: "Trapp Master 1000",
    link: "https://meli.la/24phx6d"
  },
  "tramontina-ap1500t": {
    name: "Tramontina AP1500T",
    link: "https://meli.la/1MqTgPc"
  },
  "tekna-bc-1250ss": {
    name: "Tekna BC 1250SS",
    link: "https://amzn.to/41kt2j4"
  },
  "intech-machine-skim4300": {
    name: "SKIM4300 Intech Machine",
    link: "https://meli.la/1eL1tRT"
  },
  "vulcan-trent-vr430p": {
    name: "Vr430P Vulcan Trent",
    link: "https://amzn.to/4vqTIwu"
  },
  "branco-52cc-profissional": {
    name: "Roçadeira 52cc Profissional Branco A Combustão",
    link: "https://meli.la/1mXcVZD"
  },
  "carbon-fak-52cc-2.5hp": {
    name: "Roçadeira 52cc 2,5hp Carbon Fak",
    link: "https://meli.la/2E3nRQj"
  },
  "rocadeira-eletrica-br-1300c": {
    name: "Roçadeira Elétrica BR 1300C",
    link: "https://meli.la/2tqH2VP"
  },
  "trapp-master-at-1500": {
    name: "Trapp Master AT-1500",
    link: "https://meli.la/1Moamyo"
  },
  "tekna-bc1250e1ss": {
    name: "Tekna BC1250E1SS",
    link: "https://meli.la/1ge8BXJ"
  },
  "tramontina-master-1000": {
    name: "Tramontina Master 1000",
    link: "https://meli.la/1wHbKiR"
  },
  "garthen-gre-2000": {
    name: "GARTHEN GRE-2000",
    link: "https://meli.la/1UbEruS"
  },
  "husqvarna-321r": {
    name: "Husqvarna 321r",
    link: "https://meli.la/26KGDzN"
  },
  "husqvarna-236rs": {
    name: "Husqvarna 236rs",
    link: "https://meli.la/2jk2x7V"
  },
  "stihl-rl430acn-tk-com-oleo": {
    name: "Stihl Rl430acn-tk com Óleo",
    link: "https://meli.la/2dLC1fL"
  },
  "stihl-fs-221": {
    name: "Stihl FS 221",
    link: "https://meli.la/1QFHtYg"
  },
  "rocadeira-a-gasolina-multifuncional-bi-partido-bascco": {
    name: "Roçadeira A Gasolina Multifuncional Bi-partido Bascco",
    link: "https://meli.la/1PS1et8"
  },
  "fio-de-nylon-duraline-3mm-quadrado-255m": {
    name: "Fio de Nylon Duraline 3mm Quadrado 255m",
    link: "https://meli.la/2PExUfX"
  },
  "kit-misturador-oleo-2t": {
    name: "KIT MISTURADOR + ÓLEO 2T",
    link: "https://meli.la/1GP142t"
  },
  "kit-seguranca-completo-epis": {
    name: "KIT SEGURANÇA COMPLETO (EPIs)",
    link: "https://meli.la/1hqH1JJ"
  },
  "fio-de-nylon-quadrado-30mm-laranja-itece": {
    name: "Fio De Nylon Quadrado 3,0mm Laranja Itecê",
    link: "https://meli.la/2wmCUHQ"
  },
  "fio-de-nylon-24-mm-e-12-m-tramontina": {
    name: "Fio De Nylon 2,4 Mm e 12 M Tramontina",
    link: "https://meli.la/2hTvvXf"
  },
  "fio-nylon-2kg-bitola-2-4mm-rocast": {
    name: "Fio Nylon 2kg Bitola 2.4mm Rocast",
    link: "https://meli.la/154yS2a"
  },
  "fio-de-nylon-quadrado-2-70mm-15-m-vulcan": {
    name: "Fio de Nylon Quadrado 2,70mm 15 M VULCAN",
    link: "https://meli.la/2UEReeT"
  },
  "fio-nylon-3mm-quadrado-2kg-200m-nakasaki": {
    name: "Fio Nylon 3mm Quadrado 2kg 200m NAKASAKI",
    link: "https://meli.la/1GdsKX7"
  },
  "rocadeira-husqvarna-331r": {
    name: "Roçadeira Husqvarna 331R",
    link: "https://meli.la/2FeTyDL"
  }
};

export type ProductId = keyof typeof products;
