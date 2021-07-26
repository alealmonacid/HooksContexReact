import { useState } from 'react'
import Table from '../../components/table/Table'
import ProductContext from '../../contexts/ProductContext'
import productos from '../../components/Productos/Productos.json'
import Form from '../../components/form/Form'

const Home = () => {
    const [products, setProduct] = useState<any>(productos)
    const handlerOnAdd = (obj:any) => {
        setProduct([...products, obj])
    }
    const addProduct = () => {
    }

    const delProduct = (id: any) => {
        alert(`delete ${id}`);
        products.splice(id)
    }

    const getProduct = ({id, nombre, precio}: any) => {
        alert(`${id}: Nombre de Producto: ${nombre} Precio:$ ${precio} `)
  
    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
        }}>
            <div className="col-6 col-md-6">
                <Form handlerOnAdd={handlerOnAdd} />
            </div>
            <div className="col-6 col-md-6">
                <Table />
            </div>
            
            
        </ProductContext.Provider>
        
    )
}

export default Home
