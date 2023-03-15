import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { browseApi } from './browse'

const appReducer = combineReducers({
	[browseApi.reducerPath]: browseApi.reducer,
})

export const store = configureStore({
	reducer: appReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(browseApi.middleware),
})

setupListeners(store.dispatch)

export { browseApi }