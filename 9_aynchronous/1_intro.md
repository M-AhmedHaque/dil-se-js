
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
