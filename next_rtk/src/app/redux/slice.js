import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    users: [],

};
const Slice = createSlice({
    name: "AddUsersSlice",
    initialState,
    reducers: {
        addUsers: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload,
            };
            state.users.push(data);
        },
        removeUsers: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;
        }
    }

});

export const { addUsers, removeUsers } = Slice.actions;
export default Slice.reducer;