import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import localFont from "next/font/local"

const inter = localFont({
	src: [
		{
			path: "../../public/fonts/Inter/static/Inter-Regular.ttf",
			weight: "400",
			style: "normal"
		}
	],
	variable: "--font-inter"
})

const poppins = localFont({
	src: [
		{
			path: "../../public/fonts/Poppins/Poppins-Regular.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../../public/fonts/Poppins/Poppins-Medium.ttf",
			weight: "500",
			style: "normal"
		},
		{
			path: "../../public/fonts/Poppins/Poppins-SemiBold.ttf",
			weight: "600",
			style: "normal"
		},
		{
			path: "../../public/fonts/Poppins/Poppins-Bold.ttf",
			weight: "700",
			style: "normal"
		},
	],
	variable: "--font-poppins"
})

export default function App({ Component, pageProps }: AppProps) {
    return (
		<>
			<Head>
				<title>
					Kevin Stewart-Mercurio
				</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${inter.variable} ${poppins.variable}`}>
				<Component {...pageProps} />
			</main>
		</>
	)
}
