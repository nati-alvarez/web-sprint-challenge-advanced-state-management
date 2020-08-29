1. What problem does the context API help solve?
   
   The context API helps us avoid excessive prop drilling, we can instead access
   state only where it is needed.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  
   Store - the store holds all the application state that will be updated via the 
   redux pattern. It's know as the 'single source of truth' because holds all the state for our application in one place
   And all updates are made to it in the same predicatable way.
   
   Actions - actions are functions that return an object that are dispatched to the
   reducer. the object has two properties typically, type and payload. The type
   tells the reducer what action is being performed, the payload is the data to
   be passed along with it, if any. type is required while payload isnt.

   Reducer - the reducer is a single function that makes updates to the store in an immutable way. The
   updates that are made are dependent on what action is ran.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state is state that is used application-wide across many different components both related and
   unrelated. An example of this is a user info object. Component state is state that is only needed for a
   single component. An example of this is state for form fields.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   Redux-thunk allows us to make our actions asynchronus (like when making an API call.) When we use redux thunk,
   it takes any functions returned from our action creators and calls them, passing dispatch as an argument to them.
   from there, after we complete any async calls, we can dispatch an action, using that argument.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   My favorite state mangement system I learned this sprint is Redux. I think that although it does have a lot of set
   up, the structure it provides to making updates to application level state makes it much easier to add addtional
   features onto applications and to maintain them. it is predictable, as it aims to be. For smaller scale applications,
   It is a bit overkill and using something like the Context API, or just passing props would be more appropriate. But,
   For apps with a lot of state changes and relationships, I feel Redux is the way to go.