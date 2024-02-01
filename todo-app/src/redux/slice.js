import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};

const Slice = createSlice({
    name: "addUsers",
    initialState,
    reducers: {
        addUser: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload,
            };
            state.users.push(data)
        },
        deleteUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;
            console.log(action);
        }
    }

});


export const { addUser, deleteUser } = Slice.actions;

export default Slice.reducer;