import Link from "next/link";

const Links = ({
	linkData
}: {
	linkData: { name: string; link: string }[];
}) => {
	return (
		<>
			{linkData.map((data, index) => {
				return (
					<Link
						key={index}
						href={data.link}
						className="hover:bg-black px-4 py-2 rounded-full">
						{data.name}
					</Link>
				);
			})}
		</>
	);
};

export default Links;
