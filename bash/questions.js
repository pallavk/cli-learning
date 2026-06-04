/*
 * bash quiz question bank.
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
 * Examples assume bash 4+ on a typical Linux/macOS system.
 * Option order is shuffled at runtime, so position does not matter.
 */
window.BASH_QUESTIONS = [

  /* ===================== BEGINNER ===================== */
  {
    level: "beginner",
    q: "Which command prints the current working directory?",
    opts: ["<code class='cmd'>pwd</code>", "<code class='cmd'>cwd</code>", "<code class='cmd'>dir</code>", "<code class='cmd'>where</code>"],
    correct: 0,
    why: "<code class='cmd'>pwd</code> (print working directory) shows the absolute path of the directory you are in."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>cd</code> with no arguments do?",
    opts: ["Goes to your home directory", "Does nothing", "Goes up one directory", "Lists files"],
    correct: 0,
    why: "Bare <code class='cmd'>cd</code> changes to <code class='cmd'>$HOME</code>. Use <code class='cmd'>cd -</code> to return to the previous directory."
  },
  {
    level: "beginner",
    q: "How do you move up one directory level?",
    opts: ["<code class='cmd'>cd ..</code>", "<code class='cmd'>cd .</code>", "<code class='cmd'>cd up</code>", "<code class='cmd'>cd ~</code>"],
    correct: 0,
    why: "<code class='cmd'>..</code> refers to the parent directory; <code class='cmd'>.</code> is the current directory."
  },
  {
    level: "beginner",
    q: "Which flag makes <code class='cmd'>ls</code> show hidden (dotfile) entries?",
    opts: ["<code class='cmd'>-a</code>", "<code class='cmd'>-h</code>", "<code class='cmd'>-x</code>", "<code class='cmd'>-d</code>"],
    correct: 0,
    why: "<code class='cmd'>ls -a</code> includes entries starting with a dot. <code class='cmd'>-l</code> gives the long listing format."
  },
  {
    level: "beginner",
    q: "Which command creates an empty file (or updates its timestamp)?",
    opts: ["<code class='cmd'>touch file.txt</code>", "<code class='cmd'>make file.txt</code>", "<code class='cmd'>new file.txt</code>", "<code class='cmd'>create file.txt</code>"],
    correct: 0,
    why: "<code class='cmd'>touch</code> creates the file if it does not exist, otherwise it bumps the access/modify times."
  },
  {
    level: "beginner",
    q: "Which command creates a directory?",
    opts: ["<code class='cmd'>mkdir</code>", "<code class='cmd'>makedir</code>", "<code class='cmd'>newdir</code>", "<code class='cmd'>cd -m</code>"],
    correct: 0,
    why: "<code class='cmd'>mkdir name</code> makes a directory. Add <code class='cmd'>-p</code> to create parent directories as needed."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>mkdir -p a/b/c</code> do?",
    opts: ["Creates a, b, and c nested, making parents as needed", "Fails because a does not exist", "Creates three sibling directories", "Prints the path only"],
    correct: 0,
    why: "<code class='cmd'>-p</code> creates the full nested path and does not error if any directory already exists."
  },
  {
    level: "beginner",
    q: "How do you assign a variable in bash?",
    opts: ["<code class='cmd'>name=value</code> (no spaces)", "<code class='cmd'>name = value</code>", "<code class='cmd'>set name value</code>", "<code class='cmd'>let name value</code>"],
    correct: 0,
    why: "Bash assignment must have no spaces around <code class='cmd'>=</code>. Spaces would make bash treat <code class='cmd'>name</code> as a command."
  },
  {
    level: "beginner",
    q: "How do you read the value of a variable named <code class='cmd'>name</code>?",
    opts: ["<code class='cmd'>$name</code>", "<code class='cmd'>name</code>", "<code class='cmd'>&name</code>", "<code class='cmd'>@name</code>"],
    correct: 0,
    why: "Prefix the variable with <code class='cmd'>$</code> to expand it, e.g. <code class='cmd'>echo $name</code> or the safer <code class='cmd'>echo \"$name\"</code>."
  },
  {
    level: "beginner",
    q: "Which command prints text to the terminal?",
    opts: ["<code class='cmd'>echo</code>", "<code class='cmd'>print</code>", "<code class='cmd'>say</code>", "<code class='cmd'>out</code>"],
    correct: 0,
    why: "<code class='cmd'>echo</code> writes its arguments to standard output. <code class='cmd'>printf</code> gives finer formatting control."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>command > file.txt</code> do?",
    opts: ["Redirects stdout to file.txt, overwriting it", "Appends stdout to file.txt", "Reads file.txt as input", "Pipes file.txt into command"],
    correct: 0,
    why: "<code class='cmd'>></code> redirects standard output to a file, truncating (overwriting) it. Use <code class='cmd'>>></code> to append."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>>></code> do compared to <code class='cmd'>></code>?",
    opts: ["Appends instead of overwriting", "Overwrites instead of appending", "Redirects stderr", "Reads from a file"],
    correct: 0,
    why: "<code class='cmd'>>></code> appends to the end of the file; <code class='cmd'>></code> truncates and replaces its contents."
  },
  {
    level: "beginner",
    q: "What does the pipe <code class='cmd'>|</code> do in <code class='cmd'>ls | grep txt</code>?",
    opts: ["Sends ls's output as grep's input", "Runs both commands in parallel unconnected", "Redirects to a file named grep", "Comments out grep"],
    correct: 0,
    why: "A pipe connects the standard output of the left command to the standard input of the right command."
  },
  {
    level: "beginner",
    q: "Which command searches file contents for a pattern?",
    opts: ["<code class='cmd'>grep</code>", "<code class='cmd'>find</code>", "<code class='cmd'>locate</code>", "<code class='cmd'>seek</code>"],
    correct: 0,
    why: "<code class='cmd'>grep pattern file</code> prints lines matching the pattern. <code class='cmd'>find</code> searches for files by name/attributes."
  },
  {
    level: "beginner",
    q: "Which command copies a file?",
    opts: ["<code class='cmd'>cp</code>", "<code class='cmd'>copy</code>", "<code class='cmd'>mv</code>", "<code class='cmd'>dup</code>"],
    correct: 0,
    why: "<code class='cmd'>cp src dst</code> copies. <code class='cmd'>mv</code> moves/renames, and <code class='cmd'>cp -r</code> copies directories recursively."
  },
  {
    level: "beginner",
    q: "Which command renames or moves a file?",
    opts: ["<code class='cmd'>mv</code>", "<code class='cmd'>rename-only</code>", "<code class='cmd'>cp</code>", "<code class='cmd'>ln</code>"],
    correct: 0,
    why: "<code class='cmd'>mv old new</code> renames within a directory or moves across directories."
  },
  {
    level: "beginner",
    q: "Which command removes a file?",
    opts: ["<code class='cmd'>rm</code>", "<code class='cmd'>del</code>", "<code class='cmd'>erase</code>", "<code class='cmd'>unlink-file</code>"],
    correct: 0,
    why: "<code class='cmd'>rm file</code> deletes a file. <code class='cmd'>rm -r dir</code> removes a directory and its contents recursively."
  },
  {
    level: "beginner",
    q: "What does the <code class='cmd'>*</code> glob match?",
    opts: ["Any string of zero or more characters (except a leading dot)", "Exactly one character", "Only digits", "Only directories"],
    correct: 0,
    why: "<code class='cmd'>*</code> matches any run of characters. By default it does not match a leading dot in filenames."
  },
  {
    level: "beginner",
    q: "What does the <code class='cmd'>?</code> glob match?",
    opts: ["Exactly one character", "Zero or more characters", "Any digit", "End of line"],
    correct: 0,
    why: "<code class='cmd'>?</code> matches a single arbitrary character. <code class='cmd'>file?.txt</code> matches file1.txt but not file10.txt."
  },
  {
    level: "beginner",
    q: "Which key recalls the previous command in the shell history?",
    opts: ["<kbd>&uarr;</kbd> (Up arrow)", "<kbd>Tab</kbd>", "<kbd>Esc</kbd>", "<kbd>Ctrl</kbd>+<kbd>l</kbd>"],
    correct: 0,
    why: "The Up arrow walks backward through history; Down goes forward. <kbd>Ctrl</kbd>+<kbd>r</kbd> does an incremental search."
  },
  {
    level: "beginner",
    q: "What does <kbd>Tab</kbd> do at the bash prompt?",
    opts: ["Completes file names and commands", "Clears the screen", "Cancels the command", "Repeats the last command"],
    correct: 0,
    why: "Tab triggers completion. Press it twice to list all candidates when the prefix is ambiguous."
  },
  {
    level: "beginner",
    q: "What does <kbd>Ctrl</kbd>+<kbd>c</kbd> do to a running foreground command?",
    opts: ["Sends SIGINT to interrupt it", "Copies the output", "Suspends it", "Closes the terminal"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>c</kbd> sends SIGINT, asking the program to stop. <kbd>Ctrl</kbd>+<kbd>z</kbd> suspends instead."
  },
  {
    level: "beginner",
    q: "What does <kbd>Ctrl</kbd>+<kbd>l</kbd> do?",
    opts: ["Clears the screen (like <code class='cmd'>clear</code>)", "Logs out", "Locks the terminal", "Lists files"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>l</kbd> clears the visible screen while keeping your current command line intact."
  },
  {
    level: "beginner",
    q: "Which command displays the contents of a file to the terminal?",
    opts: ["<code class='cmd'>cat file</code>", "<code class='cmd'>show file</code>", "<code class='cmd'>type file</code>", "<code class='cmd'>open file</code>"],
    correct: 0,
    why: "<code class='cmd'>cat</code> concatenates and prints files. For paging long files use <code class='cmd'>less</code>."
  },
  {
    level: "beginner",
    q: "What is the difference between <code class='cmd'>'single'</code> and <code class='cmd'>\"double\"</code> quotes?",
    opts: ["Double quotes allow variable expansion; single quotes are fully literal", "Single quotes allow expansion; double are literal", "They are identical", "Single quotes only work for numbers"],
    correct: 0,
    why: "Inside double quotes, <code class='cmd'>$var</code> and <code class='cmd'>$(cmd)</code> expand. Single quotes preserve every character literally."
  },
  {
    level: "beginner",
    q: "Which variable holds the exit status of the last command?",
    opts: ["<code class='cmd'>$?</code>", "<code class='cmd'>$!</code>", "<code class='cmd'>$#</code>", "<code class='cmd'>$$</code>"],
    correct: 0,
    why: "<code class='cmd'>$?</code> is the exit code of the most recent command: 0 means success, non-zero means failure."
  },
  {
    level: "beginner",
    q: "What exit status conventionally means success?",
    opts: ["0", "1", "-1", "255"],
    correct: 0,
    why: "In Unix, an exit status of 0 means success; any non-zero value indicates some kind of failure."
  },
  {
    level: "beginner",
    q: "Which command shows your command history?",
    opts: ["<code class='cmd'>history</code>", "<code class='cmd'>past</code>", "<code class='cmd'>log</code>", "<code class='cmd'>recall</code>"],
    correct: 0,
    why: "<code class='cmd'>history</code> lists previously run commands with line numbers you can recall with <code class='cmd'>!n</code>."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>~</code> expand to?",
    opts: ["Your home directory", "The root directory", "The current directory", "The previous directory"],
    correct: 0,
    why: "<code class='cmd'>~</code> is shorthand for <code class='cmd'>$HOME</code>. <code class='cmd'>~user</code> expands to that user's home directory."
  },
  {
    level: "beginner",
    q: "Which command shows the manual page for a command?",
    opts: ["<code class='cmd'>man</code>", "<code class='cmd'>help-me</code>", "<code class='cmd'>doc</code>", "<code class='cmd'>info-page</code>"],
    correct: 0,
    why: "<code class='cmd'>man ls</code> opens the manual. Many commands also support <code class='cmd'>--help</code> for a quick summary."
  },
  {
    level: "beginner",
    q: "How do you run two commands sequentially on one line, regardless of the first's result?",
    opts: ["<code class='cmd'>cmd1 ; cmd2</code>", "<code class='cmd'>cmd1 | cmd2</code>", "<code class='cmd'>cmd1 & cmd2</code>", "<code class='cmd'>cmd1 :: cmd2</code>"],
    correct: 0,
    why: "<code class='cmd'>;</code> separates commands and runs them in order unconditionally. <code class='cmd'>&&</code> would run cmd2 only if cmd1 succeeded."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>cmd1 && cmd2</code> mean?",
    opts: ["Run cmd2 only if cmd1 succeeds (exit 0)", "Run both at the same time", "Run cmd2 only if cmd1 fails", "Pipe cmd1 into cmd2"],
    correct: 0,
    why: "<code class='cmd'>&&</code> is logical AND: cmd2 runs only when cmd1 returns exit status 0."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>cmd1 || cmd2</code> mean?",
    opts: ["Run cmd2 only if cmd1 fails (non-zero exit)", "Run cmd2 only if cmd1 succeeds", "Pipe cmd1 into cmd2", "Run both always"],
    correct: 0,
    why: "<code class='cmd'>||</code> is logical OR: cmd2 runs only when cmd1 fails. Handy as <code class='cmd'>cmd || echo failed</code>."
  },
  {
    level: "beginner",
    q: "Which command shows the first 10 lines of a file?",
    opts: ["<code class='cmd'>head file</code>", "<code class='cmd'>top file</code>", "<code class='cmd'>first file</code>", "<code class='cmd'>cat -10 file</code>"],
    correct: 0,
    why: "<code class='cmd'>head</code> shows the start of a file (10 lines by default); <code class='cmd'>tail</code> shows the end."
  },
  {
    level: "beginner",
    q: "Which command follows a growing file (like a live log)?",
    opts: ["<code class='cmd'>tail -f file</code>", "<code class='cmd'>head -f file</code>", "<code class='cmd'>cat -f file</code>", "<code class='cmd'>watch file</code>"],
    correct: 0,
    why: "<code class='cmd'>tail -f</code> keeps the file open and prints new lines as they are appended."
  },
  {
    level: "beginner",
    q: "Which command prints all current environment variables?",
    opts: ["<code class='cmd'>env</code> (or <code class='cmd'>printenv</code>)", "<code class='cmd'>vars</code>", "<code class='cmd'>show env</code>", "<code class='cmd'>list -e</code>"],
    correct: 0,
    why: "<code class='cmd'>env</code> and <code class='cmd'>printenv</code> list exported environment variables. <code class='cmd'>set</code> shows shell variables too."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>chmod +x script.sh</code> do?",
    opts: ["Makes the script executable", "Encrypts the script", "Deletes the script", "Runs the script"],
    correct: 0,
    why: "<code class='cmd'>chmod +x</code> adds the execute permission so you can run the file with <code class='cmd'>./script.sh</code>."
  },
  {
    level: "beginner",
    q: "What is the conventional first line of a bash script (the shebang)?",
    opts: ["<code class='cmd'>#!/usr/bin/env bash</code>", "<code class='cmd'>// bash</code>", "<code class='cmd'>@bash</code>", "<code class='cmd'>use bash;</code>"],
    correct: 0,
    why: "The shebang <code class='cmd'>#!/usr/bin/env bash</code> tells the OS which interpreter to use. <code class='cmd'>#!/bin/bash</code> is also common."
  },
  {
    level: "beginner",
    q: "Which character starts a comment in bash?",
    opts: ["<code class='cmd'>#</code>", "<code class='cmd'>//</code>", "<code class='cmd'>--</code>", "<code class='cmd'>;;</code>"],
    correct: 0,
    why: "Everything after <code class='cmd'>#</code> on a line is a comment (unless inside quotes or part of <code class='cmd'>$#</code>, etc.)."
  },
  {
    level: "beginner",
    q: "Which command shows which executable will run for a given command name?",
    opts: ["<code class='cmd'>which</code> (or <code class='cmd'>type</code>)", "<code class='cmd'>where-is</code>", "<code class='cmd'>find-cmd</code>", "<code class='cmd'>locate-bin</code>"],
    correct: 0,
    why: "<code class='cmd'>which ls</code> prints the path that will be used. <code class='cmd'>type ls</code> is the bash builtin and also reveals aliases/functions."
  },
  {
    level: "beginner",
    q: "How do you run a script in the current directory named <code class='cmd'>run.sh</code>?",
    opts: ["<code class='cmd'>./run.sh</code>", "<code class='cmd'>run.sh</code>", "<code class='cmd'>exec run</code>", "<code class='cmd'>start run.sh</code>"],
    correct: 0,
    why: "The current directory is not on <code class='cmd'>$PATH</code> by default, so you prefix with <code class='cmd'>./</code> to run a local script."
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    level: "intermediate",
    q: "What does <code class='cmd'>2>&1</code> do?",
    opts: ["Redirects stderr to wherever stdout currently goes", "Redirects stdout to stderr", "Closes file descriptor 2", "Merges two files"],
    correct: 0,
    why: "<code class='cmd'>2>&1</code> points stderr (fd 2) at the same destination as stdout (fd 1). Order matters relative to any <code class='cmd'>></code>."
  },
  {
    level: "intermediate",
    q: "Which redirection discards all output of a command?",
    opts: ["<code class='cmd'>cmd > /dev/null 2>&1</code>", "<code class='cmd'>cmd > null</code>", "<code class='cmd'>cmd | quiet</code>", "<code class='cmd'>cmd -silent</code>"],
    correct: 0,
    why: "Sending stdout to <code class='cmd'>/dev/null</code> and folding stderr in with <code class='cmd'>2>&1</code> silences both streams."
  },
  {
    level: "intermediate",
    q: "What is command substitution and which syntax is preferred?",
    opts: ["<code class='cmd'>$(command)</code> — captures a command's output into a value", "<code class='cmd'>${command}</code>", "<code class='cmd'>&(command)</code>", "<code class='cmd'>@command@</code>"],
    correct: 0,
    why: "<code class='cmd'>$(...)</code> runs a command and substitutes its stdout. It nests more cleanly than the older backtick form."
  },
  {
    level: "intermediate",
    q: "Why should you usually quote variable expansions, as in <code class='cmd'>\"$var\"</code>?",
    opts: ["To prevent word splitting and glob expansion of the value", "To make it faster", "To convert it to uppercase", "It is purely cosmetic"],
    correct: 0,
    why: "Unquoted, the value is subject to word splitting on whitespace and pathname (glob) expansion. Quoting keeps it as a single literal word."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>${var:-default}</code> expand to?",
    opts: ["The value of var, or 'default' if var is unset or empty", "Always 'default'", "var with 'default' appended", "An error if var is unset"],
    correct: 0,
    why: "<code class='cmd'>:-</code> supplies a fallback when the variable is unset or null, without assigning to var."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>${var:=default}</code> do differently from <code class='cmd'>${var:-default}</code>?",
    opts: ["It also assigns 'default' to var when var is unset/empty", "It only works for arrays", "It removes the variable", "It is exactly the same"],
    correct: 0,
    why: "<code class='cmd'>:=</code> returns the default and assigns it to var, so var is populated for later use. <code class='cmd'>:-</code> does not assign."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>${#var}</code> give you?",
    opts: ["The length (number of characters) of var", "The number of variables", "The first character", "The exit status"],
    correct: 0,
    why: "<code class='cmd'>${#var}</code> is the string length. For an array, <code class='cmd'>${#arr[@]}</code> is the element count."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>${var//foo/bar}</code> do?",
    opts: ["Replaces every occurrence of foo with bar in var", "Replaces only the first foo", "Deletes foo", "Splits var on foo"],
    correct: 0,
    why: "Double slash replaces all matches. A single slash <code class='cmd'>${var/foo/bar}</code> replaces only the first occurrence."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>${file%.txt}</code> produce when file is <code class='cmd'>report.txt</code>?",
    opts: ["report", "report.txt", ".txt", "txt"],
    correct: 0,
    why: "<code class='cmd'>%</code> strips the shortest matching suffix from the end. <code class='cmd'>%%</code> strips the longest match."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>${path##*/}</code> give for <code class='cmd'>/a/b/c.txt</code>?",
    opts: ["c.txt", "/a/b", "a", "txt"],
    correct: 0,
    why: "<code class='cmd'>##*/</code> removes the longest leading match ending in a slash — effectively basename. <code class='cmd'>%/*</code> would give the dirname."
  },
  {
    level: "intermediate",
    q: "Which test syntax is preferred in bash for string and file conditions?",
    opts: ["<code class='cmd'>[[ ... ]]</code>", "<code class='cmd'>[ ... ]</code> always", "<code class='cmd'>(( ... ))</code> for strings", "<code class='cmd'>test{ ... }</code>"],
    correct: 0,
    why: "<code class='cmd'>[[ ]]</code> is a bash keyword that avoids word-splitting/glob pitfalls and supports <code class='cmd'>&&</code>, <code class='cmd'>||</code>, and <code class='cmd'>=~</code>."
  },
  {
    level: "intermediate",
    q: "Which construct is for arithmetic comparison and evaluation?",
    opts: ["<code class='cmd'>(( ... ))</code>", "<code class='cmd'>[[ ... ]]</code>", "<code class='cmd'>{ ... }</code>", "<code class='cmd'>< ... ></code>"],
    correct: 0,
    why: "<code class='cmd'>(( ))</code> does integer arithmetic and returns success when the result is non-zero, e.g. <code class='cmd'>(( a > b ))</code>."
  },
  {
    level: "intermediate",
    q: "Inside <code class='cmd'>[ ]</code> (single brackets), which operator tests numeric equality?",
    opts: ["<code class='cmd'>-eq</code>", "<code class='cmd'>==</code>", "<code class='cmd'>=</code>", "<code class='cmd'>-is</code>"],
    correct: 0,
    why: "<code class='cmd'>-eq</code>, <code class='cmd'>-ne</code>, <code class='cmd'>-lt</code>, <code class='cmd'>-gt</code> are numeric. <code class='cmd'>=</code> compares strings in <code class='cmd'>[ ]</code>."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>[[ -f path ]]</code> test?",
    opts: ["Whether path exists and is a regular file", "Whether path is empty", "Whether path is a directory", "Whether you can read path"],
    correct: 0,
    why: "<code class='cmd'>-f</code> is true for a regular file. <code class='cmd'>-d</code> tests a directory, <code class='cmd'>-e</code> tests existence of any type."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>[[ -z \"$s\" ]]</code> check?",
    opts: ["That the string s is empty (zero length)", "That s is non-empty", "That s is a number", "That s is a file"],
    correct: 0,
    why: "<code class='cmd'>-z</code> is true when the string has length zero; <code class='cmd'>-n</code> is true when it is non-empty."
  },
  {
    level: "intermediate",
    q: "What is the correct C-style for loop header in bash?",
    opts: ["<code class='cmd'>for ((i=0; i<10; i++))</code>", "<code class='cmd'>for (i=0; i<10; i++)</code>", "<code class='cmd'>for i in 0..10</code>", "<code class='cmd'>foreach i 0 10</code>"],
    correct: 0,
    why: "Bash uses double parentheses for C-style loops: <code class='cmd'>for ((i=0; i<10; i++)); do ...; done</code>."
  },
  {
    level: "intermediate",
    q: "How do you loop over the lines/words produced by a command output safely word-by-word?",
    opts: ["<code class='cmd'>for x in $(cmd); do ...; done</code> (splits on whitespace)", "<code class='cmd'>for x of cmd</code>", "<code class='cmd'>loop cmd</code>", "<code class='cmd'>each cmd</code>"],
    correct: 0,
    why: "<code class='cmd'>for x in $(cmd)</code> iterates over whitespace-split words. To iterate strictly by line, prefer <code class='cmd'>while IFS= read -r line</code>."
  },
  {
    level: "intermediate",
    q: "Which is the robust idiom for reading a file line by line?",
    opts: ["<code class='cmd'>while IFS= read -r line; do ...; done < file</code>", "<code class='cmd'>for line in $(cat file)</code>", "<code class='cmd'>read file | while ...</code>", "<code class='cmd'>cat file | for line</code>"],
    correct: 0,
    why: "<code class='cmd'>IFS=</code> preserves leading/trailing whitespace and <code class='cmd'>-r</code> prevents backslash mangling, giving you exact lines."
  },
  {
    level: "intermediate",
    q: "How do you define a function in bash?",
    opts: ["<code class='cmd'>myfn() { ...; }</code>", "<code class='cmd'>function = myfn ...</code>", "<code class='cmd'>def myfn(): ...</code>", "<code class='cmd'>fn myfn -> ...</code>"],
    correct: 0,
    why: "<code class='cmd'>name() { commands; }</code> defines a function. The <code class='cmd'>function name { }</code> keyword form also works in bash."
  },
  {
    level: "intermediate",
    q: "Inside a function, how do you access the first argument?",
    opts: ["<code class='cmd'>$1</code>", "<code class='cmd'>$arg1</code>", "<code class='cmd'>${1st}</code>", "<code class='cmd'>$args[0]</code>"],
    correct: 0,
    why: "Positional parameters <code class='cmd'>$1</code>, <code class='cmd'>$2</code>, ... hold the arguments. <code class='cmd'>$0</code> is the script/function name."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>$#</code> represent?",
    opts: ["The number of positional parameters (arguments)", "The process ID", "The exit status", "The script name"],
    correct: 0,
    why: "<code class='cmd'>$#</code> is the count of arguments passed to the script or function."
  },
  {
    level: "intermediate",
    q: "What is the key difference between <code class='cmd'>\"$@\"</code> and <code class='cmd'>\"$*\"</code>?",
    opts: ["\"$@\" expands to each arg as a separate word; \"$*\" joins all args into one word", "They are identical", "\"$*\" preserves each arg separately", "\"$@\" joins into one word"],
    correct: 0,
    why: "Quoted <code class='cmd'>\"$@\"</code> preserves argument boundaries (one word per arg). Quoted <code class='cmd'>\"$*\"</code> joins them into a single string separated by the first char of IFS."
  },
  {
    level: "intermediate",
    q: "How do you declare an indexed array and access its first element?",
    opts: ["<code class='cmd'>arr=(a b c); echo \"${arr[0]}\"</code>", "<code class='cmd'>arr=[a,b,c]; echo arr[1]</code>", "<code class='cmd'>arr={a b c}; echo $arr.0</code>", "<code class='cmd'>array arr a b c</code>"],
    correct: 0,
    why: "Arrays use <code class='cmd'>arr=(...)</code> and are zero-indexed. <code class='cmd'>\"${arr[@]}\"</code> expands to all elements."
  },
  {
    level: "intermediate",
    q: "How do you expand all elements of array <code class='cmd'>arr</code> as separate words?",
    opts: ["<code class='cmd'>\"${arr[@]}\"</code>", "<code class='cmd'>$arr</code>", "<code class='cmd'>${arr}</code>", "<code class='cmd'>arr[*]</code> unquoted only"],
    correct: 0,
    why: "<code class='cmd'>\"${arr[@]}\"</code> gives each element as its own word. Bare <code class='cmd'>$arr</code> only yields element 0."
  },
  {
    level: "intermediate",
    q: "What does brace expansion <code class='cmd'>{1..5}</code> produce?",
    opts: ["1 2 3 4 5", "{1..5} literally", "15", "1 5"],
    correct: 0,
    why: "Brace expansion generates sequences: <code class='cmd'>{1..5}</code> yields 1 2 3 4 5; <code class='cmd'>{a..e}</code> yields a b c d e."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>cp file{,.bak}</code> expand to?",
    opts: ["<code class='cmd'>cp file file.bak</code>", "<code class='cmd'>cp file .bak</code>", "<code class='cmd'>cp file{,.bak}</code> literally", "An error"],
    correct: 0,
    why: "Brace expansion with an empty alternative: <code class='cmd'>file{,.bak}</code> becomes <code class='cmd'>file file.bak</code>, a handy backup idiom."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>$(( 3 + 4 * 2 ))</code> evaluate to?",
    opts: ["11", "14", "23", "9"],
    correct: 0,
    why: "Arithmetic expansion respects precedence: 4*2=8, then 3+8=11."
  },
  {
    level: "intermediate",
    q: "How do you suppress globbing so <code class='cmd'>*</code> stays literal in a single argument?",
    opts: ["Quote it: <code class='cmd'>'*'</code> or <code class='cmd'>\"*\"</code>", "Prefix with <code class='cmd'>%</code>", "Use <code class='cmd'>--noglob</code> per word", "It is impossible"],
    correct: 0,
    why: "Quoting prevents pathname expansion. You can also disable globbing globally with <code class='cmd'>set -f</code> (noglob)."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>!!</code> mean in history expansion?",
    opts: ["The entire previous command", "The first argument of the previous command", "The current command", "Clear history"],
    correct: 0,
    why: "<code class='cmd'>!!</code> repeats the last command. A common idiom is <code class='cmd'>sudo !!</code> to rerun the previous command with sudo."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>!$</code> refer to?",
    opts: ["The last argument of the previous command", "The previous command's exit code", "The whole previous command", "The first word"],
    correct: 0,
    why: "<code class='cmd'>!$</code> is the last word of the previous command. <kbd>Alt</kbd>+<kbd>.</kbd> inserts it interactively."
  },
  {
    level: "intermediate",
    q: "Which command runs a command for each item piped in, building argument lists?",
    opts: ["<code class='cmd'>xargs</code>", "<code class='cmd'>apply</code>", "<code class='cmd'>foreach</code>", "<code class='cmd'>map</code>"],
    correct: 0,
    why: "<code class='cmd'>xargs</code> reads items from stdin and passes them as arguments to a command, e.g. <code class='cmd'>find . -name '*.log' | xargs rm</code>."
  },
  {
    level: "intermediate",
    q: "Why use <code class='cmd'>find ... -print0 | xargs -0</code> instead of plain xargs?",
    opts: ["It handles filenames containing spaces or newlines safely", "It is faster only", "It sorts the output", "It removes duplicates"],
    correct: 0,
    why: "<code class='cmd'>-print0</code>/<code class='cmd'>-0</code> separate items with NUL bytes, so spaces and special characters in names do not break argument splitting."
  },
  {
    level: "intermediate",
    q: "What does a here-document <code class='cmd'>&lt;&lt;EOF ... EOF</code> do?",
    opts: ["Feeds the enclosed text to a command's stdin", "Defines a function", "Creates a comment block", "Loops until EOF is typed"],
    correct: 0,
    why: "A here-doc supplies multi-line literal input to a command's standard input until the delimiter line is reached."
  },
  {
    level: "intermediate",
    q: "How do you stop variable expansion inside a here-document?",
    opts: ["Quote the delimiter: <code class='cmd'>&lt;&lt;'EOF'</code>", "Use <code class='cmd'>&lt;&lt;&lt;</code>", "Add <code class='cmd'>--literal</code>", "You cannot"],
    correct: 0,
    why: "Quoting the delimiter (e.g. <code class='cmd'>'EOF'</code>) makes the body literal — no parameter, command, or arithmetic expansion."
  },
  {
    level: "intermediate",
    q: "What is a here-string and what is its syntax?",
    opts: ["<code class='cmd'>cmd &lt;&lt;&lt; \"text\"</code> feeds a single string as stdin", "<code class='cmd'>cmd &lt; text</code>", "<code class='cmd'>cmd ! text</code>", "<code class='cmd'>cmd @ text</code>"],
    correct: 0,
    why: "A here-string <code class='cmd'>&lt;&lt;&lt;</code> sends the given word (with expansions) to stdin, e.g. <code class='cmd'>grep foo &lt;&lt;&lt; \"$var\"</code>."
  },
  {
    level: "intermediate",
    q: "How do you put a command into the background when launching it?",
    opts: ["Append <code class='cmd'>&</code>", "Append <code class='cmd'>;</code>", "Prefix with <code class='cmd'>bg</code>", "Append <code class='cmd'>--bg</code>"],
    correct: 0,
    why: "A trailing <code class='cmd'>&</code> runs the command asynchronously in the background and prints its job/PID."
  },
  {
    level: "intermediate",
    q: "After <kbd>Ctrl</kbd>+<kbd>z</kbd> suspends a job, which command resumes it in the background?",
    opts: ["<code class='cmd'>bg</code>", "<code class='cmd'>fg</code>", "<code class='cmd'>resume</code>", "<code class='cmd'>cont</code>"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>z</kbd> stops the job; <code class='cmd'>bg</code> resumes it in the background, <code class='cmd'>fg</code> brings it back to the foreground."
  },
  {
    level: "intermediate",
    q: "Which variable holds the PID of the most recently backgrounded command?",
    opts: ["<code class='cmd'>$!</code>", "<code class='cmd'>$?</code>", "<code class='cmd'>$$</code>", "<code class='cmd'>$#</code>"],
    correct: 0,
    why: "<code class='cmd'>$!</code> is the PID of the last background process; <code class='cmd'>$$</code> is the current shell's PID."
  },
  {
    level: "intermediate",
    q: "What does the builtin <code class='cmd'>read -r line</code> do?",
    opts: ["Reads a line of input into the variable line without interpreting backslashes", "Reads a whole file", "Reads only digits", "Repeats the line"],
    correct: 0,
    why: "<code class='cmd'>read</code> grabs one line from stdin into a variable; <code class='cmd'>-r</code> keeps backslashes literal rather than as escapes."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>export VAR=value</code> accomplish?",
    opts: ["Marks VAR for inheritance by child processes", "Deletes VAR", "Makes VAR read-only", "Writes VAR to a file"],
    correct: 0,
    why: "<code class='cmd'>export</code> places the variable in the environment so subprocesses you launch can see it."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>local var=x</code> inside a function do?",
    opts: ["Scopes var to that function call", "Makes var global", "Exports var", "Makes var read-only"],
    correct: 0,
    why: "<code class='cmd'>local</code> limits the variable to the function, preventing it from leaking into or clobbering the global scope."
  },

  /* ===================== ADVANCED ===================== */
  {
    level: "advanced",
    q: "What does <code class='cmd'>set -e</code> do?",
    opts: ["Exits the script immediately if a command returns a non-zero status", "Echoes each command", "Treats unset variables as errors", "Enables tracing"],
    correct: 0,
    why: "<code class='cmd'>set -e</code> (errexit) aborts on the first uncaught failing command. Note it has caveats inside pipelines and conditionals."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>set -u</code> do?",
    opts: ["Causes a reference to an unset variable to error out", "Exits on any failure", "Prints commands as they run", "Disables globbing"],
    correct: 0,
    why: "<code class='cmd'>set -u</code> (nounset) treats expansion of an unset variable as an error, catching typos in variable names."
  },
  {
    level: "advanced",
    q: "What problem does <code class='cmd'>set -o pipefail</code> solve?",
    opts: ["A pipeline's status reflects the last command that failed, not just the final one", "It speeds up pipes", "It disables pipes", "It logs pipe output"],
    correct: 0,
    why: "Normally a pipeline's exit status is that of the last command. With <code class='cmd'>pipefail</code>, the pipeline fails if any component fails."
  },
  {
    level: "advanced",
    q: "What is the common 'strict mode' header for robust scripts?",
    opts: ["<code class='cmd'>set -euo pipefail</code>", "<code class='cmd'>set -xv</code>", "<code class='cmd'>set --strict</code>", "<code class='cmd'>set -abc</code>"],
    correct: 0,
    why: "<code class='cmd'>set -euo pipefail</code> combines errexit, nounset, and pipefail for fail-fast, mistake-catching scripts."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>set -x</code> do?",
    opts: ["Prints each command (with expansions) before executing it, for debugging", "Exits on error", "Disables expansion", "Clears variables"],
    correct: 0,
    why: "<code class='cmd'>set -x</code> (xtrace) echoes commands prefixed with <code class='cmd'>+</code> as they run, invaluable for debugging."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>trap 'cleanup' EXIT</code> do?",
    opts: ["Runs cleanup when the shell/script exits for any reason", "Catches only Ctrl-C", "Disables exit", "Runs cleanup before every command"],
    correct: 0,
    why: "A trap on EXIT runs the handler whenever the script terminates — normal end, error, or signal — perfect for removing temp files."
  },
  {
    level: "advanced",
    q: "Which signal does <code class='cmd'>trap ... INT</code> catch?",
    opts: ["SIGINT, e.g. from Ctrl-C", "SIGKILL", "SIGSEGV", "End of file"],
    correct: 0,
    why: "INT is SIGINT, typically sent by <kbd>Ctrl</kbd>+<kbd>c</kbd>. Note SIGKILL (9) cannot be trapped."
  },
  {
    level: "advanced",
    q: "What is process substitution <code class='cmd'>&lt;(command)</code>?",
    opts: ["It exposes a command's output as a temporary file/pipe path", "It runs the command in the background", "It substitutes a variable", "It comments out the command"],
    correct: 0,
    why: "<code class='cmd'>&lt;(cmd)</code> creates a readable FD (often /dev/fd/63) so you can do e.g. <code class='cmd'>diff &lt;(cmd1) &lt;(cmd2)</code> without temp files."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>while read line; do ...; done &lt; &lt;(cmd)</code> avoid that piping into the loop does not?",
    opts: ["The loop runs in the current shell, so variable changes persist", "It is faster", "It sorts input", "It removes the need for read"],
    correct: 0,
    why: "Piping <code class='cmd'>cmd | while ...</code> runs the loop in a subshell, so variables set inside are lost. Process substitution keeps the loop in the current shell."
  },
  {
    level: "advanced",
    q: "What is the difference between <code class='cmd'>( ... )</code> and <code class='cmd'>{ ...; }</code> grouping?",
    opts: ["Parentheses run commands in a subshell; braces run in the current shell", "They are identical", "Braces fork a process; parentheses do not", "Parentheses are only for arithmetic"],
    correct: 0,
    why: "A subshell <code class='cmd'>( )</code> gets its own copy of the environment (cd, variable changes do not leak out). Braces <code class='cmd'>{ }</code> execute in the current shell."
  },
  {
    level: "advanced",
    q: "Why does <code class='cmd'>{ cmd; }</code> require the trailing semicolon and surrounding spaces?",
    opts: ["{ and } are reserved words needing whitespace, and the last command needs a terminator", "It is optional styling", "Bash bug workaround", "To create a subshell"],
    correct: 0,
    why: "<code class='cmd'>{</code> and <code class='cmd'>}</code> are keywords recognized only as separate words, and the group needs a command terminator (<code class='cmd'>;</code> or newline) before <code class='cmd'>}</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>[[ \"$s\" =~ ^[0-9]+$ ]]</code> test?",
    opts: ["Whether s matches the regex (all digits)", "String equality with a literal", "File existence", "Numeric comparison"],
    correct: 0,
    why: "<code class='cmd'>=~</code> inside <code class='cmd'>[[ ]]</code> does ERE regex matching. Captured groups land in the <code class='cmd'>BASH_REMATCH</code> array."
  },
  {
    level: "advanced",
    q: "Why should the regex on the right of <code class='cmd'>=~</code> generally be unquoted?",
    opts: ["Quoting forces a literal string match instead of a regex match", "Quoting is required for regex", "Unquoting causes an error", "It makes no difference"],
    correct: 0,
    why: "In bash, quoting the right-hand side of <code class='cmd'>=~</code> makes it a literal string. Leave the pattern unquoted (or store it in a variable) for regex behavior."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>declare -A map</code> create?",
    opts: ["An associative array (string-keyed)", "An integer variable", "A read-only variable", "An array of arrays"],
    correct: 0,
    why: "<code class='cmd'>declare -A</code> makes an associative array, available in bash 4+, accessed as <code class='cmd'>${map[key]}</code>."
  },
  {
    level: "advanced",
    q: "How do you iterate over the keys of associative array <code class='cmd'>map</code>?",
    opts: ["<code class='cmd'>for k in \"${!map[@]}\"</code>", "<code class='cmd'>for k in \"${map[@]}\"</code>", "<code class='cmd'>for k in map.keys</code>", "<code class='cmd'>foreach k map</code>"],
    correct: 0,
    why: "<code class='cmd'>${!map[@]}</code> expands to the keys; <code class='cmd'>${map[@]}</code> expands to the values. The <code class='cmd'>!</code> means 'the indices/keys'."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>${!var}</code> do (indirect expansion)?",
    opts: ["Expands the variable whose name is held in var", "Negates var", "Gets the length of var", "Lists array keys for a scalar"],
    correct: 0,
    why: "If <code class='cmd'>var=PATH</code>, then <code class='cmd'>${!var}</code> expands to the value of <code class='cmd'>$PATH</code> — one level of indirection."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>${var:2:3}</code> extract?",
    opts: ["A substring of length 3 starting at offset 2 (0-based)", "Characters 2 through 3", "The 2nd and 3rd words", "Nothing"],
    correct: 0,
    why: "Substring expansion <code class='cmd'>${var:offset:length}</code> is zero-indexed. For <code class='cmd'>abcdef</code> it yields <code class='cmd'>cde</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>${var^^}</code> do in bash 4+?",
    opts: ["Uppercases the entire value", "Lowercases it", "Reverses it", "Trims whitespace"],
    correct: 0,
    why: "<code class='cmd'>^^</code> uppercases all characters; <code class='cmd'>,,</code> lowercases. Single <code class='cmd'>^</code>/<code class='cmd'>,</code> change just the first character."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>${var:?message}</code> do when var is unset?",
    opts: ["Prints message to stderr and exits the script (non-interactive)", "Substitutes message silently", "Assigns message to var", "Returns success"],
    correct: 0,
    why: "<code class='cmd'>:?</code> is an assertion: if var is unset/null, it writes the message and aborts — useful for required parameters."
  },
  {
    level: "advanced",
    q: "Why is <code class='cmd'>set -e</code> NOT triggered by <code class='cmd'>cmd || true</code> failing?",
    opts: ["The command is part of a list whose overall status is success", "set -e ignores all pipes", "true cancels set -e globally", "It is a bash bug"],
    correct: 0,
    why: "errexit ignores failures of commands on the left of <code class='cmd'>&&</code>/<code class='cmd'>||</code> and in conditions, because their status is being tested, not unhandled."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>mapfile -t lines &lt; file</code> (a.k.a. <code class='cmd'>readarray</code>) do?",
    opts: ["Reads each line of the file into array elements, stripping trailing newlines", "Maps a function over a file", "Creates an associative array", "Sorts the file"],
    correct: 0,
    why: "<code class='cmd'>mapfile -t</code> (bash 4+) slurps lines into an array; <code class='cmd'>-t</code> removes the trailing newline from each element."
  },
  {
    level: "advanced",
    q: "What does the <code class='cmd'>shopt -s nullglob</code> option change?",
    opts: ["A glob that matches nothing expands to nothing instead of the literal pattern", "It disables globbing", "It matches hidden files", "It makes globs case-insensitive"],
    correct: 0,
    why: "By default an unmatched glob stays literal. <code class='cmd'>nullglob</code> makes it expand to an empty list, avoiding loops over a literal <code class='cmd'>*</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>shopt -s globstar</code> enable?",
    opts: ["<code class='cmd'>**</code> to match files across directory levels recursively", "Globbing of hidden files", "Case-insensitive globs", "Brace expansion"],
    correct: 0,
    why: "With globstar, <code class='cmd'>**</code> matches zero or more directories, so <code class='cmd'>**/*.txt</code> finds .txt files at any depth."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>exec 3&lt; file</code> do?",
    opts: ["Opens file on file descriptor 3 for reading", "Runs file as a program", "Closes fd 3", "Redirects stderr"],
    correct: 0,
    why: "<code class='cmd'>exec</code> with redirections (and no command) manipulates the shell's own file descriptors; here it opens fd 3 for input."
  },
  {
    level: "advanced",
    q: "What does a bare <code class='cmd'>exec command</code> (with a command) do?",
    opts: ["Replaces the current shell process with command", "Runs command in a subshell", "Backgrounds command", "Defines a function"],
    correct: 0,
    why: "<code class='cmd'>exec</code> replaces the shell image with the new program; nothing after it in the script runs. Useful for wrapper scripts."
  },
  {
    level: "advanced",
    q: "What is the effect of <code class='cmd'>IFS=$'\\n'</code> before a <code class='cmd'>for</code> loop over command output?",
    opts: ["Word splitting happens only on newlines, not on spaces/tabs", "It disables splitting entirely", "It sorts the words", "It uppercases input"],
    correct: 0,
    why: "Setting IFS to just newline makes <code class='cmd'>for x in $(cmd)</code> split on lines, so items containing spaces stay whole."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>command cd /tmp</code> (using the <code class='cmd'>command</code> builtin) do?",
    opts: ["Runs cd bypassing any function or alias named cd", "Runs cd in a subshell", "Comments out cd", "Defines cd"],
    correct: 0,
    why: "<code class='cmd'>command</code> forces use of the builtin/external command, skipping a shell function or alias of the same name."
  },
  {
    level: "advanced",
    q: "Why might <code class='cmd'>echo \"$(cat file)\"</code> drop trailing newlines?",
    opts: ["Command substitution strips trailing newlines from the captured output", "echo deletes them", "cat removes them", "It does not — the file is changed"],
    correct: 0,
    why: "<code class='cmd'>$(...)</code> removes all trailing newlines from the result. This is by design and usually convenient, but can surprise you."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>printf '%s\\n' \"${arr[@]}\"</code> do for an array?",
    opts: ["Prints each element on its own line, reusing the format per argument", "Prints only the first element", "Prints the array as one line", "Errors out"],
    correct: 0,
    why: "<code class='cmd'>printf</code> cycles its format string over all remaining arguments, so each array element gets printed with a newline."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>trap '' INT</code> (empty handler) do?",
    opts: ["Ignores SIGINT entirely", "Resets the default handler", "Runs nothing then exits", "Catches every signal"],
    correct: 0,
    why: "An empty string handler causes the signal to be ignored. Passing a dash, <code class='cmd'>trap - INT</code>, restores the default action."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>: \"${VAR:?VAR must be set}\"</code> accomplish at a script's top?",
    opts: ["Asserts VAR is set, aborting with a message if not, using the no-op : command", "Sets VAR to a colon", "Prints VAR", "Clears VAR"],
    correct: 0,
    why: "<code class='cmd'>:</code> is the null command; combined with <code class='cmd'>${VAR:?...}</code> it cheaply enforces required variables without side effects."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>cmd1 &amp; cmd2 &amp; wait</code> achieve?",
    opts: ["Runs cmd1 and cmd2 in parallel, then waits for both to finish", "Runs them sequentially", "Runs cmd1 only", "Backgrounds wait"],
    correct: 0,
    why: "Each <code class='cmd'>&</code> backgrounds a job; <code class='cmd'>wait</code> blocks until all background jobs of the shell complete."
  },
  {
    level: "advanced",
    q: "What is the result of <code class='cmd'>echo {a,b}{1,2}</code>?",
    opts: ["a1 a2 b1 b2", "a b 1 2", "a1 b2", "{a,b}{1,2}"],
    correct: 0,
    why: "Adjacent brace expansions form a cross-product, generating every combination: a1 a2 b1 b2."
  },
  {
    level: "advanced",
    q: "Why can <code class='cmd'>read</code> in a pipeline fail to populate a variable for the rest of the script?",
    opts: ["Pipeline components run in subshells, so the variable change is lost when the subshell exits", "read never works in scripts", "read needs sudo", "The variable is read-only"],
    correct: 0,
    why: "In <code class='cmd'>echo x | read v</code>, the right side runs in a subshell. Use a here-string or process substitution to keep <code class='cmd'>read</code> in the current shell."
  }

];
