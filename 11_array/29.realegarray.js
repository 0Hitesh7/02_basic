let browser = ["chrome", "firefox", "edge", "safari"];
console.log(browser);
console.log(browser.length);
console.log();

browser.pop();
console.log(browser);
console.log(browser.length);
console.log();

let removed = browser.shift();
console.log(removed);
console.log(browser);
console.log(browser.length);
console.log();

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "edge") {
        console.log("edge is the best browser");
    }
}

