// MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const welcome =
  "Welcome to your task manager, Press: \n1. to see all your tasks \n2. to add a task \n3. to delete a task \n4. to mark a task as done \n5. to Exit the task manager";

const readTasks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("file.json", function (err, data) {
      if (err) throw err;
      const tasks = JSON.parse(data);
      resolve(tasks);
    });
  });
};
const writeTasks = (task) => {
  return new Promise((resolve, reject) => {
    const tasksString = JSON.stringify(task);
    fs.writeFile("file.json", tasksString, () => {});
  });
};

const addTask = () => {
  rl.question("Which task do you wanna add? ", async (task) => {
    const tasks = await readTasks();
    tasks.push(task);
    await writeTasks(tasks);
  });
};

const removeTask = () => {
  rl.question("Which task do you wanna remove? ", async (rmtask) => {
    const tasks = await readTasks();
    const found = tasks.indexOf(rmtask);
    if (found > -1) {
      //check if found exist, if so execute
      tasks.splice(found, 1);
    }
    await writeTasks(tasks);
    doTask();
  });
};

const markAsDone = () => {
  rl.question("Which task do you wanna finish? ", async (task) => {
    const tasks = await readTasks();
    const found = tasks.indexOf(task);
    tasks[found] = `${task} - done`;
    console.log(tasks);
    await writeTasks(tasks);
  });
};

function doTask() {
  return new Promise(function (resolve, reject) {
    //I need to use promisse because I'm waiting for user anse
    console.log(welcome);
    rl.setPrompt("which task? > ");
    rl.prompt();
    rl.on("line", async function (line) {
      switch (line.trim()) {
        case "1":
          console.log(await readTasks());
          break;
        case "2":
          addTask();
          break;
        case "3":
          removeTask();
          break;
        case "4":
          markAsDone();
          break;
        case "5":
          console.log("bye");
          rl.close();
          return;
      }
      rl.prompt();
    }).on("close", function () {
      resolve();
    });
  });
}

async function run() {
  try {
    let replResult = await doTask();
    console.log("repl result:", replResult);
  } catch (e) {
    console.log("failed:", e);
  }
}

run();
