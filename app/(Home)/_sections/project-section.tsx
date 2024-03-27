import { RubikFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Badge, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Project = ({
	imageSrc,
	title,
	description,
	githubLink,
	demoLink,
}: {
	imageSrc: string
	title: string
	description: string
	githubLink?: string
	demoLink?: string
}) => {
	return (
		<div className="flex p-2 items-start mb-5 bg-slate-800  ">
			<Image src={imageSrc} width={125} height={150} alt={title} className="rounded-2xl mx-4 p-2" />

			<div>
				<h3 className="text-lg font-semibold text-gray-200">{title}</h3>
				<div className="mb-4 text-base font-normal text-gray-400">
					<p>{description}</p>
				</div>

				<div className="flex text-white space-x-4 ">
					{githubLink && (
						<Link href={githubLink} target="_blank">
							<span className="flex p-2 space-x-2 rounded hover:bg-slate-700 transition-all duration-100  hover:shadow-lg ">
								<Github /> <div>Github</div>
							</span>
						</Link>
					)}

					{demoLink && (
						<Link href={demoLink} target="_blank">
							<span className="flex p-2 space-x-2 rounded hover:bg-slate-700 transition-all duration-100  hover:shadow-lg ">
								<ExternalLink /> <div>Demo</div>
							</span>
						</Link>
					)}
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
				imageSrc="/final-call.png"
				title="Final Call | Online Multiplayer Game"
				description="Online Version of the board game 'For Sale'. Players bid and auction for properties to become the most prosperous real estate agent "
				githubLink="https://github.com/junghochoi/final-call"
				demoLink="https://final-call-client.vercel.app/"
			/>
			<Project
				imageSrc="/minesweeper.png"
				title="Minesweeper AI Bot"
				description="Created Minesweeper online game, and developed an artificial intelligence to provide best moves using
							logic rules and probability"
				githubLink="https://github.com/junghochoi/minesweeperBot?tab=readme-ov-file"
				demoLink="https://junghochoi-minesweeper.netlify.app/"
			/>
			<Project
				imageSrc="/floodfill.png"
				title="Floodfill AI Bot"
				description="Created Floodfill online game, and developed an artificial intelligence to provide best moves using
				graph traversals and A* Search"
				githubLink="https://github.com/junghochoi/floodfillBot_Website?tab=readme-ov-file"
				demoLink="https://junghochoi-floodfill.netlify.app/"
			/>
			<Project
				imageSrc="/yext-hackathon.png"
				title="AI Entity Generator | Yext Hackathon"
				description="Created Minesweeper online game, and developed an artificial intelligence to provide best moves using
								logic rules and probability"
				githubLink="https://github.com/junghochoi/generative-ai-hackathon"
			/>
		</div>
	)
}
