// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import authService from "./authService";

// const initialState = {
//     user: [],
//     isLoading: false,
//     isSuccess: false,
//     isRejected: false,
//     message: "",
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state, action) => {
//         state.isLoading = true;
//         state.isSuccess = false;
//         state.isRejected = false;
//         state.message = "";
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.isRejected = false;
//         state.user = action.payload;
//         state.message = "";
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = false;
//         state.isRejected = true;
//         state.message = action.payload;
//       })
//     }
// })

// export const register = createAsyncThunk("AUTH/REGISTER", async(data, thunkAPI)=>{
//     try {
//         return await authService.register(data)
//     } catch (error) {
//         const message = error.response.data.message
//         return thunkAPI.rejectWithValue(message)
//     }
// })

// export default authSlice.reducer