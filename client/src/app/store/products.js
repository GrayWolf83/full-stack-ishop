// import { createAction, createSlice } from '@reduxjs/toolkit'

// const productsSlice = createSlice({
//     name: 'products',
//     initialState: {
//         entities: null,
//         isLoading: true,
//         error: null,
//     },
//     reducers: {
//         productsRequested: (state) => {
//             state.isLoading = true
//         },
//         productsReceived: (state, action) => {
//             state.entities = action.payload
//             state.isLoading = false
//         },
//         productsRequestFailed: (state, action) => {
//             state.error = action.payload
//             state.isLoading = false
//         },
//         productsCreated: (state, action) => {
//             state.entities.push(action.payload)
//         },
//         productsRemoved: (state, action) => {
//             state.entities = state.entities.filter(
//                 (c) => c._id !== action.payload,
//             )
//         },
//     },
// })

// const { reducer: productsReducer, actions } = productsSlice
// const {
//     productsRequested,
//     productsReceived,
//     productsRequestFailed,
//     productsCreated,
//     productsRemoved,
// } = actions

// const productsCreateRequested = createAction('products/productsCreateRequested')

// export const loadProductsList = (userId) => async (dispatch) => {
//     dispatch(productsRequested())
//     try {
//         const { content } = await productsService.getproducts(userId)
//         dispatch(commentsReceived(content))
//     } catch (error) {
//         dispatch(commentsRequestFailed(error.message))
//     }
// }

// export const createComment = (payload) => async (dispatch) => {
//     dispatch(commentCreateRequested())
//     try {
//         const { content } = await commentService.createComment({
//             ...payload,
//             _id: nanoid(),
//             created_at: Date.now(),
//         })
//         dispatch(commentCreated(content))
//     } catch (error) {
//         dispatch(commentsRequestFailed(error.message))
//     }
// }

// export const removeComment = (commentId) => async (dispatch) => {
//     dispatch(commentCreateRequested())
//     try {
//         await commentService.removeComment(commentId)
//         dispatch(commentRemoved(commentId))
//     } catch (error) {
//         dispatch(commentsRequestFailed(error.message))
//     }
// }

// export const getComments = () => (state) => state.comments.entities
// export const getCommentsLoadingStatus = () => (state) =>
//     state.comments.isLoading

// export default commentsReducer
