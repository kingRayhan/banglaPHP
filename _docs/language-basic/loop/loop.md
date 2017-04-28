---
title: What is loop?
---

আভিধানিক অর্থে loop শব্দের অর্থ হচ্ছে পুনরাবৃত্তি। লুপ কী জিনিস সেটা বুজার আগে আসুন কিছু programm লেখি। 

আমি চাচ্ছি 1 থেকে 10 পর্যন্ত [echo/print](echo_print.md) করতে (প্রতি লাইনে একটি সংখ্যা থাকবে)। তো এই programm টি কীভাবে লিখবেন?

খুব সহজ, নিচের programm টি খেয়াল করুন।

```php
<?php
echo "1 <br/>";
echo "2 <br/>";
echo "3 <br/>";
echo "4 <br/>";
echo "5 <br/>";
echo "6 <br/>";
echo "7 <br/>";
echo "8 <br/>";
echo "9 <br/>";
echo "10 <br/>";
```
<div style="font-size:25px">ফলাফল:</div>
> 
1 <br/>2 <br/>3 <br/>4 <br/>5 <br/>6 <br/>7 <br/>8 <br/>9 <br/>10 <br/>

চাইলে আপনি এই program টি এক লাইনেই লিখতে পারতেন। যেমন -
```php
<?php
echo "1 <br/> 2 <br/> 3 <br/> 4 <br/> 5 <br/> 6 <br/> 7 <br/> 8 <br/> 9 <br/> 10";
```
একই ফলাফল পাবেন। যাইহোক এটা কোন সমস্যা না। সমস্যা হচ্ছে যখন আপনি চাইবেন 1 থেকে 1000 বা 100000 পর্যন্ত [echo/print](echo_print.md) করতে চাইবেন তখন কী হবে?

তখন সেই programm টি কীভাবে লিখবেন? আপনি নিশ্চয় 1000 বা 100000 লাইন কোড লিখতে চাইবেন না। <span style="font-size:35px;">তো?</span>

<span style="font-size:35px;">কোন চিন্তা করার দরকার নাই :)</span>

এই ধরনের সমস্যা সমাধান করার জন্য সকল programming language এ <mark class="green">Loop</mark> বলে একটা জিনিস আছে।

> যখনই কোন programm এ আমাদের কে একই জিনিস বার বার লিখতে হয় ঠিক তখনই আমাদের কে ব্যবহার করতে হবে loop

PHP তে তিন ধরনের loop আছে, প্রত্যেকটা লুপ সম্পর্কে আমরা বিস্তারিত study করব।

### Classification of LOOP
* [While loop](while_loop.md)
* [For loop](for_loop.md)
* [Do while loop](do_while.md)