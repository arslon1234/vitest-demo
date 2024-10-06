import {render,screen, within} from "@testing-library/react"
import { ProductList } from "./ProductList"
import {server} from './mocks/node'
import {http, HttpResponse} from 'msw'
import { products, productsUrl } from "./contstants"
describe("render happy path", ()=>{
    beforeEach(()=>{
        server.use(http.get(productsUrl,()=>HttpResponse.json(products)))
    })
    it("should render a heading", ()=>{
        render(<ProductList/>);
        const heading = screen.getByRole('heading', {name: /products/i});
        expect(heading).toBeInTheDocument()
    })
    it("should render loading message", ()=>{
        render(<ProductList/>)
        const message = screen.getByRole("status", {name: /loading/i})
        expect(message).toBeInTheDocument()
    })
    it("should render list items with titles", async ()=>{
        render(<ProductList/>)
        const list = await screen.findByRole("list")
        const items = within(list).getAllByRole("listitem")
        expect(items).toHaveLength(10)
        items.forEach((item,i)=>{
            expect(item).toHaveTextContent(new RegExp(`product${i + 1}`,'i'))
        })
    })
})