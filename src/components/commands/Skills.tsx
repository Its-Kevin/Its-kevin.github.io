import ProgressBar from "../ProgressBar";
import {
	SiExpress, SiJavascript,
	SiNextdotjs,
	SiReact, SiSpringboot,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import {FaJava, FaVuejs} from "react-icons/fa";
import {DiMysql} from "react-icons/di";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: FaJava,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Java",
		},

		{
			Icon: FaVuejs,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "VUE",
		},
		{
			Icon: SiSpringboot,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "Spring Boot",
		},
		{
			Icon: SiTypescript,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Typescript",
		},
		{
			Icon: DiMysql,
			barWidth: "w-90%",
			percentageValue: "90%",
			text: "MYSQL",
		},
		{
			Icon: SiReact,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "React",
		},


	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
