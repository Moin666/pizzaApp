import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
    foodData: [ ],
    cart:[]
})



export const getters = {
  getterValue: state => {
    return state.value
  },
  getCart: state => {
    return state.cart
  },

}

export const mutations = {
  updateFoodData: (state, payload) => {
      state.foodData = payload
  },
  addToCard:(state,formOutput)=>{
    formOutput.id = uuidv4();
    state.cart.push(formOutput)
  }
}

export const actions = {
  async getFoodData({ commit,state }) {
      try {
        await fetch(
          "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.AWS_API_KEY
            }
          }
        )
        .then(response => response.json())
        .then(data => {
          commit("updateFoodData", data);
        });
      } catch (error) {
          console.log(error.message);
      }
  }
  ,
  updateCard({commit},formOutput){
    commit('addToCard',formOutput)
  }
  
}
