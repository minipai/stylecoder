---
title: 跟 jQuery 一樣簡單的 Gulp
slug: gulp-intro
date: 2014-02-18T11:52:11.000Z
date_updated: 2016-04-14T02:11:46.398Z
---

現在前端開發的世界中，各種開發的「工具」也越來越受到重視了，也有很多文章，演講教你[有哪些工具好用](https://speakerdeck.com/addyosmani/automating-front-end-workflow)。有的常用工具我已經在用，可是有的沒辦法。

像是 Grunt 已經有名一陣子了，可是對我來說難度頗高，搞不清楚它是怎麼運作的，最多能複製別人寫好的範例而已。直到最近看到 Gulp 的投影片之後，看了 Gulp 的寫法覺得應該是在我能力範圍之內，所以就開始用實作來學習了。

## 跟 jQuery 一樣簡單

其實 Gulp 的語法還蠻直觀的，形式 jQuery 還蠻類似的，所以很好理解，也一樣透過 plugin 來讓各個動作串起來。

jQuery: 點擊一個按鈕要做一些事情

    $('button').on('click', fucntion(){
            $(this)
        .next()
        .addClass('fancy')
        .show()
        .cycle()
    })
    

Gulp: 定義一個工作要做一些事情

    gulp.task('stylus', function() {
      gulp.src('./stylus/ng-trans.styl')
        .pipe(stylus())
        .pipe(prefix("last 2 version", "> 1%", "ie 8"))
        .pipe(gulp.dest('./css'))
    });
    

以這段範例來說，在 command line 打 gulp stylus 就會幫你做 1. stylus 轉 css，2. css加上vendor-prefix，3. 存到指定目錄，3個動作，非常方便。因為 Gulp 本身還蠻簡單的，拿來換掉自己的小專案的 Grunt 時，一下子就搞定了。所以我主觀認定 Gulp 也跟 jQuery 一樣，是**設計師工具**了。

不過在引進到公司網站時，因為規模比較大，要做的事情比較多，所以很多要做的事情都研究（google）了好一陣子才解決。不過這不是 Gulp 的問題，而是 Gulp 還年輕，Gulp 的 plugin 數量也比較少，沒那麼成熟。例如我就遇到 plugin 提供的 option 不足（看看jquery cycle 的可以設定 option），要自己修改 source。還有就是教學與範例比較少，研究（google）起來比較辛苦。

Gulp 的使用方式與介紹也蠻多的了，這邊就不再多說了。

## Gulp 使用後

在實際用了 Gulp 之後，發現這個好用工具不只是方便，更讓自己對開發流程的掌控又更進了一步，這是在開始學之前沒有想到過的。

原本，公司網站的 Stylus/CoffeeScript 是用 supervisord(python) 執行 stylus cli 和 coffee cli，CSS 和 JavaScript 的合併和壓縮是 webassets(python) 來處理，分散在不同地方。這等於是把管理前端檔案的工作交給後端同事，增加了別人的工作，自己也沒辦法調整流程讓自己工作更順暢。

其實我也一直覺得 webassets(python) 的功能不怎麼樣，不像 Rails 對前端檔案的管理相當完整，xdite 有一個演講（[為什麼你還是應該使用Rails 開發：前端加速以及前端開發管理](http://www.youtube.com/watch?v=JN4h1TDYXo8)）在講這件事。不過用了 Gulp 之後，前端檔案的管理也不需要靠後端 framework 的支援了。Stylus/CoffeeScript的編譯、合併、壓縮以及加 hash 等等工作都能交給 Gulp 完成。

以前這些工作，用得會的工具大概就是 [Codekit](https://incident57.com/codekit/) 到 [Fire.app](http://fireapp.kkbox.com/) 之類，預設好的工具。不是不好，但是要照工具規定好的格式用才行。現在有 Gulp，終於能自己組裝開發工具了，真是感動呀&hellip;。
