
import axios from 'axios'

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'
const ADD_PURCHASE = 'ADD_PURCHASE'

const initalState = {
    purchases: [],
    budgetLimit: null,
    loading: false
}

export const requestBudgetData = () => {
    let data = axios.get('/api/budget-data').then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

export const addPurchase = (description, price, category) => {
    let data = axios.post('/api/budget-data/purchase', {description, price, category}).then(res => res.data)
    return {
        type: ADD_PURCHASE,
        payload: data
    }
}

function budgetReducer(state = initalState, action) {
    switch (action.type) {
        case REQUEST_BUDGET_DATA + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_BUDGET_DATA + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case ADD_PURCHASE + '_PENDING':
            return { ...state, loading: true}
        case ADD_PURCHASE + '_FULFILLED':
            return { ...state, loading: false}
        default:
            return state;
    }
}

export default budgetReducer;