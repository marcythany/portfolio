import {motion} from "framer-motion";
import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	message: string;
};

type Props = {};

const Contact = ({}: Props) => {
	const {register, handleSubmit} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:marcythany@gmail.com?subject=${formData.name}&body=${formData.message}`;
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{once: true, amount: 0.5}}
			transition={{duration: 0.5}}
			variants={{
				hidden: {opacity: 0, x: -50},
				visible: {opacity: 1, x: 0},
			}}
			id="contact"
			className="container px-6 mx-auto mt-24 w-[42rem]"
		>
			<section className="mb-12 text-gray-800">
				<div className="tracking-[5px] pl-[1.7rem] vs:pl-[3rem] sm:pl-[3rem] m-auto w-full lg:flex lg:flex-col lg:items-center">
					<div className="w-[22rem] lg:mx-auto lg:mr-[35.5rem]  lg:max-w-full lg:pr-84">
						<h1 className="text-[30px] text-[#57a7da]">Let&apos;s Talk</h1>
					</div>
				</div>
				<div className="container px-4 text-gray-800 rounded-xl md:px-12 ">
					<div className="block px-2 py-10 rounded-lg bg-morp1 dark:bg-morp2 shadow-morp1 dark:shadow-morp2 md:py-12 md:px-6">
						<div className="flex ">
							<div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto lg:px-6 xl:mb-0">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="mb-6 form-group">
										<input
											{...register("name")}
											type="text"
											className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-primary-focus focus:outline-none"
											id="exampleInput7"
											placeholder="Name"
										/>
									</div>
									<div className="mb-6 form-group">
										<input
											{...register("email")}
											type="email"
											className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-primary-focus focus:outline-none"
											placeholder="Your email address"
										/>
									</div>
									<div className="mb-6 form-group">
										<textarea
											{...register("message")}
											className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-primary-focus focus:outline-none
              "
											placeholder="Message"
										></textarea>
									</div>
									<div className="mb-6 text-center form-group form-check">
										<input
											type="checkbox"
											className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-[#57a7da] checked:border-[#427fa5] focus:outline-none"
										/>
										<label className="inline-block text-[#57a7da] form-check-label">
											Send me a copy of this message
										</label>
									</div>
									<button
										type="submit"
										className="
              w-full
              px-6
              py-2.5
              bg-[#49b9ff]
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:[#57a7da] hover:shadow-lg
              focus:[#6dc4fa] focus:shadow-lg focus:outline-none focus:ring-0
              active-[#427fa5] active:shadow-lg
              transition
              duration-150
              ease-in-out"
									>
										Send
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Contact;
