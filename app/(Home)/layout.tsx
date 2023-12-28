import { HomeHeader } from "./_components/header"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-slate-800 h-full">
			<HomeHeader />
			{children}
		</div>
	)
}

export default HomeLayout
