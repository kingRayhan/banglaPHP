---
title: PHP Comparison operators
---

অনেক সময়ই আমাদের কে দুই বা ততধীক variable এর মধ্যে কিছু তুলনা করতে হয় , যেমন দুটি variable সমান কিনা , কোন একটি বড় কিনা ইত্যাদি। পিএইচপিতে এই ধরনের তুলনা করার জন্য যে অপারেটর ব্যবহার করা হয় তাকে বলা হয় `Comparison operators`।


> Comparison operators , দুটি value কে তুলনা করে `true` অথবা `false` রিটার্ন করে।

### এক নজরে  `PHP Comparison operators`।


| Operator | Name | Example |  Result |
|---|---|---|
| **==** | [Equal](#equal---) | $x == $y | true return করবে যখন $x এবং $y এর মান সমান হবে | 
| **===** | [Identical](#identical---) | $x === $y | true return করবে যখন $x এবং $y এর মান সমান হবে এবং এই দুইটি variable <a href="../data_types.md">ডাটা টাইপ</a> ও একই হবে | 
| **!=** | [Not Equal](#not-equal-------) | $x != $y | true return করবে যখন $x এবং $y এর মান অসমান হবে। | 
| **<>** | [Not Equal](#not-equal-------) | $x <> $y | true return করবে যখন $x এবং $y এর মান অসমান হবে। |
| **!==** | [Not Equal](#not-identical---) | $x !== $y | true return করবে যখন $x এবং $y এর মান অসমান হবে অথবা তাদের <a href="../data_types.md">ডাটা টাইপ</a> না মিলবে। | 
| **>** | [Greater Than](#greater-than---) | $x > $y | true return করবে যখন $x এর মান $y এর চেয়ে বড় হবে। | 
| **>=** | [Greater or Equal](#greater-or-equal--)| $x >= $y | true return করবে যখন $x এর মান $y এর চেয়ে বড় হবে অথবা সমান হবে। | 
| **<** | [Less Than](#less-than---) | $x < $y | true return করবে যখন $x এর মান $y এর চেয়ে ছোট হবে। | 
| **<=** | [Less or Equal](#less-or-equal) | $x <= $y | true return করবে যখন $x এর মান $y এর চেয়ে ছোট হবে অথবা সমান হবে। | 


## Equal ( == )
দুটি value সমান হলে `true` রিটার্ন করে।

```php
<?php
    $a = 'php';
    $b = 'php';
    var_dump($a == $b);
```
> bool(true)



<br/>
<br/>


```php
<?php
    var_dump("rayhan" == "rayhan");
```
> bool(true)




<br/>
<br/>

value সমান না হলে false রিটার্ন করে।



```php
<?php
var_dump("Rayhan" == "rayhan");
```
> bool(false)

<br/>
<br/>



```php
<?php
var_dump(125 == 125);
```
> bool(true)

<br/>

<mark class="highlight">
    `Equals` অপারেটর একটি টাইপ ফ্রি অপারেটর, দুটি ভেল্যু যদি ভিন্ন [ডাটা-টাইপে](../data_types.md)ও থাকে তবুও শুধুমাত্র ভেল্যু সমান হলেই `true` রিটার্ন করে।
</mark>



```php
<?php
var_dump(125 == "125");
var_dump(999 == "999");
var_dump("56" == 56);
```
> **ফলাফল:** <br/> bool(true) <br/> bool(true) <br/> bool(true)

<br/>
<br/>

## Identical ( === )
দুটি ভেল্যু সমান হয়ার পাশাপাশি [ডাটা-টাইপ](../data_types.md)ও যখন একই হবে কেবল মাত্র তখনই `true` রিটার্ন করে।

[Equals](#equal---) অপারেটর এ দেখেছিলাম [ডাটা-টাইপে](../data_types.md) যাই হোক না কেন , দুটি ভেল্যু সমান হলেই `true` রিটার্ন করে কিন্তু `===` অপারেটর শুধুমাত্র তখনই `true` রিটার্ন করবে যখন একই সাথে ভেল্যু ও [ডাটা-টাইপে](../data_types.md) সমান হবে।


```php
<?php
var_dump("BanglaPHP" === "BanglaPHP");
var_dump("BanglaPHP" === 2017);
var_dump(125 === 125);
var_dump(125 === "125");
var_dump(999 === "999");
```
> **ফলাফল:** <br/> bool(true) <br/> bool(false) <br/> bool(true) <br/> bool(false) <br/> bool(false)


<br/>
<br/>
<br/>

## Not Equal ( != ) / ( <> )
এটি [Equals](#equal---) অপারেটরের সম্পুর্ন বিপরীত। [Equals](#equal---) অপারেটর এ দুটি ভেল্যু সমান হলে `true` রিটার্ন হয় কিন্তু এই `!=` অপারেটরে যখন দুটি ভেল্যু অসমান হবে তখন `true` রিটার্ন করে। 


```php
<?php
$a = 10;
$b = 10;
var_dump($a != $b);
```
> **ফলাফল:** <br/> bool(false)

_এখানে দুটি ভেল্যু `অসমান` নয় তাই `false` রিটার্ন হয়েছে।_ 


<mark class="highlight">
    [Equals](#equal---) অপারেটরের মত , এটিও একটি টাইপ ফ্রি অপেরেটর।
</mark>

```php
<?php
var_dump("10" != 150);
var_dump("10" != 105);
```
> **ফলাফল:** <br/> bool(true) <br/> bool(true)


_এখানে দুটি ভেল্যু এর [ডাটা-টাইপে](../data_types.md) এক না। যেহেতু এটি [ডাটা-টাইপ](../data_types.md) এর উপর নির্ভরশীল নয় তাই দুটি ভেল্যু অসমান হওয়ায় `true` রিটার্ন হয়েছে_ 

Not Equals এর `!=` সাইনটিই বেশি ব্যবহৃত হয়, তবে এই অপারেটরের আরো একটি সাইন আছে।
`<>` এটি Not Equals অপারেটরের একটি alternative সাইন। `!=` এর মত `<>` সাইন একই কাজ করে। 


```php
<?php
var_dump("hello" <> "Hello");
var_dump("HELLO" <> "Hello");
var_dump("HELLO" <> "HELLO");
```
> **ফলাফল:** <br/> bool(true) <br/> bool(true) <br/> bool(false)



## Not Identical ( !== )
[Not Equal](#not-equal-------) অপারেটরের মত এটিও যখন দুটি ভেল্যু অসমান হবে , তখন `true` রিটার্ন করে , তবে [Not Equal](#not-equal-------) এর সাথে এটার ছোট্ট একটি পার্থক্য আছে।

```php
var_dump("HELLO" !== "HELLO");
var_dump("Rayhan" !== "rayhan");
var_dump(125 !== 458);
```

> **ফলাফল:** <br/> bool(false) <br/> bool(true) <br/> bool(true)

`!=` অপারেটর শুধুমাত্র ভেল্যু check করে , ভেল্যু অসমান হলেও `true` রিটার্ন করে। কিন্তু `!==` অপারেটর ভেল্যু যাচাই করার পাশাপাশি [ডাটা-টাইপ](../data_types.md) কেও যাচাই করে দেখে।

যখন দুটি ভেল্যু এর [ডাটা-টাইপ](../data_types.md) এক হবে এবং তাদের ভেল্যু অসমান হবে , কেবল মাত্র তখনই `!==` অপারেটর `true` রিটার্ন করবে।

```php
var_dump("HELLO" !== "Hello");
var_dump("HELLO" !== "HELLO");
var_dump("HELLO" !== "HELLO");
var_dump("HELLO" !== 1222);
```

> **ফলাফল:** <br/> bool(true) <br/> bool(false) <br/> bool(false) <br/> bool(true)


## Greater Than ( > )
একটি ভেল্যু অন্য একটি ভেল্যু থেকে বড় হলে , `true` রিটার্ন করে।

```php
var_dump(1255 > 125);
var_dump(56 > 125);
var_dump(458 > 125);
```
> **ফলাফল:** <br/> bool(true) <br/> bool(false) <br/> bool(true)

## Less Than ( < )
একটি ভেল্যু অন্য একটি ভেল্যু ঠেকে ছোট হলে , `true` রিটার্ন করে।

```php
var_dump(1255 < 125);
var_dump(56 < 125);
var_dump(458 < 125);
```
> **ফলাফল:** <br/>bool(false) <br/> bool(true) <br/> bool(false)




## Greater or Equal( >= )
নাম শুনেই বুঝা যাচ্ছে বড় অথবা সমান। অর্থাৎ দুটি ভেল্যু যখন সমান হবে অথবা একটি অন্যটি থেকে বড় হবে , তখনই `true` রিটার্ন করবে।

```php
<?php
var_dump(458 >= 1255);
var_dump(100 >= 100);
var_dump(25 >= 25);
```
> **ফলাফল:** <br/>bool(false)<br/> bool(true)<br/> bool(true)





# Less or Equal(<=)

দুটি ভেল্যু যখন সমান হবে অথবা একটি অন্যটি থেকে ছোট হবে , তখনই `true` রিটার্ন করবে।

```php
var_dump(458 <= 1255);
var_dump(100 <= 100);
```

> **ফলাফল:** <br/>bool(true)<br/> bool(true)


<br/>
#লক্ষনীয়
<mark class="highlight red-bg">
    `<` , `<=` , `>` , `>=` অপারেটর গুলি শুধুমাত্র numerical ভেল্যুর জন্য কাজ করে।
</mark>



# সারসংক্ষেপ:

```php
<html>
   <head>
      <title>Comparison Operators</title>
   </head>
   
   <body>
      
      <?php
         $a = 42;
         $b = 20;
         if( $a == $b ) {
            echo "TEST1 : a is equal to b<br/>";
         }else {
            echo "TEST1 : a is not equal to b<br/>";
         }
         if( $a > $b ) {
            echo "TEST2 : a is greater than  b<br/>";
         }else {
            echo "TEST2 : a is not greater than b<br/>";
         }
         if( $a < $b ) {
            echo "TEST3 : a is less than  b<br/>";
         }else {
            echo "TEST3 : a is not less than b<br/>";
         }
         if( $a != $b ) {
            echo "TEST4 : a is not equal to b<br/>";
         }else {
            echo "TEST4 : a is equal to b<br/>";
         }
         if( $a >= $b ) {
            echo "TEST5 : a is either greater than or equal to b<br/>";
         }else {
            echo "TEST5 : a is neither greater than nor equal to b<br/>";
         }
         if( $a <= $b ) {
            echo "TEST6 : a is either less than or equal to b<br/>";
         }else {
            echo "TEST6 : a is neither less than nor equal to b<br/>";
         }
      ?>
   </body>
</html>
```



> **ফলাফল:** <br/>TEST1 : a is not equal to b <br/>TEST2 : a is greater than b<br/>TEST3 : a is not less than b<br/>
TEST4 : a is not equal to b<br/>
TEST5 : a is either greater than or equal to b<br/>TEST6 : a is neither less than nor equal to b



