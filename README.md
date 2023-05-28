# What is a "thunk"?

The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

Using thunks requires the redux-thunk middleware to be added to the Redux store as part of its configuration.

Thunks are a standard approach for writing async logic in Redux apps, and are commonly used for data fetching.

# A thunk function is a function that accepts two arguments: the Redux store dispatch method, and the Redux store getState method. Thunk functions are not directly called by application code. Instead, they are passed to store.dispatch():

Dispatching thunk functions
const thunkFunction = (dispatch, getState) => {
// logic here that can dispatch actions or read state
}

# store.dispatch(thunkFunction)

# Thunk Use Cases

Because thunks are a general-purpose tool that can contain arbitrary logic, they can be used for a wide variety of purposes. The most common use cases are:

Moving complex logic out of components
Making async requests or other async logic
Writing logic that needs to dispatch multiple actions in a row or over time
Writing logic that needs access to getState to make decisions or include other state values in an action
