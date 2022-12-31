const logging =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("prev state", getState());
    console.log("dispatch", dispatch);
    console.log("action", action);
    const result = next(action);
    console.log("next state", getState());
    return result;
  };

export default logging;
