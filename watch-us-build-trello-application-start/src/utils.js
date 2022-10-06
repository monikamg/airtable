export function uuid () {
  return Math.random().toString(16).slice(2)
}

export function saveStatePlugin (store) {
  localStorage.setItem('boards', JSON.stringify(store.state.board))
  store.subscribe(
    (mutation, state) => {
      console.log("BOARD", state.board)
      localStorage.setItem('boards', JSON.stringify(state.board))
    }
  )
}
