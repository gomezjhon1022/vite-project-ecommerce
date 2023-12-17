import { useState, useEffect } from 'react';
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card';
import { data } from 'autoprefixer';

function Home () {
  const [items, setItems] =useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setItems(data))
  },[])

  console.log(data)
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(product =>(<Card key={product.id} {...product}/>))
        }
      </div>
    </Layout>
  )
}

export { Home };