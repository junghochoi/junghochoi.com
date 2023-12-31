import Link from "next/link"
import { Poppins } from "next/font/google"

import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "@/components/ui/sheet"

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
					<span>
						{"</>"} <span className="hidden md:inline">Daniel Choi</span>
					</span>
				</div>

				<div className="block md:hidden">
					<Sheet>
						<SheetTrigger className="p-2 rounded duration-100 flex justify-center items-center hover:bg-slate-700 p">
							<Menu />
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Are you sure absolutely sure?</SheetTitle>
								<SheetDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>

				<div className="hidden md:block space-x-10 mr-18">
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
