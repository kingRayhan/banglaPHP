---
title: PHP Arithmetic operators
---

ছোটবেলায় অংক করছিলেন যে মনে আছে? ঐসব অংকে যোগ, বিয়োগ, গুন, ভাগ এর জন্য +, -, x চিহ্নগুলি যেভাবে ব্যবহার করেছিলেন ঠিক তেমনি PHP এর `Arithmetic Operators` ব্যবহার করা হয়।

| অপারেটর | নাম | উদাহরন | ফলাফল | 
|---|---|---|---|
| **+** | Addition | $x + $y | $x এবং $y এর যোগফল | 
| **-** | Subtraction | $x - $y | $x এবং $y এর বিয়োগফল | 
| **\*** | Multiplication | $x - $y | $x এবং $y এর গুনফল | 
| **/** | Division | $x / $y | $x এবং $y এর ভাগফল | 
| **%** | Modulus | $x % $y | $x কে $y দিয়ে ভাগ করার পর ভাগশেষ |

চলুন কিছু অংক করি, প্রথমেই দুটি variable ধরে নেই। একটি হচ্ছে x এবং অপরটি y।

ধরি,
```php
$x = 15;
$y = 5;
```
এবার আমি এই দুটি variable এর মধ্যে পর পর যোগ , বিয়োগ , গুন , ভাগ ইত্যাদি mathmatic operation চালাব।

#### যোগ (Addition):
```php
$x = 15;
$y = 5;
echo $x+$y;
```
### ফলাফল:
> 20

<a href="http://code.runnable.com/V5N6krZGKUAMBEWb/operator-addition-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

<br/><br/>

#### বিয়োগ (Subtraction):
```php
$x = 15;
$y = 5;
echo $x-$y;
```
### ফলাফল:
> 10

<a href="http://code.runnable.com/V5N6krZGKUAMBEWb/operator-addition-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

<br/><br/>

#### গুন (Multiplication):
```php
$x = 15;
$y = 5;
echo $x*$y;
```
### ফলাফল:
> 75

<a href="http://code.runnable.com/V5N6krZGKUAMBEWb/operator-addition-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

<br/><br/>

#### ভাগ (Division):
```php
$x = 15;
$y = 5;
echo $x/$y;
```
### ফলাফল:
> 3

<a href="http://code.runnable.com/V5N6krZGKUAMBEWb/operator-addition-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

<br/><br/>

#### ভাগশেষ (Modulus):
```php
$x = 15;
$y = 5;
echo $x/$y;
```
### ফলাফল:
> 0

<a href="http://code.runnable.com/V5N6krZGKUAMBEWb/operator-addition-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

<br/><br/>




