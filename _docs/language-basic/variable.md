---
title: variable
---

ভ্যারিয়েবল ব্যবহার করা হয় value store করে রাখার জন্য। value বলতে এখানে text, number, string ইত্যাদি বুঝায়। ভ্যারিয়েবল(variable) একটা container এর মতো, যেটি কোন কিছু কনটেইন অথবা ধারণ করে। আমি এখানে container বা ধারক কে বলছি variable এবং container যা ধারন করে তাকে বলছি variable এর value

যদি আরেকটু সহজ করে বলি, ধরুন একটি পাত্রে কিছু আপেল আছে। আমি এখানে আপেলের পাত্রকে বলছি varible এবং আপেন গুলিকে বলছি variable এর value বা মান।

ভ্যারিয়েবল প্রোগ্রামে ব্যবহার করা হয় কোন একটি value represent করার জন্য। প্রোগ্রামে ভ্যারিয়েবল ব্যবহার এর কারণে কোন value কে বার বার লিখার প্রয়োজন হয় না। এতে করে প্রোগ্রামের সাইজ কমে আসে। কোন একটি
প্রোগ্রামের যখন, যেখানে প্রয়োজন সেখানে variable কে কল (call) করা হয়। variable ডিক্লেয়ার করার জন্য প্রত্যেকটি language এ নিজস্ব রূলস রয়েছে। প্রত্যেক ল্যাংগুয়েজের ভ্যারিয়েবল declare করার নিয়ম ভিন্ন, তবে
আসল concept এবং কাজ একই।


> variable হচ্ছে এমন একটি পাত্র যা কোন ডাটা কে ধারন করতে পারে।


## variable লেখার নিয়ম
php তে ডলার সাইন `( $ )` দিয়ে শুরু করে variable লেখা হয়। php variable এর নাম আপনি খুশি দিতে পারেন (যেমন $x বা $y) অথবা আরও বিস্তারিত ভাবেও লিখা যায় , যেমন : `$age` , `$name` , `$connection` ইত্যাদি।

তবে variable ডিক্লেয়ার করার জন্য বেশ কিছু নিয়ম মাথায় রাখতে হবে -
* variable এর নাম অবশ্যই ডলার সাইন `( $ )` দিয়ে শুরু হতে হবে।
* variable এর নামের শুরুতে letter বা underscore `(" _ ")` থাকবে।
* variable এর নাম সংখ্যা দিয়ে শুরু হতে পারবে না।
* variable এর নামের মাঝে হাইফেন`(" - ")` থাকা যাবে না প্রয়োজনে underscore `(" _ ")` ব্যবহার করা যাবে।
* variable এর নাম `case sensitive` অর্থাৎ $age এবং $AGE দুটি পৃথক variable ।
* variable এর নামের শুরুতে , মাঝে বা শেষে কোন special character ( যেমন - $ % ^ & * # ইত্যাদি) থাকা যাবে না। 
* variable এর নামের মাঝে space থাকা যাবে না।

<mark>**লক্ষনীয় যে**, PHP variable এর নাম case-sensitive!</mark> &nbsp;&nbsp;<a href="../{{ site.baseurl }}/{{site.docURL}}/language-basic/" target="_blank">উদাহরন দেখুন</a>


নিচে কিছু সঠিক variable দেখানো হল,

```php
$V
$car
$dhaka
$position
$num
$num5
$num56
$num5bd
$_num
$num_
$num_56
$dhaka_bd
$March_Salary
$March12
$salaryEmployee
$add_two_number
$addTwoNumber
$addtwonumber
$employee_name
$studentName
$studentaddress
$Student
$a
$A
$aa
$ab
$b
$b_a
$a6
$xyz
```

আমরা এখন উপরের মতো করে ভ্যারিয়েবল ডিক্লেয়ার করতে পারবো। শুধু নিয়ম গুলো মেনে যে কোন নামে variable ডিফাইন করা যায়। 

যেমন - 
```php
$num = 56;
```
<mark><i>ভ্যারিয়েবল লিখা শেষে অবশ্যই সেমিকোলন দিতে হবে।</i></mark>



এই Equal(=) সাইন এর মানে হচ্ছে, 56 value টি `$num` ভ্যারিয়েবল এ assign করে দেওয়া হল।

<br/><br/>

```php
$name = "King Rayhan";
```

`King Rayhan` নামটি $name ভ্যারিয়েবল এ রাখা হল। এই variable একটি স্ট্রিং, যার জন্য এটিকে
ডাবল কোটেশন `(" ")` এর ভিতর লেখা হয়েছে।

<br/><br/>
```php
$sign = 'a';
```
এখানে a হচ্ছে একটি character, যার জন্য এটিকে single quotation `(' ')` এর ভিতর রাখা হয়েছে।

<br/><br/>
```php
$nm = 20;
```

এখানে `$nm` ভ্যারিয়েবল এ value হিসেবে 20 রাখা হয়েছে এবং এটি একটি number হওয়ায় কোন কোটেশন (quotation) ব্যবহার করা হয়নি।

এখন আমরা আউটপুট হিসেবে ব্রাউজারে উক্ত ভ্যারিয়েবল গুলোতে অ্যাসাইন করা ভ্যালিউ দেখতে পাব, ভ্যারিয়েবল এর নাম নয়।





#### কিছু ভুল variable

```php
$5n
```
এখানে ভ্যারিয়েবল টি $ সাইন দিয়ে শুরু হয়েছে ঠিক আছে, কিন্তু প্রথম লেটার নাম্বার হওয়াতে এটি সঠিক variable না।

<br/>

```php
$employee salary
```

এখানে স্পেস `(space)` ব্যবহার করা হয়েছে, এজন্য এটি সঠিক ভ্যারিয়েবল না।

$বসঢ়$
ডলার সাইন শুধুমাত্র ভ্যারিয়েবল এর শুরূতে ব্যবহার করা যাবে, পরে কোথাও না। এজন্য এটি
ভ্যারিয়েবল না।

<br/>

```php
$emp$
```
ডলার সাইন শুধুমাত্র ভ্যারিয়েবল এর শুরুতে ব্যবহার করা যাবে, পরে কোথাও না। এজন্য এটি ভ্যারিয়েবল না।

<br/><br/>

নিচে এরকম আরও কিছু ভুল variable এর উদাহরন দেয়া হল,
```php
$56a
$--ab
$ab@
$@ab
$name!
$ name
var
var$
bd#
*bd
$student*name
$bd-dhaka (This is hypen)
$bd%
$dhaka\
```