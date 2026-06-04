/*
 * vim quiz question bank.
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
 * Keystrokes use <kbd>, ex-commands use <code class='cmd'>.
 * Option order is shuffled at runtime, so position does not matter.
 */
window.VIM_QUESTIONS = [

  /* ===================== BEGINNER ===================== */
  {
    level: "beginner",
    q: "Which key takes you from Insert mode back to Normal mode?",
    opts: ["<kbd>Esc</kbd>", "<kbd>Enter</kbd>", "<kbd>q</kbd>", "<kbd>Tab</kbd>"],
    correct: 0,
    why: "<kbd>Esc</kbd> always returns you to Normal mode. Normal mode is where most commands and motions are typed."
  },
  {
    level: "beginner",
    q: "In which mode do you type text directly into the buffer?",
    opts: ["Normal mode", "Insert mode", "Visual mode", "Command-line mode"],
    correct: 1,
    why: "Insert mode is for typing text. You enter it with keys like <kbd>i</kbd> or <kbd>a</kbd>, and leave it with <kbd>Esc</kbd>."
  },
  {
    level: "beginner",
    q: "What does <kbd>i</kbd> do in Normal mode?",
    opts: ["Inserts text before the cursor", "Inserts text after the cursor", "Inserts a new line below", "Deletes a character"],
    correct: 0,
    why: "<kbd>i</kbd> enters Insert mode with the cursor before the current character. <kbd>a</kbd> inserts after it."
  },
  {
    level: "beginner",
    q: "What does <kbd>a</kbd> do in Normal mode?",
    opts: ["Appends after the cursor (enters Insert mode)", "Inserts before the cursor", "Opens a line above", "Selects all text"],
    correct: 0,
    why: "<kbd>a</kbd> enters Insert mode with the cursor placed after the current character, so you append text."
  },
  {
    level: "beginner",
    q: "What does <kbd>o</kbd> do in Normal mode?",
    opts: ["Opens a new line below and enters Insert mode", "Opens a new line above", "Overwrites the current character", "Opens a file"],
    correct: 0,
    why: "<kbd>o</kbd> opens a new line below the cursor and enters Insert mode. <kbd>O</kbd> opens a line above instead."
  },
  {
    level: "beginner",
    q: "What does <kbd>O</kbd> (capital) do in Normal mode?",
    opts: ["Opens a new line above and enters Insert mode", "Opens a new line below", "Opens the last file", "Overwrites a word"],
    correct: 0,
    why: "<kbd>O</kbd> opens a new line above the cursor and enters Insert mode. Lowercase <kbd>o</kbd> opens below."
  },
  {
    level: "beginner",
    q: "Which keys move the cursor left, down, up, and right in Normal mode?",
    opts: ["<kbd>h</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd>", "<kbd>a</kbd> <kbd>s</kbd> <kbd>w</kbd> <kbd>d</kbd>", "<kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd> <kbd>;</kbd>", "<kbd>i</kbd> <kbd>j</kbd> <kbd>k</kbd> <kbd>l</kbd>"],
    correct: 0,
    why: "<kbd>h</kbd> = left, <kbd>j</kbd> = down, <kbd>k</kbd> = up, <kbd>l</kbd> = right. The arrow keys also work."
  },
  {
    level: "beginner",
    q: "How do you save (write) the current file?",
    opts: ["<code class='cmd'>:w</code>", "<code class='cmd'>:s</code>", "<kbd>Ctrl</kbd>+<kbd>s</kbd>", "<code class='cmd'>:save</code>"],
    correct: 0,
    why: "<code class='cmd'>:w</code> (write) saves the file. <code class='cmd'>:wq</code> writes and quits in one step."
  },
  {
    level: "beginner",
    q: "How do you quit vim?",
    opts: ["<code class='cmd'>:q</code>", "<code class='cmd'>:exit</code>", "<kbd>Ctrl</kbd>+<kbd>c</kbd>", "<kbd>Esc</kbd> twice"],
    correct: 0,
    why: "<code class='cmd'>:q</code> quits. If there are unsaved changes vim refuses; use <code class='cmd'>:q!</code> to discard them."
  },
  {
    level: "beginner",
    q: "How do you write the file AND quit in one command?",
    opts: ["<code class='cmd'>:wq</code>", "<code class='cmd'>:q!</code>", "<code class='cmd'>:w!</code>", "<code class='cmd'>:close</code>"],
    correct: 0,
    why: "<code class='cmd'>:wq</code> (or <code class='cmd'>:x</code>, or <kbd>Z</kbd><kbd>Z</kbd> in Normal mode) writes the file then quits."
  },
  {
    level: "beginner",
    q: "How do you quit WITHOUT saving changes?",
    opts: ["<code class='cmd'>:q!</code>", "<code class='cmd'>:wq</code>", "<code class='cmd'>:q</code>", "<code class='cmd'>:w</code>"],
    correct: 0,
    why: "<code class='cmd'>:q!</code> forces a quit and discards unsaved changes. The <kbd>!</kbd> overrides vim's safety check."
  },
  {
    level: "beginner",
    q: "What does <kbd>x</kbd> do in Normal mode?",
    opts: ["Deletes the character under the cursor", "Deletes the whole line", "Cuts a word", "Exits vim"],
    correct: 0,
    why: "<kbd>x</kbd> deletes the single character under the cursor. <kbd>X</kbd> deletes the character before it."
  },
  {
    level: "beginner",
    q: "What does <kbd>d</kbd><kbd>d</kbd> do?",
    opts: ["Deletes the entire current line", "Deletes one character", "Deletes to end of line", "Duplicates the line"],
    correct: 0,
    why: "<kbd>d</kbd><kbd>d</kbd> deletes (cuts) the whole current line into the unnamed register."
  },
  {
    level: "beginner",
    q: "What does <kbd>u</kbd> do in Normal mode?",
    opts: ["Undoes the last change", "Redoes a change", "Moves up", "Uppercases a letter"],
    correct: 0,
    why: "<kbd>u</kbd> undoes the last change. Press it repeatedly to keep undoing."
  },
  {
    level: "beginner",
    q: "How do you redo a change you just undid?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>r</kbd>", "<kbd>U</kbd>", "<kbd>r</kbd>", "<kbd>Ctrl</kbd>+<kbd>z</kbd>"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>r</kbd> redoes. (Capital <kbd>U</kbd> undoes all changes on one line, which is different.)"
  },
  {
    level: "beginner",
    q: "What does <kbd>y</kbd><kbd>y</kbd> do?",
    opts: ["Yanks (copies) the current line", "Deletes the line", "Pastes a line", "Joins lines"],
    correct: 0,
    why: "<kbd>y</kbd><kbd>y</kbd> yanks (copies) the whole current line into the unnamed register, ready to put with <kbd>p</kbd>."
  },
  {
    level: "beginner",
    q: "After yanking a line with <kbd>y</kbd><kbd>y</kbd>, how do you paste it below the current line?",
    opts: ["<kbd>p</kbd>", "<kbd>P</kbd>", "<kbd>y</kbd>", "<kbd>Ctrl</kbd>+<kbd>v</kbd>"],
    correct: 0,
    why: "Lowercase <kbd>p</kbd> puts the yanked line below the cursor line. Capital <kbd>P</kbd> puts it above."
  },
  {
    level: "beginner",
    q: "What is the difference between <kbd>p</kbd> and <kbd>P</kbd>?",
    opts: ["<kbd>p</kbd> puts after/below, <kbd>P</kbd> puts before/above", "They are identical", "<kbd>p</kbd> pastes, <kbd>P</kbd> prints", "<kbd>P</kbd> puts after, <kbd>p</kbd> puts before"],
    correct: 0,
    why: "<kbd>p</kbd> puts the register contents after the cursor (or below for line-wise); <kbd>P</kbd> puts before/above."
  },
  {
    level: "beginner",
    q: "Which motion moves to the start of the next word?",
    opts: ["<kbd>w</kbd>", "<kbd>b</kbd>", "<kbd>e</kbd>", "<kbd>0</kbd>"],
    correct: 0,
    why: "<kbd>w</kbd> jumps forward to the start of the next word. <kbd>b</kbd> goes back, <kbd>e</kbd> goes to the end of a word."
  },
  {
    level: "beginner",
    q: "Which motion moves back to the start of the previous word?",
    opts: ["<kbd>b</kbd>", "<kbd>w</kbd>", "<kbd>e</kbd>", "<kbd>$</kbd>"],
    correct: 0,
    why: "<kbd>b</kbd> moves backward to the beginning of the previous (or current) word."
  },
  {
    level: "beginner",
    q: "What does <kbd>0</kbd> (zero) do?",
    opts: ["Moves to the very first column of the line", "Moves to the first non-blank character", "Moves to end of line", "Deletes the line"],
    correct: 0,
    why: "<kbd>0</kbd> jumps to column 1, the absolute start of the line. <kbd>^</kbd> goes to the first non-blank character."
  },
  {
    level: "beginner",
    q: "What does <kbd>$</kbd> do?",
    opts: ["Moves to the end of the line", "Moves to the start of the line", "Moves to the last line of the file", "Inserts a dollar sign"],
    correct: 0,
    why: "<kbd>$</kbd> moves the cursor to the end of the current line."
  },
  {
    level: "beginner",
    q: "What does <kbd>^</kbd> (caret) do?",
    opts: ["Moves to the first non-blank character of the line", "Moves to column 1", "Moves to end of line", "Searches upward"],
    correct: 0,
    why: "<kbd>^</kbd> moves to the first non-blank character. <kbd>0</kbd> moves to the absolute first column."
  },
  {
    level: "beginner",
    q: "What does <kbd>g</kbd><kbd>g</kbd> do?",
    opts: ["Jumps to the first line of the file", "Jumps to the last line", "Jumps to the middle", "Repeats the last command"],
    correct: 0,
    why: "<kbd>g</kbd><kbd>g</kbd> moves to the first line of the file. <kbd>G</kbd> moves to the last line."
  },
  {
    level: "beginner",
    q: "What does <kbd>G</kbd> (capital) do?",
    opts: ["Jumps to the last line of the file", "Jumps to the first line", "Goes to the next word", "Enters Insert mode"],
    correct: 0,
    why: "<kbd>G</kbd> jumps to the last line. With a count, like <kbd>5</kbd><kbd>G</kbd>, it jumps to line 5."
  },
  {
    level: "beginner",
    q: "What does <kbd>A</kbd> (capital) do?",
    opts: ["Appends at the end of the line (enters Insert mode)", "Appends after the cursor", "Selects all", "Inserts at start of line"],
    correct: 0,
    why: "<kbd>A</kbd> moves to the end of the line and enters Insert mode, perfect for adding to a line's end."
  },
  {
    level: "beginner",
    q: "What does <kbd>I</kbd> (capital) do?",
    opts: ["Inserts before the first non-blank character of the line", "Inserts at column 1 always", "Inserts after the cursor", "Inserts a new line"],
    correct: 0,
    why: "<kbd>I</kbd> jumps to the first non-blank character and enters Insert mode."
  },
  {
    level: "beginner",
    q: "What does <kbd>r</kbd> followed by a character do?",
    opts: ["Replaces the single character under the cursor", "Replaces the whole word", "Repeats the last command", "Enters Replace mode"],
    correct: 0,
    why: "<kbd>r</kbd><kbd>x</kbd> replaces just the character under the cursor with <kbd>x</kbd> and stays in Normal mode."
  },
  {
    level: "beginner",
    q: "What does the <kbd>.</kbd> (dot) command do?",
    opts: ["Repeats the last change", "Moves to the next line", "Deletes a character", "Opens command-line mode"],
    correct: 0,
    why: "The dot command repeats your most recent change (edit). It is one of vim's most powerful productivity tools."
  },
  {
    level: "beginner",
    q: "How do you search forward for the word <code class='cmd'>error</code>?",
    opts: ["<kbd>/</kbd>error<kbd>Enter</kbd>", "<kbd>?</kbd>error<kbd>Enter</kbd>", "<code class='cmd'>:find error</code>", "<kbd>*</kbd>error"],
    correct: 0,
    why: "<kbd>/</kbd> starts a forward search. Type the pattern and press <kbd>Enter</kbd>. <kbd>?</kbd> searches backward."
  },
  {
    level: "beginner",
    q: "After a search, which key jumps to the next match?",
    opts: ["<kbd>n</kbd>", "<kbd>N</kbd>", "<kbd>/</kbd>", "<kbd>p</kbd>"],
    correct: 0,
    why: "<kbd>n</kbd> repeats the search in the same direction; <kbd>N</kbd> repeats it in the opposite direction."
  },
  {
    level: "beginner",
    q: "What does <kbd>v</kbd> do in Normal mode?",
    opts: ["Enters character-wise Visual mode", "Enters Insert mode", "Pastes text", "Splits the window"],
    correct: 0,
    why: "<kbd>v</kbd> starts Visual mode to select text character by character. Move to extend the selection."
  },
  {
    level: "beginner",
    q: "What does <kbd>V</kbd> (capital) do?",
    opts: ["Enters line-wise Visual mode", "Enters character-wise Visual mode", "Enters block Visual mode", "Pastes a line"],
    correct: 0,
    why: "<kbd>V</kbd> selects whole lines at a time (line-wise Visual mode)."
  },
  {
    level: "beginner",
    q: "How do you open a file named <code class='cmd'>notes.txt</code> from within vim?",
    opts: ["<code class='cmd'>:e notes.txt</code>", "<code class='cmd'>:open notes.txt</code>", "<code class='cmd'>:w notes.txt</code>", "<code class='cmd'>:read notes.txt</code>"],
    correct: 0,
    why: "<code class='cmd'>:e notes.txt</code> (edit) opens that file in the current window."
  },
  {
    level: "beginner",
    q: "What does <kbd>d</kbd><kbd>w</kbd> do?",
    opts: ["Deletes from the cursor to the start of the next word", "Deletes the whole line", "Deletes one character", "Deletes to end of line"],
    correct: 0,
    why: "<kbd>d</kbd><kbd>w</kbd> deletes from the cursor up to (but not including) the start of the next word. To delete to the end of the word use <kbd>d</kbd><kbd>e</kbd>."
  },
  {
    level: "beginner",
    q: "What does <kbd>D</kbd> (capital) do?",
    opts: ["Deletes from the cursor to the end of the line", "Deletes the whole line", "Deletes one word", "Deletes the file"],
    correct: 0,
    why: "<kbd>D</kbd> is shorthand for <kbd>d</kbd><kbd>$</kbd>: delete from the cursor to the end of the line."
  },
  {
    level: "beginner",
    q: "What does <kbd>C</kbd> (capital) do?",
    opts: ["Changes from the cursor to end of line (deletes, then Insert mode)", "Copies the line", "Deletes the line", "Centers the screen"],
    correct: 0,
    why: "<kbd>C</kbd> equals <kbd>c</kbd><kbd>$</kbd>: it deletes to the end of the line and drops you into Insert mode."
  },
  {
    level: "beginner",
    q: "What does <kbd>c</kbd><kbd>w</kbd> do?",
    opts: ["Changes a word: deletes it and enters Insert mode", "Copies a word", "Deletes a word but stays in Normal mode", "Capitalizes a word"],
    correct: 0,
    why: "<kbd>c</kbd><kbd>w</kbd> deletes to the end of the word and enters Insert mode so you can retype it."
  },
  {
    level: "beginner",
    q: "What does the number before a motion do, e.g. <kbd>3</kbd><kbd>j</kbd>?",
    opts: ["Repeats the motion that many times (move down 3 lines)", "Jumps to line 3", "Deletes 3 lines", "Nothing"],
    correct: 0,
    why: "A count before a motion repeats it. <kbd>3</kbd><kbd>j</kbd> moves down 3 lines; <kbd>5</kbd><kbd>w</kbd> moves 5 words forward."
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    level: "intermediate",
    q: "What is the general grammar of a vim edit command?",
    opts: ["operator + motion (e.g. <kbd>d</kbd> + <kbd>w</kbd>)", "motion + operator", "register + count only", "mode + key"],
    correct: 0,
    why: "Vim edits follow operator + motion. <kbd>d</kbd> (delete) + <kbd>w</kbd> (word) deletes a word; <kbd>c</kbd> + <kbd>$</kbd> changes to line end. This composability is vim's core idea."
  },
  {
    level: "intermediate",
    q: "What does <kbd>d</kbd><kbd>e</kbd> do, and how does it differ from <kbd>d</kbd><kbd>w</kbd>?",
    opts: ["Deletes to the end of the current word; <kbd>d</kbd><kbd>w</kbd> deletes up to the next word's start", "Identical to <kbd>d</kbd><kbd>w</kbd>", "Deletes an empty line", "Deletes the entire file"],
    correct: 0,
    why: "<kbd>e</kbd> stops at the end of the current word, so <kbd>d</kbd><kbd>e</kbd> leaves no trailing space. <kbd>d</kbd><kbd>w</kbd> deletes through to the next word's first character, usually including the space after it."
  },
  {
    level: "intermediate",
    q: "What does <kbd>c</kbd><kbd>c</kbd> do?",
    opts: ["Changes the whole line: clears it and enters Insert mode (keeping indent)", "Deletes one character", "Copies the line", "Comments the line"],
    correct: 0,
    why: "<kbd>c</kbd><kbd>c</kbd> changes the entire line. <kbd>S</kbd> is a synonym for <kbd>c</kbd><kbd>c</kbd>."
  },
  {
    level: "intermediate",
    q: "What is <kbd>S</kbd> equivalent to?",
    opts: ["<kbd>c</kbd><kbd>c</kbd> (change the whole line)", "<kbd>c</kbd><kbd>w</kbd>", "<kbd>d</kbd><kbd>d</kbd>", "<kbd>s</kbd><kbd>s</kbd>"],
    correct: 0,
    why: "Capital <kbd>S</kbd> is a synonym for <kbd>c</kbd><kbd>c</kbd>: it substitutes the entire line. Lowercase <kbd>s</kbd> substitutes a single character (like <kbd>c</kbd><kbd>l</kbd>)."
  },
  {
    level: "intermediate",
    q: "What does <kbd>s</kbd> (lowercase) do?",
    opts: ["Deletes the character under the cursor and enters Insert mode", "Deletes the line", "Saves the file", "Searches"],
    correct: 0,
    why: "<kbd>s</kbd> substitutes one character: it deletes the character under the cursor and enters Insert mode (equivalent to <kbd>c</kbd><kbd>l</kbd>)."
  },
  {
    level: "intermediate",
    q: "What does <kbd>R</kbd> (capital) do?",
    opts: ["Enters Replace mode, overwriting characters as you type", "Replaces one character", "Redoes a change", "Repeats a search"],
    correct: 0,
    why: "<kbd>R</kbd> enters Replace mode: each character you type overwrites the existing one until you press <kbd>Esc</kbd>."
  },
  {
    level: "intermediate",
    q: "Which command substitutes the first <code class='cmd'>foo</code> with <code class='cmd'>bar</code> on the current line only?",
    opts: ["<code class='cmd'>:s/foo/bar/</code>", "<code class='cmd'>:%s/foo/bar/</code>", "<code class='cmd'>:s/foo/bar/g</code>", "<code class='cmd'>:g/foo/bar/</code>"],
    correct: 0,
    why: "<code class='cmd'>:s/foo/bar/</code> replaces the first match on the current line. Without the <code class='cmd'>g</code> flag it stops after one substitution per line."
  },
  {
    level: "intermediate",
    q: "What does the <code class='cmd'>g</code> flag add in <code class='cmd'>:s/foo/bar/g</code>?",
    opts: ["Replaces ALL matches on the line, not just the first", "Makes it case-insensitive", "Asks for confirmation", "Applies to the whole file"],
    correct: 0,
    why: "The <code class='cmd'>g</code> (global) flag means every occurrence on the line is replaced, not just the first."
  },
  {
    level: "intermediate",
    q: "Which command replaces every <code class='cmd'>foo</code> with <code class='cmd'>bar</code> in the entire file?",
    opts: ["<code class='cmd'>:%s/foo/bar/g</code>", "<code class='cmd'>:s/foo/bar/g</code>", "<code class='cmd'>:all s/foo/bar/</code>", "<code class='cmd'>:g/foo/bar/g</code>"],
    correct: 0,
    why: "The <code class='cmd'>%</code> range means all lines. <code class='cmd'>:%s/foo/bar/g</code> replaces every occurrence on every line."
  },
  {
    level: "intermediate",
    q: "What does the <code class='cmd'>c</code> flag do in <code class='cmd'>:%s/foo/bar/gc</code>?",
    opts: ["Prompts to confirm each substitution", "Counts the matches only", "Makes it case-sensitive", "Copies matches"],
    correct: 0,
    why: "The <code class='cmd'>c</code> flag asks you to confirm each replacement (<kbd>y</kbd>/<kbd>n</kbd>/<kbd>a</kbd>/<kbd>q</kbd>/<kbd>l</kbd>)."
  },
  {
    level: "intermediate",
    q: "What does <kbd>*</kbd> do in Normal mode?",
    opts: ["Searches forward for the word under the cursor", "Searches backward", "Repeats the last command", "Marks the line"],
    correct: 0,
    why: "<kbd>*</kbd> searches forward for the whole word currently under the cursor. <kbd>#</kbd> searches backward for it."
  },
  {
    level: "intermediate",
    q: "What does <kbd>#</kbd> do in Normal mode?",
    opts: ["Searches backward for the word under the cursor", "Searches forward for it", "Inserts a comment", "Counts lines"],
    correct: 0,
    why: "<kbd>#</kbd> searches backward for the word under the cursor; <kbd>*</kbd> searches forward for it."
  },
  {
    level: "intermediate",
    q: "How do you delete everything inside parentheses when the cursor is inside <code class='cmd'>(...)</code>?",
    opts: ["<kbd>d</kbd><kbd>i</kbd><kbd>(</kbd>", "<kbd>d</kbd><kbd>a</kbd><kbd>(</kbd>", "<kbd>d</kbd><kbd>(</kbd>", "<kbd>c</kbd><kbd>(</kbd>"],
    correct: 0,
    why: "<kbd>d</kbd><kbd>i</kbd><kbd>(</kbd> deletes the text inside the parentheses (\"inner\"). <kbd>d</kbd><kbd>a</kbd><kbd>(</kbd> also deletes the parentheses themselves (\"around\")."
  },
  {
    level: "intermediate",
    q: "What does the text object <kbd>a</kbd><kbd>w</kbd> select (e.g. with <kbd>d</kbd><kbd>a</kbd><kbd>w</kbd>)?",
    opts: ["A word plus surrounding whitespace", "Only the word's characters", "The whole line", "Around a paragraph"],
    correct: 0,
    why: "<kbd>a</kbd><kbd>w</kbd> is \"a word\" including a trailing (or leading) space. <kbd>i</kbd><kbd>w</kbd> is \"inner word\", just the word characters."
  },
  {
    level: "intermediate",
    q: "How do you change the text inside double quotes with the cursor between them?",
    opts: ["<kbd>c</kbd><kbd>i</kbd><kbd>\"</kbd>", "<kbd>c</kbd><kbd>a</kbd><kbd>\"</kbd>", "<kbd>c</kbd><kbd>\"</kbd>", "<kbd>d</kbd><kbd>\"</kbd>"],
    correct: 0,
    why: "<kbd>c</kbd><kbd>i</kbd><kbd>\"</kbd> changes the contents inside the quotes, leaving the quotes in place, and enters Insert mode."
  },
  {
    level: "intermediate",
    q: "What does <kbd>d</kbd><kbd>i</kbd><kbd>{</kbd> do?",
    opts: ["Deletes everything inside the surrounding curly braces", "Deletes the braces only", "Deletes the current line", "Deletes a word"],
    correct: 0,
    why: "<kbd>d</kbd><kbd>i</kbd><kbd>{</kbd> deletes the inner contents of the enclosing <code class='cmd'>{ }</code> block. <kbd>d</kbd><kbd>a</kbd><kbd>{</kbd> would include the braces."
  },
  {
    level: "intermediate",
    q: "How do you set a mark named <code class='cmd'>a</code> at the current position?",
    opts: ["<kbd>m</kbd><kbd>a</kbd>", "<kbd>'</kbd><kbd>a</kbd>", "<kbd>`</kbd><kbd>a</kbd>", "<code class='cmd'>:mark a</code>"],
    correct: 0,
    why: "<kbd>m</kbd><kbd>a</kbd> sets mark <code class='cmd'>a</code>. You then jump to it with <kbd>`</kbd><kbd>a</kbd> (exact spot) or <kbd>'</kbd><kbd>a</kbd> (start of that line)."
  },
  {
    level: "intermediate",
    q: "After setting mark <code class='cmd'>a</code>, how do you jump to its exact column position?",
    opts: ["<kbd>`</kbd><kbd>a</kbd> (backtick)", "<kbd>'</kbd><kbd>a</kbd> (apostrophe)", "<kbd>m</kbd><kbd>a</kbd>", "<kbd>g</kbd><kbd>a</kbd>"],
    correct: 0,
    why: "Backtick <kbd>`</kbd><kbd>a</kbd> jumps to the exact line and column of the mark. Apostrophe <kbd>'</kbd><kbd>a</kbd> jumps to the first non-blank of that line."
  },
  {
    level: "intermediate",
    q: "How do you join the current line with the line below it?",
    opts: ["<kbd>J</kbd>", "<kbd>j</kbd>", "<kbd>Ctrl</kbd>+<kbd>j</kbd>", "<code class='cmd'>:join below</code>"],
    correct: 0,
    why: "Capital <kbd>J</kbd> joins the next line onto the current one, inserting a space. <kbd>g</kbd><kbd>J</kbd> joins without adding a space."
  },
  {
    level: "intermediate",
    q: "In Visual mode, how do you yank the current selection?",
    opts: ["<kbd>y</kbd>", "<kbd>p</kbd>", "<kbd>c</kbd>", "<kbd>v</kbd>"],
    correct: 0,
    why: "In Visual mode, <kbd>y</kbd> yanks the selection, <kbd>d</kbd> deletes it, and <kbd>c</kbd> changes it."
  },
  {
    level: "intermediate",
    q: "How do you enter Visual Block mode (column selection)?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>v</kbd>", "<kbd>v</kbd>", "<kbd>V</kbd>", "<kbd>Ctrl</kbd>+<kbd>b</kbd>"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>v</kbd> enters Visual Block mode, letting you select a rectangular column of text."
  },
  {
    level: "intermediate",
    q: "Which key indents the current line one shiftwidth to the right in Normal mode?",
    opts: ["<kbd>></kbd><kbd>></kbd>", "<kbd><</kbd><kbd><</kbd>", "<kbd>Tab</kbd>", "<kbd>=</kbd><kbd>=</kbd>"],
    correct: 0,
    why: "<kbd>></kbd><kbd>></kbd> indents the line right; <kbd><</kbd><kbd><</kbd> indents left. <kbd>=</kbd><kbd>=</kbd> auto-indents per filetype rules."
  },
  {
    level: "intermediate",
    q: "What does <kbd>f</kbd><kbd>x</kbd> do (where x is a character)?",
    opts: ["Moves to the next <kbd>x</kbd> on the current line", "Finds <kbd>x</kbd> anywhere in the file", "Deletes up to <kbd>x</kbd>", "Inserts an x"],
    correct: 0,
    why: "<kbd>f</kbd><kbd>x</kbd> jumps the cursor forward to the next occurrence of <kbd>x</kbd> on the line. <kbd>F</kbd><kbd>x</kbd> searches backward."
  },
  {
    level: "intermediate",
    q: "What does <kbd>t</kbd><kbd>x</kbd> do, versus <kbd>f</kbd><kbd>x</kbd>?",
    opts: ["Stops just BEFORE the next <kbd>x</kbd>; <kbd>f</kbd><kbd>x</kbd> lands ON it", "Identical to <kbd>f</kbd><kbd>x</kbd>", "Searches backward", "Deletes to x"],
    correct: 0,
    why: "<kbd>t</kbd><kbd>x</kbd> moves \"till\" just before the character; <kbd>f</kbd><kbd>x</kbd> moves onto it. Both are handy with operators like <kbd>d</kbd><kbd>t</kbd><kbd>x</kbd>."
  },
  {
    level: "intermediate",
    q: "After an <kbd>f</kbd> or <kbd>t</kbd> search, which key repeats it in the same direction?",
    opts: ["<kbd>;</kbd>", "<kbd>,</kbd>", "<kbd>n</kbd>", "<kbd>.</kbd>"],
    correct: 0,
    why: "<kbd>;</kbd> repeats the last <kbd>f</kbd>/<kbd>F</kbd>/<kbd>t</kbd>/<kbd>T</kbd> in the same direction; <kbd>,</kbd> repeats it in the opposite direction."
  },
  {
    level: "intermediate",
    q: "How do you yank into the named register <code class='cmd'>a</code>?",
    opts: ["<kbd>\"</kbd><kbd>a</kbd><kbd>y</kbd><kbd>y</kbd>", "<kbd>y</kbd><kbd>a</kbd>", "<kbd>@</kbd><kbd>a</kbd>", "<kbd>m</kbd><kbd>a</kbd><kbd>y</kbd>"],
    correct: 0,
    why: "Prefix a yank with <kbd>\"</kbd><kbd>a</kbd> to target register <code class='cmd'>a</code>: <kbd>\"</kbd><kbd>a</kbd><kbd>y</kbd><kbd>y</kbd> yanks the line into register a. Put it back with <kbd>\"</kbd><kbd>a</kbd><kbd>p</kbd>."
  },
  {
    level: "intermediate",
    q: "How do you record a macro into register <code class='cmd'>q</code>?",
    opts: ["<kbd>q</kbd><kbd>q</kbd> ... then <kbd>q</kbd> to stop", "<kbd>m</kbd><kbd>q</kbd> ... <kbd>m</kbd>", "<kbd>@</kbd><kbd>q</kbd>", "<code class='cmd'>:rec q</code>"],
    correct: 0,
    why: "<kbd>q</kbd><kbd>q</kbd> starts recording into register <code class='cmd'>q</code>; perform your edits, then press <kbd>q</kbd> again to stop."
  },
  {
    level: "intermediate",
    q: "How do you replay the macro stored in register <code class='cmd'>q</code>?",
    opts: ["<kbd>@</kbd><kbd>q</kbd>", "<kbd>q</kbd><kbd>q</kbd>", "<kbd>\"</kbd><kbd>q</kbd><kbd>p</kbd>", "<kbd>Ctrl</kbd>+<kbd>q</kbd>"],
    correct: 0,
    why: "<kbd>@</kbd><kbd>q</kbd> plays the macro in register q. <kbd>@</kbd><kbd>@</kbd> repeats the last-run macro."
  },
  {
    level: "intermediate",
    q: "How do you run a macro in register <code class='cmd'>q</code> ten times?",
    opts: ["<kbd>1</kbd><kbd>0</kbd><kbd>@</kbd><kbd>q</kbd>", "<kbd>@</kbd><kbd>q</kbd><kbd>1</kbd><kbd>0</kbd>", "<kbd>q</kbd><kbd>1</kbd><kbd>0</kbd>", "<code class='cmd'>:macro 10 q</code>"],
    correct: 0,
    why: "A count before <kbd>@</kbd><kbd>q</kbd> repeats the macro. <kbd>1</kbd><kbd>0</kbd><kbd>@</kbd><kbd>q</kbd> runs it ten times."
  },
  {
    level: "intermediate",
    q: "Which command opens a horizontal split window?",
    opts: ["<code class='cmd'>:sp</code> (or <code class='cmd'>:split</code>)", "<code class='cmd'>:vs</code>", "<code class='cmd'>:tabnew</code>", "<code class='cmd'>:new -h</code>"],
    correct: 0,
    why: "<code class='cmd'>:sp</code> splits the window horizontally (one above the other). <code class='cmd'>:vsp</code> splits vertically."
  },
  {
    level: "intermediate",
    q: "Which command opens a vertical split?",
    opts: ["<code class='cmd'>:vsp</code> (or <code class='cmd'>:vsplit</code>)", "<code class='cmd'>:sp</code>", "<code class='cmd'>:tabe</code>", "<code class='cmd'>:vert new</code> only"],
    correct: 0,
    why: "<code class='cmd'>:vsp</code> creates a vertical split (side by side). <code class='cmd'>:sp</code> is horizontal."
  },
  {
    level: "intermediate",
    q: "How do you move between split windows?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>w</kbd> then a direction (<kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd>)", "<kbd>Ctrl</kbd>+<kbd>s</kbd>", "<kbd>Tab</kbd>", "<kbd>prefix</kbd> then arrow"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>w</kbd> is the window command prefix. Follow it with <kbd>h</kbd>/<kbd>j</kbd>/<kbd>k</kbd>/<kbd>l</kbd> (or an arrow) to move focus."
  },
  {
    level: "intermediate",
    q: "What is a vim buffer?",
    opts: ["An in-memory copy of a file you have opened", "A keyboard shortcut", "A type of register", "A window split"],
    correct: 0,
    why: "A buffer is the in-memory text of a file. You can have many buffers loaded and switch between them with <code class='cmd'>:bn</code>, <code class='cmd'>:bp</code>, or <code class='cmd'>:b name</code>."
  },
  {
    level: "intermediate",
    q: "Which command lists all open buffers?",
    opts: ["<code class='cmd'>:ls</code> (or <code class='cmd'>:buffers</code>)", "<code class='cmd'>:tabs</code>", "<code class='cmd'>:files all</code>", "<code class='cmd'>:reg</code>"],
    correct: 0,
    why: "<code class='cmd'>:ls</code> (alias <code class='cmd'>:buffers</code>) lists loaded buffers with their numbers, which you can then switch to with <code class='cmd'>:b N</code>."
  },
  {
    level: "intermediate",
    q: "How do you open a new tab page in vim?",
    opts: ["<code class='cmd'>:tabnew</code>", "<code class='cmd'>:sp</code>", "<code class='cmd'>:new</code>", "<code class='cmd'>:b new</code>"],
    correct: 0,
    why: "<code class='cmd'>:tabnew</code> (or <code class='cmd'>:tabe file</code>) opens a new tab page. Switch with <kbd>g</kbd><kbd>t</kbd> and <kbd>g</kbd><kbd>T</kbd>."
  },
  {
    level: "intermediate",
    q: "How do you go to the next tab page?",
    opts: ["<kbd>g</kbd><kbd>t</kbd>", "<kbd>g</kbd><kbd>n</kbd>", "<kbd>Ctrl</kbd>+<kbd>Tab</kbd> only", "<kbd>t</kbd><kbd>t</kbd>"],
    correct: 0,
    why: "<kbd>g</kbd><kbd>t</kbd> moves to the next tab page; <kbd>g</kbd><kbd>T</kbd> moves to the previous one."
  },
  {
    level: "intermediate",
    q: "How do you repeat the last <code class='cmd'>:s</code> substitution on the current line?",
    opts: ["<kbd>&</kbd>", "<kbd>.</kbd>", "<kbd>;</kbd>", "<code class='cmd'>:s</code>"],
    correct: 0,
    why: "<kbd>&</kbd> repeats the last substitute command on the current line (without its flags). <code class='cmd'>:%s//~/&</code> can re-run it file-wide."
  },
  {
    level: "intermediate",
    q: "What does <kbd>g</kbd><kbd>U</kbd><kbd>i</kbd><kbd>w</kbd> do?",
    opts: ["Uppercases the inner word under the cursor", "Undoes a word change", "Deletes a word", "Lowercases a word"],
    correct: 0,
    why: "<kbd>g</kbd><kbd>U</kbd> is the uppercase operator. Combined with the <kbd>i</kbd><kbd>w</kbd> text object it uppercases the current word. <kbd>g</kbd><kbd>u</kbd> lowercases."
  },
  {
    level: "intermediate",
    q: "How do you reselect the last visual selection?",
    opts: ["<kbd>g</kbd><kbd>v</kbd>", "<kbd>v</kbd><kbd>v</kbd>", "<kbd>'</kbd><kbd>v</kbd>", "<kbd>Ctrl</kbd>+<kbd>v</kbd>"],
    correct: 0,
    why: "<kbd>g</kbd><kbd>v</kbd> reselects the region of the previous Visual-mode selection."
  },

  /* ===================== ADVANCED ===================== */
  {
    level: "advanced",
    q: "What does <code class='cmd'>:g/TODO/d</code> do?",
    opts: ["Deletes every line containing <code class='cmd'>TODO</code>", "Deletes the first TODO line", "Highlights TODO lines", "Goes to the next TODO"],
    correct: 0,
    why: "The global command <code class='cmd'>:g/pattern/cmd</code> runs an ex command on every matching line. Here <code class='cmd'>:g/TODO/d</code> deletes all lines containing TODO."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>:v/foo/d</code> (or <code class='cmd'>:g!/foo/d</code>) do?",
    opts: ["Deletes every line that does NOT contain <code class='cmd'>foo</code>", "Deletes lines containing foo", "Validates the file", "Views matches"],
    correct: 0,
    why: "<code class='cmd'>:v</code> (inverse of <code class='cmd'>:g</code>) runs the command on lines that do NOT match, so <code class='cmd'>:v/foo/d</code> keeps only the lines containing foo."
  },
  {
    level: "advanced",
    q: "In a substitution, what does <code class='cmd'>&</code> in the replacement represent?",
    opts: ["The entire matched text", "A literal ampersand", "The first capture group", "The cursor position"],
    correct: 0,
    why: "In the replacement part, <code class='cmd'>&</code> (or <code class='cmd'>\\0</code>) inserts the whole match. For example <code class='cmd'>:%s/\\d\\+/[&]/g</code> wraps each number in brackets."
  },
  {
    level: "advanced",
    q: "In <code class='cmd'>:%s/\\(\\w\\+\\) \\(\\w\\+\\)/\\2 \\1/</code>, what does <code class='cmd'>\\1</code> and <code class='cmd'>\\2</code> do?",
    opts: ["Reference the first and second capture groups (swapping two words)", "Repeat the match twice", "Match digits 1 and 2", "Set line numbers"],
    correct: 0,
    why: "<code class='cmd'>\\(...\\)</code> captures groups; <code class='cmd'>\\1</code>, <code class='cmd'>\\2</code> back-reference them in the replacement. This example swaps two adjacent words."
  },
  {
    level: "advanced",
    q: "What does the numbered register <code class='cmd'>\"0</code> contain?",
    opts: ["The most recent yank (not deletes)", "The most recent delete", "The current line", "Macro q"],
    correct: 0,
    why: "Register <code class='cmd'>\"0</code> always holds the last yank. Deletes go into <code class='cmd'>\"1</code>-<code class='cmd'>\"9</code> (a shifting ring), so a yank survives even after intervening deletes."
  },
  {
    level: "advanced",
    q: "What is special about registers <code class='cmd'>\"1</code> through <code class='cmd'>\"9</code>?",
    opts: ["They form a ring of the last nine deletes/changes", "They store macros only", "They are read-only", "They hold marks"],
    correct: 0,
    why: "The numbered delete registers shift: the newest big delete goes to <code class='cmd'>\"1</code> and older ones shift toward <code class='cmd'>\"9</code>. Yanks instead land in <code class='cmd'>\"0</code>."
  },
  {
    level: "advanced",
    q: "How do you jump back to your previous cursor location after a big jump (e.g. <kbd>G</kbd>)?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>o</kbd>", "<kbd>Ctrl</kbd>+<kbd>i</kbd>", "<kbd>`</kbd><kbd>`</kbd> only", "<kbd>g</kbd><kbd>o</kbd>"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>o</kbd> goes back through the jump list to older positions; <kbd>Ctrl</kbd>+<kbd>i</kbd> (or <kbd>Tab</kbd>) goes forward again."
  },
  {
    level: "advanced",
    q: "What does <kbd>Ctrl</kbd>+<kbd>i</kbd> do in the jump list?",
    opts: ["Moves forward to a newer position in the jump list", "Moves back to an older position", "Inserts a tab", "Indents"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>i</kbd> goes forward in the jump list (the opposite of <kbd>Ctrl</kbd>+<kbd>o</kbd>). It is the same key as <kbd>Tab</kbd>."
  },
  {
    level: "advanced",
    q: "What does <kbd>`</kbd><kbd>`</kbd> (two backticks) do?",
    opts: ["Jumps to the position before the last jump", "Jumps to the file start", "Repeats a macro", "Sets a mark"],
    correct: 0,
    why: "<kbd>`</kbd><kbd>`</kbd> jumps to where the cursor was before the latest jump, toggling between two spots. The <code class='cmd'>`</code> mark is set automatically."
  },
  {
    level: "advanced",
    q: "What does <kbd>z</kbd><kbd>f</kbd> create in a Visual selection (or with a motion)?",
    opts: ["A fold over the selected lines", "A new file", "A function", "A mark"],
    correct: 0,
    why: "<kbd>z</kbd><kbd>f</kbd> creates a manual fold over the selected range. <kbd>z</kbd><kbd>o</kbd> opens a fold, <kbd>z</kbd><kbd>c</kbd> closes one, <kbd>z</kbd><kbd>a</kbd> toggles."
  },
  {
    level: "advanced",
    q: "Which key toggles a fold open/closed under the cursor?",
    opts: ["<kbd>z</kbd><kbd>a</kbd>", "<kbd>z</kbd><kbd>z</kbd>", "<kbd>z</kbd><kbd>f</kbd>", "<kbd>z</kbd><kbd>t</kbd>"],
    correct: 0,
    why: "<kbd>z</kbd><kbd>a</kbd> toggles the fold under the cursor. (Beware: <kbd>z</kbd><kbd>z</kbd> centers the screen and is unrelated to folding.)"
  },
  {
    level: "advanced",
    q: "What does <kbd>z</kbd><kbd>z</kbd> do?",
    opts: ["Scrolls so the current line is centered on screen", "Closes a fold", "Saves and quits", "Deletes the line"],
    correct: 0,
    why: "<kbd>z</kbd><kbd>z</kbd> redraws with the current line in the middle. <kbd>z</kbd><kbd>t</kbd> puts it at the top, <kbd>z</kbd><kbd>b</kbd> at the bottom."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>:g/^$/d</code> do?",
    opts: ["Deletes all empty (blank) lines", "Deletes lines starting with $", "Deletes the first line", "Adds blank lines"],
    correct: 0,
    why: "The pattern <code class='cmd'>^$</code> matches an empty line (start immediately followed by end). <code class='cmd'>:g/^$/d</code> removes every blank line."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>:g/pattern/normal @q</code> do?",
    opts: ["Runs macro q on every line matching the pattern", "Records a macro", "Searches for pattern", "Deletes matching lines"],
    correct: 0,
    why: "<code class='cmd'>:g/pattern/normal @q</code> executes the macro in register q as a Normal-mode command on each matching line, a powerful bulk-edit technique."
  },
  {
    level: "advanced",
    q: "In a Visual Block selection, how do you insert the same text at the start of every selected line?",
    opts: ["<kbd>Ctrl</kbd>+<kbd>v</kbd>, select lines, <kbd>I</kbd>, type, <kbd>Esc</kbd>", "<kbd>v</kbd>, type, <kbd>Esc</kbd>", "<kbd>V</kbd>, <kbd>i</kbd>, type", "<kbd>Ctrl</kbd>+<kbd>v</kbd>, <kbd>a</kbd>, type"],
    correct: 0,
    why: "In Visual Block mode, <kbd>I</kbd> inserts before the block; after you type and press <kbd>Esc</kbd>, the text is applied to every line in the block. <kbd>A</kbd> appends after."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>set number relativenumber</code> in <code class='cmd'>.vimrc</code> do?",
    opts: ["Shows the absolute line on the cursor line and relative offsets elsewhere", "Disables line numbers", "Numbers only matches", "Centers the cursor"],
    correct: 0,
    why: "Combining <code class='cmd'>number</code> and <code class='cmd'>relativenumber</code> gives a 'hybrid' gutter: the current line shows its real number, others show distance, making counts for motions easy."
  },
  {
    level: "advanced",
    q: "Where does vim read its user configuration from on a typical Unix setup?",
    opts: ["<code class='cmd'>~/.vimrc</code>", "<code class='cmd'>~/.vim.conf</code>", "<code class='cmd'>/etc/vim/init</code>", "<code class='cmd'>~/.config/vim.ini</code>"],
    correct: 0,
    why: "Vim reads <code class='cmd'>~/.vimrc</code> (Neovim uses <code class='cmd'>~/.config/nvim/init.vim</code> or <code class='cmd'>init.lua</code>). Reload it live with <code class='cmd'>:source ~/.vimrc</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>:%s/\\s\\+$//</code> do?",
    opts: ["Strips trailing whitespace from every line", "Removes all spaces", "Adds a space at line ends", "Collapses blank lines"],
    correct: 0,
    why: "<code class='cmd'>\\s\\+$</code> matches one or more whitespace characters at line end; replacing with nothing trims trailing whitespace across the whole file (<code class='cmd'>%</code>)."
  },
  {
    level: "advanced",
    q: "What does <kbd>Ctrl</kbd>+<kbd>a</kbd> do in Normal mode?",
    opts: ["Increments the number under (or after) the cursor", "Selects all text", "Appends text", "Adds a line"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>a</kbd> increments the next number on the line; <kbd>Ctrl</kbd>+<kbd>x</kbd> decrements it. A count, like <kbd>5</kbd><kbd>Ctrl</kbd>+<kbd>a</kbd>, adds 5."
  },
  {
    level: "advanced",
    q: "How do you read the output of a shell command into the current buffer?",
    opts: ["<code class='cmd'>:r !ls -l</code>", "<code class='cmd'>:!read ls</code>", "<code class='cmd'>:put ls</code>", "<code class='cmd'>:shell ls</code>"],
    correct: 0,
    why: "<code class='cmd'>:r !command</code> (read) inserts the command's stdout below the cursor. <code class='cmd'>:r file</code> inserts a file's contents."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>:'a,'b s/foo/bar/g</code> do?",
    opts: ["Substitutes between marks a and b", "Substitutes the whole file", "Substitutes the current line only", "Creates marks a and b"],
    correct: 0,
    why: "A range can be given by marks: <code class='cmd'>'a,'b</code> means from mark a to mark b. The substitution applies only within that range."
  },
  {
    level: "advanced",
    q: "What does <kbd>:</kbd><kbd>.</kbd><kbd>,</kbd><kbd>$</kbd> as a range refer to?",
    opts: ["From the current line to the last line", "The whole file", "Only the last line", "From the first line to the cursor"],
    correct: 0,
    why: "<code class='cmd'>.</code> is the current line and <code class='cmd'>$</code> is the last line, so <code class='cmd'>:.,$</code> targets from here to the end. <code class='cmd'>%</code> is shorthand for <code class='cmd'>1,$</code> (all lines)."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>q:</code> open?",
    opts: ["The command-line history window (editable)", "A quit prompt", "A macro recorder", "The quickfix list"],
    correct: 0,
    why: "<code class='cmd'>q:</code> opens the command-line window: a scrollable, editable history of ex commands. Press <kbd>Enter</kbd> on a line to run it. (<code class='cmd'>q/</code> does the same for search history.)"
  },
  {
    level: "advanced",
    q: "What does the <code class='cmd'>.</code> register (<code class='cmd'>\".</code>) hold?",
    opts: ["The last inserted text", "The current filename", "The last search", "The last command"],
    correct: 0,
    why: "The <code class='cmd'>\".</code> register contains the most recently inserted text. <code class='cmd'>\"%</code> holds the current file name, <code class='cmd'>\"/</code> the last search pattern."
  },
  {
    level: "advanced",
    q: "How do you make <kbd>Ctrl</kbd>+<kbd>w</kbd> then <kbd>=</kbd> behave, regarding splits?",
    opts: ["Equalizes the size of all split windows", "Closes all splits", "Opens a new split", "Maximizes the current split"],
    correct: 0,
    why: "<kbd>Ctrl</kbd>+<kbd>w</kbd> <kbd>=</kbd> resizes all windows to equal sizes. <kbd>Ctrl</kbd>+<kbd>w</kbd> <kbd>o</kbd> makes the current window the only one (closes the others)."
  }

];
