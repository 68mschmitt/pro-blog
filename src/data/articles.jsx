export const articles = [
  {
    id: 1,
    title: "How TCP/IP Actually Works (Deep Dive)",
    date: "2025-06-05",
    summary:
      "A hands-on, modern explanation of how packets travel from your machine to the web, including the history, OS internals, and a practical C example.",
    content: (
      <>
        <p>
          <strong>Overview:</strong>  
          This article explores the journey of a data packet, from your application to the physical network interface. You'll learn about OS-level APIs, protocol stack design, the history behind TCP/IP, and how to implement a simple echo server in C.
        </p>
        <h3>Topics:</h3>
        <ul>
          <li>What are packets?</li>
          <li>How does TCP manage reliability?</li>
          <li>Coding a basic TCP server (C example)</li>
        </ul>
        <p>
          <em>
            (Article body continues... See <code>articles.js</code> to expand this article!)
          </em>
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Inside Modern React: Patterns and Hooks",
    date: "2025-05-20",
    summary:
      "Demystifying React’s component architecture and hooks—composition, render props, and why context is a game-changer.",
    content: (
      <>
        <p>
          <strong>Summary:</strong>  
          This guide shows how modern React leverages composition and hooks for scalable, maintainable codebases.
        </p>
        <h3>Featured Patterns:</h3>
        <ul>
          <li>Render Props & Compound Components</li>
          <li>Custom Hooks for Animation</li>
          <li>Theme context in action</li>
        </ul>
        <p>
          <em>
            (More content here. Add/expand articles via <code>articles.js</code>!)
          </em>
        </p>
      </>
    ),
  },
];
