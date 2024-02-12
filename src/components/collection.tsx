import React from "react";

import data from "../sample.data.json";
import Product from "./product";

const Collection = () => {
	// console.log(data);
	const { products } = data;

	return (
		<div className="flex gap-4">
			{products.map((product, index) => {
				return (
					<Product
						key={index}
						image={product.image_url}
						link={product.id}
						name={product.name}
					/>
				);
			})}
		</div>
	);
};

export default Collection;
