const InitialState = {
    loading: false,
    messages: [],
};

export const messagesReducer = (state = InitialState, action) => {
    switch (action.type) {
      case 'ADD-MESSAGE':
        state = {
            ...state,
            messages : [...state.messages, action.payload],
        }  
        break;        
      case 'DELETE-MESSAGE':
        state = {
            ...state,
            messages : state.messages.filter(m => m.id != action.payload),
        }  
        break;        
    }
    return state;
   };