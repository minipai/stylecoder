---
title: CCS code smell
slug: ccs-code-smell
date: 2012-11-30T17:55:33.000Z
date_updated: 2012-11-30T17:55:33.000Z
---

這是個系列戰（？）文。

1. Chris Coyier在接受 [Smashing Magazine的Q&A專欄](http://coding.smashingmagazine.com/2012/07/13/coding-qa-with-chris-coyier-code-smell-type-grid/)提問時簡單講了什麼是不好的CSS code。

2. Harry Roberts 寫了長文 [Code smells in CSS](http://csswizardry.com/2012/11/code-smells-in-css/)補充。

3. Code smells in CSS 其中一條是**永遠不要用ID**，所以Jeffrey Zeldman寫了一篇 [In Defense of Descendant Selectors and ID Elements](http://www.zeldman.com/2012/11/21/in-defense-of-descendant-selectors-and-id-elements/) 回應。

4. Chris Coyier 邀請 Zeldman 上他的 [ShopTalk Show ](http://shoptalkshow.com/episodes/044-with-jeffrey-zeldman/) 聊聊。他們的共識 Chris Coyier 整理在成 [“Bad Code”, Dogmatism, etc.](http://css-tricks.com/bad-code-dogmatism-etc/)。

5. 因為Jeffrey Zeldman說ID在有語義的使用的話是沒問題的，所以 Louis Lazaris 認為根據spec，ID是沒有語義的。寫了 [IDs Will Not Make Your Documents More Semantic](http://www.impressivewebs.com/ids-not-make-documents-semantic/) 回應。

6. Jeffrey Zeldman 在自己那篇文章的comment回應說他指的語義是給人閱讀的。「[This was apparently a creative inference on my part, which the spec does not support.](http://www.zeldman.com/2012/11/21/in-defense-of-descendant-selectors-and-id-elements/#comment-64186)」。

7. Eric A. Meyer也出來說話了。他[在回應裡說你可以用 (‘[id=&ldquo;foo&rdquo;]’)](http://www.zeldman.com/2012/11/21/in-defense-of-descendant-selectors-and-id-elements/#comment-64188), 就解決ID權重太重的問題了。

應該到這邊就結束了。對了，我記得Twitter上有人說 Zeldman 果然沒有維護過大型網站。
