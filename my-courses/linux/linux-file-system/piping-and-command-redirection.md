# Piping and Command Redirection

Every Linux Command or program we run has three data streams connected to it:

- `STDIN (0)` Standard Input. Feed into the program or the data the program is working with.
- `STDOUT (1)` Standard Output. Data printed by the program, by defautl to the terminal.
- `STDERR (2)` Standard Error. Print Error, default to the terminal.

A pipe lets us send the output of one command as input to another one. Pipe means by which we may connect these streams, input, output and error among programs and files.
