import ed1 from '../assets/ED - 1.jpg'
import ed2 from '../assets/ED - 2.jpg'
import ed3 from '../assets/ED - 3.jpg'
import kt1 from '../assets/KT - 1.jpg'
import kt2 from '../assets/KT - 2.jpg'
import kt3 from '../assets/KT - 3.jpg'
import kt4 from '../assets/KT - 4.jpg'
import ts1 from '../assets/TS - 1.jpg'
import ts2 from '../assets/TS - 2.jpg'
import ts3 from '../assets/TS - 3.jpg'
import ts4 from '../assets/TS - 4.jpg'
import ts5 from '../assets/TS - 5.jpg'

export interface Article {
  id: string
  title: string
  dek: string
  date: string
  category: string
}

export interface PortfolioProject {
  id: string
  name: string
  location: string
  year: string
  type: string
  summary: string
  overview: string
  highlights: string[]
  images: { src: string; alt: string }[]
}

export interface Resource {
  id: string
  title: string
  format: string
  summary: string
}

export const articles: Article[] = [
  {
    id: 'timber-highrise-oslo',
    title: 'How 21st-century glue is helping to finish Antoni Gaudí’s masterpiece',
    dek: 'An innovative modular construction system and 24 tonnes of structural adhesive have dramatically accelerated work on Gaudí’s Sagrada Familia. More than 140 years after construction began, the Barcelona basilica is reaching one of the defining milestones in its extraordinary history.',
    date: '2026-09-26',
    category: 'Policy',
  },
  {
    id: 'adaptive-reuse-grant',
    title: 'New grant fund targets adaptive reuse projects',
    dek: 'A regional fund earmarks support for firms converting underused commercial stock into housing.',
    date: '2026-08-06',
    category: 'Funding',
  },
  {
    id: 'facade-retrofit-standard',
    title: 'Industry group proposes a shared facade retrofit standard',
    dek: 'A coalition of engineers and architects drafts a common spec for thermal retrofits on existing towers.',
    date: '2026-07-29',
    category: 'Standards',
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'riverside-cultural-center',
    name: 'Riverside Cultural Center',
    location: 'Accra, Ghana',
    year: '2025',
    type: 'Public / Cultural',
    summary: 'A low-rise cultural venue organised around a shaded courtyard and cross-ventilated galleries.',
    overview:
      'The project brings its public spaces together around a shaded courtyard. Galleries open toward this shared outdoor space, with cross-ventilation supporting a comfortable visitor experience.',
    highlights: ['Low-rise scale', 'Shaded central courtyard', 'Cross-ventilated galleries'],
    images: [
      { src: ts1, alt: 'Exterior view of the cultural center' },
      { src: ts2, alt: 'Additional exterior view of the cultural center' },
      { src: ts3, alt: 'Architectural view of the cultural center' },
      { src: ts4, alt: 'Further view of the cultural center' },
      { src: ts5, alt: 'Detail view of the cultural center' },
    ],
  },
  {
    id: 'east-harbor-housing',
    name: 'East Harbor Housing',
    location: 'Tema, Ghana',
    year: '2024',
    type: 'Residential',
    summary: 'A 48-unit mid-rise scheme using a repeating structural bay to keep unit costs down.',
    overview:
      'A clear, repeating structural bay gives this 48-unit mid-rise housing scheme a consistent framework. The repetition helps keep the overall approach straightforward and supports the project’s cost-conscious brief.',
    highlights: ['48 residential units', 'Mid-rise housing', 'Repeating structural bay'],
    images: [
      { src: ed1, alt: 'Exterior rendering of East Harbor Housing' },
      { src: ed2, alt: 'Second exterior rendering of East Harbor Housing' },
      { src: ed3, alt: 'Additional view of East Harbor Housing' },
    ],
  },
  {
    id: 'north-market-pavilion',
    name: 'North Market Pavilion',
    location: 'Kumasi, Ghana',
    year: '2023',
    type: 'Commercial',
    summary: 'A market hall with a folded roof structure designed for natural light and airflow.',
    overview:
      'The market hall is shaped around a folded roof that brings natural light into the interior and encourages airflow. The roof becomes the defining architectural feature while responding directly to the needs of a busy shared space.',
    highlights: ['Market hall', 'Folded roof structure', 'Daylight and natural airflow'],
    images: [
      { src: kt1, alt: 'Exterior rendering of North Market Pavilion' },
      { src: kt2, alt: 'Second exterior rendering of North Market Pavilion' },
      { src: kt3, alt: 'Additional view of North Market Pavilion' },
      { src: kt4, alt: 'Detail view of North Market Pavilion' },
    ],
  },
]

export const resources: Resource[] = [
  {
    id: 'material-spec-library',
    title: 'Material Specification Library',
    format: 'Reference',
    summary: 'A running index of sustainable material specs, sourced by region and building type.',
  },
  {
    id: 'code-compliance-checklist',
    title: 'Code Compliance Checklist',
    format: 'Checklist',
    summary: 'A working checklist for early-stage code review, updated for the current building code cycle.',
  },
  {
    id: 'drawing-set-templates',
    title: 'Drawing Set Templates',
    format: 'Templates',
    summary: 'Sheet templates and layer standards for construction document sets.',
  },
]
