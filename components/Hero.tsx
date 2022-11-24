import Image from "next/image";
import github from "../assets/github(1).png";
import linkedin from "../assets/linkedin(3).png";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
	const {systemTheme, theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<Button className="bg-[#253841] dark:bg-[#57a7da]" onClick={() => setTheme("light")}>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="#253841">
						<path
							fillRule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			);
		} else {
			return (
				<Button className="bg-[#253841]" onClick={() => setTheme("dark")}>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="#9FD7EF">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</Button>
			);
		}
	};

	return (
		<div>
			<div className="text-[#57a7da] overflow-hidden lg:h-screen lg:w-screen">
				<div className="absolute left-0 top-[6rem] md:top-[4rem] w-[10rem] h-[10rem] sm:h-[12rem] sm:w-[12rem] md:h-[14rem] md:w-[14rem] lg:top-[2.5rem] bg-no-repeat bg-contain bg-[url('../assets/firsthand.webp')]"></div>

				<div className="pt-[10.5rem] pl-[1.7rem] vs:pl-[3rem] sm:pl-[4rem] lg:flex lg:flex-col lg:items-center ">
					<div className="max-w-[27rem] sm:max-w-[35rem] md:max-w-[37rem] lg:mx-auto lg:max-w-full lg:pr-84">
						<div className="text-[38px] sm:text-[50px] md:text-[70px] sm:leading-[55px] md:leading-[70px] leading-[43px] lg:text-[79px] lg:leading-[72px] lg:max-w-[45rem] lg:pr-6">
							<span>Turning ideas into </span>
							<span>real life </span>
							<h1 id="opor" className="inline-block">
								opportunities
							</h1>
							<span> is my calling</span>
						</div>
					</div>
					<div className="pt-12 group max-w-[7rem] lg:max-w-[11rem]">
						<p className="text-[#57a7da] text-[14px] leading-[12px] cursor-pointer md:text-[16px] lg:text-center whitespace-nowrap">
							<Link href="#projects">VIEW PROJECTS</Link>
						</p>
						<div className="border-[#57a7da] border-b pt-2 max-w-[3.5rem] group-hover:max-w-[6.5rem] md:group-hover:max-w-[7rem] lg:group-hover:max-w-[9.5rem] duration-500 ease-out cursor-pointer"></div>
					</div>
					<div className="grid grid-cols-3 gap-4 lg:w-[720px] lg:self-center pt-6">
						<div>
							<div className="flex cursor-pointer">{renderThemeChanger()}</div>
						</div>
						<div className="">
							<div className="hidden md:flex ">
								<div className="flex border-[#253841] dark:border-[#57a7da] border-2 px-2 py-4 w-[6px] h-[8px] box-content rounded-xl mx-auto">
									<div className="flex scroller bg-[#253841] dark:bg-[#57a7da] -mt-2.5 w-[10px] h-[14px] rounded-full"></div>
								</div>
							</div>
						</div>
						<div className="z-10 flex justify-center gap-6">
							<div className="flex items-center justify-center w-7 h-7">
								<a href="https://github.com/marcythany" target="_blank" rel="noopener noreferrer">
									<Image className="cursor-pointer " src={github} alt="github" />
								</a>
							</div>
							<div className="z-10 flex items-center justify-center w-7 h-7">
								<a href="https://www.linkedin.com/in/marcythany" target="_blank" rel="noopener noreferrer">
									<Image className="cursor-pointer " src={linkedin} alt="linkedin" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute flex justify-center items-center  right-0 top-[14rem] w-[10rem] bg-right  h-[10rem]  sm:h-[18rem] sm:w-[18rem] md:h-[22rem] md:w-[23rem] bg-no-repeat bg-contain bg-[url('../assets/secondhand.webp')] overflow-hidden  pr-[6rem] -z-1"></div>
		</div>
	);
};

export default Hero;
