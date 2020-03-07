---
layout: post
title: "Ubiquiti AP Setup Debugging"
comments: true
date: 2016-02-01 11:15:30
---

While trying out a Ubiquiti wifi solution, I ran into one AP not getting installed correctly. It was showing as either `disconnected` or `pending authorization` - the latter I think means that it was trying to connect to a wifi netowork rather than the ethernet network it was plugged into.

Through various Google searches, I found that might mean that the controller and the AP were running different versions. I tried a few times upgrading via the web interface to no avail. Finally I got the upgrade bin file by getting it from the controller:

    http://10.0.2.22:8080/dl/firmware/BZ2/3.2.12.2920/firmware.bin

and then scp-ing it to the non working AP - the default user / pass for a factory reset AP is `ubnt / ubnt`:

    scp firmware.bin ubnt@10.0.2.25:/tmp/fwupdate.bin

It then said "Managed by Other" - I adopted via the advanced setting and used ubnt / ubnt for user / pass.

There were some other things that went on, and now the AP is showing as `Connected (100 FDX)` which means it's not connected to as a gigabit port (even though it is) --- so there's still some work to do.
