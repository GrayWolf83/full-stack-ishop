import { createAction, createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import userService from '../services/user.service'
import generateAuthError from '../utils/generateAuthError'
import history from '../utils/history'

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false,
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false,
      }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true
        },
        usersReceived: (state, action) => {
            state.entities = action.payload
            state.dataLoaded = true
            state.isLoading = false
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload
            state.isLoggedIn = true
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = []
            }
            state.entities.push(action.payload)
        },
        userLoggedOut: (state) => {
            state.entities = null
            state.isLoggedIn = false
            state.auth = null
            state.dataLoaded = false
        },
        userUpdated: (state, action) => {
            state.entities = state.entities.map((u) => {
                return u._id === action.payload._id ? action.payload : u
            })
        },
        authRequested: (state) => {
            state.error = null
        },
    },
})

const { reducer: usersReducer, actions } = usersSlice
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequestSuccess,
    authRequestFailed,
    userCreated,
    userLoggedOut,
    userUpdated,
} = actions

const authRequested = createAction('users/authRequested')
const userCreateRequested = createAction('users/userCreateRequested')
const createUserFail = createAction('users/createUserFail')
const updateUserRequested = createAction('users/updateUserRequested')
const updateUserFail = createAction('users/updateUserFail')

export const login =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload
        dispatch(authRequested())
        try {
            const data = await authService.login({ email, password })
            dispatch(authRequestSuccess({ userId: data.localId }))
            localStorageService.setTokens(data)
            history.push(redirect)
        } catch (error) {
            const { code, message } = error.response.data.error
            if (code === 400) {
                const errorMessage = generateAuthError(message)
                dispatch(authRequestFailed(errorMessage))
            } else {
                dispatch(authRequestFailed(error.message))
            }
        }
    }

export const signUp =
    ({ email, password, role, name }) =>
    async (dispatch) => {
        dispatch(authRequested())
        try {
            const data = await authService.register({ email, password })
            localStorageService.setTokens(data)
            dispatch(authRequestSuccess({ userId: data.localId }))
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    role,
                    name,
                    image: `https://avatars.dicebear.com/api/avataaars/${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(7)}.svg`,
                }),
            )
        } catch (error) {
            dispatch(authRequestFailed(error.message))
        }
    }

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(userLoggedOut())
    history.push('/')
}

export const updateUserData = (payload) => async (dispatch) => {
    dispatch(updateUserRequested())
    try {
        const { content } = await userService.update(payload)
        dispatch(userUpdated(content))
    } catch (error) {
        dispatch(updateUserFail(error.message))
    }
}

function createUser(payload) {
    return async function (dispatch) {
        dispatch(userCreateRequested())
        try {
            const { content } = await userService.create(payload)
            dispatch(userCreated(content))
            history.push('/')
        } catch (error) {
            dispatch(createUserFail(error.message))
        }
    }
}

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested())
    try {
        const { content } = await userService.get()
        dispatch(usersReceived(content))
    } catch (error) {
        dispatch(usersRequestFailed(error.message))
    }
}

export const getUsersList = () => (state) => state.users.entities

export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((user) => user._id === userId)
    }
}

export const getCurrentUserData = () => (state) => {
    return state.users?.entities
        ? state.users.entities.find((u) => u._id === state.users.auth.userId)
        : null
}

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getDataStatus = () => (state) => state.users.dataLoaded
export const getCurrentUserId = () => (state) => state.users.auth.userId
export const getAuthErrors = () => (state) => state.users.error

export default usersReducer
