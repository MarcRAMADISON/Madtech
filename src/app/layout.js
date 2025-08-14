import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";


const poppins= Poppins({
  variable:'poppins',
  subsets:["latin"],
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Marc RAMADISON",
  description: "Madtech est une agence de marketing digital spécialisée dans l'accompagnement des entreprises et des particuliers à développer et rentabiliser leurs business en ligne",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
