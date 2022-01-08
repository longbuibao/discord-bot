# The Filesystem Hierarchy Standard

- `/bin` Contains binaries or user excutable files which are available to all users.
- `/sbin` Contains applications that only the superuser (hence the initial `s`) will need.
- `/boot` Contains files required for starting your system.
- `/home` Is where you will find your users's home directories. Under this directory there is another directory for each user, if that particular user has a home direectory. `root` has its home directory separated from the rest of the users's home directories and is `/root`.
- `/dev` Contains device file.
- `/ect` Contains most, if not all system-wide configuration files.
- `/lib` Contains shared library files used by different applications.
- `/media` Is used for external storage will be automatically mounted.
- `/mnt` Like `/media` but it's not very often used days.
- `/var` variable length, such as log file
