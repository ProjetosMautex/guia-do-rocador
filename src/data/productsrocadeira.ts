export interface Product {
  name: string;
  link: string;
  image?: string;
}

export const products: Record<string, Product> = {
  // ==========================================
  // PRODUTOS DE CROSS-SELL (ARTIGOS COMERCIAIS)
  // ==========================================
  "fio-de-nylon-duraline-3mm-quadrado-255m": {
    name: "Fio de Nylon Quadrado 3mm",
    link: "https://meli.la/2PExUfX",
    image: "Fio de nylon duraline 3mm e 255m quadrado.webp"
  },
  "Fio de Nylon Quadrado 3mm": {
    name: "Fio de Nylon Quadrado 3mm",
    link: "https://meli.la/2PExUfX",
    image: "Fio de nylon duraline 3mm e 255m quadrado.webp"
  },
  "kit-misturador-oleo-2t": {
    name: "Kit Misturador + Óleo 2T",
    link: "https://meli.la/1GP142t",
    image: "VER KIT MISTURADOR + ÓLEO 2T EM OFERTA.webp"
  },
  "Kit Misturador + Óleo 2T": {
    name: "Kit Misturador + Óleo 2T",
    link: "https://meli.la/1GP142t",
    image: "VER KIT MISTURADOR + ÓLEO 2T EM OFERTA.webp"
  },
  "kit-seguranca-completo-epis": {
    name: "Kit Completo de EPIs",
    link: "https://meli.la/1hqH1JJ",
    image: "KIT SEGURANÇA COMPLETO (EPIs).webp"
  },
  "Kit Completo de EPIs": {
    name: "Kit Completo de EPIs",
    link: "https://meli.la/1hqH1JJ",
    image: "KIT SEGURANÇA COMPLETO (EPIs).webp"
  },
  "fio-de-nylon-de-alta-resistencia": {
    name: "Fio de Nylon de Alta Resistência",
    link: "https://meli.la/2wm8Quk",
    image: "Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp"
  },
  "Fio de Nylon de Alta Resistência": {
    name: "Fio de Nylon de Alta Resistência",
    link: "https://meli.la/2wm8Quk",
    image: "Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp"
  },
  "fio-de-nylon-24-mm-e-12-m-tramontina": {
    name: "Fio de Nylon de Alta Resistência",
    link: "https://meli.la/2wm8Quk",
    image: "Fio Nylon 2,4mm 12 Metros para Aparador De Grama - Tramontina.webp"
  },
  "carretel-autocut-26-2-original": {
    name: "Carretel AutoCut 26-2 Original",
    link: "https://meli.la/2FeZ5D5",
    image: "Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
  },
  "Carretel AutoCut 26-2 Original": {
    name: "Carretel AutoCut 26-2 Original",
    link: "https://meli.la/2FeZ5D5",
    image: "Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
  },
  "carretel-para-rocadeira-autocut-26-2-stihl-original": {
    name: "Carretel AutoCut 26-2 Original",
    link: "https://meli.la/2FeZ5D5",
    image: "Carretel Para Roçadeira Autocut 26-2 Stihl Original.webp"
  },
  "faca-3-pontas-spin": {
    name: "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin",
    link: "https://meli.la/2A7s1GS",
    image: "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin.webp"
  },
  "lamina-3-pontas-spin": {
    name: "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin",
    link: "https://meli.la/2A7s1GS",
    image: "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin.webp"
  },
  "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin": {
    name: "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin",
    link: "https://meli.la/2A7s1GS",
    image: "Faca 3 Pontas Furo 25mm Tamanho 300mm Espessura 2,9mm - Spin.webp"
  },

  // ==========================================
  // PRODUTOS ATUALIZADOS / REVISADOS
  // ==========================================
  // --- Novos Cabeçotes e Carretéis para Roçadeira ---
  "cabecote-de-corte-autocut-p-rocadeiras-46-2-sthil": {
    name: "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil",
    link: "https://meli.la/2QWaaN7",
    image: "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil.webp"
  },
  "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil": {
    name: "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil",
    link: "https://meli.la/2QWaaN7",
    image: "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil.webp"
  },
  "autocut-46-2": {
    name: "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil",
    link: "https://meli.la/2QWaaN7",
    image: "Cabeçote De Corte Autocut P Roçadeiras 46-2 Sthil.webp"
  },
  "cabecote-carretel-autocut-26-2-rocadeira-stihl": {
    name: "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl",
    link: "https://meli.la/1N5KDte",
    image: "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl.webp"
  },
  "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl": {
    name: "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl",
    link: "https://meli.la/1N5KDte",
    image: "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl.webp"
  },
  "autocut-c-26-2": {
    name: "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl",
    link: "https://meli.la/1N5KDte",
    image: "Cabeçote Carretel Autocut 26-2 Roçadeira Stihl.webp"
  },
  "carretel-toyama-easy-load-automatico-para-rocadeira": {
    name: "Carretel Toyama Easy Load Automático para Roçadeira",
    link: "https://meli.la/2FiNTvX",
    image: "Carretel Toyama Easy Load Automático para Roçadeira.webp"
  },
  "Carretel Toyama Easy Load Automático para Roçadeira": {
    name: "Carretel Toyama Easy Load Automático para Roçadeira",
    link: "https://meli.la/2FiNTvX",
    image: "Carretel Toyama Easy Load Automático para Roçadeira.webp"
  },
  "toyama-easy-load-130mm": {
    name: "Carretel Toyama Easy Load Automático para Roçadeira",
    link: "https://meli.la/2FiNTvX",
    image: "Carretel Toyama Easy Load Automático para Roçadeira.webp"
  },
  "carretel-automatico-easy-load-10mm-original-toyama": {
    name: "Carretel Automatico Easy Load 10mm Original Toyama",
    link: "https://meli.la/15gWWvv",
    image: "Carretel Automatico Easy Load 10mm Original Toyama.webp"
  },
  "Carretel Automatico Easy Load 10mm Original Toyama": {
    name: "Carretel Automatico Easy Load 10mm Original Toyama",
    link: "https://meli.la/15gWWvv",
    image: "Carretel Automatico Easy Load 10mm Original Toyama.webp"
  },
  "toyama-m10-125": {
    name: "Carretel Automatico Easy Load 10mm Original Toyama",
    link: "https://meli.la/15gWWvv",
    image: "Carretel Automatico Easy Load 10mm Original Toyama.webp"
  },
  "carretel-completo-automatico-completo-para-rocadeiras-vonder": {
    name: "Carretel Completo Automático Completo Para Roçadeiras Vonder",
    link: "https://meli.la/16r9HWk",
    image: "Carretel Completo Automático Completo Para Roçadeiras Vonder.webp"
  },
  "Carretel Completo Automático Completo Para Roçadeiras Vonder": {
    name: "Carretel Completo Automático Completo Para Roçadeiras Vonder",
    link: "https://meli.la/16r9HWk",
    image: "Carretel Completo Automático Completo Para Roçadeiras Vonder.webp"
  },
  "carretel-vonder-m10": {
    name: "Carretel Completo Automático Completo Para Roçadeiras Vonder",
    link: "https://meli.la/16r9HWk",
    image: "Carretel Completo Automático Completo Para Roçadeiras Vonder.webp"
  },
  "carretel-automatico-nylon-kawashima-para-rocadeira-stihl-rosca-m12-1-5": {
    name: "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5",
    link: "https://meli.la/1U7Kyd5",
    image: "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5.webp"
  },
  "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5": {
    name: "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5",
    link: "https://meli.la/1U7Kyd5",
    image: "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5.webp"
  },
  "carretel-kawashima-m12": {
    name: "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5",
    link: "https://meli.la/1U7Kyd5",
    image: "Carretel Automático Nylon Kawashima Para Roçadeira Stihl Rosca M12 1,5.webp"
  },
  "lamina-para-rocadeiras-2-pontas-305mm-x-25-4mm-vonder": {
    name: "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder",
    link: "https://meli.la/2AbLkDi",
    image: "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder.webp"
  },
  "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder": {
    name: "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder",
    link: "https://meli.la/2AbLkDi",
    image: "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder.webp"
  },
  "lamina-2-pontas-vonder": {
    name: "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder",
    link: "https://meli.la/2AbLkDi",
    image: "Lâmina Para Roçadeiras 2 Pontas 305mm X 25,4mm Vonder.webp"
  },
  "lamina-rocadeira-3-pontas-stihl-fs160-161-220-221-290-300": {
    name: "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300",
    link: "https://meli.la/1FsLBZW",
    image: "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300.webp"
  },
  "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300": {
    name: "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300",
    link: "https://meli.la/1FsLBZW",
    image: "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300.webp"
  },
  "lamina-3-pontas-stihl": {
    name: "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300",
    link: "https://meli.la/1FsLBZW",
    image: "Lâmina Roçadeira 3 Pontas Stihl Fs160 161 220 221 290 300.webp"
  },
  "disco-40-dentes-videa-255mm-para-rocadeira-toyama-tbc52h": {
    name: "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h",
    link: "https://meli.la/16ZY8sz",
    image: "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h.webp"
  },
  "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h": {
    name: "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h",
    link: "https://meli.la/16ZY8sz",
    image: "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h.webp"
  },
  "disco-40-dentes-videa-toyama": {
    name: "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h",
    link: "https://meli.la/16ZY8sz",
    image: "Disco 40 Dentes Vídea 255mm Para Roçadeira Toyama Tbc52h.webp"
  },
  "lamina-disco-serra-80-dentes-para-rocadeira-stihl-universal": {
    name: "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal",
    link: "https://meli.la/2KJPNj6",
    image: "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal.webp"
  },
  "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal": {
    name: "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal",
    link: "https://meli.la/2KJPNj6",
    image: "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal.webp"
  },
  "disco-80-dentes-stihl": {
    name: "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal",
    link: "https://meli.la/2KJPNj6",
    image: "Lâmina Disco Serra 80 Dentes Para Roçadeira Stihl Universal.webp"
  },
  "kit-2-disco-para-rocadeira-com-dentes-de-corrente-motosserra": {
    name: "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra",
    link: "https://meli.la/1Gm6L16",
    image: "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra.webp"
  },
  "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra": {
    name: "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra",
    link: "https://meli.la/1Gm6L16",
    image: "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra.webp"
  },
  "disco-corrente-motosserra": {
    name: "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra",
    link: "https://meli.la/1Gm6L16",
    image: "Kit 2 Disco Para Roçadeira Com Dentes De Corrente Motosserra.webp"
  },
  "oleo-lubrificante-stihl-2-tempos-8017": {
    name: "Oleo Lubrificante Stihl 2 Tempos 8017",
    link: "https://meli.la/2TVWK2f",
    image: "Oleo Lubrificante Stihl 2 Tempos 8017.webp"
  },
  "Oleo Lubrificante Stihl 2 Tempos 8017": {
    name: "Oleo Lubrificante Stihl 2 Tempos 8017",
    link: "https://meli.la/2TVWK2f",
    image: "Oleo Lubrificante Stihl 2 Tempos 8017.webp"
  },
  "oleo-stihl-8017": {
    name: "Oleo Lubrificante Stihl 2 Tempos 8017",
    link: "https://meli.la/2TVWK2f",
    image: "Oleo Lubrificante Stihl 2 Tempos 8017.webp"
  },
  "oleo-2-tempos-husqvarna-pro-1lt": {
    name: "Óleo 2 Tempos Husqvarna Pro 1lt",
    link: "https://meli.la/1BsGXF2",
    image: "Óleo 2 Tempos Husqvarna Pro 1lt.webp"
  },
  "Óleo 2 Tempos Husqvarna Pro 1lt": {
    name: "Óleo 2 Tempos Husqvarna Pro 1lt",
    link: "https://meli.la/1BsGXF2",
    image: "Óleo 2 Tempos Husqvarna Pro 1lt.webp"
  },
  "oleo-husqvarna-pro": {
    name: "Óleo 2 Tempos Husqvarna Pro 1lt",
    link: "https://meli.la/1BsGXF2",
    image: "Óleo 2 Tempos Husqvarna Pro 1lt.webp"
  },
  "2-oleo-lubrax-essencial-mineral-moto-rocadeiras-motosserras": {
    name: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras",
    link: "https://meli.la/1SgEYG8",
    image: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras.webp"
  },
  "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras": {
    name: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras",
    link: "https://meli.la/1SgEYG8",
    image: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras.webp"
  },
  "oleo-lubrax-essencial": {
    name: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras",
    link: "https://meli.la/1SgEYG8",
    image: "2 Oleo Lubrax Essencial Mineral Moto Rocadeiras Motosserras.webp"
  },
  "kit-2-oleo-2-tempos-chainsaw-rocadeira-castrol": {
    name: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol",
    link: "https://meli.la/11ZNCgC",
    image: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol.webp"
  },
  "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol": {
    name: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol",
    link: "https://meli.la/11ZNCgC",
    image: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol.webp"
  },
  "oleo-castrol-2t": {
    name: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol",
    link: "https://meli.la/11ZNCgC",
    image: "Kit 2 Oleo 2 Tempos Chainsaw Rocadeira Castrol.webp"
  },
  "rocadeira-husqvarna-131r": {
    name: "Roçadeira Husqvarna 131R",
    link: "https://meli.la/2dFdqoN",
    image: "Roçadeira Husqvarna.webp"
  },
  "Roçadeira Husqvarna 131R": {
    name: "Roçadeira Husqvarna 131R",
    link: "https://meli.la/2dFdqoN",
    image: "Roçadeira Husqvarna.webp"
  },
  "rocadeira-stihl-fs-160": {
    name: "Roçadeira Stihl Fs 160",
    link: "https://meli.la/2Qbxq36",
    image: "Roçadeira Stihl Fs 160.webp"
  },
  "stihl-fs-160": {
    name: "Roçadeira Stihl Fs 160",
    link: "https://meli.la/2Qbxq36",
    image: "Roçadeira Stihl Fs 160.webp"
  },
  "Roçadeira Stihl Fs 160": {
    name: "Roçadeira Stihl Fs 160",
    link: "https://meli.la/2Qbxq36",
    image: "Roçadeira Stihl Fs 160.webp"
  },
  "rocadeira-husqvarna-143rs": {
    name: "Husqvarna 143rs",
    link: "https://meli.la/2DnBDze",
    image: "Husqvarna 143rs.webp"
  },
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
  },
  "oleo-para-motores-2t-jaso-toyama-500ml": {
    name: "Óleo Para Motores 2t Jaso Toyama 500ml",
    link: "https://meli.la/1ufrroe",
    image: "Óleo Para Motores 2t Jaso Toyama 500ml.webp"
  },
  "Óleo Para Motores 2t Jaso Toyama 500ml": {
    name: "Óleo Para Motores 2t Jaso Toyama 500ml",
    link: "https://meli.la/1ufrroe",
    image: "Óleo Para Motores 2t Jaso Toyama 500ml.webp"
  },
  "oleo-toyama-2t-jaso-500ml": {
    name: "Óleo Para Motores 2t Jaso Toyama 500ml",
    link: "https://meli.la/1ufrroe",
    image: "Óleo Para Motores 2t Jaso Toyama 500ml.webp"
  },
  "oleo-lubrificante-gg10-4t-a-gasolina-1lt-10w-30sl-toyama": {
    name: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama",
    link: "https://meli.la/2aVNwcb",
    image: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama.webp"
  },
  "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama": {
    name: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama",
    link: "https://meli.la/2aVNwcb",
    image: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama.webp"
  },
  "oleo-toyama-gg10-4t-10w30": {
    name: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama",
    link: "https://meli.la/2aVNwcb",
    image: "Óleo Lubrificante Gg10 4t A Gasolina 1lt 10w-30sl toyama.webp"
  },
  "oleo-moto-2t-lubrax-2-tempos-essencial-jaso-fc-2t-api-fc": {
    name: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc",
    link: "https://meli.la/1afayja",
    image: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc.webp"
  },
  "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc": {
    name: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc",
    link: "https://meli.la/1afayja",
    image: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc.webp"
  },
  "oleo-lubrax-2t-essencial-jaso-fc": {
    name: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc",
    link: "https://meli.la/1afayja",
    image: "Óleo Moto 2t Lubrax 2 Tempos Essencial Jaso Fc 2t Api Fc.webp"
  },
  "oleo-stihl-8017-h-oleo-lubrificante-2-tempos-castrol-500ml": {
    name: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml",
    link: "https://meli.la/1SZxDLW",
    image: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml.webp"
  },
  "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml": {
    name: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml",
    link: "https://meli.la/1SZxDLW",
    image: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml.webp"
  },
  "oleo-stihl-8017-h-castrol-500ml": {
    name: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml",
    link: "https://meli.la/1SZxDLW",
    image: "Oleo Stihl 8017 H Óleo Lubrificante 2 Tempos Castrol 500ml.webp"
  },
  "rocadeira-profissional-brushless-sb-gfr-18v23-bosch": {
    name: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch",
    link: "https://meli.la/2QFJnEJ",
    image: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch.webp"
  },
  "Roçadeira Profissional Brushless SB GFR 18v23 Bosch": {
    name: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch",
    link: "https://meli.la/2QFJnEJ",
    image: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch.webp"
  },
  "bosch-gfr-18v-23": {
    name: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch",
    link: "https://meli.la/2QFJnEJ",
    image: "Roçadeira Profissional Brushless SB GFR 18v23 Bosch.webp"
  },
  "rocadeira-lateral-motor-brushless-com-carregador-duplo-e-2-baterias-4a-tbt18-18bc300-k-toyama": {
    name: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama",
    link: "https://meli.la/2WnTGJG",
    image: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama.webp"
  },
  "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama": {
    name: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama",
    link: "https://meli.la/2WnTGJG",
    image: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama.webp"
  },
  "toyama-tbt18-18bc300-k": {
    name: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama",
    link: "https://meli.la/2WnTGJG",
    image: "Roçadeira Lateral Motor Brushless Com Carregador Duplo e 2 Baterias 4A TBT18 18BC300-K Toyama.webp"
  },
  "rocadeira-carrinho-bateria-cpl-tbt18bc250sk-toyama": {
    name: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama",
    link: "https://meli.la/1BaGqtw",
    image: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama.webp"
  },
  "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama": {
    name: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama",
    link: "https://meli.la/1BaGqtw",
    image: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama.webp"
  },
  "toyama-tbt18bc250sk": {
    name: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama",
    link: "https://meli.la/1BaGqtw",
    image: "Rocadeira Carrinho Bateria Cpl Tbt18bc250sk Toyama.webp"
  },
  "aparador-de-grama-bateria-intercambiavel-de-18-v-dwt": {
    name: "Aparador De Grama Bateria Intercambiável De 18 V Dwt",
    link: "https://meli.la/1CrzFdF",
    image: "Aparador De Grama Bateria Intercambiável De 18 V Dwt.webp"
  },
  "Aparador De Grama Bateria Intercambiável De 18 V Dwt": {
    name: "Aparador De Grama Bateria Intercambiável De 18 V Dwt",
    link: "https://meli.la/1CrzFdF",
    image: "Aparador De Grama Bateria Intercambiável De 18 V Dwt.webp"
  },
  "dwt-iagd-1801": {
    name: "Aparador De Grama Bateria Intercambiável De 18 V Dwt",
    link: "https://meli.la/1CrzFdF",
    image: "Aparador De Grama Bateria Intercambiável De 18 V Dwt.webp"
  },
  "rocadeira-aparador-grama-a-bateria-tcg12b-the-black-tools": {
    name: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools",
    link: "https://meli.la/2jEZEwT",
    image: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools.webp"
  },
  "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools": {
    name: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools",
    link: "https://meli.la/2jEZEwT",
    image: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools.webp"
  },
  "the-black-tools-tcg12b": {
    name: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools",
    link: "https://meli.la/2jEZEwT",
    image: "Roçadeira Aparador Grama A Bateria Tcg12b The Black Tools.webp"
  },
  "rocadeira-eletrica-makita-ur006gz02-40v-xgt": {
    name: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt",
    link: "https://meli.la/2QiaDGk",
    image: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt.webp"
  },
  "Roçadeira Eletrica Makita Ur006gz02 40v Xgt": {
    name: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt",
    link: "https://meli.la/2QiaDGk",
    image: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt.webp"
  },
  "makita-ur006gz02": {
    name: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt",
    link: "https://meli.la/2QiaDGk",
    image: "Roçadeira Eletrica Makita Ur006gz02 40v Xgt.webp"
  },
  "aparador-de-grama-tekna-a-bateria-24v-litio-bivolt-ag24b-2fc": {
    name: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc",
    link: "https://meli.la/1vzyVUk",
    image: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc.webp"
  },
  "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc": {
    name: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc",
    link: "https://meli.la/1vzyVUk",
    image: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc.webp"
  },
  "tekna-ag24b-2fc": {
    name: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc",
    link: "https://meli.la/1vzyVUk",
    image: "Aparador De Grama Tekna A Bateria 24v Litio Bivolt Ag24b-2fc.webp"
  },
  "rocadeira-lateral-a-bateria-toyama-tbt58bcx-k-3": {
    name: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3",
    link: "https://meli.la/1y5DGCo",
    image: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3.webp"
  },
  "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3": {
    name: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3",
    link: "https://meli.la/1y5DGCo",
    image: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3.webp"
  },
  "toyama-tbt58bcx-k": {
    name: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3",
    link: "https://meli.la/1y5DGCo",
    image: "Roçadeira Lateral a Bateria Toyama TBT58BCX-K 3.webp"
  },
  "rocadeira-lateral-a-bateria-21v-com-2-baterias-bom9109-bomvink": {
    name: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink",
    link: "https://meli.la/1ciKERJ",
    image: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink.webp"
  },
  "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink": {
    name: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink",
    link: "https://meli.la/1ciKERJ",
    image: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink.webp"
  },
  "bomvink-bom-9109": {
    name: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink",
    link: "https://meli.la/1ciKERJ",
    image: "Roçadeira Lateral A Bateria 21v com 2 Baterias Bom9109 Bomvink.webp"
  }
};

export type ProductId = keyof typeof products;
