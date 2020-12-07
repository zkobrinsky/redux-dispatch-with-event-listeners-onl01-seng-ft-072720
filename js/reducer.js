let state = {count: 0}
 
function reducer(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function dispatch(action){
    state = reducer(state, action);
    render();
    return state;
  }

  function render() {
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

  function mountButton() {
    document.querySelector("#button").addEventListener('click', () => dispatch({type: 'INCREASE_COUNT'}))
  }

  dispatch({type: 'fuck'})
  mountButton()