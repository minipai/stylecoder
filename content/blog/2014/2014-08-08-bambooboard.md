---
title: 門檻越來越低之 BambooBoard 開發心得
slug: bambooboard
date: 2014-08-08T01:09:05.000Z
date_updated: 2016-04-14T02:08:33.455Z
---

[BambooBoard](http://BambooBoard.net) 是我沒事時用「討論區」當題目的練習作品。不過很意外的，最後居然做到我買個網址讓他上線了（上線本身也是練習）。這代表 VPS 也進步到能讓我也知道怎麼使用啦。

我一開始是用 Codeigniter 寫，Codeigniter 連 ORM 都沒有，所以花非常多時間在學 SQL，想怎麼撈資料，Post 和 Comment 的資料要用什麼方式聯繫起來，根本不太有辦法真正寫討論區的功能。後來 Rails 開始流行後，我也跟風去學了 Rails。比起 PHP，Ruby 真的是親切許多了，Rails 也讓我知道了 ORM 這種東西，搞懂 has_many 等資料之間的關係 ORM 就會幫我照顧好。因為要擔心的事情少了一個，用 Rails 終於寫得出一個雛形了。

後來因為 Rails 的 view 不能「繼承」，寫得有點苦，又聽到有人推 MongoDB + Express + AngularJS + node.js 這組「MEAN stack」，於是就再改用 MEAN stack 來練練看。放棄 Rails 改用 MEAN 之後，過去開發功能的阻礙都拿掉了。一是 Ruby，Ruby雖然相當好上手，但是畢竟平常沒在用，還是要一邊慢慢學，改成全部用 JavaScript 就沒這種問題了。二是RDBMS，關聯式資料庫的使用難度真是太高了，改用MongoDB後，不再需要 migrate db了，資料的擺放跟關聯方式也不用辛苦的想了。之後開發就很流暢，把討論區該有的功能都寫出來啦。

最後是上線。PHP最簡單，毫無困難。用 Rails 時是靠 Heroku，不過 Heroku 自己沒有提供 MongoDB，試著用 Heroku + MongoHQ 結果超慢。本來想放棄上線，但是後來看到 DigitalOcean 猛打的廣告，就去玩玩看。DigitalOcean可以直接開裝好 MEAN stack 的機器，網頁的界面也蠻友善的，DigitalOcean站內的 tutorial 又多，有我需要的，讓我也成功的讓程式跑在 server 上了。操作 VPS，這其實也是我以前不敢想的。

總之，終於達成一個階段性練習了（揮汗）。
