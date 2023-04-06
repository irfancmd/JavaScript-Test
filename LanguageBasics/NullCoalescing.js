function foo (firstName, lastName) {
    // if lastname is null, undefined or any falsely value, the default will be used
    lastName = lastName || "Smith";
    console.log(`${firstName} ${lastName}`);
}

foo("Jack", null);

// But what if we want to pass empty string as lastName?
foo("Jack", ""); // Since empty string is falsely, the || operator uses "Smith" which is not what we want

// To avoid this kind of situation, we can use the Null Coalescing Operator '??' instead or logical or '||'
function fooImproved(firstName, lastName) {
    // This will only go to else for null or undefined. Not any other falsely value like 0 or ""
    lastName = lastName ?? "Smith";
    console.log(`${firstName} ${lastName}`);
}

// This will print Jack Smith as usual
fooImproved("Jack", null);

// But this will only print Jack as we wanted
fooImproved("Jack", "");
