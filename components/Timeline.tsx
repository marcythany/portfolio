import timeline from "../Data/Timeline";
import {TimelineItem} from "./TimelineItem";
import {motion} from "framer-motion";

interface Props {}

export const Timeline = ({}: Props) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{once: true, amount: 0.5}}
			transition={{duration: 0.5}}
			variants={{
				hidden: {opacity: 0, y: -50},
				visible: {opacity: 1, y: 0},
			}}
			className="flex flex-col md:flex-row justify-center my-20"
		>
			<div className="w-full md:w-7/12">
				{timeline.map((item) => (
					<TimelineItem
						id={item.id}
						key={item.id}
						year={item.year}
						title={item.title}
						duration={item.duration}
						details={item.details}
					/>
				))}
			</div>
		</motion.div>
	);
};
