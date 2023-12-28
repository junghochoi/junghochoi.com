import Link from "next/link"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const poppinsFont = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const HomeHeader = () => {
	return (
		<div
			className={cn(
				"sticky top-0 w-full h-16 z-10 bg-slate-900",
				poppinsFont.className
			)}
		>
			<div className="max-w-screen-xl h-full flex justify-between items-center mx-auto text-white px-11">
				<div className="text-xl">
					{"</>"} <span className="hidden md:block">Daniel Choi</span>
				</div>

				<div className="space-x-10 mr-18">
					<Link
						className="min-w-6 h-full p-3 rounded hover:bg-gray-700 transition-colors duration-300"
						href="/"
					>
						Work
					</Link>
					<Link
						className="min-w-6 h-full p-3 rounded hover:bg-gray-700 transition-colors duration-300"
						href="/"
					>
						Projects
					</Link>
					<Link
						className="min-w-6 h-full p-3 rounded hover:bg-gray-700 transition-colors duration-300"
						href="/"
					>
						Social
					</Link>
				</div>
			</div>
		</div>
	)
}
