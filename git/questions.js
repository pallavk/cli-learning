/*
 * git quiz question bank.
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
 * Use <code class='cmd'>...</code> for commands. Option order is shuffled at
 * runtime, so the position of the correct answer does not matter.
 */
window.GIT_QUESTIONS = [

  /* ===================== BEGINNER ===================== */
  {
    level: "beginner",
    q: "Which command turns the current directory into a new, empty git repository?",
    opts: ["<code class='cmd'>git init</code>", "<code class='cmd'>git start</code>", "<code class='cmd'>git create</code>", "<code class='cmd'>git new</code>"],
    correct: 0,
    why: "<code class='cmd'>git init</code> creates a <code class='cmd'>.git</code> directory, turning the folder into a repository with no commits yet."
  },
  {
    level: "beginner",
    q: "How do you copy an existing remote repository to your machine?",
    opts: ["<code class='cmd'>git clone &lt;url&gt;</code>", "<code class='cmd'>git copy &lt;url&gt;</code>", "<code class='cmd'>git fetch &lt;url&gt;</code>", "<code class='cmd'>git download &lt;url&gt;</code>"],
    correct: 0,
    why: "<code class='cmd'>git clone</code> copies the full history, sets up <code class='cmd'>origin</code> as the remote, and checks out the default branch."
  },
  {
    level: "beginner",
    q: "Which command shows which files are modified, staged, or untracked?",
    opts: ["<code class='cmd'>git status</code>", "<code class='cmd'>git show</code>", "<code class='cmd'>git log</code>", "<code class='cmd'>git info</code>"],
    correct: 0,
    why: "<code class='cmd'>git status</code> summarizes the working tree and staging area: what is staged, modified but unstaged, and untracked."
  },
  {
    level: "beginner",
    q: "What are git's three main areas a file moves through?",
    opts: ["Working tree, staging area (index), and the repository (HEAD/commits)", "Local, remote, and cloud", "Draft, review, and published", "Source, build, and deploy"],
    correct: 0,
    why: "You edit in the working tree, stage snapshots into the index with <code class='cmd'>git add</code>, then record them permanently in the repository with <code class='cmd'>git commit</code>."
  },
  {
    level: "beginner",
    q: "Which command stages a file named <code class='cmd'>app.js</code> for the next commit?",
    opts: ["<code class='cmd'>git add app.js</code>", "<code class='cmd'>git stage --new app.js</code>", "<code class='cmd'>git commit app.js</code>", "<code class='cmd'>git track app.js</code>"],
    correct: 0,
    why: "<code class='cmd'>git add app.js</code> copies the current contents of the file into the staging area (index) ready to be committed."
  },
  {
    level: "beginner",
    q: "How do you record the staged changes as a commit with a message?",
    opts: ["<code class='cmd'>git commit -m \"message\"</code>", "<code class='cmd'>git save -m \"message\"</code>", "<code class='cmd'>git record \"message\"</code>", "<code class='cmd'>git push -m \"message\"</code>"],
    correct: 0,
    why: "<code class='cmd'>git commit -m \"message\"</code> snapshots whatever is currently staged and writes it to history."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>git add .</code> do?",
    opts: ["Stages all changes in the current directory and below", "Commits all changes", "Adds a new remote", "Discards all changes"],
    correct: 0,
    why: "<code class='cmd'>git add .</code> stages every new and modified (and, in git 2.x, deleted) file under the current directory."
  },
  {
    level: "beginner",
    q: "Which command shows the commit history?",
    opts: ["<code class='cmd'>git log</code>", "<code class='cmd'>git history</code>", "<code class='cmd'>git status</code>", "<code class='cmd'>git commits</code>"],
    correct: 0,
    why: "<code class='cmd'>git log</code> lists commits newest-first. Try <code class='cmd'>git log --oneline --graph</code> for a compact view."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>git diff</code> with no arguments show?",
    opts: ["Unstaged changes (working tree vs the index)", "Staged changes vs the last commit", "Differences between two branches", "The full commit history"],
    correct: 0,
    why: "Plain <code class='cmd'>git diff</code> compares the working tree to the index. Use <code class='cmd'>git diff --staged</code> to see what is staged for the next commit."
  },
  {
    level: "beginner",
    q: "Which command shows the changes that are <b>staged</b> for the next commit?",
    opts: ["<code class='cmd'>git diff --staged</code>", "<code class='cmd'>git diff</code>", "<code class='cmd'>git status -v</code>", "<code class='cmd'>git log -p</code>"],
    correct: 0,
    why: "<code class='cmd'>git diff --staged</code> (alias <code class='cmd'>--cached</code>) compares the index against the last commit (HEAD)."
  },
  {
    level: "beginner",
    q: "What is HEAD in git?",
    opts: ["A pointer to the current commit/branch you have checked out", "The first commit ever made", "The remote server", "The newest file in the repo"],
    correct: 0,
    why: "HEAD usually points to the tip of your current branch; commits you make move both the branch and HEAD forward."
  },
  {
    level: "beginner",
    q: "What is the purpose of a <code class='cmd'>.gitignore</code> file?",
    opts: ["To list file patterns git should not track", "To delete files from the repo", "To encrypt secrets", "To list collaborators"],
    correct: 0,
    why: "<code class='cmd'>.gitignore</code> tells git which untracked files to ignore (build output, secrets, node_modules, etc.). Already-tracked files are not affected."
  },
  {
    level: "beginner",
    q: "Which command creates a new branch called <code class='cmd'>feature</code> without switching to it?",
    opts: ["<code class='cmd'>git branch feature</code>", "<code class='cmd'>git switch feature</code>", "<code class='cmd'>git checkout feature</code>", "<code class='cmd'>git new-branch feature</code>"],
    correct: 0,
    why: "<code class='cmd'>git branch feature</code> creates the branch pointer but leaves you where you are. Use <code class='cmd'>git switch feature</code> to move onto it."
  },
  {
    level: "beginner",
    q: "Which modern command switches you to an existing branch named <code class='cmd'>dev</code>?",
    opts: ["<code class='cmd'>git switch dev</code>", "<code class='cmd'>git branch dev</code>", "<code class='cmd'>git move dev</code>", "<code class='cmd'>git goto dev</code>"],
    correct: 0,
    why: "<code class='cmd'>git switch dev</code> moves HEAD to that branch. The older <code class='cmd'>git checkout dev</code> does the same but is overloaded with other jobs."
  },
  {
    level: "beginner",
    q: "How do you create <b>and</b> switch to a new branch in one step (modern syntax)?",
    opts: ["<code class='cmd'>git switch -c feature</code>", "<code class='cmd'>git branch -s feature</code>", "<code class='cmd'>git switch feature</code>", "<code class='cmd'>git checkout feature</code>"],
    correct: 0,
    why: "<code class='cmd'>git switch -c feature</code> creates the branch and checks it out. The classic equivalent is <code class='cmd'>git checkout -b feature</code>."
  },
  {
    level: "beginner",
    q: "Which command lists all your local branches?",
    opts: ["<code class='cmd'>git branch</code>", "<code class='cmd'>git branches</code>", "<code class='cmd'>git list</code>", "<code class='cmd'>git show-branch -l</code>"],
    correct: 0,
    why: "<code class='cmd'>git branch</code> lists local branches and marks the current one with an asterisk. Add <code class='cmd'>-a</code> to include remote-tracking branches."
  },
  {
    level: "beginner",
    q: "Which command uploads your local commits to the remote?",
    opts: ["<code class='cmd'>git push</code>", "<code class='cmd'>git upload</code>", "<code class='cmd'>git send</code>", "<code class='cmd'>git commit --remote</code>"],
    correct: 0,
    why: "<code class='cmd'>git push</code> sends commits on your current branch to its remote-tracking branch (often <code class='cmd'>origin</code>)."
  },
  {
    level: "beginner",
    q: "Which command downloads <b>and merges</b> remote changes into your current branch in one step?",
    opts: ["<code class='cmd'>git pull</code>", "<code class='cmd'>git fetch</code>", "<code class='cmd'>git clone</code>", "<code class='cmd'>git sync</code>"],
    correct: 0,
    why: "<code class='cmd'>git pull</code> is <code class='cmd'>git fetch</code> followed by a merge (or rebase). <code class='cmd'>git fetch</code> alone downloads but does not touch your working branch."
  },
  {
    level: "beginner",
    q: "What is <code class='cmd'>origin</code> in a freshly cloned repo?",
    opts: ["The default name for the remote you cloned from", "Your main branch", "The first commit", "A backup directory"],
    correct: 0,
    why: "<code class='cmd'>origin</code> is just the conventional short name git assigns to the remote URL you cloned from. You can rename it or add others."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>git clone</code> set up automatically that <code class='cmd'>git init</code> does not?",
    opts: ["A remote named <code class='cmd'>origin</code> pointing at the source", "A .gitignore file", "An initial commit", "A signed tag"],
    correct: 0,
    why: "Cloning records the source URL as <code class='cmd'>origin</code> and creates remote-tracking branches. <code class='cmd'>git init</code> starts with no remotes."
  },
  {
    level: "beginner",
    q: "Which command stages and commits all tracked modified files in one step?",
    opts: ["<code class='cmd'>git commit -a -m \"msg\"</code>", "<code class='cmd'>git commit --all-new</code>", "<code class='cmd'>git add --commit</code>", "<code class='cmd'>git push -a</code>"],
    correct: 0,
    why: "<code class='cmd'>git commit -am \"msg\"</code> auto-stages modifications to already-tracked files. It does <b>not</b> add brand-new untracked files."
  },
  {
    level: "beginner",
    q: "How do you see a compact one-line-per-commit history?",
    opts: ["<code class='cmd'>git log --oneline</code>", "<code class='cmd'>git log --short</code>", "<code class='cmd'>git log -1</code>", "<code class='cmd'>git log --compact</code>"],
    correct: 0,
    why: "<code class='cmd'>git log --oneline</code> prints each commit as an abbreviated hash plus subject line."
  },
  {
    level: "beginner",
    q: "What does a 'commit' represent in git?",
    opts: ["A snapshot of the whole tracked project at a point in time, with metadata", "Only the lines that changed", "A pointer to a remote branch", "A backup of one file"],
    correct: 0,
    why: "Each commit stores a full tree snapshot (deduplicated via blobs/trees) plus author, message, and parent commit references."
  },
  {
    level: "beginner",
    q: "Which command shows who last changed each line of a file?",
    opts: ["<code class='cmd'>git blame &lt;file&gt;</code>", "<code class='cmd'>git who &lt;file&gt;</code>", "<code class='cmd'>git log --lines</code>", "<code class='cmd'>git annotate-all</code>"],
    correct: 0,
    why: "<code class='cmd'>git blame</code> annotates each line with the commit, author, and date that last touched it."
  },
  {
    level: "beginner",
    q: "How do you set the message author identity used on commits, globally?",
    opts: ["<code class='cmd'>git config --global user.name</code> and <code class='cmd'>user.email</code>", "<code class='cmd'>git identity</code>", "<code class='cmd'>git author --set</code>", "<code class='cmd'>git whoami</code>"],
    correct: 0,
    why: "<code class='cmd'>git config --global user.name \"You\"</code> and <code class='cmd'>user.email \"you@example.com\"</code> set the identity stamped on commits."
  },
  {
    level: "beginner",
    q: "Which command displays the details (diff and metadata) of a specific commit?",
    opts: ["<code class='cmd'>git show &lt;hash&gt;</code>", "<code class='cmd'>git diff &lt;hash&gt;</code>", "<code class='cmd'>git log &lt;hash&gt;</code>", "<code class='cmd'>git cat &lt;hash&gt;</code>"],
    correct: 0,
    why: "<code class='cmd'>git show &lt;hash&gt;</code> prints the commit message, author, and the patch it introduced."
  },
  {
    level: "beginner",
    q: "What happens to an already-tracked file if you add its name to <code class='cmd'>.gitignore</code>?",
    opts: ["Nothing -- ignore rules only affect untracked files", "It is deleted", "It is immediately untracked", "It is encrypted"],
    correct: 0,
    why: "<code class='cmd'>.gitignore</code> only stops untracked files from being noticed. To stop tracking, run <code class='cmd'>git rm --cached &lt;file&gt;</code> first."
  },
  {
    level: "beginner",
    q: "Which command removes a file from both the working tree and the index?",
    opts: ["<code class='cmd'>git rm &lt;file&gt;</code>", "<code class='cmd'>git delete &lt;file&gt;</code>", "<code class='cmd'>git remove &lt;file&gt;</code>", "<code class='cmd'>git clean &lt;file&gt;</code>"],
    correct: 0,
    why: "<code class='cmd'>git rm &lt;file&gt;</code> deletes the file and stages the removal. Add <code class='cmd'>--cached</code> to untrack it while keeping it on disk."
  },
  {
    level: "beginner",
    q: "Which command renames a tracked file and stages the rename?",
    opts: ["<code class='cmd'>git mv old new</code>", "<code class='cmd'>git rename old new</code>", "<code class='cmd'>git move old new</code>", "<code class='cmd'>git cp old new</code>"],
    correct: 0,
    why: "<code class='cmd'>git mv old new</code> renames the file on disk and records the change in the index in one step."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>git fetch</code> do that <code class='cmd'>git pull</code> avoids doing?",
    opts: ["It downloads remote changes <b>without</b> merging them into your branch", "It deletes local branches", "It pushes your commits", "It rewrites history"],
    correct: 0,
    why: "<code class='cmd'>git fetch</code> updates your remote-tracking branches only, letting you inspect changes before integrating. <code class='cmd'>git pull</code> fetches and then merges."
  },
  {
    level: "beginner",
    q: "Which command adds a new remote called <code class='cmd'>upstream</code>?",
    opts: ["<code class='cmd'>git remote add upstream &lt;url&gt;</code>", "<code class='cmd'>git add remote upstream</code>", "<code class='cmd'>git remote upstream &lt;url&gt;</code>", "<code class='cmd'>git push upstream &lt;url&gt;</code>"],
    correct: 0,
    why: "<code class='cmd'>git remote add upstream &lt;url&gt;</code> registers a second remote, commonly used to track the original repo of a fork."
  },
  {
    level: "beginner",
    q: "What does the <code class='cmd'>-u</code> flag do in <code class='cmd'>git push -u origin main</code>?",
    opts: ["Sets the upstream tracking branch so future <code class='cmd'>git push</code>/<code class='cmd'>pull</code> need no arguments", "Forces the push", "Updates submodules", "Uploads tags"],
    correct: 0,
    why: "<code class='cmd'>-u</code> (<code class='cmd'>--set-upstream</code>) links your local branch to the remote one, so later pushes and pulls know the target."
  },
  {
    level: "beginner",
    q: "Which command lists the configured remotes and their URLs?",
    opts: ["<code class='cmd'>git remote -v</code>", "<code class='cmd'>git remotes</code>", "<code class='cmd'>git remote list</code>", "<code class='cmd'>git config remotes</code>"],
    correct: 0,
    why: "<code class='cmd'>git remote -v</code> prints each remote name with its fetch and push URLs."
  },
  {
    level: "beginner",
    q: "Where does git store all of a repository's history and objects?",
    opts: ["In the hidden <code class='cmd'>.git</code> directory at the repo root", "In a cloud account", "In <code class='cmd'>~/.gitconfig</code>", "In the staging file only"],
    correct: 0,
    why: "The <code class='cmd'>.git</code> directory holds objects, refs, config, and HEAD. Deleting it removes all version history while leaving working files."
  },
  {
    level: "beginner",
    q: "What does <code class='cmd'>git log --graph --oneline --all</code> help you visualize?",
    opts: ["Branch and merge topology across all branches, compactly", "A list of remotes", "File sizes", "Ignored files"],
    correct: 0,
    why: "The <code class='cmd'>--graph</code> option draws ASCII lines showing how branches diverged and merged; <code class='cmd'>--all</code> includes every ref."
  },

  /* ===================== INTERMEDIATE ===================== */
  {
    level: "intermediate",
    q: "Which command discards unstaged changes to <code class='cmd'>app.js</code>, restoring it from the index?",
    opts: ["<code class='cmd'>git restore app.js</code>", "<code class='cmd'>git reset app.js</code>", "<code class='cmd'>git revert app.js</code>", "<code class='cmd'>git checkout --discard app.js</code>"],
    correct: 0,
    why: "<code class='cmd'>git restore app.js</code> overwrites the working copy with the staged/HEAD version, throwing away unstaged edits."
  },
  {
    level: "intermediate",
    q: "Which command <b>unstages</b> a file (removes it from the index) but keeps your edits?",
    opts: ["<code class='cmd'>git restore --staged &lt;file&gt;</code>", "<code class='cmd'>git restore &lt;file&gt;</code>", "<code class='cmd'>git rm &lt;file&gt;</code>", "<code class='cmd'>git clean &lt;file&gt;</code>"],
    correct: 0,
    why: "<code class='cmd'>git restore --staged &lt;file&gt;</code> (equivalent to the old <code class='cmd'>git reset &lt;file&gt;</code>) moves it out of the index but leaves working-tree changes intact."
  },
  {
    level: "intermediate",
    q: "What is the difference between <code class='cmd'>HEAD~1</code> and <code class='cmd'>HEAD^</code>?",
    opts: ["For a single-parent commit they are the same: the first parent", "<code class='cmd'>HEAD~1</code> means the second parent", "<code class='cmd'>HEAD^</code> means two commits back", "They refer to different branches"],
    correct: 0,
    why: "<code class='cmd'>HEAD^</code> is the first parent; <code class='cmd'>HEAD~1</code> is also one back via first-parent. They diverge on merges: <code class='cmd'>HEAD^2</code> is the second parent, while <code class='cmd'>HEAD~2</code> is two first-parent steps back."
  },
  {
    level: "intermediate",
    q: "Which reset mode moves HEAD but leaves both the index and working tree untouched (keeping changes staged)?",
    opts: ["<code class='cmd'>git reset --soft</code>", "<code class='cmd'>git reset --mixed</code>", "<code class='cmd'>git reset --hard</code>", "<code class='cmd'>git reset --keep</code>"],
    correct: 0,
    why: "<code class='cmd'>--soft</code> only moves the branch pointer. The changes from the undone commits remain staged in the index, ready to recommit."
  },
  {
    level: "intermediate",
    q: "What does the <b>default</b> <code class='cmd'>git reset</code> mode (<code class='cmd'>--mixed</code>) do?",
    opts: ["Moves HEAD and resets the index, but keeps working-tree changes (now unstaged)", "Throws away all changes", "Only moves HEAD", "Creates a new commit"],
    correct: 0,
    why: "<code class='cmd'>--mixed</code> (the default) moves the branch and updates the index to match, so your changes survive in the working tree but become unstaged."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>git reset --hard HEAD~1</code> do?",
    opts: ["Discards the last commit AND any working-tree/staged changes, irrecoverably from the tree", "Only unstages the last commit", "Creates an inverse commit", "Renames the last commit"],
    correct: 0,
    why: "<code class='cmd'>--hard</code> moves HEAD back and force-matches both index and working tree, destroying uncommitted work. The commit itself can still be found via <code class='cmd'>git reflog</code> for a while."
  },
  {
    level: "intermediate",
    q: "You pushed a bad commit to a shared branch. What is the safe way to undo it?",
    opts: ["<code class='cmd'>git revert &lt;hash&gt;</code> -- creates a new commit that reverses it", "<code class='cmd'>git reset --hard</code> then force push", "Delete the branch", "<code class='cmd'>git restore</code> the files"],
    correct: 0,
    why: "<code class='cmd'>git revert</code> adds a new commit that undoes the changes without rewriting shared history, so collaborators are not disrupted."
  },
  {
    level: "intermediate",
    q: "What is the key difference between <code class='cmd'>git revert</code> and <code class='cmd'>git reset</code>?",
    opts: ["<code class='cmd'>revert</code> adds a new commit; <code class='cmd'>reset</code> moves HEAD and can rewrite history", "They are identical", "<code class='cmd'>revert</code> deletes files; <code class='cmd'>reset</code> keeps them", "<code class='cmd'>revert</code> only works on remotes"],
    correct: 0,
    why: "<code class='cmd'>revert</code> is non-destructive and history-preserving (good for shared branches); <code class='cmd'>reset</code> moves the branch pointer and is best for local, unpushed work."
  },
  {
    level: "intermediate",
    q: "How do you amend the most recent commit's message or contents?",
    opts: ["<code class='cmd'>git commit --amend</code>", "<code class='cmd'>git commit --fix</code>", "<code class='cmd'>git redo</code>", "<code class='cmd'>git commit --edit-last</code>"],
    correct: 0,
    why: "<code class='cmd'>git commit --amend</code> replaces the last commit with a new one (new hash). Avoid amending commits you have already pushed to shared branches."
  },
  {
    level: "intermediate",
    q: "Which command temporarily shelves your uncommitted changes and reverts to a clean working tree?",
    opts: ["<code class='cmd'>git stash</code>", "<code class='cmd'>git shelve</code>", "<code class='cmd'>git hold</code>", "<code class='cmd'>git save</code>"],
    correct: 0,
    why: "<code class='cmd'>git stash</code> records working-tree and index changes onto a stack and cleans the tree. Restore them later with <code class='cmd'>git stash pop</code>."
  },
  {
    level: "intermediate",
    q: "What is the difference between <code class='cmd'>git stash pop</code> and <code class='cmd'>git stash apply</code>?",
    opts: ["<code class='cmd'>pop</code> applies and then removes the stash entry; <code class='cmd'>apply</code> keeps it on the stack", "They are identical", "<code class='cmd'>apply</code> deletes the stash", "<code class='cmd'>pop</code> only works once per session"],
    correct: 0,
    why: "<code class='cmd'>git stash apply</code> re-applies changes but leaves the entry; <code class='cmd'>git stash pop</code> applies and drops it if successful."
  },
  {
    level: "intermediate",
    q: "Which command integrates branch <code class='cmd'>feature</code> into your current branch, preserving its commits?",
    opts: ["<code class='cmd'>git merge feature</code>", "<code class='cmd'>git join feature</code>", "<code class='cmd'>git combine feature</code>", "<code class='cmd'>git switch --merge feature</code>"],
    correct: 0,
    why: "<code class='cmd'>git merge feature</code> joins the histories. If the branches diverged, it creates a merge commit with two parents."
  },
  {
    level: "intermediate",
    q: "What is a 'fast-forward' merge?",
    opts: ["When the target branch has no new commits, so git just moves its pointer forward -- no merge commit", "A merge that skips conflicts", "A rebase in disguise", "A forced push"],
    correct: 0,
    why: "If your branch is a direct ancestor of the one you merge in, git simply advances the pointer. No merge commit is created."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>git merge --no-ff feature</code> force?",
    opts: ["A merge commit even when a fast-forward was possible", "A rebase instead of a merge", "Skipping conflict resolution", "Deleting the feature branch"],
    correct: 0,
    why: "<code class='cmd'>--no-ff</code> always creates a merge commit, preserving the fact that a branch existed -- useful for grouping a feature's history."
  },
  {
    level: "intermediate",
    q: "Which command reapplies your branch's commits on top of another branch, creating a linear history?",
    opts: ["<code class='cmd'>git rebase main</code>", "<code class='cmd'>git merge main</code>", "<code class='cmd'>git replay main</code>", "<code class='cmd'>git stack main</code>"],
    correct: 0,
    why: "<code class='cmd'>git rebase main</code> rewrites your commits onto the tip of <code class='cmd'>main</code>, producing a straight-line history instead of a merge commit."
  },
  {
    level: "intermediate",
    q: "Why should you avoid rebasing commits that have already been pushed to a shared branch?",
    opts: ["Rebase rewrites commits (new hashes), which diverges from collaborators' history", "Rebase deletes the remote", "Rebase cannot handle conflicts", "It is always safe"],
    correct: 0,
    why: "Because rebase produces new commit hashes, others who based work on the old commits get conflicting histories. The golden rule: don't rebase shared/public history."
  },
  {
    level: "intermediate",
    q: "Which command copies one specific commit from another branch onto your current branch?",
    opts: ["<code class='cmd'>git cherry-pick &lt;hash&gt;</code>", "<code class='cmd'>git pick &lt;hash&gt;</code>", "<code class='cmd'>git copy &lt;hash&gt;</code>", "<code class='cmd'>git apply &lt;hash&gt;</code>"],
    correct: 0,
    why: "<code class='cmd'>git cherry-pick &lt;hash&gt;</code> replays that single commit's changes as a new commit on your current branch."
  },
  {
    level: "intermediate",
    q: "How do you create a lightweight tag named <code class='cmd'>v1.0</code> on the current commit?",
    opts: ["<code class='cmd'>git tag v1.0</code>", "<code class='cmd'>git tag add v1.0</code>", "<code class='cmd'>git branch --tag v1.0</code>", "<code class='cmd'>git label v1.0</code>"],
    correct: 0,
    why: "<code class='cmd'>git tag v1.0</code> creates a lightweight tag. Add <code class='cmd'>-a</code> (with <code class='cmd'>-m</code>) for an annotated tag carrying a message, tagger, and date."
  },
  {
    level: "intermediate",
    q: "Tags are not pushed by default. How do you push a tag named <code class='cmd'>v1.0</code>?",
    opts: ["<code class='cmd'>git push origin v1.0</code>", "<code class='cmd'>git push --branches</code>", "<code class='cmd'>git tag push v1.0</code>", "<code class='cmd'>git push -t</code>"],
    correct: 0,
    why: "<code class='cmd'>git push origin v1.0</code> pushes that tag; <code class='cmd'>git push --tags</code> pushes all of them. A plain <code class='cmd'>git push</code> sends commits but not tags."
  },
  {
    level: "intermediate",
    q: "What is the difference between a lightweight and an annotated tag?",
    opts: ["Annotated tags are full objects with tagger, date, and message; lightweight tags are just a name pointing at a commit", "There is no difference", "Lightweight tags are signed", "Annotated tags cannot be pushed"],
    correct: 0,
    why: "Annotated tags (<code class='cmd'>-a</code>) store metadata and can be signed -- preferred for releases. Lightweight tags are just a movable label."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>git reflog</code> show?",
    opts: ["A log of where HEAD and branch tips have pointed, including 'lost' commits", "The remote's history", "Only merge commits", "The contents of .gitignore"],
    correct: 0,
    why: "<code class='cmd'>git reflog</code> records every move of HEAD locally, so you can recover commits orphaned by a bad reset, rebase, or amend."
  },
  {
    level: "intermediate",
    q: "You ran <code class='cmd'>git reset --hard</code> and lost a commit. What is your best recovery tool?",
    opts: ["<code class='cmd'>git reflog</code> to find the lost hash, then reset/checkout to it", "<code class='cmd'>git pull</code>", "<code class='cmd'>git fsck --repair</code>", "Nothing -- it is gone forever"],
    correct: 0,
    why: "The reflog still references the old commit. Find its hash with <code class='cmd'>git reflog</code>, then <code class='cmd'>git reset --hard &lt;hash&gt;</code> or create a branch from it."
  },
  {
    level: "intermediate",
    q: "Which command deletes untracked files from the working tree?",
    opts: ["<code class='cmd'>git clean -fd</code>", "<code class='cmd'>git rm --untracked</code>", "<code class='cmd'>git restore --clean</code>", "<code class='cmd'>git reset --hard</code>"],
    correct: 0,
    why: "<code class='cmd'>git clean -fd</code> removes untracked files (<code class='cmd'>-f</code>) and directories (<code class='cmd'>-d</code>). Add <code class='cmd'>-n</code> first to preview what would be deleted."
  },
  {
    level: "intermediate",
    q: "How do you delete a local branch named <code class='cmd'>feature</code> that has been merged?",
    opts: ["<code class='cmd'>git branch -d feature</code>", "<code class='cmd'>git branch --remove feature</code>", "<code class='cmd'>git delete feature</code>", "<code class='cmd'>git rm -b feature</code>"],
    correct: 0,
    why: "<code class='cmd'>git branch -d feature</code> deletes a merged branch safely. Use <code class='cmd'>-D</code> to force-delete an unmerged one."
  },
  {
    level: "intermediate",
    q: "What does it mean to be in a 'detached HEAD' state?",
    opts: ["HEAD points directly at a commit rather than a branch", "The repo is corrupted", "You are offline", "Your remote is disconnected"],
    correct: 0,
    why: "Checking out a specific commit or tag detaches HEAD. New commits there belong to no branch and can be lost unless you create a branch."
  },
  {
    level: "intermediate",
    q: "How do you compare two branches to see what differs?",
    opts: ["<code class='cmd'>git diff main..feature</code>", "<code class='cmd'>git compare main feature</code>", "<code class='cmd'>git log --diff</code>", "<code class='cmd'>git status main feature</code>"],
    correct: 0,
    why: "<code class='cmd'>git diff main..feature</code> shows the differences between the two branch tips."
  },
  {
    level: "intermediate",
    q: "Which command shows commits in <code class='cmd'>feature</code> that are not yet in <code class='cmd'>main</code>?",
    opts: ["<code class='cmd'>git log main..feature</code>", "<code class='cmd'>git log feature..main</code>", "<code class='cmd'>git diff feature</code>", "<code class='cmd'>git status feature</code>"],
    correct: 0,
    why: "The range <code class='cmd'>main..feature</code> lists commits reachable from <code class='cmd'>feature</code> but not from <code class='cmd'>main</code> -- i.e. what feature adds."
  },
  {
    level: "intermediate",
    q: "After <code class='cmd'>git fetch</code>, how do you integrate the fetched <code class='cmd'>origin/main</code> into your branch?",
    opts: ["<code class='cmd'>git merge origin/main</code> (or <code class='cmd'>git rebase origin/main</code>)", "<code class='cmd'>git pull origin</code> again", "<code class='cmd'>git clone</code>", "<code class='cmd'>git reset origin/main</code>"],
    correct: 0,
    why: "Fetch only updates the remote-tracking branch. You then merge or rebase <code class='cmd'>origin/main</code> to bring those commits into your local branch."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>git pull --rebase</code> do?",
    opts: ["Fetches, then rebases your local commits on top of the upstream instead of merging", "Force pushes after pulling", "Deletes local commits", "Creates a merge commit"],
    correct: 0,
    why: "<code class='cmd'>--rebase</code> replays your local-only commits on top of the fetched upstream, avoiding an extra merge commit and keeping history linear."
  },
  {
    level: "intermediate",
    q: "When a merge has conflicts, what must you do after editing the conflicted files?",
    opts: ["<code class='cmd'>git add</code> the resolved files, then <code class='cmd'>git commit</code> (or <code class='cmd'>git merge --continue</code>)", "<code class='cmd'>git push</code> immediately", "<code class='cmd'>git reset</code> the files", "Nothing, git auto-resolves"],
    correct: 0,
    why: "Editing removes the conflict markers; staging the files marks them resolved, and committing finalizes the merge. <code class='cmd'>git merge --abort</code> cancels instead."
  },
  {
    level: "intermediate",
    q: "Which command renames the remote <code class='cmd'>origin</code> to <code class='cmd'>upstream</code>?",
    opts: ["<code class='cmd'>git remote rename origin upstream</code>", "<code class='cmd'>git remote mv origin upstream</code>", "<code class='cmd'>git rename remote origin upstream</code>", "<code class='cmd'>git config remote.origin upstream</code>"],
    correct: 0,
    why: "<code class='cmd'>git remote rename origin upstream</code> updates the remote's short name and rewrites its tracking refs."
  },
  {
    level: "intermediate",
    q: "What does <code class='cmd'>git checkout -- &lt;file&gt;</code> (legacy) do, equivalent to <code class='cmd'>git restore &lt;file&gt;</code>?",
    opts: ["Discards working-tree changes, restoring the file from the index/HEAD", "Switches branches", "Deletes the file", "Stages the file"],
    correct: 0,
    why: "The classic <code class='cmd'>git checkout -- &lt;file&gt;</code> overwrites local edits. Modern git splits this safer job into <code class='cmd'>git restore</code>."
  },
  {
    level: "intermediate",
    q: "How do you view a stash's contents without applying it?",
    opts: ["<code class='cmd'>git stash show -p</code>", "<code class='cmd'>git stash diff</code>", "<code class='cmd'>git stash cat</code>", "<code class='cmd'>git show stash</code>"],
    correct: 0,
    why: "<code class='cmd'>git stash show -p</code> prints the patch of the most recent stash. List entries with <code class='cmd'>git stash list</code>."
  },

  /* ===================== ADVANCED ===================== */
  {
    level: "advanced",
    q: "Which command starts an interactive rebase over the last 3 commits to squash/reorder/edit them?",
    opts: ["<code class='cmd'>git rebase -i HEAD~3</code>", "<code class='cmd'>git rebase --edit 3</code>", "<code class='cmd'>git commit --interactive 3</code>", "<code class='cmd'>git squash HEAD~3</code>"],
    correct: 0,
    why: "<code class='cmd'>git rebase -i HEAD~3</code> opens an editor where you can <code class='cmd'>pick</code>, <code class='cmd'>squash</code>, <code class='cmd'>reword</code>, <code class='cmd'>edit</code>, or <code class='cmd'>drop</code> commits."
  },
  {
    level: "advanced",
    q: "In git's object model, what does a <b>tree</b> object represent?",
    opts: ["A directory: a list of names mapping to blobs (files) and other trees", "A single file's contents", "A branch pointer", "A commit message"],
    correct: 0,
    why: "A tree is git's directory snapshot, referencing blobs (file contents) and sub-trees. A commit points to one top-level tree."
  },
  {
    level: "advanced",
    q: "What does a <b>blob</b> object store?",
    opts: ["The raw contents of a file (no filename or metadata)", "A directory listing", "A commit's parents", "A tag message"],
    correct: 0,
    why: "A blob holds only byte content, addressed by its hash. The filename lives in the tree that references the blob, enabling deduplication."
  },
  {
    level: "advanced",
    q: "A commit object points to which of these?",
    opts: ["One tree (the snapshot), its parent commit(s), author/committer, and a message", "A diff against the previous commit", "A branch name", "A list of blobs only"],
    correct: 0,
    why: "Commits reference a full tree snapshot plus parent commit(s) and metadata. Diffs are computed on demand, not stored."
  },
  {
    level: "advanced",
    q: "What is a 'ref' in git (e.g. a branch or tag)?",
    opts: ["A named pointer to a commit hash, stored under <code class='cmd'>.git/refs</code>", "A copy of a commit", "A remote URL", "A staged file"],
    correct: 0,
    why: "Branches and tags are refs: tiny files (or packed entries) mapping a name to a commit SHA. Moving a branch just rewrites its ref."
  },
  {
    level: "advanced",
    q: "Which command does a binary search through history to find the commit that introduced a bug?",
    opts: ["<code class='cmd'>git bisect</code>", "<code class='cmd'>git search</code>", "<code class='cmd'>git find-bug</code>", "<code class='cmd'>git blame --bug</code>"],
    correct: 0,
    why: "<code class='cmd'>git bisect</code> checks out midpoints between a known-good and known-bad commit; you mark each <code class='cmd'>good</code>/<code class='cmd'>bad</code> until it isolates the culprit in log2(n) steps."
  },
  {
    level: "advanced",
    q: "What is a refspec like <code class='cmd'>+refs/heads/*:refs/remotes/origin/*</code>?",
    opts: ["A mapping that tells git which remote refs to fetch and where to store them locally", "A merge strategy", "A commit signature", "A .gitignore pattern"],
    correct: 0,
    why: "A refspec is <code class='cmd'>&lt;src&gt;:&lt;dst&gt;</code>; the leading <code class='cmd'>+</code> allows non-fast-forward updates. This is the default fetch refspec mapping remote branches into <code class='cmd'>origin/*</code>."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>git push origin :feature</code> (empty source) do?",
    opts: ["Deletes the <code class='cmd'>feature</code> branch on the remote", "Creates an empty branch", "Pushes all branches", "Renames the branch"],
    correct: 0,
    why: "Pushing an empty source to a destination ref deletes that remote ref. The clearer modern form is <code class='cmd'>git push origin --delete feature</code>."
  },
  {
    level: "advanced",
    q: "Why is <code class='cmd'>git push --force-with-lease</code> safer than <code class='cmd'>--force</code>?",
    opts: ["It refuses to overwrite remote work you have not seen, by checking the remote ref hasn't moved", "It is faster", "It signs the push", "It backs up first"],
    correct: 0,
    why: "<code class='cmd'>--force-with-lease</code> aborts if the remote branch advanced since your last fetch, preventing you from clobbering a teammate's new commits."
  },
  {
    level: "advanced",
    q: "After an interactive rebase, how do you continue once you have resolved conflicts in a step?",
    opts: ["<code class='cmd'>git add</code> the files, then <code class='cmd'>git rebase --continue</code>", "<code class='cmd'>git commit</code> then <code class='cmd'>git push</code>", "<code class='cmd'>git rebase --skip</code> always", "<code class='cmd'>git merge --continue</code>"],
    correct: 0,
    why: "Stage the resolved files and run <code class='cmd'>git rebase --continue</code>. Use <code class='cmd'>--skip</code> to drop a commit or <code class='cmd'>--abort</code> to bail out entirely."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>git merge --squash feature</code> do?",
    opts: ["Stages feature's combined changes as one set without committing or recording a merge parent", "Creates a merge commit with two parents", "Rebases feature", "Deletes feature"],
    correct: 0,
    why: "<code class='cmd'>--squash</code> collapses the branch's work into staged changes; you then make a single commit. No merge link to <code class='cmd'>feature</code> is recorded."
  },
  {
    level: "advanced",
    q: "What is the difference in history shape between merge and rebase?",
    opts: ["Merge preserves both histories and may add a merge commit; rebase rewrites commits onto a new base for a linear history", "They produce identical history", "Rebase always adds a merge commit", "Merge deletes commits"],
    correct: 0,
    why: "Merge keeps the true branching topology (non-destructive). Rebase replays commits onto a new base, giving a clean linear history at the cost of rewriting hashes."
  },
  {
    level: "advanced",
    q: "How do you add a git submodule from <code class='cmd'>&lt;url&gt;</code> into <code class='cmd'>libs/foo</code>?",
    opts: ["<code class='cmd'>git submodule add &lt;url&gt; libs/foo</code>", "<code class='cmd'>git add --submodule &lt;url&gt;</code>", "<code class='cmd'>git clone --sub libs/foo</code>", "<code class='cmd'>git remote add libs/foo</code>"],
    correct: 0,
    why: "<code class='cmd'>git submodule add</code> nests another repo, recording its URL in <code class='cmd'>.gitmodules</code> and pinning it to a specific commit (a gitlink in the parent tree)."
  },
  {
    level: "advanced",
    q: "After cloning a repo that contains submodules, what initializes and fetches them?",
    opts: ["<code class='cmd'>git submodule update --init --recursive</code>", "<code class='cmd'>git submodule pull</code>", "<code class='cmd'>git fetch --submodules</code>", "<code class='cmd'>git clone --deep</code>"],
    correct: 0,
    why: "<code class='cmd'>git submodule update --init --recursive</code> populates submodule directories at their pinned commits. Or clone with <code class='cmd'>--recurse-submodules</code> up front."
  },
  {
    level: "advanced",
    q: "What does the parent of a submodule store about it?",
    opts: ["A gitlink: a reference to a specific commit hash in the submodule repo", "A full copy of the submodule's files", "The submodule's branch name only", "Nothing -- it is just a folder"],
    correct: 0,
    why: "The parent tree contains a gitlink pinning the submodule to one commit, so checkouts are reproducible. The submodule has its own independent history."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>git restore --source=HEAD~2 app.js</code> do?",
    opts: ["Restores <code class='cmd'>app.js</code> in the working tree to its content from 2 commits ago", "Reverts the last 2 commits", "Resets the branch", "Deletes app.js"],
    correct: 0,
    why: "<code class='cmd'>--source</code> lets <code class='cmd'>git restore</code> pull a file's contents from any commit into the working tree, without moving HEAD or touching other files."
  },
  {
    level: "advanced",
    q: "Which command rewrites history to drop a commit while keeping later ones (non-merge)?",
    opts: ["<code class='cmd'>git rebase -i</code> and mark the commit <code class='cmd'>drop</code>", "<code class='cmd'>git revert</code> only", "<code class='cmd'>git reset --soft</code>", "<code class='cmd'>git clean</code>"],
    correct: 0,
    why: "Interactive rebase lets you <code class='cmd'>drop</code> (or delete the line for) a commit, replaying the rest. <code class='cmd'>revert</code> instead adds an inverse commit without rewriting."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>git cherry-pick -n &lt;hash&gt;</code> (the <code class='cmd'>-n</code> flag) do?",
    opts: ["Applies the commit's changes to the working tree/index without committing", "Cherry-picks without conflicts", "Negates the commit", "Picks the next commit too"],
    correct: 0,
    why: "<code class='cmd'>-n</code> (<code class='cmd'>--no-commit</code>) stages the changes so you can combine or tweak several picks before making your own commit."
  },
  {
    level: "advanced",
    q: "How do you tell git to remember resolutions to recurring merge conflicts?",
    opts: ["Enable <code class='cmd'>rerere</code> with <code class='cmd'>git config rerere.enabled true</code>", "<code class='cmd'>git merge --remember</code>", "<code class='cmd'>git config conflict.cache</code>", "It cannot be done"],
    correct: 0,
    why: "rerere ('reuse recorded resolution') records how you resolved a conflict and replays it automatically next time the same conflict appears, e.g. during repeated rebases."
  },
  {
    level: "advanced",
    q: "What does <code class='cmd'>git reset --soft HEAD~3</code> followed by a single commit accomplish?",
    opts: ["Squashes the last 3 commits into one new commit (their changes stay staged)", "Deletes the last 3 commits and their changes", "Reverts to the remote", "Creates 3 inverse commits"],
    correct: 0,
    why: "<code class='cmd'>--soft</code> moves HEAD back 3 commits but keeps all their changes staged; one <code class='cmd'>git commit</code> then combines them -- a quick squash without interactive rebase."
  },
  {
    level: "advanced",
    q: "What is the practical difference between <code class='cmd'>git diff HEAD</code> and <code class='cmd'>git diff</code>?",
    opts: ["<code class='cmd'>git diff HEAD</code> shows staged + unstaged changes vs the last commit; plain <code class='cmd'>git diff</code> shows only unstaged", "They are identical", "<code class='cmd'>git diff HEAD</code> shows only staged", "<code class='cmd'>git diff HEAD</code> compares branches"],
    correct: 0,
    why: "Plain <code class='cmd'>git diff</code> = working tree vs index. <code class='cmd'>git diff --staged</code> = index vs HEAD. <code class='cmd'>git diff HEAD</code> = working tree vs HEAD (both staged and unstaged combined)."
  },
  {
    level: "advanced",
    q: "How do you abandon an in-progress merge and return to the pre-merge state?",
    opts: ["<code class='cmd'>git merge --abort</code>", "<code class='cmd'>git reset --soft</code>", "<code class='cmd'>git restore --merge</code>", "<code class='cmd'>git revert HEAD</code>"],
    correct: 0,
    why: "<code class='cmd'>git merge --abort</code> restores the working tree and index to how they were before the merge began (when a clean pre-merge state exists)."
  }

];
