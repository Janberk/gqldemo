import * as actionType from './ActionType';

// export const fetchStaff = () => dispatch => {
//   fetch('http://localhost:3000/staff')
//   .then(res => res.json())
//   .then(staff => dispatch(
//     {
//       type: actionType.FETCH_STAFF,
//       payload: staff
//     }
//   ));
// }

export const loadTodos = () => ({
  type: actionType.LOAD_TODOS,
  payload: { todos: [] }
});

/** Equal to:
export function fetchPosts() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch(
      {
        type: FETCH_POSTS,
        payload: posts
      }
    ));
  }
}
 */

// export const createPost = (postData) => dispatch => {  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(postData)
//   })
//   .then(res => res.json())
//   .then(post => dispatch(
//     {
//       type: NEW_POST,
//       payload: post
//     }
//   ));
// }
