/*
 * tmux quiz question bank.
 * ----------------------------------------------------------------------------
 * Edit this file to add/remove questions. The HTML loads it via <script src>,
 * so changes appear on the next page refresh -- no server needed.
 *
 * Each question object:
 *   level   : "beginner" | "intermediate" | "advanced"
 *   q       : the question text (may contain <kbd>/<code> HTML)
 *   opts    : array of answer strings (2-5 of them)
 *   correct : index into opts of the right answer
 *   why     : explanation shown after answering
 *
 * The prefix key referenced throughout is the default Ctrl+b.
 * Option order is shuffled at runtime, so position does not matter.
 */
window.TMUX_QUESTIONS = [

  /* ===================== BEGINNER ===================== */
  {
    level: "beginner",
    q: "What is the default tmux prefix key?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>a</kbd>", "<kbd>Ctrl</kbd>+<kbd>b</kbd>", "<kbd>Alt</kbd>+<kbd>t</kbd>", "<kbd>Esc</kbd>"],
    correct: 1,
    why: "Every tmux command begins with the prefix, <kbd>Ctrl</kbd>+<kbd>b</kbd> by default. Many users remap it to <kbd>Ctrl</kbd>+<kbd>a</kbd>."
  },
  {
    level: "beginner",
    q: "Which holds the others: session, window, or pane?",
    opts: ["A pane holds windows", "A window holds sessions", "A session holds windows, which hold panes", "They are all the same thing"],
    correct: 2,
    why: "The hierarchy is session &rarr; window &rarr; pane. A session contains windows (like tabs), and each window is divided into panes."
  },
  {
    level: "beginner",
    q: "How do you start a new named session called <code class='cmd'>work</code> from the shell?",
    opts: ["<code class='cmd'>tmux new -s work</code>", "<code class='cmd'>tmux open work</code>", "<code class='cmd'>tmux -w work</code>", "<code class='cmd'>tmux start work</code>"],
    correct: 0,
    why: "<code class='cmd'>tmux new -s work</code> (or <code class='cmd'>tmux new-session -s work</code>) creates a named session you can later re-attach to by name."
  },
  {
    level: "beginner",
    q: "Which key splits the current pane vertically (new pane to the right)?",
    opts: ["<kbd>\"</kbd>", "<kbd>v</kbd>", "<kbd>%</kbd>", "<kbd>s</kbd>"],
    correct: 2,
    why: "<kbd>prefix</kbd> then <kbd>%</kbd> splits vertically. The tall <kbd>%</kbd> is a good reminder of the left/right divider."
  },
  {
    level: "beginner",
    q: "Which key splits the current pane horizontally (new pane below)?",
    opts: ["<kbd>%</kbd>", "<kbd>\"</kbd>", "<kbd>h</kbd>", "<kbd>-</kbd>"],
    correct: 1,
    why: "<kbd>prefix</kbd> then <kbd>\"</kbd> splits horizontally, stacking the new pane below the current one."
  },
  {
    level: "beginner",
    q: "How do you create a brand-new window?",
    opts: ["<kbd>prefix</kbd> then <kbd>c</kbd>", "<kbd>prefix</kbd> then <kbd>n</kbd>", "<kbd>prefix</kbd> then <kbd>w</kbd>", "<kbd>prefix</kbd> then <kbd>%</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>c</kbd> creates a window (c for create). <kbd>n</kbd> moves to the next existing window."
  },
  {
    level: "beginner",
    q: "Which moves you to the next window?",
    opts: ["<kbd>prefix</kbd> then <kbd>p</kbd>", "<kbd>prefix</kbd> then <kbd>n</kbd>", "<kbd>prefix</kbd> then <kbd>c</kbd>", "<kbd>prefix</kbd> then <kbd>x</kbd>"],
    correct: 1,
    why: "<kbd>prefix</kbd> then <kbd>n</kbd> goes to the next window; <kbd>p</kbd> goes to the previous one."
  },
  {
    level: "beginner",
    q: "How do you jump directly to window number 2?",
    opts: ["<kbd>prefix</kbd> then <kbd>2</kbd>", "<kbd>Ctrl</kbd>+<kbd>2</kbd>", "<kbd>prefix</kbd> then <kbd>w</kbd> then <kbd>2</kbd>", "<kbd>Alt</kbd>+<kbd>2</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then a digit <kbd>0</kbd>&ndash;<kbd>9</kbd> jumps straight to that window number."
  },
  {
    level: "beginner",
    q: "You want to leave tmux running in the background and return to your shell. What do you press?",
    opts: ["<kbd>prefix</kbd> then <kbd>d</kbd>", "<kbd>prefix</kbd> then <kbd>x</kbd>", "<code class='cmd'>exit</code>", "<kbd>prefix</kbd> then <kbd>q</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>d</kbd> detaches; the session keeps running and you can re-attach later. <code class='cmd'>exit</code> would kill the shell/pane instead."
  },
  {
    level: "beginner",
    q: "How do you re-attach to a running session named <code class='cmd'>work</code>?",
    opts: ["<code class='cmd'>tmux attach -t work</code>", "<code class='cmd'>tmux open work</code>", "<code class='cmd'>tmux join work</code>", "<code class='cmd'>tmux -a work</code>"],
    correct: 0,
    why: "<code class='cmd'>tmux attach -t work</code> (short: <code class='cmd'>tmux a -t work</code>) reconnects you to that session."
  },
  {
    level: "beginner",
    q: "Which command lists all running tmux sessions?",
    opts: ["<code class='cmd'>tmux ls</code>", "<code class='cmd'>tmux show</code>", "<code class='cmd'>tmux all</code>", "<code class='cmd'>tmux ps</code>"],
    correct: 0,
    why: "<code class='cmd'>tmux ls</code> (or <code class='cmd'>tmux list-sessions</code>) prints every session, its window count, and attach state."
  },
  {
    level: "beginner",
    q: "How do you move focus from the current pane to the one on its right?",
    opts: ["<kbd>prefix</kbd> then <kbd>&rarr;</kbd>", "<kbd>Ctrl</kbd>+<kbd>&rarr;</kbd>", "<kbd>prefix</kbd> then <kbd>l</kbd> twice", "<kbd>Tab</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then an arrow key moves focus in that direction. (With vi keys configured, <kbd>h/j/k/l</kbd> also work.)"
  },
  {
    level: "beginner",
    q: "Which key closes (kills) the current pane?",
    opts: ["<kbd>prefix</kbd> then <kbd>x</kbd>", "<kbd>prefix</kbd> then <kbd>c</kbd>", "<kbd>prefix</kbd> then <kbd>d</kbd>", "<kbd>prefix</kbd> then <kbd>z</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>x</kbd> closes the active pane after a y/n confirmation."
  },
  {
    level: "beginner",
    q: "How do you rename the current window?",
    opts: ["<kbd>prefix</kbd> then <kbd>,</kbd>", "<kbd>prefix</kbd> then <kbd>r</kbd>", "<kbd>prefix</kbd> then <kbd>.</kbd>", "<kbd>prefix</kbd> then <kbd>$</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>,</kbd> renames the current window. (<kbd>prefix</kbd> then <kbd>$</kbd> renames the whole session.)"
  },
  {
    level: "beginner",
    q: "Which key shows a visual, navigable list of all windows?",
    opts: ["<kbd>prefix</kbd> then <kbd>w</kbd>", "<kbd>prefix</kbd> then <kbd>l</kbd>", "<kbd>prefix</kbd> then <kbd>f</kbd>", "<kbd>prefix</kbd> then <kbd>?</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>w</kbd> opens the window/session chooser tree you can scroll and select from."
  },
  {
    level: "beginner",
    q: "What does simply typing <code class='cmd'>tmux</code> with no arguments do?",
    opts: ["Lists sessions", "Starts a new unnamed session (or attaches if one exists, depending on config)", "Prints the version", "Kills the server"],
    correct: 1,
    why: "Bare <code class='cmd'>tmux</code> starts a new session with an auto-assigned number as its name."
  },
  {
    level: "beginner",
    q: "Which key brings up tmux's built-in list of all key bindings?",
    opts: ["<kbd>prefix</kbd> then <kbd>?</kbd>", "<kbd>prefix</kbd> then <kbd>h</kbd>", "<kbd>prefix</kbd> then <kbd>k</kbd>", "<kbd>F1</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>?</kbd> lists every binding. Press <kbd>q</kbd> to exit the list."
  },
  {
    level: "beginner",
    q: "What is a 'pane' in tmux?",
    opts: ["A separate terminal session", "A rectangular split inside a window where you type", "A saved layout file", "A keyboard shortcut group"],
    correct: 1,
    why: "A pane is one of the rectangular regions a window is divided into; each runs its own shell or program."
  },
  {
    level: "beginner",
    q: "Which key switches you back to the previously active window?",
    opts: ["<kbd>prefix</kbd> then <kbd>l</kbd>", "<kbd>prefix</kbd> then <kbd>b</kbd>", "<kbd>prefix</kbd> then <kbd>u</kbd>", "<kbd>prefix</kbd> then <kbd>0</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>l</kbd> (last) toggles between the current and previously used window."
  },
  {
    level: "beginner",
    q: "How do you fully kill a session named <code class='cmd'>work</code> from the shell?",
    opts: ["<code class='cmd'>tmux kill-session -t work</code>", "<code class='cmd'>tmux detach work</code>", "<code class='cmd'>tmux close work</code>", "<code class='cmd'>tmux rm work</code>"],
    correct: 0,
    why: "<code class='cmd'>tmux kill-session -t work</code> terminates that session and everything in it. Detaching keeps it alive instead."
  },
  {
    level: "beginner",
    q: "After a vertical split, both panes share the same...",
    opts: ["Window", "Session only, not window", "Pane", "Keyboard buffer"],
    correct: 0,
    why: "Splitting divides a single window into panes; both panes live in the same window (and the same session)."
  },
  {
    level: "beginner",
    q: "Which is the safest way to step away from work and return later exactly as you left it?",
    opts: ["Detach with <kbd>prefix</kbd> then <kbd>d</kbd>", "Type <code class='cmd'>exit</code> in every pane", "Close the terminal window", "Run <code class='cmd'>tmux kill-server</code>"],
    correct: 0,
    why: "Detaching preserves all windows, panes, and running processes. Re-attach with <code class='cmd'>tmux attach</code> to resume."
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    level: "intermediate",
    q: "How do you toggle the active pane to fullscreen and back?",
    opts: ["<kbd>prefix</kbd> then <kbd>z</kbd>", "<kbd>prefix</kbd> then <kbd>f</kbd>", "<kbd>prefix</kbd> then <kbd>m</kbd>", "<kbd>prefix</kbd> then <kbd>x</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>z</kbd> zooms the pane to fill the window; press again to restore the layout."
  },
  {
    level: "intermediate",
    q: "You split with <kbd>%</kbd> and now want the panes stacked top-to-bottom. What is the quickest built-in way?",
    opts: ["Close and re-split with <kbd>\"</kbd>", "<kbd>prefix</kbd> then <kbd>Space</kbd> to cycle layouts (or <kbd>Alt</kbd>+<kbd>2</kbd>)", "<kbd>prefix</kbd> then <kbd>r</kbd>", "Restart tmux"],
    correct: 1,
    why: "<kbd>prefix</kbd> then <kbd>Space</kbd> cycles the preset layouts; <kbd>prefix</kbd> then <kbd>Alt</kbd>+<kbd>2</kbd> jumps straight to even-vertical (stacked)."
  },
  {
    level: "intermediate",
    q: "Which key cycles through the five preset layouts?",
    opts: ["<kbd>prefix</kbd> then <kbd>Space</kbd>", "<kbd>prefix</kbd> then <kbd>Tab</kbd>", "<kbd>prefix</kbd> then <kbd>L</kbd>", "<kbd>prefix</kbd> then <kbd>=</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>Space</kbd> steps to the next preset: even-horizontal, even-vertical, main-horizontal, main-vertical, tiled."
  },
  {
    level: "intermediate",
    q: "Which preset layout puts every pane side by side in a single row?",
    opts: ["even-horizontal (<kbd>Alt</kbd>+<kbd>1</kbd>)", "even-vertical (<kbd>Alt</kbd>+<kbd>2</kbd>)", "main-vertical (<kbd>Alt</kbd>+<kbd>4</kbd>)", "tiled (<kbd>Alt</kbd>+<kbd>5</kbd>)"],
    correct: 0,
    why: "even-horizontal arranges panes left-to-right in one row. even-vertical stacks them in one column."
  },
  {
    level: "intermediate",
    q: "Which layout gives one large pane on the left and the rest stacked on the right?",
    opts: ["main-vertical (<kbd>Alt</kbd>+<kbd>4</kbd>)", "main-horizontal (<kbd>Alt</kbd>+<kbd>3</kbd>)", "tiled (<kbd>Alt</kbd>+<kbd>5</kbd>)", "even-horizontal (<kbd>Alt</kbd>+<kbd>1</kbd>)"],
    correct: 0,
    why: "main-vertical keeps one big pane on the left; main-horizontal keeps one big pane on top."
  },
  {
    level: "intermediate",
    q: "How do you resize the active pane interactively, one cell at a time?",
    opts: ["<kbd>prefix</kbd> then hold <kbd>Ctrl</kbd>+arrow keys", "<kbd>prefix</kbd> then <kbd>+</kbd>/<kbd>-</kbd>", "<kbd>prefix</kbd> then <kbd>r</kbd>", "Resizing is not supported"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>Ctrl</kbd>+arrow nudges the border one cell; holding <kbd>Alt</kbd>+arrow jumps five cells."
  },
  {
    level: "intermediate",
    q: "Which key enters copy/scroll mode so you can scroll back through output?",
    opts: ["<kbd>prefix</kbd> then <kbd>[</kbd>", "<kbd>prefix</kbd> then <kbd>]</kbd>", "<kbd>prefix</kbd> then <kbd>s</kbd>", "<kbd>prefix</kbd> then <kbd>PgUp</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>[</kbd> enters copy mode; then use arrows or <kbd>PgUp</kbd>/<kbd>PgDn</kbd>. Press <kbd>q</kbd> to exit."
  },
  {
    level: "intermediate",
    q: "Which key pastes the most recently copied tmux buffer?",
    opts: ["<kbd>prefix</kbd> then <kbd>]</kbd>", "<kbd>prefix</kbd> then <kbd>[</kbd>", "<kbd>prefix</kbd> then <kbd>p</kbd>", "<kbd>Ctrl</kbd>+<kbd>v</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>]</kbd> pastes the buffer. (<kbd>prefix</kbd> then <kbd>p</kbd> means previous window, not paste.)"
  },
  {
    level: "intermediate",
    q: "Which key breaks the active pane out into its own new window?",
    opts: ["<kbd>prefix</kbd> then <kbd>!</kbd>", "<kbd>prefix</kbd> then <kbd>c</kbd>", "<kbd>prefix</kbd> then <kbd>&</kbd>", "<kbd>prefix</kbd> then <kbd>w</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>!</kbd> runs break-pane. <kbd>&</kbd> kills the whole current window instead."
  },
  {
    level: "intermediate",
    q: "Which key briefly displays pane numbers so you can jump to one by pressing its digit?",
    opts: ["<kbd>prefix</kbd> then <kbd>q</kbd>", "<kbd>prefix</kbd> then <kbd>w</kbd>", "<kbd>prefix</kbd> then <kbd>#</kbd>", "<kbd>prefix</kbd> then <kbd>o</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>q</kbd> flashes each pane's number; press that number while shown to focus it."
  },
  {
    level: "intermediate",
    q: "Which key rotates focus to the next pane in the window?",
    opts: ["<kbd>prefix</kbd> then <kbd>o</kbd>", "<kbd>prefix</kbd> then <kbd>n</kbd>", "<kbd>prefix</kbd> then <kbd>r</kbd>", "<kbd>prefix</kbd> then <kbd>Tab</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>o</kbd> cycles focus through panes in order."
  },
  {
    level: "intermediate",
    q: "What do <kbd>prefix</kbd> then <kbd>{</kbd> and <kbd>}</kbd> do?",
    opts: ["Swap the active pane with the previous / next pane", "Resize the pane", "Switch windows", "Open and close copy mode"],
    correct: 0,
    why: "<kbd>{</kbd> swaps the active pane with the one before it; <kbd>}</kbd> swaps with the one after it."
  },
  {
    level: "intermediate",
    q: "Which key opens the tmux command prompt where you type commands like <code class='cmd'>join-pane</code>?",
    opts: ["<kbd>prefix</kbd> then <kbd>:</kbd>", "<kbd>prefix</kbd> then <kbd>;</kbd>", "<kbd>prefix</kbd> then <kbd>/</kbd>", "<kbd>prefix</kbd> then <kbd>!</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>:</kbd> opens the command prompt for any tmux command."
  },
  {
    level: "intermediate",
    q: "What does <kbd>prefix</kbd> then <kbd>;</kbd> (semicolon) do?",
    opts: ["Toggles to the last active pane", "Renames the window", "Opens the clock", "Splits the pane"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>;</kbd> jumps to the previously active pane, the pane-level equivalent of <kbd>l</kbd> for windows."
  },
  {
    level: "intermediate",
    q: "Which preset layout arranges panes into an even grid?",
    opts: ["tiled (<kbd>Alt</kbd>+<kbd>5</kbd>)", "main-vertical (<kbd>Alt</kbd>+<kbd>4</kbd>)", "even-vertical (<kbd>Alt</kbd>+<kbd>2</kbd>)", "main-horizontal (<kbd>Alt</kbd>+<kbd>3</kbd>)"],
    correct: 0,
    why: "tiled spreads panes into as even a grid as possible, balancing rows and columns."
  },
  {
    level: "intermediate",
    q: "How do you renumber/move the current window to a different position?",
    opts: ["<kbd>prefix</kbd> then <kbd>.</kbd>", "<kbd>prefix</kbd> then <kbd>,</kbd>", "<kbd>prefix</kbd> then <kbd>m</kbd>", "<kbd>prefix</kbd> then <kbd>></kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>.</kbd> prompts for a new index for the current window. <kbd>,</kbd> renames it instead."
  },
  {
    level: "intermediate",
    q: "Which key displays a large clock in the current pane?",
    opts: ["<kbd>prefix</kbd> then <kbd>t</kbd>", "<kbd>prefix</kbd> then <kbd>c</kbd>", "<kbd>prefix</kbd> then <kbd>k</kbd>", "<kbd>prefix</kbd> then <kbd>w</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>t</kbd> shows tmux's clock. Press any key to dismiss it."
  },
  {
    level: "intermediate",
    q: "In copy mode, how do you typically start selecting text (default emacs-style keys)?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>Space</kbd> to start, <kbd>Alt</kbd>+<kbd>w</kbd> to copy", "<kbd>v</kbd> then <kbd>y</kbd>", "Click and drag only", "<kbd>Ctrl</kbd>+<kbd>c</kbd>"],
    correct: 0,
    why: "With default (emacs) copy keys, <kbd>Ctrl</kbd>+<kbd>Space</kbd> begins selection and <kbd>Alt</kbd>+<kbd>w</kbd> copies. With vi mode set, it is <kbd>v</kbd> then <kbd>y</kbd>."
  },
  {
    level: "intermediate",
    q: "What does <kbd>prefix</kbd> then <kbd>&</kbd> do?",
    opts: ["Kills the current window (with confirmation)", "Breaks out a pane", "Joins two windows", "Renames the session"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>&</kbd> kills the entire current window after a y/n prompt."
  },
  {
    level: "intermediate",
    q: "How do you switch sessions without detaching, using the chooser?",
    opts: ["<kbd>prefix</kbd> then <kbd>s</kbd>", "<kbd>prefix</kbd> then <kbd>w</kbd>", "<kbd>prefix</kbd> then <kbd>d</kbd>", "<kbd>prefix</kbd> then <kbd>(</kbd>"],
    correct: 0,
    why: "<kbd>prefix</kbd> then <kbd>s</kbd> opens the session tree to pick another session. <kbd>(</kbd> and <kbd>)</kbd> jump to the previous/next session directly."
  },

  /* ===================== ADVANCED ===================== */
  {
    level: "advanced",
    q: "Which command moves a pane from window 3 into your current window as a split?",
    opts: ["<code class='cmd'>join-pane -s 3</code>", "<code class='cmd'>move-window -t 3</code>", "<code class='cmd'>swap-window -s 3</code>", "<code class='cmd'>new-window -t 3</code>"],
    correct: 0,
    why: "<code class='cmd'>join-pane -s 3</code> pulls the source pane from window 3 into the current window. Add <code class='cmd'>-h</code>/<code class='cmd'>-v</code> for direction. There is no default binding, so type it at the <kbd>:</kbd> prompt."
  },
  {
    level: "advanced",
    q: "In <code class='cmd'>join-pane -s 3.1 -h</code>, what does <code class='cmd'>3.1</code> mean and what does <code class='cmd'>-h</code> do?",
    opts: ["Window 3, pane 1; join as a left/right (horizontal) neighbour", "Three panes, one window; halve the size", "Session 3, window 1; hide it", "Window 1, pane 3; highlight it"],
    correct: 0,
    why: "The <code class='cmd'>target.pane</code> syntax <code class='cmd'>3.1</code> means window 3, pane 1. <code class='cmd'>-h</code> joins side by side; <code class='cmd'>-v</code> joins top/bottom."
  },
  {
    level: "advanced",
    q: "Which command is the inverse of join-pane, ejecting the current pane into its own window?",
    opts: ["<code class='cmd'>break-pane</code>", "<code class='cmd'>kill-pane</code>", "<code class='cmd'>split-window</code>", "<code class='cmd'>detach-pane</code>"],
    correct: 0,
    why: "<code class='cmd'>break-pane</code> (default key <kbd>prefix</kbd> then <kbd>!</kbd>) moves the active pane out into a new window."
  },
  {
    level: "advanced",
    q: "Which command broadcasts your keystrokes to every pane in the window at once?",
    opts: ["<code class='cmd'>setw synchronize-panes on</code>", "<code class='cmd'>set -g mouse on</code>", "<code class='cmd'>join-pane -a</code>", "<code class='cmd'>send-keys -a</code>"],
    correct: 0,
    why: "<code class='cmd'>setw synchronize-panes on</code> sends input to all panes simultaneously, great for running one command on several servers. Use <code class='cmd'>off</code> to stop."
  },
  {
    level: "advanced",
    q: "How do you reload your <code class='cmd'>~/.tmux.conf</code> without restarting tmux?",
    opts: ["<code class='cmd'>source-file ~/.tmux.conf</code> at the <kbd>:</kbd> prompt", "<code class='cmd'>tmux reload</code>", "<kbd>prefix</kbd> then <kbd>R</kbd> always works by default", "Restart the terminal"],
    correct: 0,
    why: "<code class='cmd'>source-file ~/.tmux.conf</code> re-reads the config live. Many people bind it to <kbd>prefix</kbd> then <kbd>r</kbd>, but that binding is not built in."
  },
  {
    level: "advanced",
    q: "Which option enables mouse support (click to focus, drag borders to resize, scroll to copy mode)?",
    opts: ["<code class='cmd'>set -g mouse on</code>", "<code class='cmd'>set -g click on</code>", "<code class='cmd'>setw mouse-select on</code>", "<code class='cmd'>set -g pointer on</code>"],
    correct: 0,
    why: "<code class='cmd'>set -g mouse on</code> is the modern single switch (tmux 2.1+) that enables all mouse interactions."
  },
  {
    level: "advanced",
    q: "How do you swap the positions of window 2 and window 1?",
    opts: ["<code class='cmd'>swap-window -s 2 -t 1</code>", "<code class='cmd'>move-window -s 2 -t 1</code>", "<code class='cmd'>join-pane -s 2 -t 1</code>", "<code class='cmd'>link-window 2 1</code>"],
    correct: 0,
    why: "<code class='cmd'>swap-window -s 2 -t 1</code> exchanges the two windows' positions."
  },
  {
    level: "advanced",
    q: "How do you pull window 1 from another session named <code class='cmd'>other</code> into the current session at slot 0?",
    opts: ["<code class='cmd'>move-window -s other:1 -t 0</code>", "<code class='cmd'>join-pane -s other:1</code>", "<code class='cmd'>swap-window other 0</code>", "<code class='cmd'>attach-window -s other</code>"],
    correct: 0,
    why: "<code class='cmd'>move-window -s other:1 -t 0</code> moves window 1 of session <code class='cmd'>other</code> into the current session at index 0. The <code class='cmd'>session:window</code> syntax targets across sessions."
  },
  {
    level: "advanced",
    q: "How do you remap the prefix from <kbd>Ctrl</kbd>+<kbd>b</kbd> to <kbd>Ctrl</kbd>+<kbd>a</kbd> in the config?",
    opts: ["<code class='cmd'>set -g prefix C-a</code>", "<code class='cmd'>bind prefix C-a</code>", "<code class='cmd'>set prefix = Ctrl-a</code>", "<code class='cmd'>remap C-b C-a</code>"],
    correct: 0,
    why: "<code class='cmd'>set -g prefix C-a</code> sets the new prefix. Typically you also <code class='cmd'>unbind C-b</code> and <code class='cmd'>bind C-a send-prefix</code> so the literal Ctrl+a can still pass through."
  },
  {
    level: "advanced",
    q: "Which command captures the visible contents of a pane into a buffer (e.g. for logging)?",
    opts: ["<code class='cmd'>capture-pane</code>", "<code class='cmd'>save-pane</code>", "<code class='cmd'>copy-pane</code>", "<code class='cmd'>dump-pane</code>"],
    correct: 0,
    why: "<code class='cmd'>capture-pane</code> grabs pane text into a buffer; pair with <code class='cmd'>save-buffer file.txt</code> to write it to disk."
  },
  {
    level: "advanced",
    q: "Which command sends a literal command string to a pane as if typed (useful for scripting)?",
    opts: ["<code class='cmd'>send-keys 'ls' Enter</code>", "<code class='cmd'>type-keys 'ls'</code>", "<code class='cmd'>exec-pane 'ls'</code>", "<code class='cmd'>run-pane 'ls'</code>"],
    correct: 0,
    why: "<code class='cmd'>send-keys 'ls' Enter</code> injects keystrokes into the target pane, the backbone of tmux automation scripts."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>move-pane -t 2</code> do?",
    opts: ["Sends the current pane into window 2 as a split", "Moves window 2 to a new index", "Swaps panes 1 and 2", "Resizes pane 2"],
    correct: 0,
    why: "<code class='cmd'>move-pane -t 2</code> joins the current pane into window 2; it is essentially join-pane with the current pane as source."
  },
  {
    level: "advanced",
    q: "Which command tears down the entire tmux server and every session at once?",
    opts: ["<code class='cmd'>tmux kill-server</code>", "<code class='cmd'>tmux kill-session</code>", "<code class='cmd'>tmux detach -a</code>", "<code class='cmd'>tmux quit</code>"],
    correct: 0,
    why: "<code class='cmd'>tmux kill-server</code> stops the server and all sessions. Use with care, there is no undo."
  },
  {
    level: "advanced",
    q: "How do you enable vi-style key bindings in copy mode?",
    opts: ["<code class='cmd'>setw -g mode-keys vi</code>", "<code class='cmd'>set vi on</code>", "<code class='cmd'>bind copy vi</code>", "<code class='cmd'>setw vi-copy on</code>"],
    correct: 0,
    why: "<code class='cmd'>setw -g mode-keys vi</code> switches copy mode to vi navigation, so <kbd>v</kbd> selects and <kbd>y</kbd> yanks."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>display-panes</code> (default <kbd>prefix</kbd> then <kbd>q</kbd>) primarily let you control via the <code class='cmd'>display-panes-time</code> option?",
    opts: ["How long the pane numbers stay on screen", "The font size of panes", "The pane border colour permanently", "The scrollback limit"],
    correct: 0,
    why: "<code class='cmd'>display-panes-time</code> (milliseconds) sets how long the pane-number overlay remains visible."
  },
  {
    level: "advanced",
    q: "Which command lets you pipe a pane's output to an external program continuously (e.g. to a log file)?",
    opts: ["<code class='cmd'>pipe-pane -o 'cat >> out.log'</code>", "<code class='cmd'>capture-pane -f out.log</code>", "<code class='cmd'>tee-pane out.log</code>", "<code class='cmd'>log-pane out.log</code>"],
    correct: 0,
    why: "<code class='cmd'>pipe-pane</code> streams everything in a pane to a command; <code class='cmd'>-o</code> toggles it so running it again stops the pipe."
  },
  {
    level: "advanced",
    q: "How do you make the same window appear in two sessions simultaneously (a shared/linked window)?",
    opts: ["<code class='cmd'>link-window</code>", "<code class='cmd'>copy-window</code>", "<code class='cmd'>mirror-window</code>", "<code class='cmd'>share-window</code>"],
    correct: 0,
    why: "<code class='cmd'>link-window</code> makes one window appear in multiple sessions; edits in one are reflected in the other. <code class='cmd'>unlink-window</code> separates them."
  },
  {
    level: "advanced",
    q: "Which command restarts a dead (or running, with <code class='cmd'>-k</code>) pane's command in place?",
    opts: ["<code class='cmd'>respawn-pane</code>", "<code class='cmd'>reload-pane</code>", "<code class='cmd'>restart-pane</code>", "<code class='cmd'>refresh-pane</code>"],
    correct: 0,
    why: "<code class='cmd'>respawn-pane</code> reruns the pane's process; add <code class='cmd'>-k</code> to kill a still-running one first."
  },
  {
    level: "advanced",
    q: "What is the effect of <code class='cmd'>bind-key</code> combined with <code class='cmd'>-r</code>?",
    opts: ["The key can be repeated without re-pressing the prefix (within the repeat timeout)", "It binds the key globally for all servers", "It reverses the key's action", "It makes the binding read-only"],
    correct: 0,
    why: "<code class='cmd'>-r</code> marks a binding as repeatable, so you can, for example, hold the resize keys after one prefix press, within <code class='cmd'>repeat-time</code> ms."
  },
  {
    level: "advanced",
    q: "How do you start a detached session named <code class='cmd'>build</code> that runs a command immediately, without attaching?",
    opts: ["<code class='cmd'>tmux new -d -s build 'make all'</code>", "<code class='cmd'>tmux run build 'make all'</code>", "<code class='cmd'>tmux exec -s build make</code>", "<code class='cmd'>tmux bg build make</code>"],
    correct: 0,
    why: "<code class='cmd'>tmux new -d -s build 'make all'</code> creates a detached session running the command, ideal for kicking off background jobs over SSH."
  }

];
