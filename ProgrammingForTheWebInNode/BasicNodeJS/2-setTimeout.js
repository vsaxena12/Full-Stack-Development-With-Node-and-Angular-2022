// Global - No Windows

// _dirname - path to current directory
// _filename - path to current filename
// require - function to use modules
// modules - info about current module
// process - info about env where the program is being executed

console.log("Directory name - ", __dirname);

setTimeout(() => {
    console.log("file path name - " ,__filename)
}, 5000)

setInterval(() => {
    console.log("Hello World")
}, 1000)




