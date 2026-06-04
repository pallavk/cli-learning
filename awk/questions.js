/*
 * awk quiz question bank.
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
 * Option order is shuffled at runtime, so position does not matter.
 */
window.AWK_QUESTIONS = [

  /* ===================== BEGINNER ===================== */
  {
    level: "beginner",
    q: "What does an awk program fundamentally consist of?",
    opts: ["A list of <code class='cmd'>pattern { action }</code> rules", "A single regular expression", "A shell loop", "A sequence of sed commands"],
    correct: 0,
    why: "awk runs a list of <code class='cmd'>pattern { action }</code> rules against each record. If the pattern matches, the action runs."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>$0</code> refer to?",
    opts: ["The whole current record (the entire line)", "The first field", "The last field", "The number of fields"],
    correct: 0,
    why: "<code class='cmd'>$0</code> is the entire current record; <code class='cmd'>$1</code>, <code class='cmd'>$2</code>&hellip; are individual fields."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>$1</code> refer to?",
    opts: ["The first field of the current record", "The first character", "The first file", "The whole line"],
    correct: 0,
    why: "Fields are numbered from 1, so <code class='cmd'>$1</code> is the first field as split on <code class='cmd'>FS</code>."
  },
  {
    level: "beginner",
    q: "What is the default field separator when you do not pass <code class='cmd'>-F</code>?",
    opts: ["Runs of whitespace (spaces and tabs)", "A single space only", "A comma", "A tab only"],
    correct: 0,
    why: "By default awk splits on runs of whitespace, and leading/trailing whitespace is ignored, so consecutive spaces collapse into one separator."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>$NF</code> give you?",
    opts: ["The last field of the record", "The number of fields", "The first field", "The record number"],
    correct: 0,
    why: "<code class='cmd'>NF</code> is the field count, so <code class='cmd'>$NF</code> dereferences it to the last field."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>NF</code> hold?",
    opts: ["The number of fields in the current record", "The last field's value", "The line number", "The filename"],
    correct: 0,
    why: "<code class='cmd'>NF</code> is the number of fields. Note <code class='cmd'>$NF</code> (with the dollar) is the value of that last field."
  },
  {
    level: "beginner",
    q: "Which command prints the first column of a colon-separated file like <code class='cmd'>/etc/passwd</code>?",
    opts: ["<code class='cmd'>awk -F: '{print $1}' /etc/passwd</code>", "<code class='cmd'>awk '{print -F: $1}'</code>", "<code class='cmd'>awk -c: '{print $1}'</code>", "<code class='cmd'>awk '$1' -F:</code>"],
    correct: 0,
    why: "<code class='cmd'>-F:</code> sets the field separator to a colon; <code class='cmd'>{print $1}</code> then prints the first field."
  },
  {
    level: "beginner",
    q: "If you write an action with no pattern, like <code class='cmd'>{print $1}</code>, when does it run?",
    opts: ["On every input line", "Only on the first line", "Only on the last line", "Only on blank lines"],
    correct: 0,
    why: "A rule with no pattern matches every record, so the action runs on every line."
  },
  {
    level: "beginner",
    q: "If you give a pattern with no action, like <code class='cmd'>/error/</code>, what happens on matching lines?",
    opts: ["The whole line is printed (default action is <code class='cmd'>print $0</code>)", "Nothing", "Only the first field prints", "It counts them"],
    correct: 0,
    why: "The default action is <code class='cmd'>print $0</code>, so a bare pattern prints every matching line, much like grep."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>NR</code> represent?",
    opts: ["The current record (line) number", "The number of fields", "The number of files", "A random number"],
    correct: 0,
    why: "<code class='cmd'>NR</code> is the count of records read so far &mdash; effectively the line number across all input."
  },
  {
    level: "beginner",
    q: "What is the difference between <code class='cmd'>print $1, $2</code> and <code class='cmd'>print $1 $2</code>?",
    opts: ["The comma inserts OFS (a space); without a comma the fields are concatenated", "They are identical", "The comma concatenates; no comma adds a space", "No comma causes a syntax error"],
    correct: 0,
    why: "A comma puts <code class='cmd'>OFS</code> (default space) between items; no comma glues them with nothing in between."
  },
  {
    level: "beginner",
    q: "Which command prints every line of a file (like <code class='cmd'>cat</code>)?",
    opts: ["<code class='cmd'>awk '{print}' file</code>", "<code class='cmd'>awk 'print all' file</code>", "<code class='cmd'>awk '{$0}' file</code>", "<code class='cmd'>awk -p file</code>"],
    correct: 0,
    why: "<code class='cmd'>{print}</code> with no argument prints <code class='cmd'>$0</code>, the whole line, for every record."
  },
  {
    level: "beginner",
    q: "How do you print only lines that contain the text <code class='cmd'>error</code>?",
    opts: ["<code class='cmd'>awk '/error/' file</code>", "<code class='cmd'>awk 'error' file</code>", "<code class='cmd'>awk '$0 == error' file</code>", "<code class='cmd'>awk -e error file</code>"],
    correct: 0,
    why: "<code class='cmd'>/error/</code> is a regex pattern; matching lines print via the default action."
  },
  {
    level: "beginner",
    q: "How do you keep lines where the third field is greater than 100?",
    opts: ["<code class='cmd'>awk '$3 &gt; 100' file</code>", "<code class='cmd'>awk '$3 == \"&gt;100\"' file</code>", "<code class='cmd'>awk '/$3 &gt; 100/' file</code>", "<code class='cmd'>awk 'field3 &gt; 100' file</code>"],
    correct: 0,
    why: "<code class='cmd'>$3 &gt; 100</code> compares field 3 numerically; lines where it is true are printed by the default action."
  },
  {
    level: "beginner",
    q: "Which block runs once before any input is read?",
    opts: ["<code class='cmd'>BEGIN { ... }</code>", "<code class='cmd'>START { ... }</code>", "<code class='cmd'>INIT { ... }</code>", "<code class='cmd'>FIRST { ... }</code>"],
    correct: 0,
    why: "<code class='cmd'>BEGIN</code> runs once before reading input &mdash; a good place to set <code class='cmd'>FS</code> or print a header."
  },
  {
    level: "beginner",
    q: "Which block runs once after all input has been processed?",
    opts: ["<code class='cmd'>END { ... }</code>", "<code class='cmd'>FINISH { ... }</code>", "<code class='cmd'>LAST { ... }</code>", "<code class='cmd'>DONE { ... }</code>"],
    correct: 0,
    why: "<code class='cmd'>END</code> runs after the last record &mdash; ideal for printing totals or summaries."
  },
  {
    level: "beginner",
    q: "Which sums the first column and prints the total?",
    opts: ["<code class='cmd'>awk '{s+=$1} END{print s}' file</code>", "<code class='cmd'>awk '{print sum($1)}' file</code>", "<code class='cmd'>awk 'BEGIN{print +$1}' file</code>", "<code class='cmd'>awk '{$1 total}' file</code>"],
    correct: 0,
    why: "Accumulate <code class='cmd'>s+=$1</code> on each line, then print the running total in the <code class='cmd'>END</code> block."
  },
  {
    level: "beginner",
    q: "Does awk read its input from files, stdin/pipes, or both?",
    opts: ["Both files and stdin/pipes", "Only files named on the command line", "Only stdin", "Only files ending in .txt"],
    correct: 0,
    why: "awk reads file arguments if given, otherwise reads stdin, so <code class='cmd'>cat f | awk '...'</code> works fine."
  },
  {
    level: "beginner",
    q: "Are awk string positions (e.g. in <code class='cmd'>substr</code>) 0-indexed or 1-indexed?",
    opts: ["1-indexed", "0-indexed", "It depends on the field separator", "They are not indexed"],
    correct: 0,
    why: "awk strings are 1-indexed, so <code class='cmd'>substr(s, 1, 3)</code> takes the first three characters."
  },
  {
    level: "beginner",
    q: "How do you load a longer awk program from a file instead of inline?",
    opts: ["<code class='cmd'>awk -f script.awk file</code>", "<code class='cmd'>awk -p script.awk file</code>", "<code class='cmd'>awk &lt; script.awk file</code>", "<code class='cmd'>awk --run script.awk</code>"],
    correct: 0,
    why: "<code class='cmd'>-f script.awk</code> tells awk to read the program from that file."
  },
  {
    level: "beginner",
    q: "Which prints the second-to-last field?",
    opts: ["<code class='cmd'>print $(NF-1)</code>", "<code class='cmd'>print $NF-1</code>", "<code class='cmd'>print NF-1</code>", "<code class='cmd'>print $-1</code>"],
    correct: 0,
    why: "<code class='cmd'>$(NF-1)</code> dereferences field number <code class='cmd'>NF-1</code>. Note <code class='cmd'>$NF-1</code> would mean (last field's value) minus 1."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>length</code> (with no arguments) return?",
    opts: ["The length of <code class='cmd'>$0</code>, the current line", "The number of fields", "The line number", "Always 0"],
    correct: 0,
    why: "<code class='cmd'>length</code> with no argument defaults to <code class='cmd'>length($0)</code> &mdash; the character count of the whole line."
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    level: "intermediate",
    q: "What is the difference between <code class='cmd'>NR</code> and <code class='cmd'>FNR</code>?",
    opts: ["NR counts records across all files; FNR resets to 1 at the start of each file", "They are identical", "FNR counts fields; NR counts records", "NR resets per file; FNR is cumulative"],
    correct: 0,
    why: "<code class='cmd'>NR</code> is the cumulative record count; <code class='cmd'>FNR</code> restarts at 1 for every new input file."
  },
  {
    level: "intermediate",
    q: "Which variable sets the output field separator used by <code class='cmd'>print a, b</code>?",
    opts: ["<code class='cmd'>OFS</code>", "<code class='cmd'>FS</code>", "<code class='cmd'>ORS</code>", "<code class='cmd'>OFMT</code>"],
    correct: 0,
    why: "<code class='cmd'>OFS</code> (default single space) is inserted between comma-separated items in <code class='cmd'>print</code>."
  },
  {
    level: "intermediate",
    q: "You set <code class='cmd'>OFS=\"-\"</code> but <code class='cmd'>print $0</code> still shows the original spacing. Why?",
    opts: ["OFS only takes effect when you rebuild a field (e.g. <code class='cmd'>$1=$1</code>)", "OFS does not exist", "You must also set FS", "print never uses OFS"],
    correct: 0,
    why: "<code class='cmd'>$0</code> is only re-joined with <code class='cmd'>OFS</code> after you assign to a field. <code class='cmd'>$1=$1</code> forces that rebuild."
  },
  {
    level: "intermediate",
    q: "Which variable controls the input record separator (default newline)?",
    opts: ["<code class='cmd'>RS</code>", "<code class='cmd'>FS</code>", "<code class='cmd'>ORS</code>", "<code class='cmd'>NR</code>"],
    correct: 0,
    why: "<code class='cmd'>RS</code> defines what separates records. Setting <code class='cmd'>RS=\"\"</code> enables paragraph mode (blank-line-separated)."
  },
  {
    level: "intermediate",
    q: "Which variable controls the output record separator appended by <code class='cmd'>print</code>?",
    opts: ["<code class='cmd'>ORS</code>", "<code class='cmd'>RS</code>", "<code class='cmd'>OFS</code>", "<code class='cmd'>FS</code>"],
    correct: 0,
    why: "<code class='cmd'>ORS</code> (default newline) is appended after each <code class='cmd'>print</code>. Set it to <code class='cmd'>\"\\t\"</code> to join with tabs."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>$2 ~ /^ERR/</code> test?",
    opts: ["Whether field 2 matches the regex <code class='cmd'>^ERR</code>", "Whether field 2 equals the string '^ERR'", "Whether field 2 does not match", "Whether $2 is the second regex"],
    correct: 0,
    why: "<code class='cmd'>~</code> is the regex-match operator; <code class='cmd'>$2 ~ /^ERR/</code> is true when field 2 starts with ERR."
  },
  {
    level: "intermediate",
    q: "What does the operator <code class='cmd'>!~</code> mean?",
    opts: ["Does not match the regex", "Is not equal to", "Logical NOT of a number", "Append regex"],
    correct: 0,
    why: "<code class='cmd'>!~</code> is the negated match: <code class='cmd'>$1 !~ /x/</code> is true when field 1 does not contain a match for <code class='cmd'>x</code>."
  },
  {
    level: "intermediate",
    q: "What does the range pattern <code class='cmd'>/start/,/end/</code> select?",
    opts: ["Every line from one matching 'start' through the next matching 'end', inclusive", "Only lines containing both words", "Lines between the first and last line", "Only the start and end lines"],
    correct: 0,
    why: "A range pattern turns on at a line matching the first regex and off at the next line matching the second, including both endpoints."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>substr(\"hello\", 2, 3)</code> return?",
    opts: ["<code class='cmd'>ell</code>", "<code class='cmd'>hel</code>", "<code class='cmd'>llo</code>", "<code class='cmd'>el</code>"],
    correct: 0,
    why: "Starting at position 2 (1-indexed) and taking 3 characters gives <code class='cmd'>ell</code>."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>split(\"a:b:c\", arr, \":\")</code> do and return?",
    opts: ["Fills arr with a,b,c and returns 3 (the element count)", "Returns the string 'a:b:c'", "Returns 1 on success", "Modifies $0"],
    correct: 0,
    why: "<code class='cmd'>split</code> breaks the string into the array on the separator and returns the number of elements created."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>gsub(/o/, \"0\", $1)</code> return and do?",
    opts: ["Replaces all 'o' in $1 with '0' in place, returning the count of replacements", "Returns the new string without changing $1", "Replaces only the first 'o'", "Returns a true/false flag only"],
    correct: 0,
    why: "<code class='cmd'>gsub</code> does a global, in-place substitution on its target and returns the number of substitutions made."
  },
  {
    level: "intermediate",
    q: "How does <code class='cmd'>sub</code> differ from <code class='cmd'>gsub</code>?",
    opts: ["sub replaces only the first match; gsub replaces all matches", "sub is global; gsub is first-only", "sub returns the string; gsub returns the count", "There is no difference"],
    correct: 0,
    why: "<code class='cmd'>sub</code> replaces just the first occurrence; <code class='cmd'>gsub</code> replaces every occurrence. Both edit in place and return a count."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>index(\"banana\", \"na\")</code> return?",
    opts: ["3", "0", "2", "1"],
    correct: 0,
    why: "<code class='cmd'>index</code> returns the 1-based position of the first occurrence; the first 'na' starts at position 3."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>next</code> do inside an action?",
    opts: ["Skips the rest of the rules for this record and reads the next input record", "Exits awk", "Moves to the next field", "Prints the next line"],
    correct: 0,
    why: "<code class='cmd'>next</code> stops processing the current record (skipping later rules) and fetches the next one."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>exit</code> do in awk?",
    opts: ["Stops reading input and jumps to the END block, then quits", "Closes only the current file", "Does nothing in awk", "Skips to the next record"],
    correct: 0,
    why: "<code class='cmd'>exit</code> halts input processing but still runs the <code class='cmd'>END</code> block before terminating."
  },
  {
    level: "intermediate",
    q: "Which prints lines 5 through 10 of a file?",
    opts: ["<code class='cmd'>awk 'NR&gt;=5 &amp;&amp; NR&lt;=10' file</code>", "<code class='cmd'>awk 'NR==5,10' file</code>", "<code class='cmd'>awk '$5..$10' file</code>", "<code class='cmd'>awk 'line 5-10' file</code>"],
    correct: 0,
    why: "Testing <code class='cmd'>NR&gt;=5 &amp;&amp; NR&lt;=10</code> matches exactly those record numbers; the default action prints them."
  },
  {
    level: "intermediate",
    q: "Which one-liner prints only non-blank lines?",
    opts: ["<code class='cmd'>awk 'NF' file</code>", "<code class='cmd'>awk '$0' file</code>", "<code class='cmd'>awk 'NR' file</code>", "<code class='cmd'>awk '!NF' file</code>"],
    correct: 0,
    why: "On a blank line <code class='cmd'>NF</code> is 0 (false), so <code class='cmd'>awk 'NF'</code> prints only lines that have at least one field."
  },
  {
    level: "intermediate",
    q: "How do you loop over every field in the current record?",
    opts: ["<code class='cmd'>for (i=1; i&lt;=NF; i++) print $i</code>", "<code class='cmd'>for (i in NF) print $i</code>", "<code class='cmd'>while ($i) print i</code>", "<code class='cmd'>for ($1..$NF)</code>"],
    correct: 0,
    why: "A C-style loop from 1 to <code class='cmd'>NF</code> visits each field via <code class='cmd'>$i</code>."
  },
  {
    level: "intermediate",
    q: "What does the variable <code class='cmd'>FILENAME</code> contain?",
    opts: ["The name of the file currently being read", "The awk script's name", "The output file", "The last argument"],
    correct: 0,
    why: "<code class='cmd'>FILENAME</code> holds the path of the current input file (empty while reading stdin in some awks)."
  },
  {
    level: "intermediate",
    q: "Which counts how many times each value of column 1 appears?",
    opts: ["<code class='cmd'>awk '{c[$1]++} END{for(k in c) print k, c[k]}'</code>", "<code class='cmd'>awk '{count $1}'</code>", "<code class='cmd'>awk '$1++ {print}'</code>", "<code class='cmd'>awk 'uniq $1'</code>"],
    correct: 0,
    why: "An associative array keyed on <code class='cmd'>$1</code> tallies counts; iterating it in <code class='cmd'>END</code> prints each key and total."
  },

  /* ===================== ADVANCED ===================== */
  {
    level: "advanced",
    q: "Are awk array subscripts numeric or string-keyed?",
    opts: ["Always strings (arrays are associative)", "Always integers", "Floats only", "Booleans"],
    correct: 0,
    why: "awk arrays are associative; every subscript is converted to a string, so <code class='cmd'>a[1]</code> and <code class='cmd'>a[\"1\"]</code> are the same element."
  },
  {
    level: "advanced",
    q: "What does the dedup idiom <code class='cmd'>awk '!seen[$0]++'</code> do?",
    opts: ["Prints each distinct line once, keeping the first occurrence", "Prints only duplicate lines", "Removes the first occurrence of each line", "Counts lines"],
    correct: 0,
    why: "First time a line is seen, <code class='cmd'>seen[$0]</code> is 0 so <code class='cmd'>!0</code> is true and it prints; the <code class='cmd'>++</code> then suppresses later copies."
  },
  {
    level: "advanced",
    q: "In the two-file idiom <code class='cmd'>FNR==NR{...; next} ...</code>, which file does <code class='cmd'>FNR==NR</code> select?",
    opts: ["The first file", "The last file", "The largest file", "All files equally"],
    correct: 0,
    why: "<code class='cmd'>NR</code> counts across all files and <code class='cmd'>FNR</code> resets per file, so they are equal only while reading the first file."
  },
  {
    level: "advanced",
    q: "Why is <code class='cmd'>next</code> used in the first rule of the <code class='cmd'>FNR==NR</code> idiom?",
    opts: ["To stop fall-through so the second rule only runs on later files", "To skip the first file", "To exit awk early", "To reset NR"],
    correct: 0,
    why: "<code class='cmd'>next</code> moves straight to the next record after loading the lookup, preventing the second rule from also firing on file one."
  },
  {
    level: "advanced",
    q: "How do you create a local variable inside a user-defined awk function?",
    opts: ["Declare it as an extra parameter in the function's parameter list", "Use the <code class='cmd'>local</code> keyword", "Prefix it with <code class='cmd'>my_</code>", "It is impossible; all variables are global"],
    correct: 0,
    why: "awk has no <code class='cmd'>local</code> keyword. The convention is to add extra parameters (often after extra spaces) that callers omit; they act as locals."
  },
  {
    level: "advanced",
    q: "How are scalars and arrays passed to awk functions?",
    opts: ["Scalars by value, arrays by reference", "Both by value", "Both by reference", "Scalars by reference, arrays by value"],
    correct: 0,
    why: "Scalar arguments are copied (by value); arrays are passed by reference, so a function can modify the caller's array."
  },
  {
    level: "advanced",
    q: "How do you test if a key exists in an array without creating it?",
    opts: ["<code class='cmd'>if (k in arr)</code>", "<code class='cmd'>if (arr[k])</code>", "<code class='cmd'>if (exists arr[k])</code>", "<code class='cmd'>if (arr.has(k))</code>"],
    correct: 0,
    why: "<code class='cmd'>k in arr</code> tests membership without side effects. Referencing <code class='cmd'>arr[k]</code> would create the key with an empty value."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>delete arr[k]</code> do?",
    opts: ["Removes that single element from the array", "Empties the whole array", "Sets the element to 0", "Deletes the array variable name"],
    correct: 0,
    why: "<code class='cmd'>delete arr[k]</code> removes one element. <code class='cmd'>delete arr</code> (gawk) clears every element at once."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>sprintf(\"%.2f\", x)</code> do?",
    opts: ["Returns the formatted string without printing it", "Prints x with 2 decimals", "Sets the OFMT variable", "Rounds x to an integer"],
    correct: 0,
    why: "<code class='cmd'>sprintf</code> formats like <code class='cmd'>printf</code> but returns the result as a string instead of printing it."
  },
  {
    level: "advanced",
    q: "What does the <code class='cmd'>OFMT</code> variable control?",
    opts: ["The format used when a number is printed with <code class='cmd'>print</code> (default %.6g)", "The output field separator", "The order of fields", "The input format"],
    correct: 0,
    why: "<code class='cmd'>OFMT</code> (default <code class='cmd'>\"%.6g\"</code>) governs how numbers are rendered by <code class='cmd'>print</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>CONVFMT</code> control?",
    opts: ["How numbers convert to strings in non-print contexts (e.g. as array subscripts)", "The output record separator", "The case of strings", "The field separator"],
    correct: 0,
    why: "<code class='cmd'>CONVFMT</code> (default <code class='cmd'>\"%.6g\"</code>) is used when a number is implicitly stringified, such as when used as an array key or concatenated."
  },
  {
    level: "advanced",
    q: "What does plain <code class='cmd'>getline</code> (no redirection) do?",
    opts: ["Reads the next record into $0 and updates NF, NR and FNR", "Reads a line into a fixed variable named line", "Reads from a file only", "Skips a record without reading it"],
    correct: 0,
    why: "Unredirected <code class='cmd'>getline</code> pulls the next input record into <code class='cmd'>$0</code>, re-splits fields, and bumps <code class='cmd'>NR</code>/<code class='cmd'>FNR</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>\"date\" | getline d</code> do?",
    opts: ["Runs the shell command 'date' and stores its output in d", "Reads a file named date", "Pipes d into the date command", "Sets d to the literal string 'date'"],
    correct: 0,
    why: "Piping a command into <code class='cmd'>getline</code> runs it and captures a line of its output into the named variable."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>RS=\"\"</code> in a BEGIN block enable?",
    opts: ["Paragraph mode &mdash; records become blank-line-separated blocks", "Single-character records", "CSV parsing", "Disabling of records entirely"],
    correct: 0,
    why: "Setting <code class='cmd'>RS</code> to the empty string makes awk treat blank-line-separated paragraphs as records; newlines then also act as field separators."
  }

];
