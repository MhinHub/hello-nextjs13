import Image from "next/image";
import { use } from "react";

async function getDetailData(id) {
    const detailData = await fetch(`https://dummyjson.com/products/${id}`);
    return detailData.json();
}

export default function DetailProduct({ params }) {
    const detail = use(getDetailData(params.id));
    return (
        <>
            <h1>Detail Example</h1>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
            <p>Price : {detail.price}</p>
            <p>Rate : {detail.rating}</p>
            <p>Stock : {detail.stock}</p>
            <Image src={detail.images[0]} width={200} height={200} alt={detail.title} />
        </>
    )
}