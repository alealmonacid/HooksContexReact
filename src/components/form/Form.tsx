import{useState} from "react"
import styles from './Form.module.css';
interface Props {
    handlerOnAdd: (obj:any) => void
}

const Form = ({handlerOnAdd}: Props) => {
    const [name, setname] = useState("")
    const [price, setprice] = useState<any>(0) 
    const handlerOnSubmit = (e:any) => {
        e.preventDefault()
        const id = new Date().getTime()
        const obj = {id: id, nombre: name,precio: price} 
        handlerOnAdd(obj)
    }
    return (
        <>  
        <div className={styles.background_table}>
        <form onSubmit={handlerOnSubmit}>
                <input name="nombre" type="text" className="form-control" placeholder="Nombre" value={name} onChange={e => setname(e.target.value)} />
                <input name="precio" type="number" className="form-control mt-3" placeholder="0..9999" value={price} onChange={e => setprice(e.target.value)}/>
                <input type="submit" className="btn btn-primary mt-3" value="Agregar Producto" />
        </form>
        </div>     
        </>
    )
}

export default Form