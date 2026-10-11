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
    title: 'Oslo approves its first timber high-rise',
    dek: 'A 22-storey mass-timber tower clears final review, signalling a shift in Nordic building codes.',
    date: '2026-08-14',
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
  },
  {
    id: 'east-harbor-housing',
    name: 'East Harbor Housing',
    location: 'Tema, Ghana',
    year: '2024',
    type: 'Residential',
    summary: 'A 48-unit mid-rise scheme using a repeating structural bay to keep unit costs down.',
  },
  {
    id: 'north-market-pavilion',
    name: 'North Market Pavilion',
    location: 'Kumasi, Ghana',
    year: '2023',
    type: 'Commercial',
    summary: 'A market hall with a folded roof structure designed for natural light and airflow.',
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
