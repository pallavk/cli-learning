/*
 * sed (stream editor) quiz question bank.
 * ----------------------------------------------------------------------------
 * Edit this file to add/remove questions. The HTML loads it via <script src>,
 * so changes appear on the next page refresh -- no server needed.
 *
 * Each question object:
 *   level   : "beginner" | "intermediate" | "advanced"
 *   q       : the question text (may contain <code class='cmd'> HTML)
 *   opts    : array of answer strings (2-5 of them)
 *   correct : index into opts of the right answer
 *   why     : explanation shown after answering
 *
 * Option order is shuffled at runtime, so position does not matter.
 * Examples assume GNU sed unless a question explicitly contrasts BSD/macOS.
 */
window.SED_QUESTIONS = [

  /* ===================== BEGINNER ===================== */
  {
    level: "beginner",
    q: "What does the <code class='cmd'>s</code> in <code class='cmd'>sed 's/cat/dog/'</code> stand for?",
    opts: ["substitute", "search", "select", "split"],
    correct: 0,
    why: "<code class='cmd'>s</code> is the substitute command: <code class='cmd'>s/regexp/replacement/</code> finds text matching the regexp and replaces it."
  },
  {
    level: "beginner",
    q: "By default, <code class='cmd'>sed 's/a/b/' file</code> replaces how many matches per line?",
    opts: ["Only the first match on each line", "Every match on every line", "Only the first match in the whole file", "All matches but only on line 1"],
    correct: 0,
    why: "Without the <code class='cmd'>g</code> flag, <code class='cmd'>s</code> replaces only the first occurrence on each line. Every line is still processed."
  },
  {
    level: "beginner",
    q: "What does the <code class='cmd'>g</code> flag do in <code class='cmd'>sed 's/a/b/g'</code>?",
    opts: ["Replaces all occurrences on each line", "Replaces across the entire file globally as one unit", "Makes the match case-insensitive", "Prints the line"],
    correct: 0,
    why: "<code class='cmd'>g</code> means global within a line -- it replaces every match on that line, not just the first. It does not mean across the whole file."
  },
  {
    level: "beginner",
    q: "Does <code class='cmd'>sed 's/old/new/'</code> modify the input file by default?",
    opts: ["No, it writes the result to standard output", "Yes, it edits the file in place", "Yes, but only if the file is writable", "It creates a .bak copy"],
    correct: 0,
    why: "sed is a stream editor: by default it leaves the file untouched and prints the transformed text to stdout. Use <code class='cmd'>-i</code> to edit in place."
  },
  {
    level: "beginner",
    q: "How do you delete line 3 of a file?",
    opts: ["<code class='cmd'>sed '3d' file</code>", "<code class='cmd'>sed 'd3' file</code>", "<code class='cmd'>sed '3,d' file</code>", "<code class='cmd'>sed 'delete 3' file</code>"],
    correct: 0,
    why: "The address <code class='cmd'>3</code> selects line 3 and <code class='cmd'>d</code> deletes it from the output. The line is just not printed."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>$</code> mean as an address, e.g. <code class='cmd'>sed '$d'</code>?",
    opts: ["The last line of input", "The end of every line", "A literal dollar sign", "Line zero"],
    correct: 0,
    why: "As an address, <code class='cmd'>$</code> matches the last line. So <code class='cmd'>sed '$d'</code> deletes the final line."
  },
  {
    level: "beginner",
    q: "How do you delete lines 2 through 5?",
    opts: ["<code class='cmd'>sed '2,5d' file</code>", "<code class='cmd'>sed '2-5d' file</code>", "<code class='cmd'>sed '2..5d' file</code>", "<code class='cmd'>sed 'd2,5' file</code>"],
    correct: 0,
    why: "A range uses a comma: <code class='cmd'>2,5</code> selects lines 2 to 5 inclusive, and <code class='cmd'>d</code> deletes them."
  },
  {
    level: "beginner",
    q: "What does the <code class='cmd'>-n</code> option do?",
    opts: ["Suppresses the automatic printing of every line", "Numbers the output lines", "Disables regex", "Runs in quiet mode with no errors"],
    correct: 0,
    why: "<code class='cmd'>-n</code> turns off sed's default auto-print, so nothing is shown unless you explicitly print with <code class='cmd'>p</code>."
  },
  {
    level: "beginner",
    q: "Which command prints only line 4 of a file?",
    opts: ["<code class='cmd'>sed -n '4p' file</code>", "<code class='cmd'>sed '4p' file</code>", "<code class='cmd'>sed 'p4' file</code>", "<code class='cmd'>sed -n '4d' file</code>"],
    correct: 0,
    why: "<code class='cmd'>-n</code> stops auto-printing, then <code class='cmd'>4p</code> explicitly prints line 4. Without <code class='cmd'>-n</code>, line 4 would print twice."
  },
  {
    level: "beginner",
    q: "Why does <code class='cmd'>sed '2p' file</code> (no <code class='cmd'>-n</code>) print line 2 twice?",
    opts: ["Auto-print shows every line, and 'p' prints line 2 an extra time", "It is a bug in sed", "The p command always doubles output", "Because 2 is even"],
    correct: 0,
    why: "By default sed auto-prints each line; <code class='cmd'>p</code> on line 2 adds a second copy. Pair <code class='cmd'>p</code> with <code class='cmd'>-n</code> to print just once."
  },
  {
    level: "beginner",
    q: "How do you substitute only on lines matching a regex, e.g. replace 'foo' with 'bar' only on lines containing 'error'?",
    opts: ["<code class='cmd'>sed '/error/s/foo/bar/' file</code>", "<code class='cmd'>sed 's/error/foo/bar/' file</code>", "<code class='cmd'>sed 'error:s/foo/bar/' file</code>", "<code class='cmd'>sed -e error 's/foo/bar/'</code>"],
    correct: 0,
    why: "A <code class='cmd'>/regex/</code> address before a command restricts it to matching lines. Here only lines containing 'error' get the substitution."
  },
  {
    level: "beginner",
    q: "How do you run two separate sed commands in one invocation?",
    opts: ["<code class='cmd'>sed -e 's/a/b/' -e 's/c/d/' file</code>", "<code class='cmd'>sed 's/a/b/' 's/c/d/' file</code>", "<code class='cmd'>sed -2 's/a/b/;s/c/d/'</code>", "<code class='cmd'>sed --and 's/a/b/'</code>"],
    correct: 0,
    why: "Each <code class='cmd'>-e</code> adds a script; you can also separate commands with a semicolon: <code class='cmd'>sed 's/a/b/;s/c/d/'</code>."
  },
  {
    level: "beginner",
    q: "What does a semicolon do in <code class='cmd'>sed 's/a/b/;s/c/d/'</code>?",
    opts: ["Separates the two commands in one script", "Comments out the rest", "Repeats the first command", "Escapes the slash"],
    correct: 0,
    why: "Semicolons separate multiple commands within a single sed script, equivalent to using multiple <code class='cmd'>-e</code> options."
  },
  {
    level: "beginner",
    q: "How do you print the whole file unchanged (the simplest no-op)?",
    opts: ["<code class='cmd'>sed '' file</code>", "<code class='cmd'>sed -n '' file</code>", "<code class='cmd'>sed 'noop' file</code>", "<code class='cmd'>sed -x file</code>"],
    correct: 0,
    why: "An empty script does nothing but auto-print, so <code class='cmd'>sed '' file</code> echoes the file. <code class='cmd'>-n</code> would suppress that and print nothing."
  },
  {
    level: "beginner",
    q: "Which delimiter is used in <code class='cmd'>s</code> commands by convention but can be changed?",
    opts: ["<code class='cmd'>/</code> (forward slash), but any char works", "Only <code class='cmd'>/</code>, it cannot change", "A space", "A semicolon"],
    correct: 0,
    why: "<code class='cmd'>/</code> is conventional, but you may use any character: <code class='cmd'>s#/usr#/opt#</code> avoids escaping slashes in paths."
  },
  {
    level: "beginner",
    q: "Why is <code class='cmd'>sed 's#/usr/bin#/opt/bin#'</code> handy?",
    opts: ["Using # as the delimiter avoids escaping the slashes in the paths", "It runs faster", "# means comment so it is ignored", "It enables global replace"],
    correct: 0,
    why: "Picking an alternate delimiter like <code class='cmd'>#</code> means the slashes inside the paths do not need backslash escaping."
  },
  {
    level: "beginner",
    q: "How do you print only the first 3 lines of a file with sed?",
    opts: ["<code class='cmd'>sed -n '1,3p' file</code>", "<code class='cmd'>sed '1,3p' file</code>", "<code class='cmd'>sed -n '3p' file</code>", "<code class='cmd'>sed 'head 3' file</code>"],
    correct: 0,
    why: "<code class='cmd'>-n '1,3p'</code> suppresses default output and prints the line range 1-3, mimicking <code class='cmd'>head -3</code>."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>sed -n '$p' file</code> print?",
    opts: ["The last line of the file", "The first line", "Every line", "Nothing"],
    correct: 0,
    why: "<code class='cmd'>$</code> addresses the last line and <code class='cmd'>p</code> prints it; <code class='cmd'>-n</code> stops everything else from printing. This mimics <code class='cmd'>tail -1</code>."
  },
  {
    level: "beginner",
    q: "How do you make a substitution case-insensitive in GNU sed?",
    opts: ["Add the <code class='cmd'>I</code> flag: <code class='cmd'>s/foo/bar/I</code>", "Add <code class='cmd'>-c</code>", "Add the <code class='cmd'>i</code> command", "Use uppercase S"],
    correct: 0,
    why: "The <code class='cmd'>I</code> flag on the <code class='cmd'>s</code> command makes the regex match ignore case (GNU extension)."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>sed '5q' file</code> do?",
    opts: ["Prints lines 1-5 then quits", "Deletes line 5", "Prints only line 5", "Quits silently"],
    correct: 0,
    why: "<code class='cmd'>q</code> quits sed (after auto-printing the current line). At line 5 it prints that line then stops, so you see lines 1-5."
  },
  {
    level: "beginner",
    q: "How do you replace 'colour' with 'color' on every line, every occurrence?",
    opts: ["<code class='cmd'>sed 's/colour/color/g' file</code>", "<code class='cmd'>sed 's/colour/color/' file</code>", "<code class='cmd'>sed 'g/colour/color/' file</code>", "<code class='cmd'>sed -g 's/colour/color/'</code>"],
    correct: 0,
    why: "The <code class='cmd'>g</code> flag makes the substitution replace all occurrences on each line, not just the first."
  },
  {
    level: "beginner",
    q: "Which is true about how sed reads input?",
    opts: ["It reads input one line at a time into the pattern space and applies commands", "It loads the whole file into memory at once", "It only works on files, never stdin", "It processes characters, not lines"],
    correct: 0,
    why: "sed reads input line by line into the pattern space, runs the script against it, prints (unless <code class='cmd'>-n</code>), then moves to the next line."
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    level: "intermediate",
    q: "What does <code class='cmd'>&</code> mean in the replacement of <code class='cmd'>sed 's/[0-9]*/(&)/'</code>?",
    opts: ["The entire matched text", "The first capture group", "An empty string", "A literal ampersand"],
    correct: 0,
    why: "In the replacement, <code class='cmd'>&</code> stands for the whole matched string. Here a number gets wrapped in parentheses. Escape as <code class='cmd'>\\&</code> for a literal."
  },
  {
    level: "intermediate",
    q: "In <code class='cmd'>sed -E 's/(a)(b)/\\2\\1/'</code>, what does <code class='cmd'>\\2\\1</code> produce?",
    opts: ["Swaps the captured groups: 'ba'", "Repeats group 2 twice", "Literal backslashes", "An error"],
    correct: 0,
    why: "<code class='cmd'>\\1</code>, <code class='cmd'>\\2</code> are back-references to capture groups in the replacement. Swapping them turns 'ab' into 'ba'."
  },
  {
    level: "intermediate",
    q: "In basic regex (BRE, default sed), how do you write a capturing group?",
    opts: ["<code class='cmd'>\\(...\\)</code> with escaped parentheses", "<code class='cmd'>(...)</code> unescaped", "<code class='cmd'>{...}</code>", "<code class='cmd'>[...]</code>"],
    correct: 0,
    why: "In BRE, parentheses are literal unless escaped, so groups are <code class='cmd'>\\(...\\)</code>. With <code class='cmd'>-E</code>/<code class='cmd'>-r</code> (ERE) you write plain <code class='cmd'>(...)</code>."
  },
  {
    level: "intermediate",
    q: "What do <code class='cmd'>-E</code> and <code class='cmd'>-r</code> do in GNU sed?",
    opts: ["Both enable extended regular expressions (ERE)", "-E enables ERE, -r reverses output", "They are unrelated to regex", "Both edit in place"],
    correct: 0,
    why: "In GNU sed, <code class='cmd'>-E</code> and <code class='cmd'>-r</code> are synonyms that turn on ERE, so <code class='cmd'>+ ? ( ) { } |</code> work without backslashes. <code class='cmd'>-E</code> is the portable spelling."
  },
  {
    level: "intermediate",
    q: "In default BRE, how do you match 'one or more digits'?",
    opts: ["<code class='cmd'>[0-9]\\+</code> (backslash before +)", "<code class='cmd'>[0-9]+</code>", "<code class='cmd'>[0-9]*+</code>", "<code class='cmd'>\\d+</code>"],
    correct: 0,
    why: "In BRE, <code class='cmd'>+</code> is literal; the 'one or more' operator is <code class='cmd'>\\+</code>. In ERE (<code class='cmd'>-E</code>) you would write <code class='cmd'>[0-9]+</code>."
  },
  {
    level: "intermediate",
    q: "How do you edit a file in place with GNU sed?",
    opts: ["<code class='cmd'>sed -i 's/a/b/' file</code>", "<code class='cmd'>sed -i='' 's/a/b/' file</code>", "<code class='cmd'>sed --inplace=yes 's/a/b/'</code>", "<code class='cmd'>sed -w 's/a/b/' file</code>"],
    correct: 0,
    why: "GNU <code class='cmd'>-i</code> takes no argument and edits the file directly. Give it a suffix like <code class='cmd'>-i.bak</code> to also keep a backup."
  },
  {
    level: "intermediate",
    q: "How do you make an in-place edit AND keep a backup of the original as file.bak?",
    opts: ["<code class='cmd'>sed -i.bak 's/a/b/' file</code>", "<code class='cmd'>sed -i -b 's/a/b/' file</code>", "<code class='cmd'>sed --backup 's/a/b/'</code>", "<code class='cmd'>sed -i 's/a/b/' file.bak</code>"],
    correct: 0,
    why: "GNU sed appends the suffix you attach to <code class='cmd'>-i</code> to make a backup: <code class='cmd'>-i.bak</code> writes file.bak before editing file."
  },
  {
    level: "intermediate",
    q: "On macOS / BSD sed, what is the correct in-place edit with no backup?",
    opts: ["<code class='cmd'>sed -i '' 's/a/b/' file</code>", "<code class='cmd'>sed -i 's/a/b/' file</code>", "<code class='cmd'>sed -inplace 's/a/b/'</code>", "<code class='cmd'>sed -i- 's/a/b/'</code>"],
    correct: 0,
    why: "BSD/macOS <code class='cmd'>-i</code> requires an explicit suffix argument; pass an empty string <code class='cmd'>-i ''</code> for no backup. Omitting it is the classic portability bug."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>!</code> after an address do, e.g. <code class='cmd'>sed '3!d'</code>?",
    opts: ["Negates the address: applies the command to all lines EXCEPT line 3", "Forces the command", "Deletes line 3 only", "Repeats line 3"],
    correct: 0,
    why: "<code class='cmd'>!</code> inverts the address. <code class='cmd'>3!d</code> deletes every line except line 3, so only line 3 remains."
  },
  {
    level: "intermediate",
    q: "What does the <code class='cmd'>p</code> flag on a substitution do, e.g. <code class='cmd'>sed -n 's/foo/bar/p'</code>?",
    opts: ["Prints only lines where the substitution succeeded", "Prints every line", "Prints the pattern", "Pauses output"],
    correct: 0,
    why: "The <code class='cmd'>p</code> flag prints the line only if the substitution actually happened. With <code class='cmd'>-n</code>, you get just the changed lines."
  },
  {
    level: "intermediate",
    q: "What does the number flag do in <code class='cmd'>sed 's/x/y/2'</code>?",
    opts: ["Replaces only the 2nd occurrence of x on each line", "Replaces the first 2 occurrences", "Replaces on line 2", "Runs twice"],
    correct: 0,
    why: "A numeric flag N replaces only the Nth match on the line. Combine with <code class='cmd'>g</code> as <code class='cmd'>2g</code> to replace from the 2nd match onward."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>sed 's/x/y/3g'</code> do?",
    opts: ["Replaces the 3rd and all later occurrences on each line", "Replaces only the 3rd occurrence", "Replaces 3 lines", "Is invalid syntax"],
    correct: 0,
    why: "Combining a number with <code class='cmd'>g</code> means 'from the Nth match to the end of the line'. So <code class='cmd'>3g</code> replaces the 3rd, 4th, 5th... matches."
  },
  {
    level: "intermediate",
    q: "How do you append a new line of text after every line matching 'foo'?",
    opts: ["<code class='cmd'>sed '/foo/a added text' file</code>", "<code class='cmd'>sed '/foo/p added' file</code>", "<code class='cmd'>sed 's/foo/+added/'</code>", "<code class='cmd'>sed '/foo/append text'</code>"],
    correct: 0,
    why: "The <code class='cmd'>a</code> command appends a line of text after the matched line. <code class='cmd'>i</code> inserts before, and <code class='cmd'>c</code> replaces the line."
  },
  {
    level: "intermediate",
    q: "What does the <code class='cmd'>c</code> command do, e.g. <code class='cmd'>sed '/foo/c replaced'</code>?",
    opts: ["Changes (replaces) the whole matched line with new text", "Copies the line", "Counts matches", "Comments the line"],
    correct: 0,
    why: "<code class='cmd'>c</code> replaces the entire selected line(s) with the given text. For a range, the whole range becomes one replacement."
  },
  {
    level: "intermediate",
    q: "Which command writes only matching lines to a separate file?",
    opts: ["<code class='cmd'>sed -n '/error/w errors.log' file</code>", "<code class='cmd'>sed '/error/save errors.log'</code>", "<code class='cmd'>sed -o errors.log '/error/'</code>", "<code class='cmd'>sed '/error/>errors.log'</code>"],
    correct: 0,
    why: "The <code class='cmd'>w</code> command writes the pattern space to a file. <code class='cmd'>/error/w errors.log</code> saves matching lines; the <code class='cmd'>s///w file</code> flag does the same for substituted lines."
  },
  {
    level: "intermediate",
    q: "How do you delete blank (empty) lines?",
    opts: ["<code class='cmd'>sed '/^$/d' file</code>", "<code class='cmd'>sed '/blank/d' file</code>", "<code class='cmd'>sed 's/^$//d'</code>", "<code class='cmd'>sed -b d</code>"],
    correct: 0,
    why: "<code class='cmd'>^$</code> matches a line with nothing between start and end (an empty line); <code class='cmd'>d</code> deletes those."
  },
  {
    level: "intermediate",
    q: "What does the <code class='cmd'>y</code> command do, e.g. <code class='cmd'>sed 'y/abc/xyz/'</code>?",
    opts: ["Transliterates characters: a->x, b->y, c->z", "Substitutes the string 'abc' with 'xyz'", "Yanks lines into the hold space", "Matches a or b or c"],
    correct: 0,
    why: "<code class='cmd'>y</code> maps each character in the first set to the same position in the second (like <code class='cmd'>tr</code>). The two sets must be equal length, and it is not a regex."
  },
  {
    level: "intermediate",
    q: "How do you print lines from the first match of /START/ to the first match of /END/?",
    opts: ["<code class='cmd'>sed -n '/START/,/END/p' file</code>", "<code class='cmd'>sed -n '/START END/p' file</code>", "<code class='cmd'>sed '/START/+/END/p'</code>", "<code class='cmd'>sed -n 'START,ENDp'</code>"],
    correct: 0,
    why: "You can use two regex addresses as a range: <code class='cmd'>/START/,/END/</code> selects from a line matching START through the next line matching END."
  },
  {
    level: "intermediate",
    q: "How do you strip leading whitespace from every line?",
    opts: ["<code class='cmd'>sed 's/^[ \\t]*//' file</code>", "<code class='cmd'>sed 's/ *$//' file</code>", "<code class='cmd'>sed 'd/^ /'</code>", "<code class='cmd'>sed 's/^//g'</code>"],
    correct: 0,
    why: "<code class='cmd'>^[ \\t]*</code> matches any run of spaces/tabs at the start of the line and replaces it with nothing. <code class='cmd'>[ \\t]*$</code> would trim trailing whitespace."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>sed -n '2~3p' file</code> print (GNU)?",
    opts: ["Every 3rd line starting at line 2 (lines 2, 5, 8, ...)", "Lines 2 and 3", "Line 23", "Lines 2 through 3"],
    correct: 0,
    why: "The GNU <code class='cmd'>first~step</code> address selects line 'first' then every 'step' lines after. <code class='cmd'>2~3</code> means 2, 5, 8, 11..."
  },

  /* ===================== ADVANCED ===================== */
  {
    level: "advanced",
    q: "What does the GNU range <code class='cmd'>0,/re/</code> do that <code class='cmd'>1,/re/</code> does not?",
    opts: ["It can match /re/ on line 1 itself, ending the range at the very first match", "It starts at line 0 which does not exist", "It repeats the range", "Nothing, they are identical"],
    correct: 0,
    why: "With <code class='cmd'>1,/re/</code> the end regex is only tested from line 2 on, so a match on line 1 is missed. <code class='cmd'>0,/re/</code> lets the range end at the first match even if it is line 1 -- ideal for 'replace first occurrence only'."
  },
  {
    level: "advanced",
    q: "What is the hold space in sed?",
    opts: ["A second buffer, separate from the pattern space, that persists across lines", "A cache of regex matches", "The undo stack", "The output file"],
    correct: 0,
    why: "sed has two buffers: the pattern space (current line) and the hold space (an auxiliary store). The hold space survives across line cycles, enabling multi-line tricks."
  },
  {
    level: "advanced",
    q: "What does the <code class='cmd'>x</code> command do?",
    opts: ["Exchanges the contents of the pattern space and hold space", "Executes a shell command", "Deletes the line", "Extracts a match"],
    correct: 0,
    why: "<code class='cmd'>x</code> swaps pattern space and hold space. Combined with <code class='cmd'>h</code>/<code class='cmd'>H</code>/<code class='cmd'>g</code>/<code class='cmd'>G</code> it builds multi-line transformations."
  },
  {
    level: "advanced",
    q: "What is the difference between <code class='cmd'>h</code> and <code class='cmd'>H</code>?",
    opts: ["<code class='cmd'>h</code> overwrites the hold space; <code class='cmd'>H</code> appends a newline plus the pattern space to it", "<code class='cmd'>h</code> is for headers, <code class='cmd'>H</code> for footers", "They are identical", "<code class='cmd'>H</code> overwrites, <code class='cmd'>h</code> appends"],
    correct: 0,
    why: "<code class='cmd'>h</code> copies (replaces) the pattern space into the hold space; <code class='cmd'>H</code> appends it (with a leading newline). Likewise <code class='cmd'>g</code> replaces vs <code class='cmd'>G</code> appends in the other direction."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>g</code> (lowercase command, not the s-flag) do?",
    opts: ["Replaces the pattern space with the contents of the hold space", "Enables global substitution", "Gets the next line", "Goes to a label"],
    correct: 0,
    why: "As a command, <code class='cmd'>g</code> copies the hold space INTO the pattern space (overwriting it). <code class='cmd'>G</code> appends the hold space instead. Do not confuse this with the <code class='cmd'>g</code> flag on <code class='cmd'>s</code>."
  },
  {
    level: "advanced",
    q: "A classic way to reverse the lines of a file (tac) is <code class='cmd'>sed -n '1!G;h;$p'</code>. What is the hold space used for here?",
    opts: ["To accumulate already-seen lines in reverse so the last line ends up first", "To count lines", "To store regex matches", "Nothing, G is a no-op"],
    correct: 0,
    why: "Each line appends the hold space below itself (<code class='cmd'>G</code>), then saves the result back (<code class='cmd'>h</code>). The hold space grows as a reversed stack; <code class='cmd'>$p</code> prints it at the end."
  },
  {
    level: "advanced",
    q: "What does the <code class='cmd'>N</code> command do?",
    opts: ["Appends the next input line to the pattern space (with a newline)", "Numbers the line", "Negates the next command", "Starts a new file"],
    correct: 0,
    why: "<code class='cmd'>N</code> reads the next line and appends it to the pattern space, so you can write patterns that span two (or more) lines."
  },
  {
    level: "advanced",
    q: "Why can a regex like <code class='cmd'>s/foo\\nbar/X/</code> only work after an <code class='cmd'>N</code> command?",
    opts: ["Only then does the pattern space contain a newline between the two lines to match", "Newlines are illegal otherwise", "sed never matches newlines", "N enables multiline mode globally"],
    correct: 0,
    why: "Normally each line is in the pattern space without its trailing newline. <code class='cmd'>N</code> joins two lines with an embedded <code class='cmd'>\\n</code>, which your regex can then match across."
  },
  {
    level: "advanced",
    q: "What does a label defined with <code class='cmd'>:loop</code> combined with <code class='cmd'>b loop</code> create?",
    opts: ["An unconditional branch back to the label, forming a loop", "A comment", "A new pattern space", "A subroutine call that returns"],
    correct: 0,
    why: "<code class='cmd'>:loop</code> marks a position; <code class='cmd'>b loop</code> jumps to it unconditionally. Together they loop. <code class='cmd'>b</code> with no label branches to the end of the script."
  },
  {
    level: "advanced",
    q: "What does the <code class='cmd'>t</code> command do?",
    opts: ["Branches to a label only if a substitution has succeeded since the last line or t", "Always branches", "Tests for a file", "Transliterates"],
    correct: 0,
    why: "<code class='cmd'>t label</code> is a conditional branch: it jumps only if an <code class='cmd'>s</code> command changed the pattern space since the last input line or last <code class='cmd'>t</code>. It is key to substitute-until-stable loops."
  },
  {
    level: "advanced",
    q: "A common 'replace all, even overlapping/repeated' loop is <code class='cmd'>:a;s/  / /;ta</code>. What does it accomplish?",
    opts: ["Repeatedly collapses double spaces to single until none remain", "Adds spaces", "Deletes the line", "Reverses the line"],
    correct: 0,
    why: "<code class='cmd'>s/  / /</code> turns two spaces into one; <code class='cmd'>ta</code> loops back to label <code class='cmd'>a</code> while substitutions keep succeeding, squeezing runs of spaces down to one."
  },
  {
    level: "advanced",
    q: "How do you group multiple commands so they all apply to the same address, e.g. lines 1-5?",
    opts: ["<code class='cmd'>sed '1,5{s/a/b/;s/c/d/}' file</code>", "<code class='cmd'>sed '1,5(s/a/b/)' file</code>", "<code class='cmd'>sed '1,5[s/a/b/]'</code>", "<code class='cmd'>sed '1,5 s/a/b/ and s/c/d/'</code>"],
    correct: 0,
    why: "Curly braces <code class='cmd'>{ }</code> group commands under one address. Everything in <code class='cmd'>1,5{...}</code> runs only on lines 1 through 5."
  },
  {
    level: "advanced",
    q: "What is the difference between <code class='cmd'>q</code> and <code class='cmd'>Q</code> in GNU sed?",
    opts: ["<code class='cmd'>q</code> prints the current line then quits; <code class='cmd'>Q</code> quits immediately without auto-printing it", "They are identical", "<code class='cmd'>Q</code> prints, <code class='cmd'>q</code> does not", "<code class='cmd'>Q</code> quits with an error code only"],
    correct: 0,
    why: "<code class='cmd'>q</code> still auto-prints the pattern space before exiting; the GNU <code class='cmd'>Q</code> exits at once with no final print. Both can take an exit code, e.g. <code class='cmd'>q5</code>."
  },
  {
    level: "advanced",
    q: "In GNU sed, what does <code class='cmd'>\\U</code> in a replacement do, e.g. <code class='cmd'>s/.*/\\U&/</code>?",
    opts: ["Uppercases the following replacement text (here the whole match)", "Inserts a Unicode escape", "Undoes the substitution", "Matches uppercase only"],
    correct: 0,
    why: "GNU sed case-conversion escapes: <code class='cmd'>\\U</code> uppercases until <code class='cmd'>\\E</code>, <code class='cmd'>\\L</code> lowercases, and <code class='cmd'>\\u</code>/<code class='cmd'>\\l</code> affect just the next character."
  },
  {
    level: "advanced",
    q: "Why might <code class='cmd'>sed 's/.*foo//'</code> behave greedily and remove more than expected?",
    opts: ["sed regex is greedy: <code class='cmd'>.*</code> matches as much as possible, up to the LAST 'foo' on the line", "sed has no greedy matching", "<code class='cmd'>.*</code> matches nothing", "It only matches the first foo"],
    correct: 0,
    why: "POSIX sed regexes are greedy and have no lazy <code class='cmd'>*?</code> quantifier. <code class='cmd'>.*foo</code> extends to the last 'foo', so everything up to and including it is removed."
  },
  {
    level: "advanced",
    q: "How do you match a literal dot in a filename, e.g. delete lines containing 'file.txt'?",
    opts: ["<code class='cmd'>sed '/file\\.txt/d' file</code>", "<code class='cmd'>sed '/file.txt/d' file</code>", "<code class='cmd'>sed '/file[.]txt/d' file</code> only", "<code class='cmd'>sed '/file\\dtxt/d'</code>"],
    correct: 0,
    why: "Unescaped <code class='cmd'>.</code> matches any character, so it could match 'fileXtxt' too. Escape it as <code class='cmd'>\\.</code> (a bracket class <code class='cmd'>[.]</code> also works) to match a literal dot."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>sed ':a;N;$!ba;s/\\n/,/g'</code> do?",
    opts: ["Joins all lines of the file into one, separated by commas", "Deletes newlines randomly", "Reverses the file", "Counts the lines"],
    correct: 0,
    why: "The loop <code class='cmd'>:a;N;$!ba</code> slurps the whole file into the pattern space (appending every line until the last), then <code class='cmd'>s/\\n/,/g</code> replaces the embedded newlines with commas."
  },
  {
    level: "advanced",
    q: "Which addresses lines 10 through end-of-file?",
    opts: ["<code class='cmd'>sed -n '10,$p' file</code>", "<code class='cmd'>sed -n '10,EOFp' file</code>", "<code class='cmd'>sed -n '10..$p'</code>", "<code class='cmd'>sed -n '10-$p'</code>"],
    correct: 0,
    why: "<code class='cmd'>10,$</code> is a range from line 10 to the last line (<code class='cmd'>$</code>). With <code class='cmd'>-n ... p</code> it prints from line 10 onward, like <code class='cmd'>tail -n +10</code>."
  }

];
