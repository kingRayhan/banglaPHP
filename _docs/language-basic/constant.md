---
title: constant
---

Content আইডেন্টিফায়ার, যেটির value প্রোগ্রাম চলাকালীন সময়ে পরিবর্তন করা যাবে না। [ভ্যারিয়েবল](variable.md) এর মান যে কোন সময় পরিবর্তন করা যায়, কিন্তু constant এর মান একবারই define করা যায় এবং পরবর্তীতে চাইলেও আর পরিবর্তন করা যায় না।
যেমন নিচের programm টি খেয়াল করুন,
```php
$x = 10;
echo "Value of \$x is $x <br/>";
$x = 20;
echo "Value of \$x is $x <br/>";
$x = 30;
echo "Value of \$x is $x <br/>";
```
_backslash এর দ্বারা $ sign এর কার্যকারিতাকে বন্ধ করা হয়েছে।_

ফলাফল:
> 
Value of $x is 10 <br/>Value of $x is 20 <br/>Value of $x is 30 <br/>


<br/>
> Constant হচ্ছে এক বিশেষ ধরনের variable যার মান একবার ই define করা যায়।

<br/><br/>

PHP তে constant লেখা হয় define() [ফাংশন](function.md) এর মাধ্যমে।

```php
define(name, value, case-insensitive)
```
**parameter সমূহ:**

**name:** constant এর নাম।

**value:** constant এর value বা মান।

**case-insensitive:** এটি একটি বুলিয়ান [data type](data_types.md) parameter। এর মাধ্যমে define করা হয় constant এর নাম case-insensitive হবে কিনা। ডিফল্ট value হচ্ছে `false`। সুতরাং php constant এর নাম স্বাধারমত case sensitive।



<br/><br/><br/>

চলুন এবার কিছু constant লিখি।

**Example 1:**

```php
define("name","King Rayhan");
echo name;
```
ফলাফল:
> King Rayhan

<br/>
**Example 2:**

```php
define("versity","North South University");
echo versity;
```
ফলাফল:
> North South University

Constant এর নাম small letter বা capital letter যে কোনভাবে আপনি লিখতে পারবেন, তবে স্বাধারনত programmer রা constant এর নাম সব বড় হাতের অক্ষরে লিখে থাকেন। এটি একটি tradition। এতে এতে করে programm এ খুব সহজেই বুজা যায় কোনটি constant এবং কোনটি স্বাধারন keyword।

যেমন :
```php
define("NAME","Rayhan");
define("AGE","20");

echo "Hello! I'm ".NAME." and I'm ".AGE." years old.";
```
ফলাফল:
> Hello! I'm Rayhan and I'm 20 years old.



<br/><br/>

> Constant এর নাম uppercase letter এ লেখাই উত্তম।

<br/><br/>



PHP তে constant এর নাম case sensitive না। আপনি যদি constant এর নাম কে case sensitive করতে চান আপনাকে define() function এর ৩য় parameter এ `true` দিতে হবে।

```php
define("NAME","Rayhan",true);

echo NAME."<br/>";
echo NAMe."<br/>";
echo NaMe."<br/>";
echo NamE."<br/>";
```

ফলাফল:
> Rayhan<br/>Rayhan<br/>Rayhan<br/>Rayhan<br/>


### Constants are Global
Constant এর scope সয়ংক্রীয়ভাবাই GLOBAL scope এ থাকে। অর্থাৎ programm এর কোন এক জায়গায় constant define করলে সেটা সব জায়গায় ব্যাবহার করা যায়।

```php
define("GREETING", "Welcome to bangla-php.com!");

function myTest() {
    echo GREETING;
}
 
myTest();
```

ফলাফল:
> Welcome to bangla-php.com!
