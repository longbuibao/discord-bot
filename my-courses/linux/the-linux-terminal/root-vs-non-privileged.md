# Root vs Non-privileged Users

- `sudo su`: super user do and `su` stands for "substitute user". Enter the user password, and if the password is right and the user is part of a specific group which is called _sudo_ on Ubuntu and _wheel_ on CentOs. This mean that you've temprarily become root in that terminal until you logged out from it. User belong to _sudo_ group or _wheel_ on CentOs, the command will run.

##########################

## Running commands as root (sudo, su)

##########################

- running a command as root (only users that belong to sudo group [Ubuntu] or wheel [CentOS])
  `sudo command`

- becoming root temporarily in the terminal
  `sudo su # => enter the user's password`

- setting the root password
  `sudo passwd root`

- changing a user's password
  `passwd username`

- becoming root temporarily in the terminal
  `su # => enter the root password`
