import Image from "next/image";

async function getData() {
    const products = await fetch('https://dummyjson.com/products?limit=6');
    return products.json();
}

export default async function Tabx() {
    const { products } = await getData();
    console.log(products)
    return (
        <>
            <h1>Tab Example</h1>
            {products.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Image src={item.images[0]} width={200} height={200} alt={item.name} />
                </div>
            ))}
        </>
    )
}