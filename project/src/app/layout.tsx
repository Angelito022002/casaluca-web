
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CASA LUCA | Luxury Learning',
  description: 'Sophisticated education dashboard for high-performing students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Cormorant+Garamond:wght@400&family=Lato:wght@300&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
