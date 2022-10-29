import Image from "next/image";
import Link from "next/link";
import { use } from "react";

/* Note

    * Next.js 13 introduced a new way to fetch and manage data in your application. The API has been simplified to align with React and the Web Platform. This means previous Next.js APIs such as getServerSideProps, getStaticProps, and getInitialProps are not supported in the new app directory. Instead, there is one flexible way to fetch, cache, and revalidate data at the component level.

    * This request should be cached until manually invalidated.
    * Similar to `getStaticProps`. (SSG)
    * `force-cache` is the default and can be omitted.
fetch(URL, { cache: 'force-cache' });

    * This request should be refetched on every request.
    * Similar to `getServerSideProps`. (SSR)
fetch(URL, { cache: 'no-store' });

    * This request should be cached with a lifetime of 10 seconds.
    * Similar to `getStaticProps` with the `revalidate` option. (ISG)
fetch(URL, { next: { revalidate: 10 } });
*/

async function getData() {
    const products = await fetch('https://dummyjson.com/products?limit=6');
    return products.json();
}

export default function Tabx() {
    const { products } = use(getData()); // use() is alt to async/await
    // console.log(products)
    return (
        <>
            <h1>Tab Example</h1>
            {products.map((item) => (
                <div key={item.id}>
                    <Link href={`tabx/${item.id}`}><h3>{item.title}</h3></Link>
                    <p>{item.description}</p>
                    <Image src={item.images[0]} width={200} height={200} alt={item.title} />
                </div>
            ))}
        </>
    )
}