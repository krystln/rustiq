import Link from "next/link";

export default function Home() {
	return (
		<main>
			<Header></Header>
		</main>
	);
}

const Header = () => {
	return (
		<header
			className="text-xl h-[80vh] flex flex-col justify-center items-center text-white relative"
			style={{
				backgroundImage: "url('/hero-bg.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}>
			<h1 className="font-semibold">RustiQ</h1>
			<div className="flex flex-row justify-around py-4">
				<ul className="flex justify-between gap-4">
					<li>
						<Link
							href="/collections"
							className="hover:bg-black px-4 py-2 rounded-full mix-blend-overlay">
							Collections
						</Link>
					</li>
					<li>
						<Link
							href="shop"
							className="hover:bg-black px-4 py-2 rounded-full mix-blend-overlay">
							Shop
						</Link>
					</li>
					<li>
						<Link
							href="/wishlist"
							className="hover:bg-black px-4 py-2 rounded-full mix-blend-overlay">
							Wishlist
						</Link>
					</li>
					<li>
						<Link
							href="/login"
							className="hover:bg-black px-4 py-2 rounded-full mix-blend-overlay">
							Login
						</Link>
					</li>
				</ul>
			</div>

			<div className="text-center my-24 mx-20">
				<h1 className="text-6xl font-black my-2">Interior of yout Dreams!</h1>
				<button className="border px-4 py-2 rounded-full hover:bg-white hover:text-black font-semibold my-2">
					Shop Now
				</button>
			</div>
		</header>
	);
};
