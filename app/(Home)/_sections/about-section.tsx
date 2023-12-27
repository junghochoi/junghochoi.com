import { Rubik } from "next/font/google"
import { Poppins } from "next/font/google"
import { Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import Islands from "../_components/islands"

const rubikFont = Rubik({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const poppinsFont = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const About = () => {
	return (
		<div className="h-full w-full flex justify-between items-center">
			<div className="py-10 px-5 block sm:flex flex-col justify-center space-y-4 text-gray-300">
				<h1 className={cn("text-6xl", rubikFont.className)}>Daniel Choi</h1>
				<h2 className={cn("text-2xl", rubikFont.className)}>
					Full-Stack Software Engineer
				</h2>
				<p className={cn("text-gray-400", poppinsFont.className)}>
					I enjoy enjoy building solutions, and software allows me for me to
					have a far reach
				</p>
				<div className="flex justify-around">
					<Github />
					<Linkedin />
				</div>
			</div>
		</div>
	)
}
