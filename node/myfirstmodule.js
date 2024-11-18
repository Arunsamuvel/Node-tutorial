// What is a Module in Node.js?
// Consider modules to be the same as JavaScript libraries.

// A set of functions you want to include in your application.

const sayMyName = (name) => {
  console.log(`hello there ${name}`);
};

// export default
module.exports= sayMyName

// sayMyName("Arun")
