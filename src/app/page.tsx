import Collection from "@/components/collection";
import Links from "@/components/links";

export default function Home() {
	return (
		<main>
			<Hero />
			<Popular />
		</main>
	);
}

const Popular = () => {
	return (
		<section className="w-full flex">
			<div className="flex-1 border text-3xl font-bold text-center align-center">
				Most Polpular Products
			</div>
			<div className="flex-[3] border w-full">
				<Collection />
			</div>
		</section>
	);
};

const Hero = () => {
	return (
		<header
			className="text-xl h-[80vh] flex flex-col justify-center items-center text-white relative select-none"
			style={{
				backgroundImage: "url('/hero-bg.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}>
			<h1 className="font-semibold text-3xl pointer-events-none">RustiQ</h1>
			<div className="flex flex-row justify-around py-4">
				<Links
					linkData={[
						{ name: "Collection", link: "/collections" },
						{ name: "Shop", link: "/shop" },
						{ name: "Wishlist", link: "/wishlist" },
						{ name: "Login", link: "/login" }
					]}
				/>
			</div>

			<div className="text-center my-24 mx-20">
				<h1 className="text-6xl font-black my-2">Interior of yout Dreams!</h1>
				<button className="border px-6 py-2 rounded-full hover:bg-white hover:text-black font-semibold my-2">
					Shop Now
				</button>
			</div>
		</header>
	);
};
