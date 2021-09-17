// JS in the browser is single threaded and non-blocking
// you cannot stall the thread
// JS memory is divided into 3 parts: stack, head, and queue
// the stack is where functions in execution and their local vars are stored
// the heap stores objects
// the queue is where handler functions go prior to being pushed onto the stack
// the queue is subordinate to the stack

// the handler fn is added to the queue after 3 seconds
// but the thread doesn't block, it carries on executing stack code in the meantime
// the stack must be empty before the queue code is executed
setTimeout(() => console.log("Hello"), 3000);

console.log("How are you?")