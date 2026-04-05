export interface Product {
  name: string;
  link: string;
}

export const products: Record<string, Product> = {
  "rocadeira-stihl-fs-120": {
    name: "Roçadeira a Gasolina Stihl FS 120",
    link: "https://amzn.to/3example"
  },
  "rocadeira-husqvarna-226r": {
    name: "Roçadeira Husqvarna 226r",
    link: "https://amzn.to/4example"
  },
  "rocadeira-eletrica-tramontina-1000w": {
    name: "Roçadeira Elétrica Tramontina 1000W",
    link: "https://meli.la/1example"
  },
  "rocadeira-bateria-makita-dur181z": {
    name: "Roçadeira a Bateria Makita DUR181Z",
    link: "https://amzn.to/5example"
  },
  "fio-de-nylon-stihl": {
    name: "Fio de Nylon Stihl 2,4mm",
    link: "https://meli.la/2example"
  }
};

export type ProductId = keyof typeof products;
