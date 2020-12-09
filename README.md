# PROJECT ASSIGNMENT:

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) You Do: React Calculator

Now, it's time for you to check back on everything! You will be building a
calculator with React, and only minimal instructions have been provided for you to really think about what's happening.

At first, your calculator will just add 2 numbers
together when they are typed in. For the bonus, you might decide to get more
creative.

### Set Up

Like usual, use `create-react-app` to make a new project.

### Step 1

Start by creating a single component file in the `src` directory, and name it
`Calculator.js`. In this file, create your `Calculator` class. Use the `App.js`
as an example of how to create a basic component. Add the following JSX to your Calculator's
`render()` function:

```html
<div className="container">
    <h1>Add with React!</h1>

    <div className="add">
        <input type="text" />
        <span>+</span>
        <input type="text" />
        <button>=</button>
        <h3>Addition results go here!</h3>
    </div>
</div>
```

### Step 2

Set up the initial state of your component. What state attributes will you
need to track? What values should those state items start with? Where is that
state displayed in the browser?

> Hint: You will only need one state. That one state can hold as many key-value pairs as you need!

### Step 3

You will want to trigger a function when the values in your textboxes change. You can capture these values by setting a function on the onChange property. Let's say I have a textbox tracking my first number.

```
<input type="number"
  name="num1"
  placeholder="Enter your first number"
  value={this.state.num1}
  onChange={ (e) => this.setNum(e, 'num1') }
/>
```

I want to store this number as part of my state. Let's say I decided to call it `num1`. I could set my state like so:

```
setNum = (e, num) => {
  this.setState({ [num]: e.target.value});
}
```

> Hint: The [] are there so we can use a dynamic key value! This value becomes `num1` or `num2` depending on what was clicked and sent to the function from `onChange`.

If you decided to use buttons for your calculator, you probably want to use `onClick` instead of `onChange`, but the concepts are the same! Here is some documentation to help you choose what you want to do and how to do it:

-   [React form documentation](https://facebook.github.io/react/docs/forms.html)
-   [A list of events React supports](https://facebook.github.io/react/docs/events.html#supported-events)

### Step 4

Once you've got your event handlers set up to capture the input, you'll need to create a
method for your submit button. The method should accept the triggered event, get the input values from
your state, add them together, and set part of the state to the new `sum`.

<details>
  <summary>Hint: Where should this method go?</summary>
  <p>In the same component as it's being used - between the constructor and the render.</p>
</details>

> Thought: How will you handle inputs that aren't numbers?

### Step 5

Once the state of the `sum` has been set, React will re-render the whole
component. Make sure you have a place in your JSX that displays the result!

### Bonus

-   Make the calculator work with any of the 4 basic arithmetic operations
    (+, -, \*, /). How will this change your `state` and your JSX?

###

###

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
