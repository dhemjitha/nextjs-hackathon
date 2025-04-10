import { Poppins } from "next/font/google"

// Load Poppins font
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

// Since Passion One might have issues with Google Fonts, we'll use Poppins as fallback
export const passionOne = poppins
