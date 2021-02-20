import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Macbook-Slim', description: 'Apple Computer 13', price: '$500.00', image: '../../assets/furtniture1.jpg'},
    { id: 3, name: 'Macbook-Pro', description: 'Apple Computer 16', price: '$1200.00', image: '../../assets/furtniture2.jpg'}, 
]

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />

                    </Grid>
            ))}
        </Grid>
    </main>

    );
    
}

export default Products;