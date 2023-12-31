import { Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import Islands from "../_components/islands"

import { RubikFont, PoppinsFont } from "@/lib/fonts"

export const About = () => {
	return (
		<div className="h-full w-full flex justify-between items-center">
			<div className="py-10 px-5 block sm:flex flex-col justify-center space-y-4 text-gray-300">
				<h1 className={cn("text-6xl", RubikFont.className)}>Daniel Choi</h1>
				<h2 className={cn("text-2xl", RubikFont.className)}>
					Full-Stack Software Engineer
				</h2>
				<p className={cn("text-gray-400", PoppinsFont.className)}>
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
