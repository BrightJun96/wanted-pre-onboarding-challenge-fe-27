
interface Action{
    type: string;
}


const obj={
}


type Reducer<S> = (state: S, action:Action) => S;

type ListenerCallback = () => void

function createStore<S,InitialState=S>(reducer:Reducer<S>, initialState: InitialState) {
  let state = initialState;
  let currentListeners: Map<number, ListenerCallback> | null = new Map()
    let nextListeners = currentListeners
    let listenerIdCounter = 0
    let isDispatching = false


    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = new Map()
            currentListeners.forEach((listener, key) => {
                nextListeners.set(key, listener)
            })
        }
    }



    function getState() {
    return state;
  }



  function dispatch(action:Action) {
    state = reducer(state, action);

    return action
  }

  function subscribe(listener:()=>void){
      let isSubscribed = true

      ensureCanMutateNextListeners()
      const listenerId = listenerIdCounter++
      nextListeners.set(listenerId, listener)
      return function unsubscribe() {
            if (!isSubscribed) {
                return
            }
            isSubscribed = false

            ensureCanMutateNextListeners()
            nextListeners.delete(listenerId)
          currentListeners = null
      }

  }



  return {
    getState,
    dispatch,
      subscribe
  };
}
