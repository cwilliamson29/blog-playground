import {useEffect, useState} from 'react'

function ProductList({category}: {category: string}) {
    const [products, setProducts] = useState<string []>([])

    useEffect(()=>{
        console.log("Fetching Products" + category + products)
        setProducts(["Clothing", "Household"])
    }, [category])

    return (
        <div>ProductList</div>
    )
}

export default ProductList
