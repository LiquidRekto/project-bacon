# About
### A Test/Quiz Management Software (Codenamed: BACON) for those who wants to review for their upcoming exams, or simply just having fun

![example-bacon](https://user-images.githubusercontent.com/46742676/158029860-676455ff-9e9f-4c9c-aa31-f616c4f49a92.png)

*(The application concept image. May be subjected for further changes.)*

# Building the project

> NOTE: If you don't have [Node.js](https://nodejs.org/) installed, make sure to install it before proceed!

After downloading the project source, go to the project directory and run `npm install` to install all reuqired modules.

**Building the app**

To start building the project, open the Command Prompt then go to the project folder. You can do one of those things:
- Run `npm start` to preview the app
- Run `npm make` to start building the app

The output application (after running `npm make`) will be stored in the `out` folder in the project directory.

**Compiling Tailwind**

When you are working with css files as well as Tailwind classes, make sure to activate the Tailwind CLI. I would adivse you to create a .bat file in the project directory, then put the following command inside:

`npx tailwindcss -i .src/resources/css/src/input.css -o .src/resources/css/dist/output.css --watch`

There you go! Whenever you need to change anything in the source, make sure to execute that .bat file to let the Tailwind CLI do it's job.


# Got any more questions?

Feel free to contact via:

![fb](https://github.com/paulrobertlloyd/socialmediaicons/blob/main/facebook-16x16.png) [Facebook](https://facebook.com/baconmanchaser)




