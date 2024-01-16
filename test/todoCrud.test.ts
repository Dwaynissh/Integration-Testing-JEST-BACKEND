import { number } from "joi";
import {
  createTask,
  createUserLogic,
  deleteTask,
  viewAllTasks,
  viewAllUsers,
  viewOneTasks,
} from "../controller/todoCrud";

describe("Describing my todoCrud Logic", () => {
  test("Testing my createUser Logic", () => {
    const mockDatabase = [
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
            taskName: "Designing",
          },
        ],
      },
    ];

    const newUser = {
      id: mockDatabase.length + 1,
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
    const updatedDatabase = createUserLogic(mockDatabase);

    expect.objectContaining({
      id: expect.any(Number),
      user: expect.any(String),

      tasks: expect.any({
        id: expect.any(Number),
        taskName: expect.any(String),
      }),
    });
  });

  test("Testing my viewAllUsers Logic", () => {
    const mockDatabase = [
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
            taskName: "Designing",
          },
        ],
      },
    ];

    const newUser = {
      id: mockDatabase.length + 1,
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
    const updatedDatabase = viewAllUsers();

    expect.objectContaining({
      id: expect.any(Number),
      user: expect.any(String),

      tasks: expect.any({
        id: expect.any(Number),
        taskName: expect.any(String),
      }),
    });
  });

  test("Testing my createTask Logic", () => {
    const mockDatabase = [
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
            taskName: "Designing",
          },
        ],
      },
    ];

    const newUser = {
      id: mockDatabase.length + 1,
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
    const updatedDatabase = createTask("Prince", "Finish-Assignments");

    expect.objectContaining({
      id: expect.any(Number),
      user: expect.any(String),

      tasks: expect.any({
        id: expect.any(Number),
        taskName: expect.any(String),
      }),
    });
  });

  test("Testing my viewAllTasks Logic", () => {
    const mockDatabase = [
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
            taskName: "Designing",
          },
        ],
      },
    ];

    const newUser = {
      id: mockDatabase.length + 1,
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

    const updatedDatabase = viewAllTasks("Prince");
    expect.arrayContaining([
      expect.stringContaining("Watch-Anime"),
      expect.stringContaining("Research"),
    ]);
  });

  test("Testing my viewOneTasks Logic", () => {
    const mockDatabase = [
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
            taskName: "Designing",
          },
        ],
      },
    ];

    const newUser = {
      id: mockDatabase.length + 1,
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

    const updatedDatabase = viewOneTasks("Habeeb", 1);
    expect.objectContaining({
      id: expect.any(Number),
      taskName: expect.any(String),
    });
  });

  test("Testing my deleteTask Logic", () => {
    const mockDatabase = [
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
            taskName: "Designing",
          },
        ],
      },
    ];

    const newUser = {
      id: mockDatabase.length + 1,
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

    const updatedDatabase = deleteTask("Habeeb", 0);
    expect.objectContaining({
      id: expect.any(Number),
      taskName: expect.any(String),
    });
  });
});
