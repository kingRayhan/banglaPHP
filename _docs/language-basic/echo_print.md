---
title: echo / print
---

php তে কোন কিছুর output দুইভাবে দেখানো যায়। একটি হচ্ছে `echo` এবং আরেকটি হচ্ছে `print`। 

`echo` এবং `print` এর মধ্যে মূলত কোন পার্থক্য নেই , তবে ছোট্ট একটি পার্থক্য আছে সেটি হল `print` execute হওয়ার সময় `1` return করে কিন্তু echo কোন কিছু return করে না।

সব চেয়ে বড় পার্থক্য হচ্ছে ,
> echo এর তুলনায় print কিছুটা দ্রুতগামি

### The PHP echo Statement
php `echo` statement কে parenthese সহ বা parentheses ছাড়া ব্যাবহার করা যায়।
> echo বা echo()

#### Display text
নিচের উদাহরনে দেখানো হয়েছে কীভাবে `echo` statement ব্যাবহার করে লেখা show করানো যায়।

```php
<?php
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>
```
_খেয়াল করে দেখুন প্রথম echo তে html markup ব্যবহার করা হয়েছে। php string হিসেবে এভাবে html markup ব্যবহার করা যায়।_

> #### ফলাফল:
> <h2>PHP is Fun!</h2>Hello world!<br>I'm about to learn PHP!<br>This string was made with multiple parameters.

<a href="http://code.runnable.com/V5LXC0YqLKR5OszG/echo-print-1-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


<br><br><br>

echo() ব্যাবহার করে আমরা এই একই কাজ করতে পারি।

```php
<?php
echo("<h2>PHP is Fun!</h2>");
echo("Hello world!<br>");
echo("I'm about to learn PHP!<br>");
?>
```
> #### ফলাফল:
> <h2>PHP is Fun!</h2>Hello world!<br>I'm about to learn PHP!<br>

<a href="http://code.runnable.com/V5LYNlF6Xtl5csHR/echo-print-2-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>



নিচের উদাহরনে দেখানো হয়েছে কীভাবে `echo` statement এর মাধ্যমে text এবং variable এর ভেল্যু show করানো যায়।
```php
<?php
$txt1 = "Learn PHP";
$txt2 = "www.bangla-php.com";
$x = 5;
$y = 4;

echo "<h2>$txt1</h2>";
echo "Study PHP at $txt2<br>";
echo $x + $y;
?>
```
> #### ফলাফল:
> 
<h2>Learn PHP</h2>Study PHP at www.bangla-php.com<br>9

<a href="http://code.runnable.com/V5LYtlb2nNF5UM9B/echo-print-3-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>





### The PHP print Statement

`echo` এর মাধ্যমে আমরা যেভাবে output show করিয়েছি `print` ব্যবহার করে ঠিক একই কাজ করতে পারি। নিচে কিছু উদাহরন দেয়া হল।

`echo` এর মত `print` কেও parenthese সহ বা parentheses ছাড়া ব্যাবহার করা যায়।


```php
<?php
print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!<br>";
?>
```
> #### ফলাফল:
> <h2>PHP is Fun!</h2>Hello world!<br>I'm about to learn PHP!<br>

<a href="http://code.runnable.com/V5LZwGmO_AZ69Map/echo-print-4-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>




print() এর মাধ্যমে output show করানো,

```php
<?php
print("<h2>PHP is Fun!</h2>");
print("Hello world!<br>");
print("I'm about to learn PHP!<br>");
?>
```
> #### ফলাফল:
> <h2>PHP is Fun!</h2>Hello world!<br>I'm about to learn PHP!<br>

<a href="http://code.runnable.com/V5LaOYvrd-95gxSR/echo-print-5-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


#### `print` statement এর মাধ্যমে text এবং variable এর ভেল্যু show করানো যায়।
```php
<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

print "<h2>$txt1</h2>";
print "Study PHP at $txt2<br>";
print $x + $y;
?>
```
> #### ফলাফল:
> <h2>Learn PHP</h2>Study PHP at bangla-php.com<br>9

<a href="http://code.runnable.com/V5LapCiSNuV5JktS/echo-print-6-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>




