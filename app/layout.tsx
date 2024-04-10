// '@' is an alias (by default, means "./") defined in the tsconfig.json file
// you can edit it or add new aliases
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiasing smoothes out the text (antiserrilhamento)*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
