import { GET_USER_COUNT, GET_ACTIVITY } from '../action/doc'

const docReducer = (
    state = {
        userCount: {}
    },
    action: any
) => {
    switch (action.type) {
        case GET_USER_COUNT : {
            return {
                ...state,
                userCount: action.payload,
            };
        };
        case GET_ACTIVITY : {
            return {
                ...state,
                data: action.payload,
            };
        };
        default : {
            return {
                ...state
            };
        }
    }
};

export default docReducer;