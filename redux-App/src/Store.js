import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        username: "Somnath",
        balance: 50000
    },
    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload;
        },
        debitMoney: (state, action) => {
            state.balance -= action.payload;
        }
    }
});

// Export the action
export const { addMoney, debitMoney } = userSlice.actions;

// correctly setting up the reducer in the store..
const store  = configureStore({
    reducer: { user: userSlice.reducer }
});

export default store;