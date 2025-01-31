import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const registerUser = createAsyncThunk("auth/registerUser", async ({ email, password }, thunkAPI) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
        };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
    try {
        await signOut(auth);
        return null;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { setUser } = authReducer.actions;

export default authReducer.reducer;