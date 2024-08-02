import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from '@mui/material/Container';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEII - Método de Estimulação Integrada Intensiva",
  description: "Método de Estimulação Integrada Intensiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "#eee" }}>

        {children}

      </body>
    </html>
  );
}
