

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare quarterly report",
        description: "Compile financial data for Q3",
        date: "2025-09-10",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Email pending clients for feedback",
        date: "2025-09-08",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM entries",
        description: "Ensure all leads are tagged correctly",
        date: "2025-09-11",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage banner",
        description: "Create fall sale banner for homepage",
        date: "2025-09-09",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix navbar bug",
        description: "Resolve mobile dropdown issue",
        date: "2025-09-10",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Push new build",
        description: "Deploy latest version to staging",
        date: "2025-09-11",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Review pull requests",
        description: "Check code quality and merge",
        date: "2025-09-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Conduct user interviews",
        description: "Gather feedback from 5 users",
        date: "2025-09-08",
        category: "UX Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create wireframes",
        description: "Sketch layout for dashboard redesign",
        date: "2025-09-09",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Analyze survey results",
        description: "Summarize key insights from user survey",
        date: "2025-09-10",
        category: "Research",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Aditya",
    email: "e4@e.com",
    password: "123",
    tasks: [
      {
        title: "Optimize database queries",
        description: "Improve performance of reporting module",
        date: "2025-09-10",
        category: "Backend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Cover 80% of backend logic",
        date: "2025-09-11",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve issue with token refresh",
        date: "2025-09-12",
        category: "Authentication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Document API endpoints",
        description: "Update Swagger docs for new routes",
        date: "2025-09-13",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Schedule team meeting",
        description: "Plan agenda and send invites",
        date: "2025-09-09",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare presentation",
        description: "Create slides for quarterly review",
        date: "2025-09-10",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update employee records",
        description: "Ensure HR database is current",
        date: "2025-09-11",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("admin", JSON.stringify(admin));
  localStorage.setItem("employees", JSON.stringify(employees));
};

export const getLoacalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
