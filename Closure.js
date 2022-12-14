// In Javascript, it's allowed to put a function inside another function
// In that case even if the top-level function returns, it's scope is not
// destroyed as the inner function may need it. This behaviour is called
// closure. Closure can be used to hide a variable instead of exposing it
// globally. It's almost like making it private

// Here, we could've make the count variable global but expoing that would
// make our app vulnerable. So, putting it inside a closure is
// a better approach
function counter(){
    let count = 0;

    return function () {
	return count++;
    }
}


let counter1 = counter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
