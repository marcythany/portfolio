import React from "react";
import Image from "next/image";
import num1 from "../assets/number1.svg";
import insta from "../assets/insta1.jpeg";
import {AiFillEye, AiFillGithub} from "react-icons/ai";
import {motion} from "framer-motion";

export const MyProjects = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{once: true, amount: 0.5}}
			transition={{duration: 0.5}}
			variants={{
				hidden: {opacity: 0, x: 50},
				visible: {opacity: 1, x: 0},
			}}
			id="projects"
			className="container px-6 mx-auto mt-24 w-[42rem] text-stone-600 dark:text-stone-50 lg:w-screen"
		>
			<div className="flex flex-col items-center tracking-[5px] w-full">
				<div className="w-[22rem] lg:mx-auto lg:mr-[35.5rem]  lg:max-w-full lg:pr-84">
					<p className="text-[30px] text-[#57a7da]">My projects</p>
					<p>Hey, peeps! My name is Marcy and I am a Frontend Developer!</p>
				</div>
				<div className="grid grid-row-4 space-y-2 h-[30rem] w-[22rem] ml-[0.5rem] mt-[2rem] mb-[6rem] relative rounded-[2rem] bg-morp1 dark:bg-morp2 shadow-morp1 dark:shadow-morp2">
					<div className="absolute -top-[2.5rem] -right-[2rem] cursor-pointer">
						<Image src={num1} alt="" />
					</div>
					<div className="w-[18rem] flex mx-auto h-[18rem] pt-8">
						<Image className="object-cover rounded-[2rem]" src={insta} alt="" />
					</div>
					<div className="flex justify-center pt-2 text-center">
						<p className="text-[22px] text-[#57a7da]">Coming Soon</p>
					</div>
					<div className="flex justify-center gap-2 pt-4 pb-6">
						<div className="flex border-2 border-stone-400 dark:border-stone-50 w-[8rem] h-[3rem] whitespace-nowrap rounded-full p-2 items-center justify-center gap-2 cursor-pointer">
							<AiFillEye />
							<p>Live App</p>
						</div>
						<div className="flex justify-center items-center gap-2 border-2 border-stone-400 dark:border-stone-50 p-1 w-[8rem] h-[3rem] rounded-full py-2 cursor-pointer">
							<AiFillGithub />
							<p>Code</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};
