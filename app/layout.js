import './globals.css'

export const metadata = {
  title: 'Diwa Jajanan',
  description: 'Katalog Menu Diwa Jajanan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

