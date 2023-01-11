---
id: keyboardLayout
title: Set keyboard Layout
---

<!-- ![](/img/tips/keyboardLayouts/Layouts.jpg) -->

![](/img/tips/keyboardLayouts/en.png) ![](/img/tips/keyboardLayouts/ar.png)


- edit `bspwmrc`

    - ```bash
    nvim ~/.config/bspwm/bspwmrc
    ```

- add 

    - ```bash
    # ----- set keyboard Layout ----- #
    setxkbmap -layout us,ar  # add 'us,ar' #
    setxkbmap -option 'grp:alt_shift_toggle'  # Alt+Shift -> switch layout #
    ```

- replace `us`, `ar` to your language
  
  - List Layouts `localectl list-x11-keymap-layouts`
  - all [Layouts](https://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements)