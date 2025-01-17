import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            tasks: []
        }
    },
    getters: {
        getTaskById: (state) => (id) => {
          return state.tasks.find(task => task.id === parseInt(id));
        }
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task)
        },
        addComment(state, {taskId, comment}) {
            const task = state.tasks.find(task => task.id === parseInt(taskId))
            task.comments.push(comment)
        }

    }
})
