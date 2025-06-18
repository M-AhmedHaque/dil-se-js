

/*
Javascript (Default)
  -> seqential
  -> one thread
  which means its slow? Yes, as compared to other new languages
  but it never let you feel it. Because it is used in runtime and no-one used alone javascript engine

--revise execution context, call stack, memory, kesay function ata ha tu alag execution context banta ha

modday ki baat ye ke, we saw how execution context works and code is executed line by line

each operation waits for last one to be completed

----------------------------------------------------------------------------------------------------------

Blocking Code      => refers to code running sequentially, like i say, I am going to bring a glass of water for you, 
                    but meanwhile u cannot do anything, so this is an example of blocking.
                    E.g: file read, when program encounters file reading operation, the flow of program is stopped, 
                    then kernal reads file, after operation is completed then flow of program is resumed.
VS
Non-Blocking Code  => it's like i say, I am going to bring a glass of water for you, 
                    but meanwhile u can do other stuff like playing game, scrolling.


------------------------------------------------------------------------------------------------------------------


So "javascript engine" only has 2 things: 1. Call stack  2. Heap, but we dont use it alone.
look at digram 3.png, we use "environemnt" like nodejs, bunjs or browser
we also have "task queue" and "priority queue or promise queue", this is the thing that actually make JS fast 

when a jS program is executed, call stack is created and head memory is allocated. In the call stack, first global execution context is pushed, then any upcomming fuction call is pushed (wohi kahani execution context is created which has new variable space and execution thread[1. memory phase  2. execution phase])

During execution line by line, if we encouter any api call of setInterval, timeout, setTimeout, then its call is made in register callback.
for e.g: setTimeout(()=>{} , 1000), its call goes in register callback[every like events that would happen sometime are register here], then the callback is added in task queue, and then from task it goes back in call stack for execution

so it also shows asynchrnous execution

talking about fetch api, its new, everything is same, except that it is just high priority and its queue is made separately, it prvides promise that if task is done or not


Talking about environment, it provide web APIs: like DOM apis, setInterval, timeout, fetch(newly added)

*/

/*
JavaScript (by default)
  -> Sequential
  -> Single-threaded (only one call stack)
  -> So, is it slow? Technically yes, **in terms of CPU-intensive tasks**, compared to multi-threaded languages (like Go or Java).
     But it doesn't **feel** slow because JS is designed for **non-blocking**, async behavior — especially in environments like browsers and Node.js.

👉 REVISE: Execution Context, Call Stack, and Memory Heap.
   - When a function is called, a new Execution Context is created.
   - Each context has:
     1. Memory (Variable Environment)
     2. Execution Thread (line-by-line code execution)

👉 Main idea: JS executes line-by-line using a **call stack**, and only one operation can run at a time.
   But asynchronous code helps avoid "waiting" unnecessarily.

---------------------------------------------------------

🔴 Blocking Code:
   - Runs sequentially.
   - Example: "I'm going to get water. Until I come back, you can't do anything."
   - E.g. reading a large file synchronously.
     ```js
     const data = fs.readFileSync('file.txt'); // Blocks everything else
     ```

✅ Non-Blocking Code:
   - "I'm going to get water, but you can keep watching TV."
   - While JS waits for something (like file read or setTimeout), the rest of the code continues executing.
     ```js
     fs.readFile('file.txt', (err, data) => {
       // runs later
     });
     ```

---------------------------------------------------------

🧠 JS Engine only has:
   - Call Stack
   - Memory Heap
But JS is **not used standalone** — it's embedded in environments like:
   - **Browsers**
   - **Node.js**
   - **Bun**

📦 These environments provide:
   - **Web APIs / Node APIs**
   - **Task Queue** (a.k.a. Callback Queue)
   - **Microtask Queue** (Promise Queue)

✅ When a JS program runs:
   - Call stack is created.
   - Heap memory is allocated.
   - First, the **Global Execution Context** is created and pushed onto the stack.
   - Each function call creates a **new execution context** (memory + thread).

🕒 During execution:
   - If we hit something like `setTimeout`, `setInterval`, `fetch`, etc.:
     1. The function is registered in the environment (Web APIs).
     2. The callback is **moved to the Task Queue** (after timer or I/O is done).
     3. When the Call Stack is empty, **Event Loop** pushes the callback from the queue into the stack.

📌 Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout Done");
}, 1000);

console.log("End");

// Output: Start -> End -> Timeout Done

*/