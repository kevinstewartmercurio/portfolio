/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.shields.io",
				port: "",
				pathname: "/**"
			}
		]
	}
}

module.exports = nextConfig
