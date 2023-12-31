import {
  FaChalkboardTeacher,
  FaClock,
  FaEye,
  FaFacebook,
  FaRegCreditCard,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa'
import { LuLineChart } from 'react-icons/lu'
import { FaShieldAlt, FaPiggyBank, FaMoneyBillWave } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { FaSquareThreads, FaSquareXTwitter } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import {
  BooksList,
  GoalsList,
  ReputationList,
  SectionTextProps,
  SocialsList,
  StatisticsList,
  TeamList,
  TestimonialsList,
  TopicsList,
  WebLinks,
} from './types'

export const contactEmail = 'contacto@pasionporlasfinanzas.com'

export const webLinks: WebLinks[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Asesoría', path: 'https://asesoria.pasionporlasfinanzas.com' },
  { name: 'Blog', path: '/blog' },
  { name: 'Nosotros', path: '/about' },
  { name: 'Contacto', path: '/contact' },
]

export const sectionTextContent: SectionTextProps[] = [
  {
    section: 'asesoria',
    header: 'ASESORÍA FINANCIERA',
    leftText: 'Las',
    highlightedText: 'Inversiones',
    rightText: 'Inteligentes Hacen Crecer Tu Dinero',
    paragraph:
      'Soluciones adaptadas a tus metas financieras. ¡Empieza a tomar el control de tus finanzas hoy mismo!',
  },
  {
    section: 'nosotros',
    header: 'SOBRE NOSOTROS',
    leftText: 'Empresa Líder En',
    highlightedText: 'Asesoría Financiera',
    rightText: '',
    paragraph:
      'Pasión por las Finanzas nació el 2020 con el fin de ayudar a todas las personas, sin importar cuál sea su edad, sexo, religión o condición; a mejorar sus conocimientos en materia financiera e inversión',
  },
  {
    section: 'reputacion',
    header: 'NUESTRA REPUTACIÓN',
    leftText: '',
    highlightedText: 'Tu Éxito',
    rightText: 'Es Nuestra Reputación',
    paragraph:
      'Soluciones adaptadas a tus metas financieras. ¡Empieza a tomar el control de tus finanzas hoy mismo!',
  },
  {
    section: 'estadisticas',
    header: 'ESTADÍSTICAS DE NUESTRO CANAL',
    leftText: 'Nuestro Objetivo.',
    highlightedText: 'Tu crecimiento',
    rightText: '',
    paragraph: '',
  },
  {
    section: 'libros',
    header: 'RECOMENDACIONES',
    leftText: 'Libros',
    highlightedText: 'Recomendados',
    rightText: '',
    paragraph: '',
  },
]

export const filterTextBySection = (name: string) =>
  sectionTextContent.filter((item) => item.section === name)[0]

export const topics: TopicsList[] = [
  {
    icon: <FaChalkboardTeacher />,
    name: 'Estrategia',
    description:
      'Descubra las Estrategias Ganadoras para Alcanzar sus Metas Financieras.',
  },
  {
    icon: <LuLineChart />,
    name: 'Finanzas',
    description: 'Fortalece tu Futuro Financiero, Paso a Paso.',
  },
  {
    icon: <FaShieldAlt />,
    name: 'Jubilación',
    description: 'Potencie su Jubilación con Nuestra Experiencia.',
  },
  {
    icon: <FaPiggyBank />,
    name: 'Ahorro',
    description: 'Potencie su Ahorro para un Futuro Próspero.',
  },
  {
    icon: <FaMoneyBillWave />,
    name: 'Inversión',
    description:
      'Recomendaciones de Inversión que se Adapten a tus Objetivos Financieros.',
  },
  {
    icon: <FaRegCreditCard />,
    name: 'Gestión de Deudas',
    description:
      'Gestiona y Reduce tus Deudas con la Elaboración de Planes de Pago.',
  },
]

export const reputationList: ReputationList[] = [
  {
    name: 'Experiencia y Trayectoria Sólida',
    description:
      '+3 años de experiencia en el sector financiero, con un compromiso continuo con la excelencia.',
  },
  {
    name: 'Clientes Satisfechos',
    description:
      'Hemos construido relaciones a largo plazo con nuestros clientes, y sus testimonios hablan de la calidad de nuestro servicio.',
  },
  {
    name: 'Comunidad',
    description:
      'No nos basamos solo en el éxito financiero, sino también en nuestro compromiso de contribuir al bienestar de la comunidad.',
  },
]

export const statisticsList: StatisticsList[] = [
  {
    icon: <FaEye />,
    name: '+276,000',
    description: 'visualizaciones',
  },
  {
    icon: <IoPerson />,
    name: '+2,900',
    description: 'suscriptores',
  },
  {
    icon: <FaClock />,
    name: '+13,000',
    description: 'horas',
  },
  {
    icon: <FaYoutube />,
    name: '+70',
    description: 'videos',
  },
]

export const testimonial: TestimonialsList[] = [
  {
    image: '/images/testimonials/1.webp',
    name: 'Enrique Piña',
    job: 'Vendedor',
    rate: 5,
    comment: 'Recomendado 100%',
  },
  {
    image: '/images/testimonials/2.webp',
    name: 'Piero Reyes',
    job: 'Ingeniero',
    rate: 5,
    comment:
      'Esta asesoría financiera me brindó un invaluable apoyo durante un periodo de transición económica. Lo recomiendo.',
  },
  {
    image: '/images/testimonials/3.webp',
    name: 'Martín Prado',
    job: 'Vendedor',
    rate: 5,
    comment:
      'Asesoría financiera de calidad. No tenía muchos conocimientos sobre el tema y me lo explicó de forma sencilla. Recomendado.',
  },
  {
    image: '/images/testimonials/4.webp',
    name: 'María Silva',
    job: 'Enfermera',
    rate: 5,
    comment:
      'Excelente servicio. El asesor financiero fue muy paciente y respondió a todas mis preguntas con profesionalismo.',
  },
  {
    image: '/images/testimonials/5.webp',
    name: 'Carlos Espejo',
    job: 'Abogado',
    rate: 5,
    comment:
      'Gracias a la asesoría financiera, pude establecer metas financieras realistas y crear un plan sólido para alcanzarlas.',
  },
  {
    image: '/images/testimonials/6.webp',
    name: 'Enrique Grau',
    job: 'Médico',
    rate: 5,
    comment:
      'La asesoría fue personalizada y adaptada a mis necesidades. Me dio consejos prácticos para mejorar mi situación financiera.',
  },
]

export const bookList: BooksList[] = [
  {
    image: '/images/books/1.webp',
    name: 'Padre rico, padre pobre',
    href: 'https://www.buscalibre.pe/libro-padre-rico-padre-pobre-db/9786124463167/p/53140787?afiliado=16952b632200547b1258',
  },
  {
    image: '/images/books/2.webp',
    name: 'El Camino',
    href: 'https://bit.ly/elcamin0',
  },
  {
    image: '/images/books/3.webp',
    name: 'La Escuela de Negocios',
    href: 'https://www.buscalibre.pe/libro-la-escuela-de-negocios/9789877253764/p/52330470?afiliado=16952b632200547b1258',
  },
  {
    image: '/images/books/4.webp',
    name: 'El Cuadrante del Flujo de Dinero',
    href: 'https://bit.ly/cuadrante_flujo',
  },
  {
    image: '/images/books/5.webp',
    name: 'Cómo Ganar Amigos e Influir sobre las Personas',
    href: 'https://www.buscalibre.pe/libro-como-ganar-amigos-e-influir-sobre-las-personas/9786124463273/p/53392333?afiliado=16952b632200547b1258',
  },
  {
    image: '/images/books/6.webp',
    name: 'Hábitos Atómicos',
    href: 'https://www.buscalibre.pe/libro-habitos-atomicos/9786124404245/p/54033302?afiliado=16952b632200547b1258',
  },
]

export const socialsList: SocialsList[] = [
  {
    icon: <FaYoutube />,
    name: 'YouTube',
    href: 'https://www.youtube.com/@pasionporlasfinanzas/featured',
  },
  {
    icon: <RiInstagramFill />,
    name: 'Instagram',
    href: 'https://www.instagram.com/pasionporlasfinanzas/',
  },
  {
    icon: <FaFacebook />,
    name: 'Facebook',
    href: 'https://www.facebook.com/pasionporlasfinanzas',
  },
  {
    icon: <FaTiktok />,
    name: 'TikTok',
    href: 'https://www.youtube.com/channel/UC0Q6ZbJ2yRh8Y3RSeJr0UQg',
  },
  {
    icon: <FaSquareXTwitter />,
    name: 'X',
    href: 'https://twitter.com/pasionxfinanzas',
  },
  {
    icon: <FaSquareThreads />,
    name: 'Threads',
    href: 'https://www.threads.net/@pasionporlasfinanzas',
  },
]

export const goalsList: GoalsList[] = [
  {
    img: '/images/goals/1.webp',
    name: 'PROPÓSITO',
    description:
      'Democratizar el conocimiento financiero generando contenido para que las personas puedan mejorar en materia financiera y desarrollo personal.',
  },
  {
    img: '/images/goals/2.webp',
    name: 'MISIÓN',
    description:
      'Queremos alcanzar a la mayor cantidad de personas para mostrarles la importancia de la educación financiera.',
  },
  {
    img: '/images/goals/3.webp',
    name: 'VISIÓN',
    description:
      'Ser parte del desarrollo de personas que lograron tomar mejores decisiones y alcanzaron la libertad financiera.',
  },
]

export const teamList: TeamList[] = [
  {
    img: '/images/team/1.webp',
    name: 'Andrés Valverde',
    description: `Soy Ingeniero de Computación y Sistemas, divulgador financiero y creador del canal de YouTube «Pasión por las Finanzas». Realicé una diplomatura de Especialización en Finanzas en la Pontificia Universidad Católica del Perú y desde entonces empecé a ahondar en ese tema.

    Además de ello, siempre estoy capacitándome, llevando cursos y seminarios con diversos mentores de reconocido éxito en sus rubros, tales como: Inversiones Internacionales (Jürgen Klaric), Emprendimiento (mentor español), Bolsa de valores (mentor español), Inversiones en Bienes Raíces y Remates Judiciales (mentor peruano).`,
  },
]
