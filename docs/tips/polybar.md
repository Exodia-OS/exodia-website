---
id: polybar
title: polybar
---

<details>
   <summary><h3> GitHub Module </h3></summary>

### github-notifications

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
- set `USER` to your username

- set `TOKEN` to your accessTokens


</details>
