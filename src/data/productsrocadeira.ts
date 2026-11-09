export interface Product {
  name: string;
  link: string;
  image?: string;
}

export const products: Record<string, Product> = {
  // ==========================================
  // PRODUTOS ATUALIZADOS / REVISADOS
  // ==========================================
  "stihl-fs-221": {
    name: "Stihl FS 221",
    link: "https://meli.la/2jKcMRb",
    image: "stihl-fs-221.webp"
  },
  "rocadeira-toyama-tbc52x": {
    name: "Roçadeira Toyama TBC52X",
    link: "https://meli.la/29KeamK",
    image: "rocadeira toyama Tbc52x.webp"
  },
  "rocadeira-toyama-tbc43": {
    name: "Roçadeira Toyama Tbc43",
    link: "https://meli.la/13C5Cgp",
    image: "Roçadeira Toyama Tbc43.webp"
  },
  "rocadeira-honda-umk435t": {
    name: "Roçadeira Honda UMK435T",
    link: "https://meli.la/2QNormu",
    image: "Roçadeira Honda UMK435T.webp"
  },
  "rocadeira-stihl-fsa-45": {
    name: "Roçadeira Stihl FSA 45",
    link: "https://meli.la/2F65dMe",
    image: "Roçadeira Stihl FSA 45.webp"
  },
  "rocadeira-trapp-master-1800-bipartido": {
    name: "roçadeira Trapp Master 1800 Bipartido",
    link: "https://meli.la/2N1S5EM",
    image: "roçadeira Trapp Master 1800 Bipartido.webp"
  },
  "rocadeira-tekna-bc-1250ss": {
    name: "Roçadeira Elétrica Tekna Bc1250ss",
    link: "https://meli.la/1uHxYGB",
    image: "Roçadeira Elétrica Tekna Bc1250ss.webp"
  },
  "garthen-gre-2000": {
    name: "GARTHEN GRE-2000",
    link: "https://meli.la/1rHLF4A",
    image: "Roçadeira Garthen Gre-2000.webp"
  },
  "rocadeira-husqvarna-143rs": {
    name: "Husqvarna 143rs",
    link: "https://meli.la/2DnBDze",
    image: "Husqvarna 143rs.webp"
  },
  "rocadeira-a-gasolina-costal-2-tempos-65cc-nakasaki": {
    name: "Roçadeira A Gasolina Costal 2 Tempos 65cc Nakasaki",
    link: "https://meli.la/1AyS4VJ",
    image: "Roçadeira A Gasolina Costal 2 Tempos 65cc Nakasaki.webp"
  },
  "rocadeira-gasolina-profissional-nakasaki-2t-75cc-com-trimmer": {
    name: "Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer",
    link: "https://meli.la/1xaC54d",
    image: "Roçadeira Gasolina Profissional Nakasaki 2t 75cc Com Trimmer.webp"
  },
  "rocadeira-gasolina-65cc-nakasaki-nk-650at-3hp-2-tempos-eixo-bipartido": {
    name: "Roçadeira Gasolina 65cc Nakasaki NK-650AT 3hp 2 Tempos Eixo Bipartido",
    link: "https://meli.la/27tiFiv",
    image: "Roçadeira Gasolina 65cc Nakasaki NK-650AT 3hp 2 Tempos Eixo Bipartido.webp"
  },
  "carretel-para-rocadeira-autocut-26-2-stihl-original": {
    name: "Carretel Para Roçadeira Autocut 26-2 Stihl Original",
    link: "https://meli.la/2FeZ5D5",
    image: "Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
  },
  "tramontina-ap1500t": {
    name: "Aparador De Grama Tramontina Apb1500t",
    link: "https://meli.la/2xtFHA1",
    image: "Aparador De Grama Tramontina Apb1500t.webp"
  },
  "rocadeira-trapp-master-1000": {
    name: "Roçadeira Elétrica Trapp Master 1000",
    link: "https://meli.la/1xPb4Qy",
    image: "Roçadeira Elétrica Trapp Master 1000.webp"
  },
  "rocadeira-eletrica-br-1300c": {
    name: "Roçadeira Branco Br 1300c",
    link: "https://meli.la/2C8iqWE",
    image: "Roçadeira Branco Br 1300c.webp"
  },
  "aparador-de-grama-eletrico-apb1000t-tramontina": {
    name: "Aparador De Grama Elétrico Apb1000t Tramontina",
    link: "https://meli.la/24MdYdY",
    image: "Aparador De Grama Elétrico Apb1000t Tramontina.webp"
  },
  "tramontina-apb1000t": {
    name: "Aparador De Grama Elétrico Apb1000t Tramontina",
    link: "https://meli.la/24MdYdY",
    image: "Aparador De Grama Elétrico Apb1000t Tramontina.webp"
  },
  "matsuyama-rocadeira-eletrica-967637": {
    name: "MATSUYAMA Roçadeira Elétrica 967637",
    link: "https://meli.la/1s9jVQb",
    image: "MATSUYAMA Roçadeira Elétrica 967637.webp"
  },
  "matsuyama-967637": {
    name: "MATSUYAMA Roçadeira Elétrica 967637",
    link: "https://meli.la/1s9jVQb",
    image: "MATSUYAMA Roçadeira Elétrica 967637.webp"
  },
  "makita-aparador-de-grama-a-bateria-ur100dzx": {
    name: "MAKITA Aparador de Grama a Bateria UR100DZX",
    link: "https://meli.la/1qkxEuZ",
    image: "MAKITA Aparador de Grama a Bateria UR100DZX.webp"
  },
  "makita-ur100dzx": {
    name: "MAKITA Aparador de Grama a Bateria UR100DZX",
    link: "https://meli.la/1qkxEuZ",
    image: "MAKITA Aparador de Grama a Bateria UR100DZX.webp"
  },
  "rocadeira-stihl-bateria-fsa-57": {
    name: "Roçadeira STIHL Bateria FSA 57",
    link: "https://meli.la/2PDqyAF",
    image: "Roçadeira STIHL Bateria FSA 57.webp"
  },
  "stihl-fsa-57": {
    name: "Roçadeira STIHL Bateria FSA 57",
    link: "https://meli.la/2PDqyAF",
    image: "Roçadeira STIHL Bateria FSA 57.webp"
  },
  "trapp-master-at-1500": {
    name: "Aparador de Grama Master AT-1500 – Trapp",
    link: "https://meli.la/2hujYqL",
    image: "Aparador de Grama Master AT-1500 – Trapp.webp"
  },
  "fio-de-nylon-27mm-20m-quadrado-rocadeira-cortador-de-grama": {
    name: "Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama",
    link: "https://meli.la/2jpbbxe",
    image: "Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama.webp"
  },
  "fio-de-nylon-2-7mm-20m-quadrado": {
    name: "Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama",
    link: "https://meli.la/2jpbbxe",
    image: "Fio De Nylon 2,7mm 20m Quadrado Roçadeira Cortador De Grama.webp"
  },
  "fio-de-nylon-24mm-x-50m-redondo-vonder-3373240050": {
    name: "Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050",
    link: "https://meli.la/29Bbtzg",
    image: "Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050.webp"
  },
  "fio-de-nylon-24mm-x-50m-vonder": {
    name: "Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050",
    link: "https://meli.la/29Bbtzg",
    image: "Fio de Nylon 2,4 mm x 50 m com Perfil Redondo VONDER-3373240050.webp"
  },
  "fio-de-nylon-quadrado-2-70mm-15-m-vulcan": {
    name: "Fio de Nylon Quadrado 2,70mm 15 M VULCAN",
    link: "https://meli.la/1uYmmFV",
    image: "Fio de Nylon Quadrado 2,70mm 15 M VULCAN.webp"
  },
  "carretel-com-fio-nylon-rocadeiras-trapp-master-1000": {
    name: "Carretel Com Fio Nylon Roçadeiras Trapp Master 1000",
    link: "https://meli.la/1ktMxVq",
    image: "Carretel Com Fio Nylon Roçadeiras Trapp Master 1000.webp"
  },
  "trapp-master-1000-fio": {
    name: "Carretel Com Fio Nylon Roçadeiras Trapp Master 1000",
    link: "https://meli.la/1ktMxVq",
    image: "Carretel Com Fio Nylon Roçadeiras Trapp Master 1000.webp"
  },
  "fio-nylon-2kg-bitola-2-4mm-rocast": {
    name: "Fio Nylon 2.4 Mm Roçadeira Redondo Rocast 1kg Cortar Grama",
    link: "https://meli.la/1bTYhgA",
    image: "Fio Nylon 2.4 Mm Roçadeira Redondo Rocast 1kg Cortar Grama.webp"
  },
  "fio-de-nylon-24-mm-e-12-m-tramontina": {
    name: "Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina",
    link: "https://meli.la/2wm8Quk",
    image: "Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp"
  },

  // ==========================================
  // PRODUTOS EM REVISÃO (Aguardando revisão / troca de links)
  // (Todos os produtos abaixo serão apagados ao final do processo)
  // ==========================================
  "rocadeira-vulcan-vr520h": {
    name: "Vulcan VR520H",
    link: "https://meli.la/1TeqVYU",
    image: "Vulcan VR520H.webp"
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
  "tekna-bc1250e1ss": {
    name: "Tekna BC1250E1SS",
    link: "https://meli.la/1ge8BXJ"
  },
  "tramontina-master-1000": {
    name: "Tramontina Master 1000",
    link: "https://meli.la/1wHbKiR"
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
  "fio-nylon-3mm-quadrado-2kg-200m-nakasaki": {
    name: "Fio Nylon 3mm Quadrado 2kg 200m NAKASAKI",
    link: "https://meli.la/1GdsKX7"
  },
  "rocadeira-husqvarna-331r": {
    name: "Roçadeira Husqvarna 331R",
    link: "https://meli.la/2FeTyDL"
  },
  "rocadeira-toyama-tbc43h": {
    name: "Toyama TBC43H",
    link: "https://meli.la/2svLF82",
    image: "Toyama TBC43H.webp"
  },
  "rocadeira-makita-dur187uz": {
    name: "Makita DUR187UZ",
    link: "https://meli.la/2zc33xr",
    image: "Makita DUR187UZ.webp"
  },
  "rocadeira-intech-machine-skim5100": {
    name: "Intech Machine Skim5100",
    link: "https://meli.la/2FsSgnU",
    image: "Intech Machine Skim5100.webp"
  }
};

export type ProductId = keyof typeof products;
