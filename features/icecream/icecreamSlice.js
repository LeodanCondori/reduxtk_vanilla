const { createSlice } = require("@reduxjs/toolkit");
// const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
  numOfIcecreams: 20,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   // Use builder.addCase for each additional case
  //   builder.addCase("cake/ordered", (state) => {
  //     state.numOfIcecreams--;
  //   });
  //   // You can add more cases using builder.addCase here
  // },

  // another way
  // extraReducers: (builder) => {
  //   // Use builder.addCase for each additional case
  //   builder.addCase(cakeActions.ordered, (state) => {
  //     state.numOfIcecreams--;
  //   });
  //   // You can add more cases using builder.addCase here
  // },

  // the following is deprecated
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecreams--;
  //   },
  // },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
