# Commit convention

In order to provide the main intent of a certain commit, the following prefixes are used within the commit messages:

* `+` a feature has been added.
* `-` a feature has been removed.
* `r` a refactoring.
* `f` a fix.
* `d` documentation has been added.
* `t` addition of trace code, which is highly volatile since it may or may not work.
* `i` .gitignore has been modified.

If a commit is a mix of the previous indicated situations, the main intent of the commit
will dictate which one of the previously listed prefixes is going to be used.
