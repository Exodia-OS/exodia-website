---
id: polybar
title: polybar
---

### Polybar Modules

<!-- github-notifications -->
<details>

   <summary> <h4> github-notifications </h4> </summary>

![](/img/tips/github/github.png)

- generate new [Personal access tokens](https://github.com/settings/tokens)

![](/img/tips/github/1.png)

- select the classic

![](/img/tips/github/2.png)

- in `Note` set the name as you like (e.g`Polybar-Notification`), in `Expiration` set to `No expiration`

![](/img/tips/github/3.png)

- select notifications

![](/img/tips/github/4.png)

- copy access tokens

![](/img/tips/github/5.png)

```bash
nvim ~/.config/bspwm/polybar/scripts/notification-github.sh 
```
- set `USER` to `your username`

- set `TOKEN` to `your accessTokens`

</details>





<!-- ------------------------ END Polybar Modules | START OF Multi Bars ------------------------ -->





### Launching Multi Bars (polybar)

<!-- setup polybar for dual monitor -->
<details>

   <summary> <h4> setup polybar for dual monitor </h4> </summary>

I'm gonna apply the steps on Tokyo Theme (same on all themes).

- run `xrandr | grep " connected " | awk '{ print$1 }'` to connected monitors

![](/img/tips/multiBars/1.png)

- edit `nvim ~/.config/bspwm/polybar/tokyo/config`

- create new bar `[bar/sec]`

- copy everything under `[bar/main]` (from line No. 41 to line No. 79) as shown down. 

![](/img/tips/multiBars/2.png)

- and set  `monitor` to the second monitor (e.g `HDMI-1-0` as it's my second monitor) as shown down.

![](/img/tips/multiBars/3.png)

- now add the models (e.g as shown down)

```
modules-left   = xdomenu space LD bspwm RD space LD updates-pacman notification-github netDownSpeed RD space xkeyboard space themes
modules-center = LD mpd RD  
modules-right  = volume space battery network LD cpu cpuTemp date LD2 info-cava RD2 bna RD space sysmenu
```

- now we finished the second bar config 

![](/img/tips/multiBars/4.png)

- to Launch the bar

```bash
polybar -q sec -c  ~/.config/bspwm/polybar/tokyo/config &
```

- to Launch the bar always

- edit `nvim ~/.config/bspwm/bin/bspbar`

![](/img/tips/multiBars/5.png)

- Add these lines above `else`(between line No. 100 and 102)

```bash
elif [[ "$Bar" == "tokyo" ]]; then

				pkill polybar
				polybar -q main -c "$DIR"/"$Bar"/config &
				polybar -q sec -c "$DIR"/"$Bar"/config &

```

- as shown down 

![](/img/tips/multiBars/6.png)

- finally

![](/img/tips/multiBars/7.png)

</details>
