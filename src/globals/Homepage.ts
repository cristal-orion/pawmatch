import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'title', type: 'text', required: true, defaultValue: 'Il Tinder' },
        { name: 'titleHighlight', type: 'text', required: true, defaultValue: 'per cani.' },
        { name: 'subtitle', type: 'textarea', required: true, defaultValue: 'Trova il compagno di giochi perfetto per il tuo amico a quattro zampe. Swipe, match, e organizza passeggiate insieme nel tuo quartiere.' },
        { name: 'ctaText', type: 'text', defaultValue: 'Scarica gratis' },
        { name: 'secondaryCtaText', type: 'text', defaultValue: 'Scopri di piu' },
      ],
    },
    {
      name: 'featuresTitle',
      type: 'text',
      label: 'Features Section Title',
      defaultValue: 'Perche PawMatch?',
    },
    {
      name: 'featuresSubtitle',
      type: 'text',
      label: 'Features Subtitle',
      defaultValue: 'Tutto quello che serve per socializzare il tuo cane, in una sola app.',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'stepsTitle',
      type: 'text',
      label: 'Steps Section Title',
      defaultValue: 'Come funziona',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Pronto a trovare nuovi amici?' },
        { name: 'subtitle', type: 'text', defaultValue: 'Scarica PawMatch e unisciti a migliaia di padroni e cani felici.' },
      ],
    },
  ],
}
