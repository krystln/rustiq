import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({
	image,
	link,
	name
}: {
	image: string;
	link: string;
	name: string;
}) => {
	return (
		<div className="text-center bg-zinc-800 p-2 rounded-md">
			<Image src={image} alt={name} width={200} height={200} />
			<p className="text-lg py-2">{name}</p>
			<div className="flex gap-2">
				<button className="border flex-[2] py-2 hover:bg-white hover:text-black hover:font-semibold rounded-md">
					Add to Cart
				</button>
				<Link
					href={link}
					className="border group hover:bg-white flex-1 rounded-md">
					<span className="material-symbols-sharp py-2 group-hover:mix-blend-difference">
						visibility
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Product;
