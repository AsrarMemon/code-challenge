import { GET_USER_COUNT, GET_ACTIVITY } from '../action/doc'

export const getUserCount = () => {
    return async (dispatch: any) => {
        dispatch({
            type: GET_USER_COUNT,
            payload: {
                user: '2500+'
            }
        });
    }
}

export const getActivity = () => {
    return async (dispatch: any) => {
        dispatch({
            type: GET_ACTIVITY,
            payload: {
                count: 12,
                data: [{
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                },
                {
                    name: 'johndoe.near',
                    action: 'signed the contract successfully',
                    date: '2 days ago',
                    img: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
                }]
            }
        });
    }
}