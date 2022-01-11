# The `ls -l` command

`lrwxrwxrwx 1 root root`

- `-` Indicates a normal file.
- `d` Indicates a directory.
- `l` Indicates a sumbolic link which is a sort of a shortcut.
- Nine characters that follow indicate the file permissions.
- Then comes the number of hardlinks
- `root root` The owner, the group owner of the file.
-

# Commands - ls

## ls [OPTIONS] [FILES]

# listing the current directory

# ~ => user's home directory

# . => current directory

# .. => parent directory

ls

ls .

# listing more directories

ls ~ /var /

# -l => long listing

ls -l ~

# -a => listing all files and directories including hidden ones

ls -la ~

# -1 => listing on a single column

ls -1 /etc

# -d => displaying information about the directory, not about its contents

ls -ld /etc

# -h => displaying the size in human readable format

ls -h /etc

# -S => displaying sorting by size

ls -Sh /var/log

# Note: ls does not display the size of a directory and all its contents. Use du instead

du -sh ~

# -X => displaying sorting by extension

ls -lX /etc

# --hide => hiding some files

ls --hide=\*.log /var/log

# -R => displaying a directory recursively

ls -lR ~

# -i => displaying the inode number

ls -li /etc
