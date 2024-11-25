# Custom React Hooks

This repository contains a collection of custom React hooks designed to solve common challenges in React applications. Each hook is encapsulated in its folder with supporting documentation and implementation.

## Table of Contents

- [DataApiFetchingHook](#dataapifetchinghook)
- [DebouncedEffectHook](#debouncedeffecthook)
- [EventListenerHook](#eventlistenerhook)
- [useMemoHook](#usememohook)
- [useOnlineHook](#useonlinehook)
- [useStateHook](#usestatehook)

---

### DataApiFetchingHook

**Purpose:**  
Simplifies the process of fetching data from APIs while managing the states for loading, success, and errors.

**Features:**

- Tracks the loading state.
- Handles errors gracefully.
- Provides the fetched data.

---

### DebouncedEffectHook

**Purpose:**  
Delays the execution of a function or side effect for a specified duration to enhance performance, particularly in scenarios like search input or resize events.

**Features:**

- Helps reduce unnecessary re-renders.
- Provides a debounce effect to optimize performance.

---

### EventListenerHook

**Purpose:**  
Provides an easy way to add and manage event listeners in React components, ensuring proper cleanup.

**Features:**

- Attaches and removes event listeners seamlessly.
- Supports custom events and standard DOM events.

---

### useMemoHook

**Purpose:**  
Demonstrates memoization of computed values to avoid redundant calculations during renders.

**Features:**

- Improves performance by caching expensive computations.
- Works efficiently with dependencies to recalculate only when necessary.

---

### useOnlineHook

**Purpose:**  
Monitors the user's online/offline status and provides real-time updates about connectivity.

**Features:**

- Detects and tracks network connectivity changes.
- Useful for apps that require offline support or notifications.

---

### useStateHook

**Purpose:**  
Demonstrates state management using React’s `useState`, offering reusable patterns.

**Features:**

- Provides a foundational hook for managing component states.
- Can be customized to include additional state logic.

---

## Contributing

We welcome contributions! You can add new hooks, optimize existing ones, or update documentation. To contribute, please fork this repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if this works or if you’d like additional modifications!
