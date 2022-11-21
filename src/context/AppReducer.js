export default function appReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case 'UPDATE_TASK':
            const updateTasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    task.title = action.payload.title;
                    task.description = action.payload.description;
                }
                return task;
            });

            return {
                tasks: updateTasks
            };
        case 'TOGGLE_TASK_DONE':
            return {
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? {...task, done: !task.done} : task
                )
            };
        default:
            return state;
    };
};