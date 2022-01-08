# Path

- Path is a unique location to a file or a directory in the file system of an operating system. In Linux, there are two types of path names: _absolute_ and _relative_ path names.
  - An _absolute_ path is defined by specifying the location of a file or directly from the root directory.
  - An _relative_ path is defined as the path related to the current working directory. It begins at your current directory and never starts with a forward slash

# Some commands

`.` => the current working directory

`..` => the parent directory

`~` => the user's home directory

`cd` => changing the current directory to user's home directory

`cd ~` => changing the current directory to user's home directory

`cd -` => changing the current directory to the last directory

`cd /path_to_dir ` => changing the current directory to path_to_dir

`pwd` => printing the current working directory

- Installing tree

`sudo apt install tree`

`tree directory` # => Ex: tree .
`tree -d .` # => prints only directories
`tree -f .` # => prints absolute paths
