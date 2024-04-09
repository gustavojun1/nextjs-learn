// '@' is an alias (by default, means "./") defined in the tsconfig.json file
// you can edit it or add new aliases
import '@/app/ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
