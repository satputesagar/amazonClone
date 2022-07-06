export const initialState ={
    basket:[],
    // user:null
};

// Selector
export const getBasketTotal =(basket)=>{
basket?.reduce((amount,item)=>item.price +amount,0);
};


function reducer(state,action){
    console.log(action);

    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
            break;
            
            case "EMPTY_BASKET":
                return{
                    ...state,
                    basket:[]
                };
                break;

            case "REMOVE_FROM_BASKET":
                const index=state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id
                );
                let newBasket =[...state.basket];
                if(index >=0){
                    newBasket.splice(index,1);
                }else{
                    console.warn(
                        `Cant remove product (id: ${action.id}) as its not in basket!`
                      )
                }
                break;
            
            case "SET_USER":
                return{
                    ...state,
                    user:action.user
                }
                break;
        default:
            return state;
    }
};

export default reducer;