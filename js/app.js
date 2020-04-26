projectsJSON = // Eventually this will be in a .json file
`
[
    {
        "name": "Create a text message downtime alterer",
        "description": "Create an app that takes a URL as input and sends you a text message when a request to the URL returns a response code other than 200 (OK).",
        "source": "codementor.io"
    },
    {
        "name": "A net worth calculator and tracker",
        "description": "Build a calculator you can use to track the rise or fall of your net worth on a monthly basis. You can use something like this net worth worksheet from Charles Schwab to guide you. Optional extension: have it send you a 12 month report for the previous year on the first of January each year.",
        "source": "codementor.io"
    },
    {
        "name": "Design a Small JavaScript Game",
        "description": "Designing a small JavaScript game is a good test for any new developer — this is your chance to showcase what you can do with your skill set. When designing a game from scratch, there is no existing framework to build from, so you learn an incredible amount in the process, helping to make you a better developer as you work through the challenges. Plus, you’ll have a cool game to show off in your portfolio once you’re finished!",
        "source": "bootcamp.sas.upenn.edu"
    },
    {
        "name": "Build a Working Chess Game",
        "description": "This is likely the most involved project on this list. Think about all the rules of chess; now think about coding them into a single web application! A game with this many variables with require complex algorithms and calculation. Creating your own chess game will give you hands-on experience in manipulating variants, artificial intelligence, input/output and more. ",
        "source": "bootcamp.sas.upenn.edu"
    },
    {
        "name": "Contribute to an Open Source Project",
        "description": "Open ѕоurсе рrоjесtѕ are an incredible way for new developers to hone their skills. Not only do they offer a rewarding challenge, but you will have the opportunity to receive feedback from others without the pressure of working for an employer on a commercial product. Finally, contributing to an open source project gives you the chance to expand your network while making an impact in the coding community. ",
        "source": "bootcamp.sas.upenn.edu"
    },
    {
        "name": "A random name generator",
        "description": "Build a random name generator that creates unique names on the fly, based on an algorithm. Use machine learning techniques to help you by training the program with a sample data set of names similar to those you want to generate. Otherwise, create your own lexical rules for how names are generated. For example, a name generating algorithm inspired by The Handmaid's Tale might stipulate that names for Handmaid women should start with 'Of', and end with a random male name, e.g., Ofpeter.",
        "source": "codementor.io"
    },
    {
        "name": "Pixel art generator",
        "description": "Build a tool that takes an image as input and samples the image to produce pixel art as output. If you want to improve your front-end skills, generate the resulting pixel art using CSS.",
        "source": "codementor.io"
    },
    {
        "name": "Build Your Own Calculator",
        "description": "Inputs are absolutely vital to learn as a programmer. Creating a calculator allows users to perform simple tasks using simple operations like multiplication and division.",
        "source": "makeuseof.com"
    },
    {
        "name": "Create a To-Do List App",
        "description": "Building a to-do list app is how you know you’ve gotten somewhere. It involves most of what you would need to create a simple UI: buttons, animation, user interaction, and events.",
        "source": "makeuseof.com"
    }
]
`

const projects = JSON.parse(projectsJSON);

const projectName = document.querySelector("#random-project-name");
const projectDescription = document.querySelector("#random-project-description");
const projectSource = document.querySelector("#random-project-source");
const generateButton = document.querySelector("#generate-button");
let currentProject;

function init() {
    setNewProject();
}

function setNewProject() {
    if (projects.length == 0) {
        projectName.textContent = "No Projects Found"
        return;
    }

    let newProject;

    if (isVariableDefined(currentProject)) {
        newProject = currentProject;

        while (newProject.name === currentProject.name) {
            newProject = getRandomProject();
        }
    } else {
        newProject = getRandomProject();
    }

    currentProject = newProject;
    
    projectName.textContent = currentProject.name;
    projectDescription.textContent = currentProject.description;
    projectSource.textContent = currentProject.source;

    return currentProject;
}

function getRandomProject() {
    return projects[Math.floor(Math.random() * projects.length)];
}

function isVariableDefined(variable) {
    return typeof variable !== 'undefined';
}

generateButton.addEventListener("click", setNewProject);
init();