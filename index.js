const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state:", store.getState()); //this line is not necessary when we have logger middleware(see store.js)
});

// commenting out for a moment
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

store.dispatch(fetchUsers());

// apparently we do not need the following when using async requests
//unsubscribe();
