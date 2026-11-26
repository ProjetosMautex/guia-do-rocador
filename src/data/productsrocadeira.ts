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
  },

  // --- 9 Novas Roçadeiras Cadastradas ---
  "rocadeira-husqvarna-143rs-2-1hp-profissional-lamina-nylon": {
    name: "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon",
    link: "https://meli.la/1zsQJhz",
    image: "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon.webp"
  },
  "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon": {
    name: "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon",
    link: "https://meli.la/1zsQJhz",
    image: "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon.webp"
  },
  "husqvarna-143rst": {
    name: "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon",
    link: "https://meli.la/1zsQJhz",
    image: "Roçadeira Husqvarna 143rs 2,1hp Profissional Lâmina + Nylon.webp"
  },
  "rocadeira-rd4-gasolina-36cc-motor-4-tempos-menegotti": {
    name: "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti",
    link: "https://meli.la/1TdK1LK",
    image: "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti.webp"
  },
  "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti": {
    name: "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti",
    link: "https://meli.la/1TdK1LK",
    image: "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti.webp"
  },
  "menegotti-rd-4t-36cc": {
    name: "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti",
    link: "https://meli.la/1TdK1LK",
    image: "Roçadeira Rd4 Gasolina 36cc Motor 4 Tempos Menegotti.webp"
  },
  "rocadeira-gasolina-profissional-42-7cc-rl430xs-tekna-kit": {
    name: "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit",
    link: "https://meli.la/2nWDdr6",
    image: "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit.webp"
  },
  "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit": {
    name: "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit",
    link: "https://meli.la/2nWDdr6",
    image: "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit.webp"
  },
  "tekna-rl430xs": {
    name: "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit",
    link: "https://meli.la/2nWDdr6",
    image: "Roçadeira Gasolina Profissional 42,7cc Rl430xs Tekna + Kit.webp"
  },
  "rocadeira-kawashima-kw-52-l-gasolina-51-7cc-2t-2-4hp": {
    name: "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP",
    link: "https://meli.la/2BoZxJm",
    image: "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP.webp"
  },
  "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP": {
    name: "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP",
    link: "https://meli.la/2BoZxJm",
    image: "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP.webp"
  },
  "kawashima-kw52l": {
    name: "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP",
    link: "https://meli.la/2BoZxJm",
    image: "Roçadeira Kawashima KW 52-L Gasolina 51,7cc 2T 2.4HP.webp"
  },
  "rocadeira-toyama-costal-tbc43bx-a-gasolina-1-7hp-42-7cc": {
    name: "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc",
    link: "https://meli.la/1ywprKk",
    image: "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc.webp"
  },
  "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc": {
    name: "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc",
    link: "https://meli.la/1ywprKk",
    image: "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc.webp"
  },
  "toyama-tbc43bx-costal": {
    name: "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc",
    link: "https://meli.la/1ywprKk",
    image: "Roçadeira Toyama Costal Tbc43bx A Gasolina 1,7hp 42,7cc.webp"
  },
  "rocadeira-costal-vulcan-trent-vrc430": {
    name: "Roçadeira costal Vulcan Trent VRC430",
    link: "https://meli.la/2SE8AnT",
    image: "Roçadeira costal Vulcan Trent VRC430.webp"
  },
  "Roçadeira costal Vulcan Trent VRC430": {
    name: "Roçadeira costal Vulcan Trent VRC430",
    link: "https://meli.la/2SE8AnT",
    image: "Roçadeira costal Vulcan Trent VRC430.webp"
  },
  "vulcan-trent-vrc430": {
    name: "Roçadeira costal Vulcan Trent VRC430",
    link: "https://meli.la/2SE8AnT",
    image: "Roçadeira costal Vulcan Trent VRC430.webp"
  },
  "rocadeira-costal-a-gasolina-2t-1-7hp-42-7cc-rc-4500-garthen": {
    name: "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen",
    link: "https://meli.la/2aasSYp",
    image: "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen.webp"
  },
  "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen": {
    name: "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen",
    link: "https://meli.la/2aasSYp",
    image: "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen.webp"
  },
  "garthen-rc4500": {
    name: "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen",
    link: "https://meli.la/2aasSYp",
    image: "Roçadeira Costal À Gasolina 2t 1.7hp 42,7cc Rc-4500 Garthen.webp"
  },
  "rocadeira-costal-a-gasolina-541rb-husqvarna-1-97hp": {
    name: "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp",
    link: "https://meli.la/1Uhx3aS",
    image: "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp.webp"
  },
  "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp": {
    name: "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp",
    link: "https://meli.la/1Uhx3aS",
    image: "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp.webp"
  },
  "husqvarna-541rb": {
    name: "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp",
    link: "https://meli.la/1Uhx3aS",
    image: "Roçadeira Costal A Gasolina 541rb Husqvarna 1,97hp.webp"
  },
  "rocadeira-kawashima-lateral-uso-intenso-plus-kw340-t-33-6cc": {
    name: "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc",
    link: "https://meli.la/2XjYekN",
    image: "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc.webp"
  },
  "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc": {
    name: "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc",
    link: "https://meli.la/2XjYekN",
    image: "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc.webp"
  },
  "kawashima-kw340-t": {
    name: "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc",
    link: "https://meli.la/2XjYekN",
    image: "Roçadeira Kawashima Lateral Uso-intenso Plus Kw340-t 33,6cc.webp"
  },

  // --- Graxas para Caixa de Transmissão / Ponteira de Roçadeira ---
  "graxa-80g-stihl-a-melhor-lubrificacao": {
    name: "Graxa 80g Stihl A Melhor - Lubrificação",
    link: "https://meli.la/1fD54Tn",
    image: "Graxa 80g Stihl A Melhor - Lubrificação.webp"
  },
  "Graxa 80g Stihl A Melhor - Lubrificação": {
    name: "Graxa 80g Stihl A Melhor - Lubrificação",
    link: "https://meli.la/1fD54Tn",
    image: "Graxa 80g Stihl A Melhor - Lubrificação.webp"
  },
  "graxa-stihl-80g": {
    name: "Graxa 80g Stihl A Melhor - Lubrificação",
    link: "https://meli.la/1fD54Tn",
    image: "Graxa 80g Stihl A Melhor - Lubrificação.webp"
  },
  "graxa-litio-husqvarna-80gr": {
    name: "Graxa Litio Husqvarna 80gr",
    link: "https://meli.la/2ZRkq4i",
    image: "Graxa Litio Husqvarna 80gr.webp"
  },
  "Graxa Litio Husqvarna 80gr": {
    name: "Graxa Litio Husqvarna 80gr",
    link: "https://meli.la/2ZRkq4i",
    image: "Graxa Litio Husqvarna 80gr.webp"
  },
  "graxa-husqvarna-80g": {
    name: "Graxa Litio Husqvarna 80gr",
    link: "https://meli.la/2ZRkq4i",
    image: "Graxa Litio Husqvarna 80gr.webp"
  },

  // --- Linha Roçadeiras Toyama e Alternativas (Carbon Fak, Intech Machine, Vulcan Trent) ---
  "rocadeira-tbc63-toyama-profissional-3-5hp-funcao-motopoda": {
    name: "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda",
    link: "https://meli.la/348DVNj",
    image: "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda.webp"
  },
  "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda": {
    name: "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda",
    link: "https://meli.la/348DVNj",
    image: "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda.webp"
  },
  "toyama-tbc63": {
    name: "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda",
    link: "https://meli.la/348DVNj",
    image: "Roçadeira Tbc63 Toyama Profissional 3.5hp + Função Motopoda.webp"
  },
  "rocadeira-gasolina-2-tempos-tbc43x-43cc-gll-toyama-lamina": {
    name: "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina",
    link: "https://meli.la/1K6kkqk",
    image: "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina.webp"
  },
  "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina": {
    name: "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina",
    link: "https://meli.la/1K6kkqk",
    image: "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina.webp"
  },
  "toyama-tbc43x": {
    name: "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina",
    link: "https://meli.la/1K6kkqk",
    image: "Roçadeira Gasolina 2 Tempos Tbc43x 43cc Gll Toyama + Lâmina.webp"
  },
  "rocadeira-jardinagem-lateral-a-gasolina-toyama-tbc43h": {
    name: "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H",
    link: "https://meli.la/2svLF82",
    image: "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H.webp"
  },
  "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H": {
    name: "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H",
    link: "https://meli.la/2svLF82",
    image: "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H.webp"
  },
  "toyama-tbc43h": {
    name: "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H",
    link: "https://meli.la/2svLF82",
    image: "Roçadeira Jardinagem Lateral A Gasolina Toyama TBC43H.webp"
  },
  "rocadeira-toyama-tbc52h-52cc-profissional-oleo-2t-brinde": {
    name: "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde",
    link: "https://meli.la/1PbNbjy",
    image: "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde.webp"
  },
  "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde": {
    name: "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde",
    link: "https://meli.la/1PbNbjy",
    image: "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde.webp"
  },
  "toyama-tbc52h": {
    name: "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde",
    link: "https://meli.la/1PbNbjy",
    image: "Roçadeira Toyama Tbc52h 52cc Profissional + Óleo 2t Brinde.webp"
  },
  "rocadeira-lateral-a-gasolina-2hp-52cc-2t-rt52l-b-toyama": {
    name: "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama",
    link: "https://meli.la/1uNyBm5",
    image: "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama.webp"
  },
  "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama": {
    name: "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama",
    link: "https://meli.la/1uNyBm5",
    image: "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama.webp"
  },
  "toyama-rt52l": {
    name: "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama",
    link: "https://meli.la/1uNyBm5",
    image: "Roçadeira Lateral A Gasolina 2hp 52cc 2t Rt52l-b Toyama.webp"
  },
  "rocadeira-toyama-rt43l": {
    name: "Roçadeira Toyama Rt43l",
    link: "https://meli.la/1WoLK5M",
    image: "Roçadeira Toyama Rt43l.webp"
  },
  "Roçadeira Toyama Rt43l": {
    name: "Roçadeira Toyama Rt43l",
    link: "https://meli.la/1WoLK5M",
    image: "Roçadeira Toyama Rt43l.webp"
  },
  "toyama-rt43l": {
    name: "Roçadeira Toyama Rt43l",
    link: "https://meli.la/1WoLK5M",
    image: "Roçadeira Toyama Rt43l.webp"
  },
  "rocadeira-a-gasolina-toyama-tbc52sx-premium-2t-51-6cc-pro": {
    name: "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro",
    link: "https://meli.la/1zijdKN",
    image: "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro.webp"
  },
  "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro": {
    name: "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro",
    link: "https://meli.la/1zijdKN",
    image: "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro.webp"
  },
  "toyama-tbc52sx": {
    name: "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro",
    link: "https://meli.la/1zijdKN",
    image: "Roçadeira A Gasolina Toyama Tbc52sx Premium 2t 51,6cc Pro.webp"
  },
  "rocadeira-a-gasolina-profissional-2-5hp-fak520rb-carbon-fak": {
    name: "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak",
    link: "https://meli.la/1YJTBvg",
    image: "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak.webp"
  },
  "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak": {
    name: "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak",
    link: "https://meli.la/1YJTBvg",
    image: "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak.webp"
  },
  "carbon-fak-fak520rb": {
    name: "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak",
    link: "https://meli.la/1YJTBvg",
    image: "Roçadeira A Gasolina Profissional 2,5hp Fak520rb Carbon Fak.webp"
  },
  "rocadeira-bipartida-a-gasolina-1-9-hp-2t-52cc-acessorios-skim5100-intech-machine": {
    name: "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine",
    link: "https://meli.la/2FsSgnU",
    image: "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine.webp"
  },
  "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine": {
    name: "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine",
    link: "https://meli.la/2FsSgnU",
    image: "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine.webp"
  },
  "intech-machine-skim5100": {
    name: "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine",
    link: "https://meli.la/2FsSgnU",
    image: "Roçadeira bipartida à gasolina 1,9 HP 2T 52CC acessórios SKIM5100 Intech Machine.webp"
  },
  "rocadeira-lateral-a-gasolina-vulcan-trent-vr520h-52cc-2-5hp-2t": {
    name: "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t",
    link: "https://meli.la/1J4Bmba",
    image: "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t.webp"
  },
  "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t": {
    name: "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t",
    link: "https://meli.la/1J4Bmba",
    image: "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t.webp"
  },
  "vulcan-trent-vr520h": {
    name: "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t",
    link: "https://meli.la/1J4Bmba",
    image: "Roçadeira Lateral A Gasolina Vulcan Trent Vr520h 52cc 2,5hp 2t.webp"
  }
};

export type ProductId = keyof typeof products;
