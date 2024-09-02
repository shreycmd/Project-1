
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provide from "./Provide"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata:Metadata={
  title:" live docs ",
  description:"your go-to collaborative editor"

}
export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark,
      variables:{colorPrimary:"#3371FF",
        fontSize:'16px'
      },layout:{
        unsafe_disableDevelopmentModeWarnings:true
      }
    }}>
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provide >
        {children}
        </Provide>
      </body>
    </html>
    </ClerkProvider>
  )
}
