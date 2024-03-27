import { Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import Islands from "../_components/islands"

import { RubikFont, PoppinsFont } from "@/lib/fonts"
import Link from "next/link"

export const About = () => {
	return (
		<div className="h-full w-full flex justify-between items-center">
			<div className="py-10 px-5 block sm:flex flex-col justify-center space-y-4 text-gray-300">
				<h1 className={cn("text-6xl", RubikFont.className)}>Daniel Choi</h1>
				<h2 className={cn("text-2xl", RubikFont.className)}>Software Engineer</h2>
				<h3 className={cn("text-gray-400", PoppinsFont.className)}>Turning Ideas into Software</h3>
				<div className="flex justify-left">
					<Link href="https://github.com/junghochoi" target="_blank" className="mr-4">
						<Github size={48} className="mr-4 hover:text-white" />
					</Link>

					<Link href="https://www.linkedin.com/in/jungho-choi/" target="_blank" className="mr-4">
						<Linkedin size={48} className="mr-4 hover:text-white" />
					</Link>
				</div>
			</div>
		</div>
	)
}
