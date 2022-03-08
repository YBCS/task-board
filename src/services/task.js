// taskService

const TLCs = 'TaskListCollections'
const USER1 = 'budha'
const USER1_MAIl = 'buda@mail.com'


export function getTaskListCollections(user_name) {
  // one user one space
  const _task_list_collections = window.localStorage.getItem(TLCs + user_name)
  if (_task_list_collections) {
    return JSON.parse(_task_list_collections)
  }
  return []
}
export function getTaskLists (user_name) {
  // for current user
  const _task_list_collections = getTaskListCollections(user_name)
  if (_task_list_collections) {
    const _task_list = _task_list_collections.map((coll) => coll.task_list)
    return _task_list
  }
  return []
}
export function getTasks (user_name) {
  // for current user
  const _task_list_collections = getTaskListCollections(user_name)
  if (_task_list_collections) {
    const _tasks = _task_list_collections.map((coll) => coll.task_list.task)
    return _tasks
  }
  return []
}

export function addTask (user_name, task, task_list_id) {
  let _task_lists = getTaskLists(user_name)

  _task_lists.forEach((t_l) => {
    if (t_l.task_list_id === task_list_id) {
      t_l.task = [...t_l.task, task]
    }
  })
  // persist it
  const _task_list_collections = getTaskListCollections(user_name)
  _task_list_collections.task_list = _task_lists
  localStorage.setItem(TLCs + user_name, _task_list_collections)
}

export function addTaskList(task_list_name, user_name) {
  const empty_task_list = {
    task_list_id: 0, // fix this
    task_list_name: task_list_name,
    task: [],
  }
  const _task_list_collections = getTaskListCollections(user_name)
  _task_list_collections.task_list = [..._task_list_collections.task_list, empty_task_list]
  localStorage.setItem(TLCs + user_name, _task_list_collections)
}

export function addTaskListCollection(user, default_task_list_name) {
    const empty_task_list = {
        task_list_id: 0, // fix this
        task_list_name: default_task_list_name,
        task: [],
      }    
    const empty_collection = {
        task_list_collection_id: 0,
        task_list_collection_owner: {
          user_name: user.user_name,
          email: user.mail,
        },
        task_list: [empty_task_list],
      }
      const _task_list_collections = getTaskListCollections(user.user_name)
      _task_list_collections.task_list = [..._task_list_collections, empty_collection]
      localStorage.setItem(TLCs + user.user_name, _task_list_collections)
}

export function seedData(){
  // for testing purposes
  // there is one user with one collectoin with 2 task list, one with 3 task and one with 2 task
//   const empty_collection = {
//     task_list_collection_id: 0,
//     task_list_collection_owner: {
//       user_name: '',
//       email: 'USER1_MAIl',
//     },
//     task_list: [],
//   }
//   const empty_task_list = {
//     task_list_id: 0,
//     task_list_name: '',
//     task: [],
//   }
//   const empty_task = {
//     header: '',
//     task_id: 0,
//     task_detail: '',
//     task_date: '',
//   }

  const dummy = [
    {
      task_list_collection_id: 1,
      task_list_collection_owner: {
        user_name: USER1,
        email: USER1_MAIl,
      },
      task_list: [
        {
          task_list_name: 'My tasks',
          task_list_id: 1,
          task: [
            {
              header: 'hello',
              task_id: 1,
              task_detail: 'some more secret detail',
              task_date: 'secret date',
            },
            {
              header: 'campus build',
              task_id: 2,
              task_detail: 'some more secret detail',
              task_date: 'secret date',
            },
            {
              header: 'radiant salon',
              task_id: 3,
              task_detail: 'some more secret detail',
              task_date: 'secret date',
            },
          ],
        },
        {
          task_list_name: 'My tasks 2',
          task_list_id: 2,
          task: [
            {
              header: 'hello',
              task_id: 1,
              task_detail: 'some detail secret',
              task_date: 'secret date 2',
            },
            {
              header: 'Prasant Hotel',
              task_id: 2,
              task_detail: 'some detail secret',
              task_date: 'secret date 2',
            },
          ],
        },
      ],
    },
  ]
//   console.log('dummy is ', dummy)
//   console.log('dummy is json ', dummy)
  window.localStorage.setItem(TLCs + USER1, JSON.stringify(dummy))
}


// export default {
//     seedData,
//     addTaskListCollection,
//     addTaskList,
//     addTask,
//     getTasks,
//     getTaskLists,
//     getTaskListCollections,
// }
