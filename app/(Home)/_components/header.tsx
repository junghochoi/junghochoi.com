import Link from "next/link"
import { Poppins } from "next/font/google"

import { Github, Menu, Linkedin, File } from "lucide-react"

import { cn } from "@/lib/utils"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
} from "@/components/ui/sheet"

const poppinsFont = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const HomeHeader = () => {
	return (
		<div className={cn("sticky top-0 w-full h-16 z-10 bg-slate-900", poppinsFont.className)}>
			<div className="max-w-screen-xl h-full flex justify-between items-center mx-auto text-white px-11">
				<div className="text-xl">
					<span>
						{"</>"} <span className="hidden md:inline">Daniel Choi</span>
					</span>
				</div>

				<div className="block md:hidden">
					<Sheet>
						<SheetTrigger className="p-2 rounded duration-100 flex justify-center items-center hover:bg-slate-700">
							<Menu />
						</SheetTrigger>
						<SheetContent className="bg-slate-800 flex flex-col justify-between">
							<SheetHeader>
								<SheetTitle className={cn("text-white", poppinsFont.className)}>{"</>"} Daniel Choi</SheetTitle>
							</SheetHeader>

							<SheetDescription
								className={cn("flex flex-col text-white  items-center justify-center", poppinsFont.className)}
							>
								<SheetClose asChild>
									<Link
										className="min-w-6 text-4xl text-center p-3 rounded hover:bg-gray-700 transition-colors duration-300"
										href={"/#work"}
									>
										Experience
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link
										className="min-w-6 text-4xl text-center p-3 rounded hover:bg-gray-700 transition-colors duration-300"
										href={"/#projects"}
									>
										Projects
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link
										className="min-w-6 text-4xl text-center p-3 rounded hover:bg-gray-700 transition-colors duration-300"
										href={"/JunghoChoi_Resume.pdf"}
										target="_blank"
									>
										Resume
									</Link>
								</SheetClose>
							</SheetDescription>
							<SheetFooter>
								<Link href="https://github.com/junghochoi" target="_blank">
									<Github size={36} className="mr-4 text-white" />
								</Link>
								<Link href="https://www.linkedin.com/in/jungho-choi" target="_blank">
									<Linkedin size={36} className="mr-4 text-white" />
								</Link>
								{/* <Link href="https://github.com/junghochoi" target="_blank">
									<File size={36} className="mr-4 text-white" />
								</Link> */}
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>

				<div className="hidden md:block space-x-10 mr-18">
					<Link className="min-w-6 h-full p-3 rounded hover:bg-gray-700 transition-colors duration-300" href="/#work">
						Work
					</Link>
					<Link
						className="min-w-6 h-full p-3 rounded hover:bg-gray-700 transition-colors duration-300"
						href="/#projects"
					>
						Projects
					</Link>
					<Link
						className="min-w-6 h-full p-3 rounded hover:bg-gray-700 transition-colors duration-300"
						href="/JunghoChoi_Resume.pdf"
						target="_blank"
					>
						Resume
					</Link>
				</div>
			</div>
		</div>
	)
}
