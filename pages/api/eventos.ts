import type { NextApiRequest, NextApiResponse } from 'next';

export default function apiEventos(req: NextApiRequest, res: NextApiResponse) {
  const eventos = [
    {
      id: 1,
      nombre: 'Las leyendas de la salsa Medellín',
      imagen:
        'https://2-tuticket-com-co.my-uploads.ticketplus.global/images/shares/c64769820240856e76ca-LDS_MED_PAG_WEB_%2825_%29_1200_X_630.jpg?1719411606',
      fecha: '06/Jul/2024',
      lugar: 'Estadio el Atanasio Girardot',
      ciudad: 'Medellín',
      url: 'https://tuticket.com.co/events/las-leyendas-de-la-salsa-medellin',
      categoria: 'Conciertos',
    },
    {
      id: 2,
      nombre: 'Rock & Pop',
      imagen:
        'https://2-tuticket-com-co.my-uploads.ticketplus.global/images/shares/b852cd8843dfaa1e0c2b-CRP_WEB_-_1200_X_630.png?1717596180',
      fecha: '12/Jul/2024',
      lugar: 'Estadio Nemesio Camacho El Campín',
      ciudad: 'Bogotá',
      url: 'https://tuticket.com.co/events/rock-pop',
      categoria: 'Conciertos',
    },
    {
      id: 3,
      nombre: 'Las leyendas de la salsa Bogotá',
      imagen:
        'https://2-tuticket-com-co.my-uploads.ticketplus.global/images/shares/5d15f2463857a0c6c224-LDS_BOG_PAG_WEB_%2825_%29_1200_X_630.jpg?1719412664',
      fecha: '13/Jul/2024',
      lugar: 'Estadio Nemesio Camacho El Campín',
      ciudad: 'Bogotá',
      url: 'https://tuticket.com.co/events/las-leyendas-de-la-salsa-bogota',
      categoria: 'Conciertos',
    },
    {
      id: 4,
      nombre: 'Titanes vs Bucaros | Liga de baloncesto profesional 2024-1',
      imagen: 'https://tuboleta.com/imagenes/6675b00473b5a.webp',
      fecha: '02/Jul/2024',
      lugar: 'Coliseo Elías Chegwin',
      ciudad: 'Barranquilla',
      url: 'https://www.tuboleta.com/eventos/detalle/titanes-vs-bucaros-2024-1/364527949320',
      categoria: 'Deportes',
    },
    {
      id: 5,
      nombre: 'Vieve la salsa Barranquilla',
      imagen: 'https://tuboleta.com/imagenes/65f324afc9b63.webp',
      fecha: '06/Jul/2024',
      lugar: 'Estadio Romelio Martínez',
      ciudad: 'Barranquilla',
      url: 'https://portal.tuboleta.com/vive-la-salsa-2024-barranquilla/',
      categoria: 'Conciertos',
    },
    {
      id: 6,
      nombre: 'Abonos Junior 2024-2',
      imagen: 'https://tuboleta.com/imagenes/666c627b62c4e.webp',
      fecha: '31/Jul/2024',
      lugar: 'Estadio Metropolitano Roberto Meléndez',
      ciudad: 'Barranquilla',
      url: 'https://portal.tuboleta.com/junior-de-barranquilla/',
      categoria: 'Deportes',
    },
    {
      id: 7,
      nombre: 'Ryan Castro | El cantante del guetto Tour 2024 - Barranquilla',
      imagen: 'https://tuboleta.com/imagenes/666a059623cfc.webp',
      fecha: '13/Sep/2024',
      lugar: 'Puerta de Oro',
      ciudad: 'Barranquilla',
      url: 'https://www.tuboleta.com/images/Eventos/el-cantante-del-ghetto-tour-ryan-castro/barranquilla.html',
      categoria: 'Conciertos',
    },
    {
      id: 8,
      nombre: 'Kany garcia - Barranquilla Tour 2024',
      imagen: 'https://tuboleta.com/imagenes/66685c35570ab.webp',
      fecha: '28/Sep/2024',
      lugar: 'Puerta de Oro - Explanada',
      ciudad: 'Barranquilla',
      url: 'https://portal.tuboleta.com/kany-garcia/barranquilla/',
      categoria: 'Conciertos',
    },
    {
      id: 9,
      nombre: 'Encuentro AFE | Prosperidad Compartida',
      imagen: 'https://tuboleta.com/imagenes/6658e49adb42a.jpg',
      fecha: '02/Oct/2024',
      lugar: 'Fábrica de Cultura',
      ciudad: 'Barranquilla',
      url: 'https://portal.tuboleta.com/encuentro-afe/',
      categoria: 'Foros',
    },
    {
      id: 10,
      nombre: 'Parque Caribe Aventura',
      imagen: 'https://tuboleta.com/imagenes/64c2a68a362d7.webp',
      lugar: 'Parque Caribe Aventura',
      ciudad: 'Barranquilla',
      url: 'https://www.tuboleta.com/eventos/detalle/parque-caribe-aventura/2967396004',
      categoria: 'Familia',
    },
    {
      id: 11,
      nombre: 'Museo carnaval',
      imagen: 'https://tuboleta.com/imagenes/64c2a828913da.webp',
      lugar: 'Museo del Carnaval',
      ciudad: 'Barranquilla',
      url: 'https://www.tuboleta.com/eventos/detalle/museo-del-carnaval%0D%0A/10476786008',
      categoria: 'Familia',
    },
    {
      id: 12,
      nombre: 'Gran premiro MOBIL DELVAC™ edicción 36 años',
      imagen: 'https://tuboleta.com/imagenes/66101be60b7bf.webp',
      fecha: '13/Jul/2024',
      lugar: 'Autódromo de Tocancipá',
      ciudad: 'Tocancipá',
      url: 'https://www.tuboleta.com/eventos/detalle/gran-premio-mobil-delvac-edicion-36/8121200231',
      categoria: 'Familia',
    },
    {
      id: 13,
      nombre: 'Gordo y Feo - Pereira',
      imagen: 'https://tuboleta.com/imagenes/66798d85b21d9.webp',
      fecha: '27/Jul/2024',
      lugar: 'Teatro Museo de Arte',
      ciudad: 'Pereira',
      url: 'https://www.tuboleta.com/eventos/detalle/gordo-y-feo-pereira/588360445929',
      categoria: 'Teatro',
    },
    {
      id: 14,
      nombre: 'Aabonos Atlético Huila 2024-2',
      imagen: 'https://tuboleta.com/imagenes/66709735c51df.jpg',
      lugar: 'Estadio Guillermo Plazas AlcId',
      ciudad: 'Neiva',
      url: 'https://www.tuboleta.com/eventos/detalle/abonos-huila-2024-2/616180576406',
      categoria: 'Deportes',
    },
    {
      id: 15,
      nombre: 'Mor Pride Fest 2024',
      imagen: 'https://tuboleta.com/imagenes/667c286b148d4.webp',
      fecha: '30/JUN/2024',
      lugar: 'Jardín Botanico',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/pride-fest-2024/2128854460',
      categoria: 'Festival',
    },
    {
      id: 16,
      nombre: 'Franco Escamilla | Show 1995 - Medellín',
      imagen: 'https://tuboleta.com/imagenes/65cb814075b6d.webp',
      fecha: '03/Jul/2024',
      lugar: 'Teatro UniversIdad de Medellín',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/show-1995-medellin/225662010622',
      categoria: 'Teatro',
    },
    {
      id: 17,
      nombre: 'Peguese la Rodadita - Medellín',
      imagen: 'https://tuboleta.com/imagenes/6671a7b1ab5eb.webp',
      fecha: '03/Jul/2024',
      lugar: 'Fonda Discoteca Tutaina',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/peguese-la-rodadita-medellin/846549008998',
      categoria: 'Teatro',
    },
    {
      id: 18,
      nombre: 'Rawayana - ¿Quien trae las cornetas? - Medellín',
      imagen: 'https://tuboleta.com/imagenes/65d3c820bd7ed.webp',
      fecha: '04/Jul/2024',
      lugar: 'Skycenter Centro de Eventos',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/rawayana-quien-trae-las-cornetas/8069732190',
      categoria: 'Conciertos',
    },
    {
      id: 19,
      nombre: 'Luli Pampi Bienvenidos - Medellín',
      imagen: 'https://tuboleta.com/imagenes/6602f159ab07b.webp',
      fecha: '05/Jul/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/luli-pampin-bienvenidos-medellin/812989531747',
      categoria: 'Conciertos',
    },
    {
      id: 20,
      nombre:
        'DO-RE-MINGO Favorito en sus marcas, listo... ¡Música! Juguemos con la orquesta',
      imagen: 'https://tuboleta.com/imagenes/6676d1db815dc.webp',
      fecha: '07/Jul/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/do-re-mingo-favorito-rjuguemos-con-la.orquesta/178954817579',
      categoria: 'Conciertos',
    },
    {
      id: 21,
      nombre: 'Denme una Mano - Medellín',
      imagen: 'https://tuboleta.com/imagenes/6671a9388fb23.webp',
      fecha: '10/Jul/2024',
      lugar: 'Fonda Discoteca Tutaina',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/denme-una-mano-medellin/721501131760',
      categoria: 'Teatro',
    },
    {
      id: 22,
      nombre: 'Raquel Zozaya en concierto',
      imagen: 'https://tuboleta.com/imagenes/6672d9dfd8ed5.webp',
      fecha: '11/Jul/2024',
      lugar: 'Teatro El Tesoro',
      ciudad: 'Medellín',
      url: 'https://portal.tuboleta.com/teatro-el-tesoro/',
      categoria: 'Conciertos',
    },
    {
      id: 23,
      nombre: 'Morat - Medellín',
      imagen: 'https://tuboleta.com/imagenes/65c508810da24.jpg',
      fecha: '13/Jul/2024',
      lugar: 'Estadio Atanasio Girardot',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/images/Eventos/Morat-medellin-2024/index.html',
      categoria: 'Conciertos',
    },
    {
      id: 24,
      nombre: 'Teatro en Familia: ECOCLOWN',
      imagen: 'https://tuboleta.com/imagenes/6672f79b742e7.png',
      fecha: '14/Jul/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/ecoclown/778215013065',
      categoria: 'Familia',
    },
    {
      id: 25,
      nombre: 'La Hoguera',
      imagen: 'https://tuboleta.com/imagenes/6674270524f7d.webp',
      fecha: '17/Jul/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/la-hoguera/652580573629',
      categoria: 'Teatro',
    },
    {
      id: 26,
      nombre: 'Blanco y Negro - Medellín',
      imagen: 'https://tuboleta.com/imagenes/6671aa8877a6d.webp',
      fecha: '17/Jul/2024',
      lugar: 'Fonda Discoteca Tutaina',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/blanco-y-negro-medellin/657684957371',
      categoria: 'Teatro',
    },
    {
      id: 27,
      nombre: 'Tosca Ópera de Giacomo Puccini',
      imagen: 'https://tuboleta.com/imagenes/666aedc68550e.webp',
      fecha: '19/Jul/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/tosca-opera-de-giacomo-puccini/7688829215',
      categoria: 'Teatro',
    },
    {
      id: 28,
      nombre: 'Moneno - Medellín',
      imagen: 'https://tuboleta.com/imagenes/6671ac4334bd7.webp',
      fecha: '24/Jul/2024',
      lugar: 'Fonda Discoteca Tutaina',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/moneno-medellin/189154325516',
      categoria: 'Teatro',
    },
    {
      id: 29,
      nombre: 'José Matera y Estelares Medellín',
      imagen: 'https://tuboleta.com/imagenes/664bba20cbe16.webp',
      fecha: '26/Jul/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/jose-matera-y-estelares-en-medellin/7017094210',
      categoria: 'Conciertos',
    },
    {
      id: 30,
      nombre: 'Tu Rockcito | Concierto de Rock para toda la familia',
      imagen: 'https://tuboleta.com/imagenes/667966536c854.webp',
      fecha: '27/Jul/2024',
      lugar: 'Teatro El Tesoro',
      ciudad: 'Medellín',
      url: 'https://portal.tuboleta.com/teatro-el-tesoro/',
      categoria: 'Conciertos',
    },
    {
      id: 31,
      nombre: 'Juan Duque | Q.M.P.E.V. Tour Medellín',
      imagen: 'https://tuboleta.com/imagenes/6671b0062be20.webp',
      fecha: '27/Jul/2024',
      lugar: 'The Church',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/juan-duque-qmpev-tour-medellin/501071001834',
      categoria: 'Conciertos',
    },
    {
      id: 32,
      nombre: 'Bandas sonoras 2.0 | Hans Zimmer, Anime y Comic',
      imagen: 'https://tuboleta.com/imagenes/664f6e39c96f2.webp',
      fecha: '02/Ago/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/bandas-sonoras-2.0/1968090755',
      categoria: 'Conciertos',
    },
    {
      id: 33,
      nombre: 'Dem Tragedia Futurista',
      imagen: 'https://tuboleta.com/imagenes/66699d6471d4b.webp',
      fecha: '22/Ago/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/DEM-tragedia-futurista/185906150748',
      categoria: 'Teatro',
    },
    {
      id: 34,
      nombre:
        'Concierto Nº3 de la XIX Temporada Internacional de Musíca Clásica: Pablo Sainz-Villegas, Guitarra (España)',
      imagen: 'https://tuboleta.com/imagenes/663bd00db7950.webp',
      fecha: '28/Ago/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/Temporada-Internacional-de-Musica-Clasica-Pablo-Sainz-Villegas/817876289896',
      categoria: 'Conciertos',
    },
    {
      id: 35,
      nombre: 'Amazonas el Río que Nació en el Cielo',
      imagen: 'https://tuboleta.com/imagenes/667aebd20de85.webp',
      fecha: '30/Ago/2024',
      lugar: 'Teatro El Tesoro',
      ciudad: 'Medellín',
      url: 'https://portal.tuboleta.com/teatro-el-tesoro/',
      categoria: 'Conciertos',
    },
    {
      id: 36,
      nombre: 'Epic - Medellín - Segunda Función',
      imagen: 'https://tuboleta.com/imagenes/662ff42879b3d.webp',
      fecha: '31/Ago/2024',
      lugar: 'Teatro UniversIdad de Medellín',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/epic-2024-medellin-segunda-funcion/877714725879',
      categoria: 'Conciertos',
    },
    {
      id: 37,
      nombre: 'Ópera Carmen de Georges Bizet',
      imagen: 'https://tuboleta.com/imagenes/65dce11cb8a21.webp',
      fecha: '05/Sep/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/opera-carmen/7858420969',
      categoria: 'Teatro',
    },
    {
      id: 38,
      nombre: 'Alberto Plaza | Sin Fronteras Tour - Medellín Segunda fecha',
      imagen: 'https://tuboleta.com/imagenes/663948e0a5f5c.webp',
      fecha: '14/Sep/2024',
      lugar: 'Teatro de la UniversIdad de Medellín',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/alberto-plaza-tour-yo-te-seguire-colombia-medellin-segunda-fecha/378125138790',
      categoria: 'Familia',
    },
    {
      id: 39,
      nombre:
        'Concierto Nº4 de la XIX Temporada Internacional de Musíca Clásica: Anna Geniushene, Piano, (Rusia)',
      imagen: 'https://tuboleta.com/imagenes/663bd1d837427.webp',
      fecha: '18/Sep/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/Temporada-Internacional-de-Musica-Clasica-Pablo-Anna-Geniushene/962679079121',
      categoria: 'Conciertos',
    },
    {
      id: 40,
      nombre: 'Venture X Defined by Paul Van Dyk - Medellín',
      imagen: 'https://tuboleta.com/imagenes/6670373a36273.webp',
      fecha: '21/Sep/2024',
      lugar: 'Ciudad Hall El Rodeo',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/paul-van-dyk-medellin/459342494756',
      categoria: 'Conciertos',
    },
    {
      id: 41,
      nombre:
        'Concierto Nº5 de la XIX Temporada Internacional de Musíca Clásica: latsos Piano Duo, Piano, (EE.UU)',
      imagen: 'https://tuboleta.com/imagenes/663bd409cceaa.webp',
      fecha: '02/Oct/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/Temporada-Internacional-de-Musica-Clasica-Latsos-Piano-Duo/844023688870',
      categoria: 'Conciertos',
    },
    {
      id: 42,
      nombre: 'Kiss, Guns N’ Roses & Def Leppard Filarmónico',
      imagen: 'https://tuboleta.com/imagenes/66212c021e8c0.webp',
      fecha: '05/Oct/2024',
      lugar: 'Teatro Pablo Tobón Uribe',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/kiss-guns-and-roses-def-leppard-sinfonico/7423379111',
      categoria: 'Conciertos',
    },
    {
      id: 43,
      nombre: 'Magic - Medellín',
      imagen: 'https://tuboleta.com/imagenes/66718e43121aa.webp',
      fecha: '14/Oct/2024',
      lugar: 'Teatro de la UniversIdad de Medellín',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/magic-medellin/823681440496',
      categoria: 'Conciertos',
    },
    {
      id: 44,
      nombre:
        'Concierto Nº6 de la XIX Temporada Internacional de Musíca Clásica: Trío Guarneri de Praga, Trío de Piano, (República Checa)',
      imagen: 'https://tuboleta.com/imagenes/66438de20f2fd.webp',
      fecha: '22/Oct/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/Temporada-Internacional-de-Musica-Clasica-trio-guarneri-de-praga/622529349577',
      categoria: 'Conciertos',
    },
    {
      id: 45,
      nombre: 'Ritvales 2024',
      imagen: 'https://tuboleta.com/imagenes/667440489cc11.webp',
      fecha: '02/Nov/2024',
      lugar: 'Parque Norte',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/images/Eventos/Ritvales-2024/home.html',
      categoria: 'Conciertos',
    },
    {
      id: 46,
      nombre: 'Tributo Sinfonico Guns N´ Roses + Metallica',
      imagen: 'https://tuboleta.com/imagenes/66745a6569bcd.webp',
      fecha: '16/Nov/2024',
      lugar: 'Teatro Metropolitano José Gutiérrez Gómez',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/tributo-sinfonico-guns-n-roses-y-metallica/342624153634',
      categoria: 'Conciertos',
    },
    {
      id: 47,
      nombre: 'La Selva - Colombia',
      imagen: 'https://tuboleta.com/imagenes/6661c812089a2.png',
      lugar: 'Gran Domo - Plaza Palmas',
      ciudad: 'Medellín',
      url: 'https://www.tuboleta.com/eventos/detalle/la-selva-colombia/1829475769',
      categoria: 'Familia',
    },
  ];
  res.status(200).json(eventos);
}
