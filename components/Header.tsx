import Link from "next/link";

export const Header = () => {
	return (
		<div className="fixed z-20 flex items-center justify-center w-full pt-8 overflow-hidden text-white md:pt-10">
			<div className="flex justify-between border border-gray-500 bg-[#22222e] items-center space-x-4 h-[3.5rem] w-[18rem] px-4 sm:w-[22rem] rounded-[2rem] sm:px-8 md:w-[28rem] md:h-[4rem] lg:w-[35rem] lg:px-16 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
				<div className="">
					<Link href="#projects">💻 Projects</Link>
				</div>
				<div className="">
					<a
						href="https://drive.google.com/file/d/1dBjnbnPeMumUGCVOcXWqUX_zOI2CXr7k/view?usp=share_link"
						target="_blank"
						rel="noopener noreferrer"
					>
						📑 CV
					</a>
				</div>
				<div className="">
					<Link href="#contact">📧 Contact</Link>
				</div>
			</div>
		</div>
	);
};
