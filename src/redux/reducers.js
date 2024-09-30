const initialState = {
    items: [], // to store products
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

const cartInitialState = {
    items: []
};

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        default:
            return state;
    }
};
