import { ReactComponentElement } from 'react'
import {
  FaChalkboardTeacher,
  FaClock,
  FaEye,
  FaRegCreditCard,
  FaYoutube,
} from 'react-icons/fa'
import { LuLineChart } from 'react-icons/lu'
import { FaShieldAlt, FaPiggyBank, FaMoneyBillWave } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'

type WebLinks = {
  name: string
  path: string
}

export const webLinks: WebLinks[] = [
  { name: 'Asesoría', path: '/home' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contacto', path: '/contacto' },
]

export type SectionTextProps = {
  section: string
  header: string
  leftText: string
  highlightedText: string
  rightText: string
  paragraph: string
}

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

type ItemList = {
  icon: ReactComponentElement<any>
  title: string
  description: string
}
export const topics: ItemList[] = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'Estrategia',
    description:
      'Descubra las Estrategias Ganadoras para Alcanzar sus Metas Financieras.',
  },
  {
    icon: <LuLineChart />,
    title: 'Finanzas',
    description: 'Fortalece tu Futuro Financiero, Paso a Paso.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Jubilación',
    description: 'Potencie su Jubilación con Nuestra Experiencia.',
  },
  {
    icon: <FaPiggyBank />,
    title: 'Ahorro',
    description: 'Potencie su Ahorro para un Futuro Próspero.',
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'Inversión',
    description:
      'Recomendaciones de Inversión que se Adapten a tus Objetivos Financieros.',
  },
  {
    icon: <FaRegCreditCard />,
    title: 'Gestión de Deudas',
    description:
      'Gestiona y Reduce tus Deudas con la Elaboración de Planes de Pago.',
  },
]

type ReputationList = Omit<ItemList, 'icon'>

export const reputationList: ReputationList[] = [
  {
    title: 'Experiencia y Trayectoria Sólida',
    description:
      '+3 años de experiencia en el sector financiero, con un compromiso continuo con la excelencia.',
  },
  {
    title: 'Clientes Satisfechos',
    description:
      'Hemos construido relaciones a largo plazo con nuestros clientes, y sus testimonios hablan de la calidad de nuestro servicio.',
  },
  {
    title: 'Comunidad',
    description:
      'No nos basamos solo en el éxito financiero, sino también en nuestro compromiso de contribuir al bienestar de la comunidad.',
  },
]

export const statisticsList: ItemList[] = [
  {
    icon: <FaEye />,
    title: '+276,000',
    description: 'visualizaciones',
  },
  {
    icon: <IoPerson />,
    title: '+2,900',
    description: 'suscriptores',
  },
  {
    icon: <FaClock />,
    title: '+13,000',
    description: 'horas',
  },
  {
    icon: <FaYoutube />,
    title: '+70',
    description: 'videos',
  },
]

type TestimonialsList = {
  image: string
  name: string
  job: string
  rate: number
  comment: string
}

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

type BooksList = {
  image: string
  title: string
  href: string
}

export const bookList: BooksList[] = [
  {
    image: '/images/books/1.webp',
    title: 'Padre rico, padre pobre',
    href: 'https://www.buscalibre.pe/libro-padre-rico-padre-pobre-db/9786124463167/p/53140787?afiliado=16952b632200547b1258',
  },
  {
    image: '/images/books/2.webp',
    title: 'El Camino',
    href: 'https://bit.ly/elcamin0',
  },
  {
    image: '/images/books/3.webp',
    title: 'La Escuela de Negocios',
    href: 'https://www.buscalibre.pe/libro-la-escuela-de-negocios/9789877253764/p/52330470?afiliado=16952b632200547b1258',
  },
  {
    image: '/images/books/4.webp',
    title: 'El Cuadrante del Flujo de Dinero',
    href: 'https://bit.ly/cuadrante_flujo',
  },
  {
    image: '/images/books/5.webp',
    title: 'Cómo Ganar Amigos e Influir sobre las Personas',
    href: 'https://www.buscalibre.pe/libro-como-ganar-amigos-e-influir-sobre-las-personas/9786124463273/p/53392333?afiliado=16952b632200547b1258',
  },
  {
    image: '/images/books/6.webp',
    title: 'Hábitos Atómicos',
    href: 'https://www.buscalibre.pe/libro-habitos-atomicos/9786124404245/p/54033302?afiliado=16952b632200547b1258',
  },
]
