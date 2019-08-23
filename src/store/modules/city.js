export default {
    namespaced:true,
    state:{
        currentCity: {}
    },
    getters:{

    },  
    mutations:{
        setCurrentCity(state,payload){
            state.currentCity = {...payload};
        }
    },
    actions:{

    },
};
