# CLI & Git — interactive learning set

Self-contained, single-file HTML explainers for the command-line tools I reach for most.
Every page is vanilla HTML/CSS/JS — **no build step, no network, no dependencies**. Open any
`*.html` file in a browser and it just works.

Two formats:

- **Field Guides** — a searchable cheatsheet plus a self-test quiz (beginner → advanced) for each tool.
- **Git, deeply** — animated concept explainers that show what *moves* (commits, pointers, HEAD,
  the index, your working tree) as you step through an operation. For the ideas that never click
  from a cheatsheet alone.

## Tools covered

| Tool | Field Guide | Notes |
|------|-------------|-------|
| **awk** | [`awk/awk-guide.html`](awk/awk-guide.html) | Fields, patterns, actions, built-in variables |
| **bash** | [`bash/bash-guide.html`](bash/bash-guide.html) | Expansion, redirection, scripting idioms |
| **sed** | [`sed/sed-guide.html`](sed/sed-guide.html) | Substitution, addressing, the hold space |
| **tmux** | [`tmux/tmux-guide.html`](tmux/tmux-guide.html) | Sessions, windows, panes, prefix keys |
| **vim** | [`vim/vim-guide.html`](vim/vim-guide.html) | Motions, operators, modes, registers |
| **git** | [`git/git-guide.html`](git/git-guide.html) | Day-to-day commands + the deep-dives below |

## Git, deeply — concept explainers

Animated walkthroughs in [`git/concepts/`](git/concepts/index.html). Each reuses a shared
commit-graph engine that animates branch pointers and edges as you step through frames.

| # | Page | What it teaches |
|---|------|-----------------|
| 01 | [HEAD, refs & detached HEAD](git/concepts/head-refs.html) | A branch is a 41-byte file; HEAD as "where you are"; the detached-HEAD state |
| 02 | [Three trees & `git reset`](git/concepts/reset.html) | HEAD / index / working dir, and what `--soft`, `--mixed`, `--hard` do to each |
| 03 | [How `git merge` really works](git/concepts/merge.html) | Fast-forward vs `--no-ff` vs three-way; the merge base; conflict markers |
| 04 | [Understanding `git rebase`](git/concepts/rebase.html) | Replay-as-new-commits; interactive rebase; `--onto`; the golden rule |
| 05 | [`git worktree`](git/concepts/worktree.html) | One repo, many working directories checked out at once |
| 06 | [`git reflog`: your safety net](git/concepts/reflog.html) | Every HEAD move is recorded — recover bad resets, rebases, deleted branches |
| 07 | [Cherry-pick](git/concepts/cherry-pick.html) | Copy one commit's diff → new commit, new hash (copy, not move) |
| 08 | [Revert: undo by moving forward](git/concepts/revert.html) | Append the inverse commit; revert vs reset; the `-m` merge gotcha |
| 09 | [Stash: work parked as commits](git/concepts/stash.html) | A stash entry is a commit with two parents; the stash stack; pop vs apply vs drop |
| 10 | [Bisect: binary-search a bug](git/concepts/bisect.html) | Find a regression in log₂(N) tests; `git bisect run` automation |
| 11 | [Remotes & tracking branches](git/concepts/remotes.html) | `origin/main` is a cached pointer, not the server; fetch vs pull vs push; ahead/behind |
| 12 | [Pull requests](git/concepts/pull-requests.html) | A PR is a pushed branch + a merge button; merge-commit vs squash vs rebase; the fork model |
| 13 | [Tags & releases](git/concepts/tags.html) | A tag doesn't move when you commit; lightweight vs annotated; pushing tags; detached-HEAD checkout |
| 14 | [The staging area](git/concepts/staging.html) | The index as the commit you're composing; `git add -p`; the two columns; staged vs unstaged diffs |
| 15 | [Checkout, switch & restore](git/concepts/checkout.html) | Why one overloaded command split into `switch` (moves HEAD) and `restore` (changes files); full translation table |

## Layout

```
learning/
├── awk/   bash/   sed/   tmux/   vim/      # <tool>-guide.html + questions.js
└── git/
    ├── git-guide.html
    └── concepts/                            # "Git, deeply" — 15 explainers + index.html
```

Each tool folder holds its `*-guide.html` page and a `questions.js` powering its quiz.

---
Self-contained, no network required.
