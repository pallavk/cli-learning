---
created: 2026-06-29
updated: 2026-06-29
tags:
  - git
  - worktrees
  - learning
---

# Git Sparse-Checkout

## The one-line idea

Sparse-checkout tells git: "only write a *subset* of the branch's files onto
disk, ignore the rest." The branch still holds every file in history. Git just
filters which ones land in your working directory.

Three layers, with the filter in the middle:

| Layer | Holds |
|---|---|
| Branch history (in `.git`) | every file, all commits |
| **Sparse filter** | a list of path patterns |
| Working directory (on disk) | only files matching the filter |

A file can be fully present in history but invisible on disk because the filter
excludes it. That is not corruption. It is the feature working.

## Is it repo-level?

No. It is **per-worktree**. The on/off switch and the pattern list both live in
that worktree's own private folder, not in the shared repo config.

| Config scope | Where it lives | Shared by |
|---|---|---|
| System | `/etc/gitconfig` | every repo on the machine |
| Global (user) | `~/.gitconfig` | all your repos |
| Repo (local) | `.git/config` | all worktrees of this repo |
| **Worktree** | `.git/worktrees/<name>/config.worktree` | **just that one worktree** |

Sparse-checkout uses the bottom row. That is why one worktree can be filtered
while another worktree of the same repo sees the full tree.

Unlocking per-worktree config requires `extensions.worktreeConfig = true`.
Without worktrees, `core.sparseCheckout` just sits in `.git/config` and affects
that repo's single working copy. Either way it is "checkout level," never
"history level" — your commits are untouched.

## Real example (QubitSafe repo)

The `beads-sync` worktree exists only to commit the `.beads/` state folder, so it
is filtered down to just that one path:

```
# inside .git/worktrees/beads-sync/
config.worktree         -> [core] sparseCheckout = true
info/sparse-checkout    -> /.beads/

# result on disk
$ ls -A    # .beads  .git   <- nothing else from the branch
```

Run from the main worktree, `git sparse-checkout list` returns
`fatal: this worktree is not sparse`. Run from `beads-sync`, it returns `/.beads/`.
Same repo, different answer. Proof that it is per-worktree.

## The gotcha

When a tool tries to write a file *outside* the filtered paths in a sparse
worktree, it looks like the write failed or the file vanished. The file is not
missing — the sparse filter is excluding that path on purpose.

Do not force it (`git checkout --ignore-skip-worktree-bits`, reapply, etc.) as a
first move. First read the filter to understand why the path is excluded:

```bash
git config core.sparseCheckout   # true/false — is the filter on
git sparse-checkout list         # show the active patterns
```

Usually the exclusion is intentional. The fix is to work inside the allowed paths,
or do the work in the correct (non-sparse) worktree instead.
