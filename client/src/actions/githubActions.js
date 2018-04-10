import axios from 'axios'
import store from '../services/store'

export function getUser(userName) {
    axios.get('https://api.github.com/users/' + userName).then(resp => {
        const user = resp.data
        axios.get('https://api.github.com/users/' + userName + '/repos').then(resp2 => {
            const repos = resp2.data
            store.dispatch({
                type: "GET_USER",
                payload: {
                    user: user,
                    repos: repos
                }
            })
        })
    }) 
}

// export function getUserRepos(userName) {
//     axios.get('https://api.github.com/users/' + userName + '/repos').then(resp => {
//         // console.log(resp.data)
//         store.dispatch({
//             type: "GET_USER_REPOS",
//             payload: resp.data
//         })
//     }) 
// }

