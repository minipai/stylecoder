---
title: Clean Code, clean more
slug: clean-code-clean-more
date: 2013-04-23T16:19:24.000Z
date_updated: 2013-04-23T16:19:24.000Z
---

雖然我只是個jQuery programmer，不會寫什麼高深的程式，但是聽到Clean Code中文版推出後，馬上就去買來學習一下。因為程式功力不高的話，以後更容易看不懂自己寫的東西是什麼。

整本書大概看到第九章後面就看不懂了，不過回頭看來，整本書一開始就在講最重要的重點，命名。命名的原則是，「命名應該代表意圖」。或是更白話一點地說，你應該用程式的「目的」而非手段來命名。把握這個原則是寫出clean code的基本。

這個原則我非常喜歡，因為「把握目的」是一個很重要的做事原則。在寫程式第一次直接寫的 code 的命名，常常是用「手段」命名，如果不趕緊refactor 成用目的來命名，不就是老生常談的人生道理「不要只顧手段忘記目的」了嗎？

所以clean code的命名可以應用到很多地方。比如說，最近有一個新聞是「徵show girl限女 涉就業歧視」，大部份人看了應該不以為然，例如就有人說「徵奶媽不可限女了嗎」。

但是如果有把握clean code的命名原則的話，就算徵奶媽不能限女也不是問題，因為奶媽的目的是哺乳，那徵人條件就是「能分泌乳汁」，而非「限女」。用code來表示的話，你應該用

    if ( isLatating() )
    

來取代

    if (sex == 'female')
    

如果真的有思考過一個職缺的「目的」，幾乎是沒有什麼職缺包含 show gril 是有必要寫限男／女的，如果真有什麼職業真的是非女性不可，那就表示你可以用

    if( hasVaginal() )
    

來描述這個職缺條件也不會奇怪了。

再想到人生，我可能要找時間靜下來想想怎麼refactor一下 salary > n 啊&hellip;