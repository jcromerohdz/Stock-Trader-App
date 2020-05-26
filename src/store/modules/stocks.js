import stocks from '../../data/stocks';
const state = {
  stocks: []
}

const actions = {
  // eslint-disable-next-line no-unused-vars
  buyStock: ({ commit }, order) => {
    commit()
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
}

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  // 'RND_STOCKS'(state) {
    
  // }
};

export default {
  state,
  actions,
  getters,
  mutations
}