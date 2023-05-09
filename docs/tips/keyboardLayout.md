---
id: keyboardLayout
title: Set keyboard Layout
---

<details>
   <summary><h3> for (v2022.12) Release or less </h3></summary>

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
  
  
</details>