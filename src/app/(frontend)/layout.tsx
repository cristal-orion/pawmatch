import React from 'react'
import './styles.css'

export const metadata = {
  title: 'PawMatch - Trova il compagno perfetto per il tuo cane',
  description: "L'app che connette i cani del tuo quartiere. Swipe, match, giocate insieme!",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="it">
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
