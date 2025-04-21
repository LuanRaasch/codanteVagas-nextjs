import Navbar from "@/components/layout/navbar";
import "./globals.css";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";
import { Maven_Pro } from "next/font/google";

const mavenPro = Maven_Pro({
  weight: "variable", subsets:
    ["latin"], variable: "--font-maven-pro",
});

export const metadata: Metadata = {
  title: "CodanteVagas",
  description: "O codante vagas conecta candidatos a empregos  ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br" className={mavenPro.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
