import { FormDataContext } from '../../contexts/formData';
import { useContext, useState } from 'react';

type Props = {
    id: number;
    name: string;
    preco: string;
    precoDeVenda: string;
    quantidade: string;
    data: string;
    // setData: (setData: any) => void;
    
}



 

const Table = ({ id, name, preco, precoDeVenda, quantidade, data  }: Props) => {

    const FormContext = useContext(FormDataContext)
     
    const [nome, setNome] = useState('')
  
    

    const handlerEdit = async ()=> {
         
        const req = await fetch(`/api/product/` + id, {
            method: 'GET'
        })

        const res = await req.json();

        FormContext?.setProductName(res.product.name)
        FormContext?.setPrice(res.product.preco)
        FormContext?.setSalePrice(res.product.precoDeVenda)
        FormContext?.setCount(res.product.quantidade)
        FormContext?.setData(res.product.data)
        FormContext?.setId(id)
    }


    return (
        <>
            
            <td>{name}</td>
            <td>{preco}</td>
            <td>{precoDeVenda}</td>
            <td>{quantidade}</td>
            <td>{data}</td>
            <td><button onClick={handlerEdit}>Editar</button></td>

        </>
    );
}

export default Table;