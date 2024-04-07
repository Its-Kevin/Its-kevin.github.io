import { GoVerified } from "react-icons/go";
import {SiGithub, SiLinkedin} from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/Its-Kevin",
			text: "@Its-Kevin",
		},

		{
			title: "LinkedIn",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/kevin-isaza-arias-111930182/",
			text: "@LinkedIn",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://media.licdn.com/dms/image/D4E03AQFwLZ3DfJeDiw/profile-displayphoto-shrink_400_400/0/1708199964895?e=1718236800&v=beta&t=oCjhrj0U83bcHhcbvhFZFUd00Dfmq-r3v7LgpeyjfXE"
					alt="Kevin Isaza"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Kevin Isaza</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Join the world 22 years ago.</p>
				</div>
			</div>
			<p>
				I am currently a software engineering student at the HvA and hold a Software Developer diploma from Bit Academy.
				My passion lies in web development and structured programming.
				 I am constantly in pursuit of new challenges to broaden my skills.
				This portfolio, designed using React and TailwindCSS,
				represents the third website I've developed to showcase my abilities.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
