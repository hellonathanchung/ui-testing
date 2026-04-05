import type { Question } from '../types'

export const questions: Question[] = [
  // ─── EASY (Warm-ups) ───────────────────────────────────────────────

  {
    id: 'counter',
    title: 'Counter with History',
    difficulty: 'Easy',
    timeLimit: 15,
    focusAreas: ['useState', 'event handling', 'list rendering'],
    prompt:
      'Build a counter component that tracks and displays its history of values. Include increment, decrement, and reset buttons. Show the history as a list below the counter.',
    requirements: [
      'Display the current count prominently',
      'Increment and decrement buttons that update by 1',
      'Reset button that sets count back to 0',
      'History list showing every value the counter has been (including initial 0)',
      'An "Undo" button that reverts to the previous value and removes the last history entry',
    ],
    hints: [
      'Use a single useState for the history array — the current count is always the last element',
      'Undo is just popping the last entry off the history array',
    ],
    evaluationCriteria: [
      'Derived current value from history array (not separate state)',
      'Immutable array updates (spread or slice, not push/pop)',
      'Undo button disabled when history has only one entry',
      'Clean, readable component structure',
    ],
  },

  {
    id: 'toggle-group',
    title: 'Toggle Button Group',
    difficulty: 'Easy',
    timeLimit: 15,
    focusAreas: ['useState', 'conditional styling', 'props'],
    prompt:
      'Build a toggle button group component where exactly one button is active at a time. Clicking a button makes it active and deactivates the others. Style the active button differently.',
    requirements: [
      'Render a row of buttons from an array of labels: ["All", "Active", "Completed"]',
      'Clicking a button selects it (highlight it visually)',
      'Only one button can be active at a time',
      'Display the currently selected label below the buttons',
      'Make the component reusable — accept labels as a prop',
    ],
    hints: [
      'Store only the index or label of the active item, not a boolean per button',
      'Use a CSS class toggle for the active style',
    ],
    evaluationCriteria: [
      'Single source of truth for active state',
      'Reusable component accepting dynamic labels',
      'Proper use of key prop when mapping buttons',
      'Clean conditional className application',
    ],
  },

  {
    id: 'character-counter',
    title: 'Character Counter Textarea',
    difficulty: 'Easy',
    timeLimit: 15,
    focusAreas: ['controlled inputs', 'derived state', 'conditional rendering'],
    prompt:
      'Build a textarea with a live character counter that shows remaining characters. The counter should change color as it approaches the limit and prevent typing past the max.',
    requirements: [
      'Textarea with a 280-character limit (like a tweet)',
      'Display "[count] / 280" below the textarea, updating in real time',
      'Counter text turns orange when 20 or fewer characters remain',
      'Counter text turns red when 0 characters remain',
      'Textarea should not accept input beyond 280 characters',
      'A "Clear" button that resets the textarea',
    ],
    hints: [
      'Use maxLength attribute on the textarea OR slice the value in the onChange handler',
      'Remaining characters is derived — no need for separate state',
    ],
    evaluationCriteria: [
      'Controlled textarea with single useState',
      'Derived remaining count (not stored in state)',
      'Correct color thresholds using conditional className or inline style',
      'maxLength enforcement',
    ],
  },

  {
    id: 'user-card',
    title: 'User Profile Card',
    difficulty: 'Easy',
    timeLimit: 15,
    focusAreas: ['props', 'component composition', 'conditional rendering'],
    prompt:
      'Build a user profile card component that displays user info and handles missing/optional data gracefully. Compose it from smaller sub-components.',
    requirements: [
      'Accept a user object prop with: name (required), avatar URL (optional), bio (optional), role (optional), isOnline (boolean)',
      'Show a placeholder avatar when no URL is provided',
      'Show "No bio provided" in italic when bio is missing',
      'Display a green/gray status dot for online/offline',
      'Show a role badge if role is provided',
      'Compose using at least 2 sub-components (e.g., Avatar, StatusBadge)',
    ],
    hints: [
      'Use defaultProps or default parameter values for optional fields',
      'A simple colored circle div works for the status dot — no need for icons',
    ],
    evaluationCriteria: [
      'Clean TypeScript interface for user prop',
      'Graceful handling of all optional fields',
      'Meaningful component decomposition (not just one big component)',
      'Semantic HTML (heading for name, etc.)',
    ],
  },

  {
    id: 'light-switch',
    title: 'Traffic Light Simulator',
    difficulty: 'Easy',
    timeLimit: 20,
    focusAreas: ['useState', 'useEffect', 'intervals', 'cleanup'],
    prompt:
      'Build a traffic light that automatically cycles through red, yellow, and green on a timer. Include a manual override to pause/resume and step through lights.',
    requirements: [
      'Display three circles vertically (red, yellow, green) — only the active one is "lit"',
      'Auto-cycle: Red (4s) → Green (4s) → Yellow (2s) → Red…',
      'A "Pause / Resume" toggle button that stops and restarts the auto-cycle',
      'When paused, show "Next" button to manually advance to the next light',
      'Display which light is currently active as text below',
    ],
    hints: [
      'Use useEffect with setInterval for the auto-cycle — return a cleanup function',
      'Store the current light as a string or index in state',
      'The interval should only run when not paused',
    ],
    evaluationCriteria: [
      'Proper useEffect cleanup of interval (no memory leaks)',
      'Interval only active when not paused (conditional effect)',
      'Correct timing for each light',
      'Clean state transitions (no impossible states)',
    ],
  },

  // ─── MEDIUM ────────────────────────────────────────────────────────

  {
    id: 'todo-list',
    title: 'Interactive Todo List',
    difficulty: 'Medium',
    timeLimit: 30,
    focusAreas: ['useState', 'controlled inputs', 'list rendering', 'keys'],
    prompt:
      'Build a todo application with add, complete, delete, and filter functionality. Show a count of remaining items.',
    requirements: [
      'Text input + "Add" button to create new todos',
      'Each todo has a checkbox to toggle completion and a delete button',
      'Filter tabs: All / Active / Completed',
      'Display count of remaining (incomplete) todos',
      'Pressing Enter in the input should also add the todo',
      'Empty input should not create a todo',
    ],
    hints: [
      'Use a unique ID for each todo — crypto.randomUUID() or a counter',
      'The filtered list is derived state — compute it from the full list + active filter, don\'t store it separately',
      'Toggling completion is an immutable map() that flips the matching todo\'s completed field',
    ],
    evaluationCriteria: [
      'Proper key usage (stable, unique IDs — not array index)',
      'Immutable state updates (map/filter, not splice/push)',
      'Filter as derived state (not stored separately)',
      'Clean component separation (TodoItem extracted)',
      'Edge cases: empty input, all completed, no results for filter',
    ],
  },

  {
    id: 'data-table',
    title: 'Searchable, Sortable Data Table',
    difficulty: 'Medium',
    timeLimit: 30,
    focusAreas: ['filtering', 'sorting', 'derived state', 'performance'],
    prompt:
      'Given a mock dataset of 20 users, build a table with text search across all fields and column-header click to sort (ascending/descending toggle). Highlight matching text and show result count.',
    requirements: [
      'Hardcode 20 user objects with: name, email, role, joinDate',
      'Search input that filters across all fields (case-insensitive)',
      'Clicking a column header sorts by that column',
      'Clicking the same header again toggles ascending/descending',
      'Show a sort direction indicator (▲/▼) on the active column',
      'Display "Showing X of 20 results"',
      'Highlight matching substring in results',
    ],
    hints: [
      'Filter first, then sort — both are derived from the original data + search term + sort config',
      'useMemo is appropriate here since filter + sort over 20 items runs on every keystroke',
      'For highlighting, split the cell text around the match and wrap the match in a <mark> tag',
    ],
    evaluationCriteria: [
      'Derived state: filtered + sorted list computed, not stored in state',
      'useMemo for the expensive filter+sort computation',
      'Stable sort (items with equal values maintain relative order)',
      'Clean separation: table component vs. data logic',
      'Accessible table markup (<table>, <thead>, <th scope="col">)',
    ],
  },

  {
    id: 'shopping-cart',
    title: 'Shopping Cart with useReducer',
    difficulty: 'Medium',
    timeLimit: 35,
    focusAreas: ['useReducer', 'component composition', 'derived state'],
    prompt:
      'Build a product catalog with Add to Cart buttons and a cart sidebar showing items with quantity controls. Display subtotal, tax, and total.',
    requirements: [
      'Display 6-8 hardcoded products with name, price, and image placeholder',
      '"Add to Cart" button on each product',
      'Cart sidebar showing added items with quantity +/- controls and a remove button',
      'Quantity bounded between 1 and 10 (disable buttons at bounds)',
      'Display subtotal, tax (8%), and total',
      'Show cart item count in a badge',
      'Empty cart state with a message',
    ],
    hints: [
      'useReducer is ideal here — actions: ADD_ITEM, REMOVE_ITEM, INCREMENT, DECREMENT',
      'TypeScript discriminated unions for action types give you exhaustive checking',
      'Subtotal, tax, and total are derived from cart state — never store them',
    ],
    evaluationCriteria: [
      'Well-structured reducer with clear action types',
      'TypeScript discriminated union for actions',
      'Derived totals (subtotal, tax, total computed — not in state)',
      'Component decomposition: ProductCard, CartItem, CartSummary',
      'Boundary enforcement on quantity (1–10)',
    ],
  },

  {
    id: 'accessible-modal',
    title: 'Accessible Modal Dialog',
    difficulty: 'Medium',
    timeLimit: 30,
    focusAreas: ['accessibility', 'portals', 'focus management', 'keyboard handling'],
    prompt:
      'Build a reusable Modal component with focus trapping, keyboard handling, and proper ARIA attributes. Demo it with a confirmation dialog.',
    requirements: [
      'Modal renders via createPortal to document.body',
      'Focus trap: Tab and Shift+Tab cycle within the modal',
      'Escape key closes the modal',
      'Clicking the backdrop (outside modal content) closes it',
      'Body scroll is locked while modal is open',
      'Proper ARIA: role="dialog", aria-modal="true", aria-labelledby',
      'Focus moves to the modal on open, returns to trigger on close',
      'Demo: a button that opens a confirmation dialog with "Confirm" and "Cancel" buttons',
    ],
    hints: [
      'Query all focusable elements inside the modal with a selector like \'a, button, input, [tabindex]\'',
      'On Tab at the last element, move focus to the first; on Shift+Tab at the first, move to the last',
      'Use useRef to store the previously focused element so you can restore it on close',
      'document.body.style.overflow = "hidden" for scroll lock — restore in cleanup',
    ],
    evaluationCriteria: [
      'createPortal usage for rendering outside the component tree',
      'useRef for tracking focus and the previously active element',
      'useEffect for keydown listeners and scroll lock (with proper cleanup)',
      'Correct ARIA attributes (role, aria-modal, aria-labelledby)',
      'Focus restoration on close',
    ],
  },

  {
    id: 'dependent-dropdowns',
    title: 'Dependent Dropdowns (Country/State/City)',
    difficulty: 'Medium',
    timeLimit: 30,
    focusAreas: ['useEffect', 'dependent state', 'async simulation'],
    prompt:
      'Build a form with three cascading dropdown selects: Country → State → City. Each selection triggers a simulated API call to load the next level\'s options.',
    requirements: [
      'Three <select> dropdowns: Country, State, City',
      'Selecting a country triggers a simulated fetch (setTimeout 500ms) to load its states',
      'Selecting a state triggers a simulated fetch to load its cities',
      'Show a "Loading..." option while fetching',
      'State dropdown is disabled until a country is selected (same pattern for city)',
      'Changing country resets state and city selections and options',
      'Changing state resets city selection and options',
      'Display the full selection as a summary below the form',
    ],
    hints: [
      'Create a mock data structure: { "USA": { "California": ["LA", "SF"], ... }, ... }',
      'useEffect with the selected country as a dependency to trigger the state fetch',
      'Return a cleanup function from useEffect to cancel stale fetches (clear the timeout)',
    ],
    evaluationCriteria: [
      'Correct useEffect dependency arrays',
      'Cleanup of pending async operations (clearTimeout in effect cleanup)',
      'Loading state per dropdown level',
      'Proper cascading reset behavior',
      'No stale data displayed after parent changes',
    ],
  },

  {
    id: 'accordion',
    title: 'Independent Accordion Component',
    difficulty: 'Medium',
    timeLimit: 30,
    focusAreas: ['component design', 'state management', 'event handling', 'reusability', 'accessibility'],
    prompt:
      'Build a fully reusable <Accordion /> component that displays a list of collapsible sections. Each section has a title and content. Clicking a section title toggles its visibility. This is structured as 4 progressive exercises.',
    requirements: [
      'Exercise 1 — Core: Accept items prop (Array<{ title: string, content: ReactNode }>), defaultIndex prop (optional, initially open section), onChange callback (called with index or null)',
      'Exercise 1 — Only one section open at a time by default. Clicking an open section closes it',
      'Exercise 1 — Component manages its own internal state. Each title is clickable to reveal content below',
      'Exercise 2 — Keyboard accessibility: Arrow Down moves to next section header, Arrow Up moves to previous, Enter/Space toggles the focused section',
      'Exercise 3 — Add allowMultiple?: boolean prop. When true, multiple sections can be open simultaneously. When false, only one at a time',
      'Exercise 4 — Visual polish: smooth open/close animation, hover states on headers, focus ring for accessibility',
    ],
    hints: [
      'For single mode, store openIndex as number | null. For multi mode, store a Set<number>',
      'Use CSS grid-template-rows: 0fr → 1fr for smooth animation without JS height calculations',
      'Use useRef array for header buttons to manage Arrow key focus movement',
      'The onChange callback should fire with the index when opening, null when closing',
    ],
    evaluationCriteria: [
      'Clean component API: items, defaultIndex, onChange, allowMultiple props',
      'Internal state management — works without any external state',
      'Keyboard navigation per WAI-ARIA accordion pattern',
      'CSS-only animation (no JavaScript height measurement)',
      'Proper ARIA: aria-expanded, aria-controls on headers, role attributes',
      'Reusability: component works with any content, not hardcoded to specific data',
    ],
  },

  // ─── HARD ──────────────────────────────────────────────────────────

  {
    id: 'multi-step-form',
    title: 'Multi-Step Form with Validation',
    difficulty: 'Hard',
    timeLimit: 40,
    focusAreas: ['forms', 'validation', 'conditional rendering', 'component composition'],
    prompt:
      'Build a 3-step form wizard with per-step validation, navigation, and a review step. Steps: Personal Info → Address → Review & Submit.',
    requirements: [
      'Step 1 — Personal Info: name (required, min 2 chars), email (required, valid format), phone (optional, digits only if provided)',
      'Step 2 — Address: street (required), city (required), state (required, dropdown), zip (required, 5 digits)',
      'Step 3 — Review: display all entered data, "Edit" links that jump back to the relevant step',
      'Next button validates current step before advancing',
      'Back button navigates without losing data',
      'Step indicator showing current position (e.g., "Step 2 of 3")',
      'Submit on step 3 shows a success confirmation',
      'Inline validation errors below each field',
    ],
    hints: [
      'Store all form data in a single object at the parent level, not per-step',
      'Validation can be a function per step that returns an errors object keyed by field name',
      'On "Next", run the validator — if errors object is empty, advance; otherwise set errors in state',
    ],
    evaluationCriteria: [
      'Controlled inputs with centralized form state',
      'Per-step validation logic, clean error display',
      'Step navigation without data loss',
      'Accessible error messages (aria-describedby linking input to error)',
      'Component decomposition: StepIndicator, each step as its own component',
    ],
  },

  {
    id: 'async-search',
    title: 'Async User Search with Debounce',
    difficulty: 'Hard',
    timeLimit: 40,
    focusAreas: ['useEffect', 'data fetching', 'custom hooks', 'cleanup', 'race conditions'],
    prompt:
      'Build a search input that queries an API with debouncing. Handle loading, error, empty states, and race conditions from out-of-order responses.',
    requirements: [
      'Search input that queries JSONPlaceholder /users endpoint',
      '300ms debounce — don\'t fetch on every keystroke',
      'Loading spinner while request is in flight',
      'Display results as a list of user cards (name, email, company)',
      'Empty state: "No users found" when query returns no results',
      'Error state with a "Retry" button',
      'Handle race conditions: if a newer request is in flight, discard the older response',
      'Clear results when input is emptied',
    ],
    hints: [
      'Extract a useDebounce(value, delay) custom hook that returns the debounced value',
      'Use AbortController in the useEffect that fetches — abort in the cleanup function',
      'AbortController handles both cleanup on unmount AND race condition prevention',
    ],
    evaluationCriteria: [
      'Custom useDebounce hook properly extracted and reusable',
      'useEffect cleanup with AbortController (not a boolean flag)',
      'All 4 UI states handled: loading, results, empty, error',
      'No state updates after unmount or after stale response',
      'Clean separation: hook for data fetching, component for UI',
    ],
  },

  {
    id: 'infinite-scroll',
    title: 'Infinite Scroll Post Feed',
    difficulty: 'Hard',
    timeLimit: 40,
    focusAreas: ['Intersection Observer', 'pagination', 'custom hooks', 'performance'],
    prompt:
      'Build a post feed that loads pages of data as the user scrolls. Use Intersection Observer on a sentinel element at the bottom of the list.',
    requirements: [
      'Fetch posts from JSONPlaceholder /posts?_page=N&_limit=10',
      'Initial load: first 10 posts',
      'When user scrolls to the bottom sentinel element, load the next page',
      'Append new posts to existing list (don\'t replace)',
      'Loading indicator at the bottom while fetching',
      '"No more posts" message when all pages are loaded (JSONPlaceholder has 100 posts = 10 pages)',
      'Error state with "Retry" button that re-attempts the failed page',
      'Prevent duplicate fetches (don\'t re-fetch while one is in flight)',
    ],
    hints: [
      'Create a useIntersectionObserver hook or a useInfiniteScroll hook',
      'Use useRef for the sentinel element and pass it to IntersectionObserver',
      'useCallback for the ref callback to handle re-attachment when the sentinel re-renders',
      'Track page number, hasMore, isLoading, and error in state (or a reducer)',
    ],
    evaluationCriteria: [
      'Custom hook for intersection observation',
      'Proper observer cleanup (disconnect) in useEffect',
      'Prevention of duplicate fetches (guard with isLoading check)',
      'Append behavior (not replace) for paginated data',
      'useCallback for stable observer/ref callbacks',
      'All states: loading, loaded, no more, error',
    ],
  },

  {
    id: 'theme-context',
    title: 'Theme & Preferences Context',
    difficulty: 'Hard',
    timeLimit: 35,
    focusAreas: ['Context API', 'localStorage', 'TypeScript', 'media queries'],
    prompt:
      'Build a theme system using Context with light/dark/system modes, font size preference, localStorage persistence, and system theme detection.',
    requirements: [
      'ThemeProvider context with three modes: light, dark, system',
      '"System" mode syncs with the OS prefers-color-scheme media query',
      'Font size preference: small, medium, large',
      'Both preferences persist to localStorage and restore on page load',
      'Settings panel with radio buttons or toggle for theme and font size',
      'A preview card that responds to all preference changes in real time',
      'Apply theme via CSS custom properties or data attributes on the root element',
      'TypeScript types for context value and provider props',
    ],
    hints: [
      'window.matchMedia("(prefers-color-scheme: dark)") returns a MediaQueryList — listen to its "change" event',
      'The resolved theme (what actually applies) differs from the selected theme when "system" is chosen',
      'Use useEffect to sync to localStorage whenever preferences change',
      'Set a data-theme attribute on document.documentElement so CSS can target [data-theme="dark"]',
    ],
    evaluationCriteria: [
      'Context + provider pattern with typed context value',
      'useEffect for localStorage sync and matchMedia listener',
      'Proper matchMedia cleanup (removeEventListener)',
      'Distinction between "selected theme" and "resolved theme"',
      'TypeScript types for context, avoiding `as` casts',
      'No unnecessary re-renders (stable context value via useMemo)',
    ],
  },

  // ─── MICROSOFT AI FOCUS ─────────────────────────────────────────────

  {
    id: 'chat-interface',
    title: 'AI Chat Interface (Copilot-Style)',
    difficulty: 'Hard',
    timeLimit: 45,
    focusAreas: ['streaming UI', 'useReducer', 'async iteration', 'component composition'],
    prompt:
      'Build a Copilot-style chat interface with a message input, conversation history, and simulated streaming responses. This mirrors what Microsoft AI teams build daily.',
    requirements: [
      'Message input with send button (Enter to send, Shift+Enter for newline)',
      'Conversation history showing user messages and AI responses with distinct styling',
      'Simulated streaming: AI responses appear token-by-token (use a mock generator that yields words with delays)',
      'Auto-scroll to latest message as new content streams in',
      'Loading indicator while AI is "thinking" before streaming starts',
      'Disable input while AI response is streaming',
      'A "Stop generating" button that cancels the current stream',
      '"Copy" button on each AI response',
      'Markdown-like formatting: render **bold** and `code` in AI responses',
    ],
    hints: [
      'Use an async generator function to simulate streaming: async function* streamResponse(prompt) { for (const word of words) { yield word; await delay(50); } }',
      'useReducer is cleaner than useState here — actions: SEND_MESSAGE, STREAM_TOKEN, STREAM_COMPLETE, CANCEL_STREAM',
      'Use useRef + scrollIntoView for auto-scroll. Use AbortController to cancel the stream',
      'A simple regex replace can handle **bold** → <strong> and `code` → <code>',
    ],
    evaluationCriteria: [
      'Async generator or similar pattern for simulated streaming',
      'useReducer with clear actions for conversation state machine',
      'Proper cancellation of in-flight stream (AbortController or flag)',
      'Auto-scroll behavior (smooth, only when at bottom)',
      'Accessible: keyboard-navigable, proper ARIA roles for chat log',
      'Clean component split: ChatMessage, ChatInput, ChatHistory',
    ],
  },

  {
    id: 'prompt-builder',
    title: 'AI Prompt Template Builder',
    difficulty: 'Medium',
    timeLimit: 35,
    focusAreas: ['dynamic forms', 'template literals', 'state management'],
    prompt:
      'Build a prompt template builder where users create reusable prompt templates with variable placeholders, fill them in, and preview the final prompt. Relevant to Microsoft Copilot Studio and Azure AI prompt engineering.',
    requirements: [
      'Template editor: textarea where users type prompts with {{variable}} placeholders',
      'Auto-detect variables from the template text (parse {{variableName}} patterns)',
      'Dynamic form: render an input field for each detected variable',
      'Live preview: show the template with variables replaced by their values in real time',
      'Variable validation: highlight unfilled variables in red in the preview',
      'Save/load templates from a list (in-memory, no persistence needed)',
      'Character count for the final rendered prompt',
      '"Copy to clipboard" button for the final prompt',
    ],
    hints: [
      'Use a regex like /\\{\\{(\\w+)\\}\\}/g to extract variable names from the template',
      'Derive the variable list from the template text — don\'t store it separately',
      'Store variable values in an object keyed by variable name: { [varName]: string }',
      'For the preview, use replace() with the variable values object',
    ],
    evaluationCriteria: [
      'Regex-based variable extraction (derived, not manual)',
      'Dynamic form generation from detected variables',
      'Real-time preview with template interpolation',
      'Clean state management: template text + variable values only',
      'Edge cases: duplicate variables, empty variables, no variables',
      'Clipboard API usage for copy',
    ],
  },

  {
    id: 'feedback-widget',
    title: 'AI Response Feedback Widget',
    difficulty: 'Medium',
    timeLimit: 30,
    focusAreas: ['component design', 'forms', 'state machines', 'animation'],
    prompt:
      'Build a thumbs up/down feedback widget like the ones on Copilot and Bing Chat AI responses. This is a core UX pattern across all Microsoft AI products for RLHF data collection.',
    requirements: [
      'Thumbs up and thumbs down buttons on an AI response card',
      'Clicking thumbs down expands a feedback form with: category checkboxes (Inaccurate, Incomplete, Harmful, Not helpful, Other) and an optional text area for details',
      'Clicking thumbs up shows a brief "Thanks for the feedback!" animation then collapses',
      'Submit button on the negative feedback form (simulated API call)',
      'After submitting, show "Feedback submitted" confirmation and collapse the form',
      'Only one feedback state per response: none → positive OR none → negative → submitted',
      'Undo: allow changing feedback within 5 seconds (shows "Undo" link)',
      'Animate transitions between states (fade/slide)',
    ],
    hints: [
      'This is a state machine: idle → positive | negative-form → submitted. Consider useReducer or explicit state tracking',
      'The undo timer is a useEffect with setTimeout — clean it up if the component unmounts',
      'Use CSS transitions with conditional classes for fade/slide animations',
    ],
    evaluationCriteria: [
      'Clean state machine (no impossible states)',
      'Proper timer cleanup for the undo window',
      'Accessible: buttons labeled, form fields labeled, focus management',
      'Smooth transitions between feedback states',
      'Component reusable: accepts onSubmitFeedback callback, response ID',
      'TypeScript: feedback state as a discriminated union type',
    ],
  },
]
