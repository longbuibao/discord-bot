# The Bash History

- The history of the commands each user has run in a file. The file is `.bash_history` by default. The number of commands then will be stored in the history file is controlled by an enviroment variable call `HISTFILESIZE`. You can print out the entire bash history to the screen by running a single command `history`.
- Bash will save the history commands to the `.bash_history` only when user loggout
- Use `!<Index of command history>` to rerun the command, `!!` to run the previous command.
- `!<command>` Run the last `command` from history.
- `!<command>:p` Just print the command, not executing it.
- Put a ` ` (space) front of a command to exclude it from history. Ex: `(space) ls`, will not save th e `ls` command to the history.
- Set the `HISTCONTROL` enviroment variable to ignore some command being saved in history. Ex: `HISTCONTROL=ignoredups` will not save five `cd` command in history, `ignoreboth` will ignore command that have `space` in front of it and the duplicate commands.
