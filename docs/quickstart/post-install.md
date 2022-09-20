---
id: post-install
title: Post Install
---
> **_NOTE:_**   **Use your fav text editor (vi, vim, nano, NvChad, geany, etc... ).**

### update 
```bash
update
```

### Fix Rofi 
rofi may not work after installation

open terminal <kbd>mod + Return</kbd>
```bash
nvim .config/bspwm/bspwmrc
```
then add
```bash
# Fix Rofi 
export LC_ALL="en_US.UTF-8"
```

### Fix grub theme
GRUB theme may not work after installation

![GRUB](/img/post-install/grub-1.png)

open terminal <kbd>mod + Return</kbd>
```bash
install exodia-grub-theme
```

![GRUB](/img/post-install/grub-2.png)

### add Custom Menus to GRUB
open terminal <kbd>mod + Return</kbd>

```bash
sudo vim /etc/grub.d/40_custom
```

 then add

```bash
menuentry "Reboot" {
      reboot

}

menuentry "Shut Down" {
      halt

}
```

and update GRUB 
```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
 
![GRUB](/img/post-install/grub-3.png)

as you see `Shut Down` & `Reboot` Menus added