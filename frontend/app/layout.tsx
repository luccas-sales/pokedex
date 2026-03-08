import type { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Pokédex - Eu escolho você!',
  description:
    'Sistema restrito para gerenciamento e controle de Pokémons do Centro Pokémon.',
  keywords: ['Pokémon', 'Pokedex'],
  authors: [{ name: "Luccas D' Sales" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
