import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { RubikFont } from "@/lib/fonts"

export const Work = () => {
	return (
		<div className="py-24 px-5">
			<h1 className={cn("text-4xl pb-4 text-white", RubikFont.className)}>
				Work Experience
			</h1>
			<ol className="relative border-s border-gray-200 dark:border-gray-700">
				<li className="mb-10 ms-4 bg-slate-800 hover:bg-slate-700 transition-all duration-100 p-10 hover:shadow-lg rounded">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-200 ">
						May - Aug 2023
					</time>
					<h3 className="text-lg font-semibold text-gray-200">
						Yext Inc. | Software Engineer Intern
					</h3>
					<div className="mb-4 text-base font-normal text-gray-400">
						<p>
							Enhanced Yext's backend entity search service by reducing latency
							on server cold-starts and implementing document search indexing
						</p>
					</div>

					<div className="flex flex-wrap">
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">Java</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Kafka
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Dagger2
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Rabbitmq
						</Badge>
					</div>
				</li>

				<li className="mb-10 ms-4 bg-slate-800 hover:bg-slate-700 transition-all duration-100 p-10 hover:shadow-lg rounded">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-200 ">
						May - Aug 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-200">
						Spring Health | Software Engineer Intern
					</h3>
					<p className="mb-4 text-base font-normal text-gray-400">
						Designed and Developed Spring Health's in-platform Video Chat
						Feature, allowing therapists and patients to have sessions without
						the reliance on third party applications such as Zoom.us or Google
						Meets
					</p>
					<div className="flex flex-wrap">
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							React
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							GraphQL
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Ruby On Rails
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							PostgreSQL
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Docker
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Typescript
						</Badge>
					</div>
				</li>

				<li className="mb-10 ms-4 bg-slate-800 hover:bg-slate-700 transition-all duration-100 p-10 hover:shadow-lg rounded">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-200 ">
						June - Aug 2021
					</time>
					<h3 className="text-lg font-semibold text-gray-200">
						Advisar AI. | Software Engineer Intern
					</h3>
					<p className="mb-4 text-base font-normal text-gray-400">
						Designed and Developed Spring Health's in-platform Video Chat
						Feature, allowing therapists and patients to have sessions without
						the reliance on third party applications such as Zoom.us or Google
						Meets
					</p>
					<div className="flex flex-wrap">
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							React
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							GraphQL
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Redux
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							PostgreSQL
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Docker
						</Badge>
						<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2">
							Typescript
						</Badge>
					</div>
				</li>

				{/* <li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						March 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						Marketing UI design in Figma
					</h3>
					<p className="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we
						keep a parity between the two versions even as we update the
						project.
					</p>
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						April 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						E-Commerce UI code in Tailwind CSS
					</h3>
					<p className="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements
						built on top of Tailwind CSS.
					</p>
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						April 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						E-Commerce UI code in Tailwind CSS
					</h3>
					<p className="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements
						built on top of Tailwind CSS.
					</p>
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						April 2022
					</time>
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						E-Commerce UI code in Tailwind CSS
					</h3>
					<p className="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements
						built on top of Tailwind CSS.
					</p>
				</li> */}
			</ol>
		</div>
	)
}
