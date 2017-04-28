---
title: Basic systex
---


`.php` extension যুক্ত ফাইলের সকল php code সার্ভার execute করে এবং plain `HTML` হিসেবে ব্রাউজারে প্রেরন করে। আমরা ব্রাউজারের সোর্স কোডে php code দেখতে পাইনা, দেখতে পাই php এর ফলাফল।


### Basic systex of `PHP`

```php
<?php
echo "My first PHP script!";
?>
```


* পিএইচপি কোড এর প্রতিটি অংশ `<?php` চিহ্ন দিয়ে শুরু এবং `?>` চিহ্ন দিয়ে শেষ হবে।
* প্রতিটি আলাদা instruction(code line) সেমিক্লোন দ্বারা শেষ হবে।

`PHP` কোড স্বাধারনত `HTML` code এর মাঝে লেখা হয়।

#### যেমন:


```php
<!DOCTYPE html>
<html>
<head>
    <title>www.bangla-php.com.com</title>
    <style>
        body {
            background: #FFC;
        }
        h2 {
            color: #F03;
        }
        h1 {
            color: #C60;
        }
    </style>
</head>
<body>
    <?php
      echo "<h1>We are learning PHP</h1>"; 
      echo "<br />";
      echo "<h2>Welcome to www.bangla-php.com.</h2>";
    ?>
</body>
</html>
```

php তে কিছু প্রিন্ট বা দেখানোর জন্য ব্যবহার করা হয় `echo` । প্রত্যেকটি লাইনের পর একটি সেমিক্লোন `(;)` দিতে হয়।


### Comments in PHP
কমেন্টস হলো কোড এর সেই অংশ যেটা পিএইচপি ইনজিন ইগনোর করে যায় । কমেন্টস এ কোন ইনস্ট্রাকশন থাকে না। মূলত কোড এ কমেন্ট করা হয় ছোট ছোট নোট আকারে। এই নোটগুলো কোড এর বিভিন্ন বিষয় ব্যখ্যা করে। যেমন একটি ভ্যারিয়েবল কি কাজ করে এটা আমরা ঐ ভ্যারিয়েবল এর পাশে কমেন্ট আকারে লিখে দিতে পারি।

> **পিএইচপিতে ৩ ধরনের কমেন্টস করা সম্ভব**
> ---
* Inline comment
* Multiple line comment
* Hash(#) comment



>সিঙ্গল লাইন কমেন্ট এর শুরু থেকে লাইনের শেষ পর্যন্ত কমেন্ট হিসেবে বিবেচিত হয় । মাল্টিলাইন কমেন্ট সাধারনত একাধিক লাইন জুড়ে হয় । তবে কমেন্টের শুরু (/\*) আর শেষ (\*/) এক লাইনেও হওয়া সম্ভব ।

```php
<!DOCTYPE html>
<html>
<body>

<?php
// This is a single-line comment

# This is also a single-line comment

/*
This is a multiple-lines comment block
that spans over multiple
lines
*/

// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
?>

</body>
</html>
```

### PHP Case Sensitivity
`PHP` এর সকল built-in keyword (যেমন -  if, else, while, echo ইত্যাদি) এবং class , function আর user-defined function সমূহ case sensitive না , অর্থাৎ ছোট বা বড় হাতের অক্ষরের ক্ষেত্রে এখানে কোন সমস্যা নেই।

নিচের উদাহরনে `echo` কে তিনভাবে লেখা হয়েছে, এই তিন ক্ষেত্রেই একই ফলাফল পাওয়া যাবে।

```php
<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>
```

> ফলাফল:<br>
Hello World!<br>
Hello World!<br>
Hello World!<br>

<a href="http://code.runnable.com/V5GiUSTLuqpblDUC/case-sensitivity-1-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

<br/><br/><br/>

#### <mark>PHP variable সমূহ case sensitive</mark>
নিচের উদাহরনে $color , $COLOR এবং $coLOR তিনটি আলাদা variable তাই তারা প্রত্যেকেই আলাদা আলাদা value প্রিন্ট করে।

```php
<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
$COLOR = "green";
$coLOR = "yellow";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>
```
> ফলাফল:<br>
My car is red<br/>
My house is green<br/>
My boat is yellow<br/>

<a href="http://code.runnable.com/V5Gi3T66W7Bbg3Nd/case-sensitivity-2-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>