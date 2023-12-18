// import { DataInitialState } from "../../types/DataInitialState";
// import { DataActionType } from "../../types/DataActionType";

import { useReducer } from "react";


export type DataActionType = {
  qt: number;
  id: number;
  type: string;
  data: filterType;
  setQt: (setQt:number) =>void
  qts:number
}

type filterType = {
  name: string;
  id: number;
  preco: number;
  precoDeVenda: number
  quantidade: number;
}

type InitialStateType = {
  products: filterType[]
}

type ActionType = {
  type: string;
  payload: DataActionType;
}



export const initialState: InitialStateType = {
  products: []
};


export default (state = initialState, action: ActionType) => {
  let products = [...state.products];
  switch (action.type) {
    case 'ADD_PRODUCT':

      let id = action.payload.data.id;



      let index = products.findIndex(item => item.id == id);

      if (index > -1) {
        // products[index].quantidade += action.payload.qt;
      } else {
        products.push({
          ...action.payload.data,
          quantidade: action.payload.qt
        })

        // console.log(products[index].quantidade)
        console.log(products)


      }
      return { ...state, products }

      break;

    case 'CHANGE_PRODUCT':
      let id2 = action.payload.id
      let index2 = products.findIndex(item => item.id == id2);
      

       
      if (products[index2]) {
        switch (action.payload.type) {
          case '-':
            products[action.payload.id].quantidade--;

            if (products[action.payload.id].quantidade <= 0) {
              products = products.filter((item, index) => index != action.payload.id);
            }
            break;
          case '+':
            // products[action.payload.id].quantidade++;
          //  products[index2].quantidade++
          // console.log(products[index2])
            
            // action.payload.setQt(action.payload.qts + 1)
            products[0].quantidade++
          // alert('foi')
            break;
        }
      }

      return { ...state, products }
      break;
  }
  return state;
}


