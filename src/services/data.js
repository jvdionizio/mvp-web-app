import { build } from "vite";

const products = {
    headsets: [
        {
            name: 'Headset',
            value: 900.00,
            description: "muito gamers",
            evaluation: 2,
            urls: [
                "link",
                "link2",
            ]
        },
        {
            name: 'Headset gamer premium com som surround 7.1 VOID RGB ELITE USB - Branco',
            value: 999.90,
            description: "Escute tudo, de um leve passo a uma retumbante explosão, graças aos drivers de áudio premium em neodímio de alta densidade e 50mm com ajuste personalizado que contam com um amplo intervalo de frequência de 20hz-30.000hz. muito gamers  Com o poderoso software iCUE da CORSAIR, você personaliza as configurações do equalizador de áudio, aproveita som surround 7.1 imersivo, controla o som de retorno e sincroniza a iluminação RGB com todos os periféricos, resfriadores, ventoinhas e outros produtos CORSAIR compatíveis.Um microfone omnidirecional apresenta sua voz com uma clareza excepcional, enquanto uma função articulada para silenciar e um indicador LED integrado do modo 'silenciar' garantem que você saiba quando será ouvido(a), e quando não. ",
            evaluation: 4,
            brand: "corsair",
            conector:"usb",
            urls: [
                "https://m.media-amazon.com/images/I/61veopbf73L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/719ays1Ji2L._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/717zfz03FkL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71FSJxhkrHL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71BW88xeJAL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71oMup9oN6L._AC_SL1500_.jpg",
            ]
        },
        {
            name: 'Headset Gamer Sem Fio Corsair HS80 Premium',
            value: 1058.81 ,
            description: "O headset gamer CORSAIR HS80 RGB WIRELESS conta com conexão hiper-rápida SLIPSTREAM WIRELESS, que produz sons incrivelmente detalhados pelos drivers de áudio em neodímio de 50mm com ajuste personalizado com a tecnologia imersiva Dolby Atmos.",
            evaluation: 4,
            brand: "corsair",
            conector:"bluetooth",
            urls: [
                "https://images.kabum.com.br/produtos/fotos/216705/headset-gamer-sem-fio-corsair-hs80-premium-rgb-surround-dolby-atmos-wireless-drivers-50mm-preto-ca-9011235-na_1636559754_gg.jpg",
                "https://images.kabum.com.br/produtos/fotos/216705/headset-gamer-sem-fio-corsair-hs80-premium-rgb-surround-dolby-atmos-wireless-drivers-50mm-preto-ca-9011235-na_1636559755_gg.jpg",
                "https://images.kabum.com.br/produtos/fotos/216705/headset-gamer-sem-fio-corsair-hs80-premium-rgb-surround-dolby-atmos-wireless-drivers-50mm-preto-ca-9011235-na_1636559759_gg.jpg",
                "https://images.kabum.com.br/produtos/fotos/216705/headset-gamer-sem-fio-corsair-hs80-premium-rgb-surround-dolby-atmos-wireless-drivers-50mm-preto-ca-9011235-na_1636559756_gg.jpg"
            ]
        },
        {
            name: 'HyperX Cloud Orbit S - Headset gamer',
            value: 1682.61,
            description: 'O HyperX Cloud Orbit S cria um mundo a sua volta com os drivers magnéticos Audeze, com as tecnologias de rastreamento de cabeça (head tracking) e áudio 3D da Waves Nx.',
            evaluation: 4,
            brand: "hyperx",
            conector:"usb",
            urls: [
                "https://images.kabum.com.br/produtos/fotos/105006/headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_1571342913_gg.jpg",
                "https://images.kabum.com.br/produtos/fotos/105006/headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_1571342899_gg.jpg",
                "https://images.kabum.com.br/produtos/fotos/105006/headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_1571342898_gg.jpg",
                "https://images.kabum.com.br/produtos/fotos/105006/headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_headset-hyperx-cloud-orbit-s-audio-3d-hx-hscos-gm-ww_1571342904_gg.jpg",
            ]
        },
        {
            name: 'Headset Gamer HyperX Cloud Stinger Core',
            value: 156.99,
            description: 'Você está em busca de uma experiência imersiva auditiva? O Headset Gamer HyperX Cloud Stinger Core é ideal para quem busca ouvir os mínimos detalhes. um fone mt bom, muito gaymer, muito incirvel',
            evaluation: 5,
            brand: "hyperx",
            conector:"p2",
            urls: [
                "https://images.kabum.com.br/produtos/fotos/97020/97020_2_1528399780_gg.jpg",
            ]
        },
        {
            name: 'Headset Gamer Logitech G432 7.1 Dolby Surround para PC',
            value: 299.99,
            description: 'O Headset Gamer Logitech G432 7.1 Surround Sound foi aprimorado com tecnologia de paisagem sonora avançada. Ouça mais do jogo com drivers de 50 mm que proporcionam um som potente. Para uma imersão máxima, o som surround DTS Headphone: X 2.0 cria uma percepção precisa da posição no jogo. Ouça inimigos se aproximando por trás de você, sinta ataques aéreos ou dicas de habilidades especiais e aproveite a experiência cinematográfica completa de seus jogos favoritos. Você será ouvido em alto e bom som com o microfone de 6 mm com funcionalidade flip-to-mute. O G432 é leve, bem equilibrado, confortável e compatível com seu PC, PlayStation 4 ou Nintendo Switch em sua base, através do adaptador USB DAC incluído',
            evaluation: 5,
            brand: "logitech",
            conector:"p2",
            urls: [
                "https://images.kabum.com.br/produtos/fotos/114290/headset-gamer-logitech-g432-7-1-som-surround-drivers-50mm-981-000769_1613591421_gg.jpg",
            ]
        },
        {
            name: 'Headset Gamer Sem Fio Logitech G733 7.1 Dolby Surround RGB LIGHTSYNC',
            value: 849.99,
            description: ' Liberdade total com alcance sem fio de 20 m e transmissão de áudio sem fio LIGHTSPEED. Aproveite a longa duração da bateria e jogue até 29 horas. Reproduza em estéreo no PlayStation®. Personalize a iluminação do headset em todo o espectro, aprox. 16,8 milhões de cores. Jogue em cores com iluminação LIGHTSYNC RGB frontal e zona dupla e escolha entre animações predefinidas ou crie suas próprias animações com o software G HUB.',
            evaluation: 5,
            brand: "logitech",
            conector:"bluetooth",
            urls: [
                "https://images.kabum.com.br/produtos/fotos/120487/headset-gamer-sem-fio-logitech-g733-rgb-lightsync-7-1-dolby-surround-com-blue-voice-preto-981-000863_1612874214_gg.jpg",
            ]
        },
        {
            name: 'Headset Gamer Redragon Zeus X RGB',
            value: 399.99,
            description: ' Iluminação RGB Redragon Chroma Mk.II com 4 efeitos. Almofadas e revestimento interno do arco em tecido para proporcionar o máximo de conforto. Som estéreo e Surround 7.1 Virtual de alta qualidade pelos drivers de 53mm ',
            evaluation: 5,
            brand: "redragon",
            conector:"usb",
            urls: [
                "https://m.media-amazon.com/images/I/61D0neZIgNL._AC_SL1200_.jpg",
            ]
        },
        {
            name: 'Headset Gamer Redragon Lamia 2',
            value: 229.99,
            description: ' Construção robusta com hastes duplas em metal. Almofadas macias e tiara de ajuste automático para um maior conforto até mesmo durante longos períodos de uso. Iluminação RGB Redragon MK.II nas conchas trazendo mais brilho para seu setup. Acompanha suporte para expor o headset enquanto não estiver em uso. ',
            evaluation: 5,
            brand: "redragon",
            urls: [
                "https://m.media-amazon.com/images/I/61+0nmdZ1PL._AC_SL1000_.jpg",
            ]
        },
        
    
    ],
    mouses: [
        {
            name: 'HyperX Pulsefire Core Mouse para Jogos, Preto, Até 6200 dpi',
            value: 99.99,
            description: "Fácil personalização com o software HyperX NGenuity - Crie macros e personalize a iluminação RGB e DPI. Design ergonômico e confortável - Projetado de forma ergonômica para se adaptar à sua mão e com apoios laterais texturizados para permanecer firme durante movimentos rápidos. Sete botões programáveis e personalizáveis – O Pulsefire Core conta com sete botões programáveis com switches de nível gamer proporcionam nítido feedback tátil configuradas para 20 milhões de cliques",
            evaluation: 5,
            brand: 'HyperX',
            urls: [
                "https://m.media-amazon.com/images/I/413jb9SWLPS._AC_SL1000_.jpg",
                "link2https://m.media-amazon.com/images/I/61ZwGbQR+OL._AC_SL1428_.jpg",
                "https://m.media-amazon.com/images/I/6172qm9x6ZL._AC_SL1428_.jpg",
                "https://m.media-amazon.com/images/I/61v3ghfsCZL._AC_SL1428_.jpg",
                "https://m.media-amazon.com/images/I/610AZ15CkdL._AC_SL1428_.jpg",
                "https://m.media-amazon.com/images/I/719VjjkA-KL._AC_SL1428_.jpg",
                "https://m.media-amazon.com/images/I/51MqrF0RKoL._AC_SL1428_.jpg",
                "https://m.media-amazon.com/images/I/61MEI0G3OfS._AC_SL1500_.jpg",
            ]
            
        }
        
    ],
    
    keyboard: [
        {
            name: 'Teclado Gamer Razer Cynosa Chroma RGB, Windows',
            value: 299.00,
            description: "muito teclavel",
            evaluation: 4,
            brand: 'razer', 
            urls: [
                "link",
                "link2",
            ]

        }
        
    ],
    
    case:[
        {
            name: ' Gabinete Mid-Tower ATX com vidro temperado 4000D, Preto ',
            value: 1000.00, 
            description: "Atraente e sutil, o mid-tower 4000D combina um design minimalista com uma versatilidade excepcional. Montar o PC dos sonhos nunca foi tão fácil quando o ponto de partida é este. O interior espaçoso acomoda até 6 ventoinhas de resfriamento de 120mm ou 4 de 140mm, além de vários radiadores, incluindo um de 360mm na parte frontal e de 280mm na parte superior. Acomoda até 2 SSDs de 2,5 pol. e 2 HDDs de 3,5 pol., com bandejas de SSD reposicionáveis que podem ser movidas para a parte frontal da capa da fonte de alimentação. Com slots PCIe verticais incluídos e um parafuso de montagem para um cabo de extensão CORSAIR PCI-Express 3.0 (vendido separadamente), você pode exibir a sua placa de vídeo e mantê-la segura ao mesmo momento.",
            evaluation: 4,
            casesize: "midtower",
            material: "aço",
            sidepanel:  "vidro temperado",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/h45/h02/9582812561438/base-4000d-config/Gallery/4000D_BLACK_01/-base-4000d-config-Gallery-4000D-BLACK-01.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/h8b/h31/10236168994846/base-4000d-config/Gallery/4000D_BLACK_02/-base-4000d-config-Gallery-4000D-BLACK-02.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/hbe/h4d/10236171747358/base-4000d-config/Gallery/4000D_BLACK_03/-base-4000d-config-Gallery-4000D-BLACK-03.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/h4b/h5b/10236171354142/base-4000d-config/Gallery/4000D_BLACK_04/-base-4000d-config-Gallery-4000D-BLACK-04.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/h24/h19/10236156411934/base-4000d-config/Gallery/4000D_BLACK_05/-base-4000d-config-Gallery-4000D-BLACK-05.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/h23/hb3/10236159164446/base-4000d-config/Gallery/4000D_BLACK_06/-base-4000d-config-Gallery-4000D-BLACK-06.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/h84/h0b/9584639180830/base-4000d-config/Gallery/4000D_BLACK_22/-base-4000d-config-Gallery-4000D-BLACK-22.png_1200Wx1200H",
                "https://www.corsair.com/medias/sys_master/images/images/hf6/h57/9584627384350/base-4000d-config/Gallery/4000D_BLACK_25/-base-4000d-config-Gallery-4000D-BLACK-25.png_1200Wx1200H",
            ]
            
        },
        {
            name: ' Gabinete para jogos mid-tower com LED vermelho Carbide Series™ SPEC-01 ',
            value: 240.51, 
            description: " O gabinete de PC essencial para jogos. O Carbide Series SPEC-01 é prova de que aparência, design inteligente e construção durável não precisam ser caros e que o básico não precisa ser tedioso. Você recebe estilo arrojado, uma janela enorme de painel lateral para admirar seus componentes e uma ventoinha de entrada frontal iluminada por LED que leva o ar resfriado diretamente para suas placas gráficas.",
            evaluation: 4,
            casesize: "midtower",
            material: "aço",
            sidepanel:  "acrilico",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/hc7/hcc/9109820964894/-CC-9011050-WW-Gallery-SPEC01-001.png",
            ]
            
        },
        {
            name: 'Gabinete mid-tower ATX Crystal Series 570X RGB — Branco',
            value: 930.06, 
            description: "O CORSAIR Crystal Series 280X é um gabinete Micro-ATX de alto desempenho com três lindos painéis em vidro temperado e um layout interno inovador com duas câmaras que facilita a montagem de sistemas organizados e com resfriamento superior. ",
            evaluation: 5,
            casesize: "midtower",
            material: "aço",
            sidepanel:  "vidro temperado",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/hbd/h61/9111736188958/-CC-9011110-WW-Gallery-570X-RGB-WHT-01.png",
            ]
            
        },
        {
            name: ' Gabinete inteligente ATX em vidro temperado e de alto fluxo de ar Crystal Series 680X RGB — Preto ',
            value: 1370.00, 
            description: "O CORSAIR Crystal Series 680X RGB é um gabinete ATX de vidro temperado de duas câmaras que mantém seu sistema funcionando com espaço para até oito ventiladores e quatro radiadores, incluindo um 360mm. Mostre uma vista deslumbrante dos componentes do seu PC com três painéis de vidro temperado na frente, no teto e na porta lateral com dobradiças, enquanto um suporte de GPU vertical (opcional) permite que você coloque o palco central da placa gráfica. Faça a sua próxima construção personalizada incrivelmente fácil e inegavelmente gamer radical com o 680X RGB.",
            evaluation: 5,
            casesize: "mid tower",
            material: "aço",
            sidepanel:  "vidro temperado",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/h4b/hf0/9190818742302/-CC-9011168-WW-Gallery-680X-RGB-Black-01.png",
            ]
            
        },
        {
            name: 'Gabinete de PC ATX RGB Full-Tower com vidro temperado iCUE 7000X — Branco',
            value: 2999.99, 
            description: "O gabinete ATX RGB full-tower CORSAIR iCUE 7000X coloca sua máquina em evidência atrás de três painéis de vidro temperado, com espaço para até três radiadores de 360mm ao mesmo tempo, organização de cabos fora de vista e quatro ventoinhas CORSAIR SP140 RGB ELITE incluídas.",
            evaluation: 4,
            casesize: "full tower",
            material: "aço",
            sidepanel:  "vidro temperado",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/h7e/h53/9822970052638/CC-9011227-WW/Gallery/7000X_RGB_WHITE_01/-CC-9011227-WW-Gallery-7000X-RGB-WHITE-01.png_1200Wx1200H",
            ]
            
        },
        {
            name: 'Gabinete para jogos ATX Mid-Tower com vidro temperado Carbide Series SPEC-DELTA RGB — Preto',
            value: 400.00, 
            description: "Gabinete Gamer Corsair Carbide Series Spec Delta RGB Design Angular e Gabinete RGB O painel frontal do Gabinete Gamer Corsair RGB conta com detalhes angulares e escuros que ficam transparentes quando retroiluminados, proporcionando uma visão única do seu sistema. A janela do painel lateral com vidro temperado sem moldura exibe o seu sistema. Capa que Cobre Toda a Fonte de Alimentação. Oculte a sua fonte de alimentação e os cabos, criando montagens impecáveis de forma mais fácil do que nunca. Alto Fluxo de Ar no Seu Gabinete Gamer A malha embutida no painel frontal garante um amplo fluxo de ar para manter seu sistema resfriadoe conta com três Fans RGB Incluídas",
            evaluation: 5,
            casesize: "mid tower",
            material: "vidro temperado",
            sidepanel:  "vidro temperado",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/hbd/h7a/9149284155422/-CC-9011166-WW-Gallery-SPEC-DELTA-01.png",
            ]
            
        },
        {
            name: ' Gabinete em vidro temperado Carbide SPEC-06 — Branco ',
            value: 670.00, 
            description: "Painel lateral de vidro temperado bonito mostra seu sistema em grande estilo. Iluminação de destaque frontal vermelha integrada adiciona iluminação dramática ao seu sistema. Opções de resfriamento versáteis com espaço para até seis ventoinhas de 120mm e várias configurações de radiador. Layout interno simples e intuitivo",
            evaluation: 4,
            casesize: "mid tower",
            material: "vidro temperado",
            sidepanel: "vidro temperado",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/hfa/h5e/9112709038110/-CC-9011145-WW-Gallery-SPEC-06-WHT-01.png",
            ]
            
        },
        {
            name: ' Gabinete para PC com alto fluxo de ar prata Carbide Series™ Air 540 ',
            value: 848.00, 
            description: "O design do nosso Direct Airflow Path utiliza duas cmaras para distribuir ar refrigerado para um excelente potencial de refrigeração. Design inteligente que economiza espaço e ainda oferece muito volume interno. Inclui três ventoínhas Air Series AF140L de alto desempenho para um resfriamento melhor e mais silencioso ",
            evaluation: 4,
            casesize: "mid tower",
            material: "aço",
            sidepanel:  "acrilico",
            brand: "corsair",
            urls: [
                "https://www.corsair.com/medias/sys_master/images/images/h04/h84/9111288971294/-CC-9011034-WLEDCN-Gallery-AIR540-002.png",
            ]
            
        },
    ]
}