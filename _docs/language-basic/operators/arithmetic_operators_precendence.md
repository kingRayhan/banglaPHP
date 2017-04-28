---
title: Precedence of Arithmetic operators
---
আমরা তো ছোটবেলা সবাই `সরল` অংক করেছিলাম, মনে আছে?
সে সরল অংকে যোগ , বিয়োগ , গুন , ভাগ ইত্যাদি অপারেটরের সমন্বয়ে বিশাল বিশাল রাশি থাকত। এই সব অংক করার কিছু বিশেষ নিয়ম ছিল , যেমন আগে গুনের কাজ তারপর যোগের কাজ তারপর বিয়োগের কাজ ইত্যাদি ইত্যাদি...।

PHP প্রোগ্রামিং language এ Arithmatic অপারেটরেও সেই একই ক্রমে আমাদের কে Arithmatic operation গুলি চালাতে হবে।

নিচে Arithmatic Operators এর Precedence এর তালিকা দেয়া হল।


 <div style="font-size:55px;text-align:center;border:3px solid #1ABC9C;margin:25px"> % , / , * , + , - </div>

অর্থাৎ Modulus (%) এর precedence বা গুরুত্ব সবচেয়ে বেশি এবং বিয়োগ ( - ) এর Precedence সব চেয়ে কম।

এই ব্যাপারগুলি আমরা সবাই জানি তবুও কাজ করার সময় অনেক confusion create কয়। এই confusion কে ঝেরে ফেলার জন্য আজ আমরা কিছু ছোট ছোট অংক করব। 

## চলুন শুরু করা যাক।


### উদাহরন ১

 <div style="font-size:25px">10 * 5 - 6</div>
এর সমাধান কেমন হবে?


<div style="overflow:hidden;">
<div class="col-1-2 border-right">
<div style="font-size:25px">এরকম?</div>
&nbsp; 10 * 5 - 6 <br/>
= (10 * 5) -6 <br/>
=  50 - 6 <br>
= 44
</div>

<div class="col-1-2" style="margin-left:15px">
<div style="font-size:25px">নাকি এরকম?</div>
&nbsp;&nbsp; 10 * 5 - 6<br>
= 10 * (5 - 6) <br/>
= 10 * -1 <br>
= -10
</div>
</div>
</div>

উপরের precedence এর তালিকায় দেখা যাচ্ছে বিয়োগের চেয়ে গুন বা Multiplication এর Precedence বেশি তাই এখানে Multiplication এর Operation টা হবে আগে এবং বিয়োগের টা হবে পরে। শুতরাং বুজতেই পারছেন প্রথম পদ্ধতিটিই সঠিক  এবং ২য় পদ্ধতিটি ভুল।

```php
echo 10 * 5 - 6;
```
**ফলাফল:**<br>
> 44


<br><br>

### উদাহরন ২
<div style="font-size:25px">10 * 5 - 6 + 2 - 8 * 21</div>
এর সমাধান কেমন হবে?

আমরা জানি multiplication এর precedence সবচেয়ে বেশি তারপর যোগ তারপর বিয়োগ।
তাহলে এর সমাধান হবে এমন।

10 \* 5 - 6 + 2 - 8 * 21

= (10 \* 5) - 6 + 2 - ( 8 \* 21 )

= 50 - 6 + 2 - 168

= ( 50 + 2 ) - 6 -168

= 52 - 174

= -122

প্রোগ্রামে run করলে এই একই ফলাফল পাবেন।

```php
echo 10 * 5 - 6 + 2 - 8 * 21;
```
**ফলাফল:**<br>
> -122


একই ভাবে 
```php
echo 10 * 5 - 6 + 2 - 8 * 21 * 45 - 7 % 21;
```
**ফলাফল:**<br>
> -7521

<br/>
```php
echo 6 % 4 + 5 - 78 * 45 - 48 / 54 * 64 + 478;
```
**ফলাফল:**<br>
> -3081.8888888889

আশা করি আজ থেকে আর কোন দিন Arithmatic mathmatical operation নিয়ে ঝামেলা বা confusion এ পরতে হবে না।