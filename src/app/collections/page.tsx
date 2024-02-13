import React from "react";
import Collection from "@/components/collection";
import Links from "@/components/links";

const Collections = async () => {
	return (
		<div>
			<header>
				<Links
					linkData={[
						{ name: "Collection", link: "/collections" },
						{ name: "Home", link: "/" }
					]}
				/>
			</header>
			<Collection></Collection>
		</div>
	);
};

export default Collections;
