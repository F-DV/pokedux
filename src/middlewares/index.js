const logActions = store => next => actionInfo => {
    console.log('disparando:',actionInfo);
    next(actionInfo);
}
export default logActions;