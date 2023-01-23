import { ActionContext } from 'vuex'

interface authState {
    email: String,
    password: String,
    token: String,
    isLoggedIn: Boolean | null
}

const Auth = {
    state: ():authState => ({ 
        email: '',
        password: '',
        token: '',
        isLoggedIn: null
     }),
    mutations: {  },
    actions: { 

     },
    getters: { 
        isLoggedIn: (state: authState) => state.isLoggedIn
     }
}

export default Auth;