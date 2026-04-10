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
    link: "https://amzn.to/3Q107y3"
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
  }
};

export type ProductId = keyof typeof products;
