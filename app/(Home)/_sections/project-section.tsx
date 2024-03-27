import { RubikFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Badge } from "lucide-react"
import Image from "next/image"

const Project = ({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) => {
	return (
		<div className="mb-10 bg-slate-800 hover:bg-slate-700 transition-all duration-100  hover:shadow-lg rounded">
			<div className="flex items-start">
				<Image src={imageSrc} width={100} height={100} alt={title} className="rounded mx-4 p-2" />

				<div>
					<h3 className="text-lg font-semibold text-gray-200">{title}</h3>
					<div className="mb-4 text-base font-normal text-gray-400">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Projects = () => {
	const size = 200
	return (
		<div id="projects" className="px-5  py-[76px]">
			<h1 className={cn("text-4xl pb-4 text-white", RubikFont.className)}>Projects</h1>
			<Project
				imageSrc="/minesweeper.png"
				title="Minesweeper AI Bot"
				description="Created Minesweeper online game, and developed an artificial intelligence to provide best moves using
							logic rules and probability"
			/>
			<Project
				imageSrc="/floodfill.png"
				title="Floodfill AI Bot"
				description="Created Floodfill online game, and developed an artificial intelligence to provide best moves using
				graph traversals and A* Search"
			/>
			<Project
				imageSrc="/yext-hackathon.png"
				title="AI Entity Generator | Yext Hackathon"
				description="Created Minesweeper online game, and developed an artificial intelligence to provide best moves using
								logic rules and probability"
			/>
		</div>
	)
}
