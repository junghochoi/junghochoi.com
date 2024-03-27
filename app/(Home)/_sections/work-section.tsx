import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { RubikFont } from "@/lib/fonts"
import Image from "next/image"

const WorkExperience = ({
	company,
	title,
	dateRange,
	description,
	imageSrc,
	skills,
}: {
	company: string
	title: string
	dateRange: string
	description: string
	imageSrc: string
	skills: string[]
}) => {
	return (
		<li className="p-4 mb-6 ms-4 bg-slate-800 hover:bg-slate-700 transition-all duration-100  hover:shadow-lg rounded">
			{/* This is the bullet */}
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />

			<div className="flex items-start">
				<Image
					src={imageSrc}
					width={100}
					height={100}
					alt={company}
					className="rounded mr-4 hidden md:block lg:hidden"
				/>

				<div>
					<div className="flex flex-row items-center mb-3">
						<Image
							src={imageSrc}
							width={75}
							height={75}
							alt="minesweeper"
							className="rounded mr-4 block md:hidden lg:block"
						/>

						<div>
							<h3 className="text-lg font-semibold text-gray-200">
								{company} <span className="hidden md:inline"> | {title}</span>
							</h3>
							<h5 className="text-sm font-medium text-gray-200 md:hidden">{title}</h5>
							<time className="mb-1 text-sm font-normal leading-none text-gray-200">{dateRange}</time>
						</div>
					</div>

					<p className="mb-4 text-base font-normal text-gray-400">{description}</p>

					<div className="flex flex-wrap">
						{skills.map((skill) => (
							<Badge className="bg-sky-800 text-gray-300 mr-1.5 mt-2" key={skill}>
								{skill}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</li>
	)
}

export const Work = () => {
	return (
		<div id="work" className="px-5 pt-[76px]">
			<h1 className={cn("text-4xl pb-4 text-white", RubikFont.className)}>Work Experience</h1>
			<ol className="relative border-s border-gray-200 dark:border-gray-700">
				<WorkExperience
					company="Yext"
					imageSrc="/yext-hackathon.png"
					title="Software Engineer Intern"
					dateRange="May - August 2023"
					skills={["Java", "Dagger2", "Kafka", "Rabbitmq"]}
					description="Enhanced Yext's backend entity search service by reducing latency on server cold-starts and
									implementing document search indexing"
				/>

				<WorkExperience
					company="SX Industries"
					imageSrc="/sx.png"
					title="Data Consultant"
					dateRange="Feb - May 2023"
					skills={["Python", "SARIMA", "Holt-Winters", "Machine Learning"]}
					description="Analyzed Historical Sales Data using Python and forecasting models (Holt-Winters, SARIMA) for accurate sales and demand prediction"
				/>

				<WorkExperience
					company="Spring Health"
					imageSrc="/springhealth.png"
					title="Software Engineer Intern"
					dateRange="May - August 2022"
					skills={["React", "GraphQL", "Ruby On Rails", "PostgreSQL", "Docker", "Typescript"]}
					description="Designed and Developed Spring Health's in-platform Video Chat Feature, allowing therapists and
							patients to have sessions without the reliance on third party applications such as Zoom.us or Google
							Meets"
				/>

				<WorkExperience
					company="Advisar AI"
					imageSrc="/advisarai.jpeg"
					title="Software Engineer Intern"
					dateRange="May - August 2021"
					skills={["React", "GraphQL", "PostgreSQL", "Docker", "Typescript"]}
					description="Developed a React data engineering UI dashboard to efficiently display up to 1GB of spreadsheet data to support data
					cleaning and modification for data model training."
				/>
			</ol>
		</div>
	)
}
