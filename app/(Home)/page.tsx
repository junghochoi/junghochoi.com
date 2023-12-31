import { Rubik } from "next/font/google"

import { cn } from "@/lib/utils"
import Islands from "./_components/islands"
import { About } from "./_sections/about-section"
import { Work } from "./_sections/work-section"
import { Projects } from "./_sections/project-section"

const HomePage = () => {
	return (
		<div className="max-w-screen-lg mx-auto">
			<div className="lg:flex lg:justify-center lg:gap-4">
				<div className="lg:h-[calc(100vh-64px)] lg:w-5/12 lg:sticky lg:top-16">
					<About />
				</div>

				<div className="h-full lg:w-7/12">
					<Islands />
					<Work />
				</div>
			</div>

			<div className="bg-green-300">
				<Projects />
			</div>
		</div>
	)
}

export default HomePage
