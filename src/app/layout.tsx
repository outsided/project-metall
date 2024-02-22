import { createMetadata } from "@/utils/metadata";

import '@/styles/index.scss'

export const metadata = createMetadata("Metall", "Metall")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <main>{children}</main>
      </body>
    </html>
  );
}
