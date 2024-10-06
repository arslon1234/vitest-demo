export type Product = {
    id: number,
    title: string
  }
export const productsUrl = 'http://localhost:3000/api/products'
export const products:Product[] = Array.from({length: 10},(_,i)=>({
    id: i + 1,
    title: `Product${i + 1}`
}))