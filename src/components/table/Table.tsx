import { useContext } from "react";
import ProductContext from "../../contexts/ProductContext";
import styles from "./Table.module.css";
const Table = () => {
  const context = useContext(ProductContext);
  return (

      <div className={styles.tabla}>
        <table className="table">
          <tbody>
            {context.products.map((product: any) => (
              <tr key={product.id}>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
                <td>
                  <button className="btn btn-sm btn-success"
                    onClick={() => context.getProduct(product.id)}
                  >
                    Detalle
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => context.delProduct(product.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  );
};

export default Table;
