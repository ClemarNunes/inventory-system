// import { DataInitialState } from "../../types/DataInitialState";
// import { DataActionType } from "../../types/DataActionType";

import { useReducer, useState } from "react";


export type DataActionType = {
  qt: number;
  id: number;
  type: string;
  data: filterType;
  index: number;
  qtt: filterType[];
}

type filterType = {
  name: string;
  id: number;
  preco: number;
  precoDeVenda: number
  quantidade: number;

}

type InitialStateType = {
  products: filterType[];
  subtotal: { total: number | null };
  // vendas: filterType[];
  vendasRealizadas: filterType[]
}

type ActionType = {
  type: string;
  payload: DataActionType;
}



export const initialState: InitialStateType = {
  products: [],
  subtotal: { total: null },
  // vendas: [],
  vendasRealizadas: []

};


export default (state = initialState, action: ActionType) => {

  let products = [...state.products];
  let subtotal = { ...state.subtotal };


  // let vendas: filterType[][] = [];

  switch (action.type) {
    case 'ADD_PRODUCT':

      const { data, qt } = action.payload; //pega as propriedades data e qt de payload.
      const { id, quantidade: qtDisponiveL } = data; //pega id e quantidade de data.


      let index = products.findIndex(item => item.id == id); //localizo o index do item.id que é igual o id do item adicionado no cart caso ele ja tenha sido adicionado, senão, retorna -1

      //quantidade => possui o a quantidade de itens disponivel no meu banco de dados.

      if (index > -1 ) { //verifica se um item ja existe no array, se sim, ele aumenta a quantidade.
        // if (products[index].quantidade < qtDisponiveL) { //verifico se a quantidade de itens no car, é menor que a quantidade disponivel
        //   products[index] = {
        //     ...products[index],  //cria uma cópia superficial do objeto. Isso é feito para garantir que não estamos modificando diretamente o objeto original, seguindo o princípio de imutabilidade.
        //     quantidade: products[index].quantidade + qt // Estamos pegando o valor atual de quantidade do objeto original em products[index].quantidade e adicionando a quantidade adicional (qt) que está sendo passada na ação.
        //   }

        // }

        const { quantidade: qtdisponivel } = products[index]
        qtdisponivel < qtDisponiveL && (products[index] = {...products[index], quantidade:qtdisponivel +qt })

      } else { //adiciona um item não existente no array
        products.push({ ...data, quantidade: qt })
        // console.log(action.payload.data.quantidade)

      }


      return { ...state, products }

      break;
    case 'CHANGE_PRODUCT':
      if (products[action.payload.index]) {
        switch (action.payload.type) {
          case '-':

            const { index: i } = action.payload; // pego o index do produto clicado que está no meu cart.
            const { quantidade: q } = products[i];

            products[i] = { ...products[i], quantidade: q - 1 };

            // if (products[i].quantidade < 1) {
            //   products = products.filter((item, index) => index !== i);
            // }
            // products = products.filter((item, index)=> !(item.quantidade < 1 )); se quantidade == 1, vai verificar se  1 < 1 = não e vai virar true e remover item,  3 - 1 = 2 e 2< 1 = não e vai virar true e remover item
            products = products.filter((item, index) => item.quantidade >= 1);

            break;
          case '+':
            const { index: x, qt } = action.payload; //pega index e qt do meu payload. | action.payload.index //pega o item do array na sequencia adicionado

            let id = products[x].id // pega o id do item adicionado 
            let index2 = action.payload.qtt.findIndex(item => item.id == id) //localizo o index do item.id que é igual o id do item adicionado no cart.

            const { quantidade: qtProduct } = products[x]
            const { quantidade: qtDisponivel } = action.payload.qtt[index2] //pega a  quantidade maxima disponivel que aquele produto possui

            qtProduct < qtDisponivel && (products[x] = { ...products[x], quantidade: qtProduct + qt }) //verifico se a quantidade no produto no meu cart é menor que a quantidade maxima disponivel daquele produto especifico, se sim, aumenta a quantidade do produto no cart.

            break;
        }
      }

      return { ...state, products, subtotal }
      break;

    case 'TOTAL':

      let total = products.reduce((subtotal, item) => subtotal + (item.precoDeVenda * item.quantidade), 0);

      subtotal = { ...subtotal, total };
      // console.log(subtotal.total)

      return { ...state, subtotal }
      break;

    case 'CLEAR_CART':
      // vendas = [...vendas,  [...products] ]; 
      const vendasRealizadas = [...state.vendasRealizadas, [...products]]; 
       

      return { ...state, products: [], vendasRealizadas };
      break;
  }


  return state;
}

// subtotal = {...subtotal,   total }


