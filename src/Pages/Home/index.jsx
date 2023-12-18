import { useState, useEffect } from 'react';
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail'

function Home () {
  const [items, setItems] =useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
  },[])

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-md">
        {
          items?.map(product =>(<Card key={product.id} {...product}/>))
        }
      </div>
      <ProductDetail></ProductDetail>
    </Layout>
  )
}

export { Home };