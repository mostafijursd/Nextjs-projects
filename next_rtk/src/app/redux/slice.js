import { createAsyncThunk, createSlice, current, nanoid } from "@reduxjs/toolkit";


const initialState = {
    fatchApiData: [],
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

};

export const fatchApiData = createAsyncThunk("fatchApiData", async() => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
})
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
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData)
        },
        removeUsers: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fatchApiData.fulfilled, (state, action) => {
            state.isloading = false,
                state.fatchApiData = action.payload
        })
    }

});

export const { addUsers, removeUsers } = Slice.actions;
export default Slice.reducer;