---
id: monitors
title: setup monitors
---

- use `arandr` to configure monitors
  
  - ![](/img/tips/monitors/1.png)

- save your configure
  
  - ![](/img/tips/monitors/2.png)

- copy  the script from `~/.screenlayout/monitors.sh` to `~/.config/bspwm/bin/`
  
  - `cp ~/.screenlayout/monitors.sh ~/.config/bspwm/bin/`
  - `mv ~/.config/bspwm/bin/monitors.sh ~/.config/bspwm/bin/monitors`

- then call this script from `bspwmrc` file
  
  - edit `~/.config/bspwm/bspwmrc`
    - `nvim ~/.config/bspwm/bspwmrc`
    - ![](/img/tips/monitors/3.png)
    - save.
    - Restart BSPWM <kbd>ctrl + shift + r</kbd>