interface Task {
  id: number;
  taskName: string;
}

interface User {
  id: number;
  user: string;
  tasks: Task[];
}

let database: User[] = [
  {
    id: 1,
    user: "Prince",
    tasks: [
      {
        id: 0,
        taskName: "Swimming",
      },
      {
        id: 1,
        taskName: "Coding",
      },
    ],
  },
  {
    id: 2,
    user: "Habeeb",
    tasks: [
      {
        id: 0,
        taskName: "Play-Music",
      },
      {
        id: 1,
        taskName: "Desiging",
      },
    ],
  },
];

// Manually add user
let newUser = {
  id: database.length + 1,
  user: "Ahmed",
  tasks: [
    {
      id: 1,
      taskName: "Watch-Anime",
    },
    {
      id: 2,
      taskName: "Research",
    },
  ],
};

// Manually Create Task
let newTask = {
  id: 3,
  taskName: "Build-School-Project",
};

// MAIN CODE LOGIC

export const createUserLogic = (
  data: Array<{
    id: number;
    user: string;
    tasks: Array<{ id: number; taskName: string }>;
  }>
): {
  id: number;
  user: string;
  tasks: Array<{ id: number; taskName: string }>;
} => {
  data.push(newUser);
  return newUser;
};

// View AllUsers Logic
export const viewAllUsers = (): void => {
  if (database.length > 0) {
    database.forEach((user) => {
      console.log();
      user.tasks.forEach((task) => {
        console.log();
      });
      console.log(JSON.stringify(database, null, 2));
    });
  } else {
    console.log("No users found in the database");
  }
};

// Create Task Logic
export const createTask = (userName: string, taskName: string) => {
  const userIndex = database.findIndex((user) => user.user === userName);

  if (userIndex !== -1) {
    const newTask: Task = {
      id: database[userIndex].tasks.length,
      taskName: taskName,
    };
    database[userIndex].tasks.push(newTask);
    console.log(JSON.stringify(database, null, 2));
  } else {
    console.error(`User '${userName}' not found in the database`);
  }
};

// View AllTask Logic
export const viewAllTasks = (userName: string) => {
  const user = database.find((user) => user.user === userName);
  if (user) {
    const allTasks = user.tasks.map((tasks) => tasks.taskName);
    console.log("Reading All Tasks :", allTasks);
  } else {
    console.log("Error Reading All Tasks");
  }
};

// View OneTask Logic
export const viewOneTasks = (userName: string, id: number) => {
  const user = database.find((user) => user.user === userName);

  if (user) {
    const checkOneTask = user.tasks.findIndex((task) => task.id === id);
    if (checkOneTask !== -1) {
      const showTask = user.tasks[checkOneTask];
      console.log(
        `Reading One Tasks For ${userName} with taskID ${id} :`,
        checkOneTask
      );
      console.log(JSON.stringify(showTask, null, 2));
    } else {
      console.log(`taskID ${id} not found for ${userName}`);
    }
  } else {
    console.log("Error Reading This User from Database");
  }
};

// View Delete Task Logic
export const deleteTask = (userName: string, id: number) => {
  const user = database.find((user) => user.user === userName);

  if (user) {
    const taskIndex = user.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const delTask = user.tasks.splice(taskIndex, 1);
      console.log(
        `Successfully Deleted One Tasks For ${userName} :`,
        taskIndex
      );
      console.log(JSON.stringify(delTask, null, 2));
    } else {
      console.log(`taskID ${id} not found for ${userName}`);
    }
  } else {
    console.log("Error Reading This User from Database");
  }
};

// ALL My Console.logs
// console.log(createUserLogic(database));
// console.log(viewAllUsers());
// console.log(createTask("Prince", "Build-School-Project"));
// console.log(viewAllTasks("Prince"));
// console.log(viewOneTasks("Habeeb", 1));
// console.log(deleteTask("Habeeb", 0));
