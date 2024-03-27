import { Poppins } from "next/font/google"

import { Github, Menu } from "lucide-react"

import { cn } from "@/lib/utils"

const poppinsFont = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const Footer = () => {
	return (
		<div className={cn("w-full h-16 z-10 bg-slate-900", poppinsFont.className)}>
			<div className="w-full"></div>
		</div>
	)
}
