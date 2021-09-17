// an action is an object that describes some event that affects the app state
// actions are dispatched by components/services and are received by a reducer
// the reducer will use the information to transform the app state

export type Action = {
    type: string,
    payload?: any
}