Create React App. The official documentation is available here.

Install & set up a Create React App by following the steps below:

Open your terminal and cd to where you keep your projects
In your terminal, run (this may take several minutes to complete):
npx create-react-app pokedex
(Note: for the React module lessons, you should name your app pokedex, but if you are creating another app, you can name it whatever you like.)

Then run:
cd pokedex
Open the pokedex folder in your editor. Notice that create-react-app has created a bunch of folders for you. It has even made a new git repo in the folder and committed the files for you.
Starting the app
To start running your application follow the steps below:

Open your terminal and cd to the pokedex folder we created previously
In your terminal, run:
npm start

Stopping the app
You might notice that once you have run npm start your terminal will look different. This is because it is running the watcher program. If you have a slower computer we recommend that you stop the program when you are not using your React app.

To stop the program, open your terminal and press Ctrl-C (it's the same on Windows, Mac & Linux). Unfortunately, closing your terminal will not stop the program from running.

Once you have stopped running the program, your React app will stop working. To start it again, see the instructions above for starting your app.

Installing stop-runaway-react-effects
We also need to install another package that will help us later in the React module.

To install it, follow these steps:

Ensure that the React app is not running, by following the instructions above
Open your terminal and ensure that you are within the pokedex folder
Then run in your terminal: npm install stop-runaway-react-effects
Once this has this finished, open the src/index.js file in your editor. Don't worry about understanding the code in this file, we'll learn about it later.
Add an extra line at the top of the file with this code: import 'stop-runaway-react-effects/hijack';. If it is not on line 1 of the file, it will not work
Start the app again (by following the instructions above) to check that it still works
Bonus
You're done! You don't have to read more - you can now develop React apps, locally.

But what about deployment?

Deployment with Netlify
If you have already learned to deploy your apps from github using Netlify, you can use the same process to deploy any React apps you created initially with create-react-app.

You may notice that Netlify automatically sets the following two config settings:

Build command: npm run build
Publish directory: build/
These are correct and necessary - don't change them.

(You should expect deployment of your react apps to be slower than your old "vanilla JS" apps, due to the build process that takes place.)

https://docs.codeyourfuture.io/students/guides/creating-a-react-app#creating-a-react-app

