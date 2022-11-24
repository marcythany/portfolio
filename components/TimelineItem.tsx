interface TimelineItems {
	id: string;
	year: string;
	title: string;
	duration: string;
	details: string;
}

export const TimelineItem = ({
	id,
	year,
	title,
	duration,
	details,
}: TimelineItems) => {
	return (
		<div>
			<ol className="flex flex-col md:flex-row relative border-l dark:border-stone-200 border-[#417ea5]">
				<li className="mb-10 ml-4">
					<div
						className="absolute w-3 h-3 bg-[#417ea5] rounded-full mt-1.5 -left-1.5 border border-stone-800 dark:border-[#57a7da] dark:bg-white"
						key={id}
					/>
					<div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
						<span className="inline-block px-2 py-1 font-semibold text-white dark:text-[#417ea5] bg-[#417ea5] dark:bg-white rounded-md">
							{year}
						</span>
						<h3 className="text-lg font-semibold text-[#417ea5] dark:text-white">
							{title}
						</h3>
						<div className="my-1 text-sm font-normal leading-none text-[#23223A] dark:text-[#afafaf]">
							{duration}
						</div>
					</div>
					<p className="my-2 text-base font-normal text-stone-600 dark:text-[#afafaf]">
						{details}
					</p>
				</li>
			</ol>
		</div>
	);
};

import React from "react";
