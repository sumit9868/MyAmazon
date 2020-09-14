export const initialState = {
    basket: [],
};

export const getBasketTotal=(basket)=>
  basket?.reduce((amount,item)=>item.price + amount,0);

const reducer = (state, action) => {

    // console.log(action);
    switch (action.type) {
        case "ADD TO CART":
            { //LOGIC TO ADD IN BASKET
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
                break;
            }
        case "REMOVE FROM CART":
            {
                //LOGIC for removing from basket
                let newBasket = [...state.basket];
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

                // we check if that item exits in the store
                if (index >= 0) {
                    //item exits , remove it 
                    newBasket.splice(index, 1);
                }
                else {
                    console.warn(
                        "Can't remove it"
                    );
                }

                return {
                    ...state,
                    basket: newBasket,
                };

                break;
            }

        default:
            return state;
    }
}

export default reducer;