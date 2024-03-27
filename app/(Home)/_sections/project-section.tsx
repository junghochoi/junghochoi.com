import { RubikFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Badge } from "lucide-react"
import Image from "next/image"

export const Projects = () => {
	return (
		<div id="projects" className="px-5  py-[76px]">
			<h1 className={cn("text-4xl pb-4 text-white", RubikFont.className)}>Projects</h1>

			<div className="mb-10 bg-slate-800 hover:bg-slate-700 transition-all duration-100  hover:shadow-lg rounded">
				<div className="flex items-center">
					<div className="h-full mx-4 p-2">
						<Image src="/minesweeper.png" width={300} height={300} alt="minesweeper" />
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-200">Minesweeper AI Bot</h3>
						<div className="mb-4 text-base font-normal text-gray-400">
							<p>
								Created Minesweeper online game, and developed an artificial intelligence to provide best moves using
								logic rules and probability
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="mb-10 bg-slate-800 hover:bg-slate-700 transition-all duration-100  hover:shadow-lg rounded">
				<div className="flex items-center">
					<div className="h-full mx-4 p-2">
						<Image src="/floodfill.png" width={300} height={300} alt="minesweeper" />
					</div>

					<div>
						<h3 className="text-lg font-semibold text-gray-200">Floodfill AI Bot</h3>
						<div className="mb-4 text-base font-normal text-gray-400">
							<p>
								Created Floodfil online game, and developed an artificial intelligence to provide best moves using logic
								rules and probability
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className=" bg-slate-800 hover:bg-slate-700 transition-all duration-100  hover:shadow-lg rounded">
				<div className="flex items-center">
					<div className="h-full mx-4 p-2">
						<Image src="/yext-hackathon.png" width={300} height={300} alt="minesweeper" />
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-200">Entity Generator | Yext Hackathon</h3>
						<div className="mb-4 text-base font-normal text-gray-400">
							<p>
								Created Minesweeper online game, and developed an artificial intelligence to provide best moves using
								logic rules and probability
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
