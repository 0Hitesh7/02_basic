let bugSeverity = 7;
if (bugSeverity >= 8 && bugSeverity <= 10) {
    console.log("Critical bug");
} else if (bugSeverity >= 6 && bugSeverity < 8) {
    console.log("High severity bug");
} else if (bugSeverity >= 3 && bugSeverity < 6) {
    console.log("Medium severity bug");
} else if (bugSeverity >= 1 && bugSeverity < 3) {
    console.log("Low severity bug");
} else {
    console.log("Invalid severity level");
}