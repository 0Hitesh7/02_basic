let config = {};

config.browser = "chromium";
config.timeout = 5000;
config.testname = "Object Creation Test";

console.log(config.browser);

if (config.browser === "chromium") {
    console.log("Running tests on Chromium");
} else if (config.browser === "firefox") {
    console.log("Running tests on Firefox");
} else if (config.browser === "webkit") {
    console.log("Running tests on WebKit");
} else {
    console.log("Unknown browser specified");
}


// //we can also delete the config object
delete config.browser;
console.log(config); // undefined
