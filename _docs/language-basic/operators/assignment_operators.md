---
title: Assignment operators
---
এটি খুবই মজার একটা operator । এর মাধ্যমে বড় বড় mathmatic expression সংক্ষেপে লেখা যায়।
PHP তে Assignment সাইন হচ্ছে `=`

`=` সাইন এর ডান পাশের সকল numerical value বা expression বাম পাশের variable এ জমা হয়। নিচে assignment operator এর তালিকা এবং তাদের সংক্ষিপ্ত বর্ণনা দেয়া হল।


### PHP Assignment Operators
| Expresion | same as  | Description |
|---|---|---|---|
| **x = y** | x = y | ডান পাশের numerical expression বা value বাম পাশের variable এ জমা হয়  |
| **x += y** | x = x + y | যোগ |
| **x -= y** | x = x - y | বিয়োগ |
| **x \*= y** | x = x * y | গুন |
| **x /= y** | x = x / y | ভাগ |
| **x %= y** | x = x % y | ভাগশেষ |


চলুন এখন ধাপে ধাপে ব্যাপারগুলি বুজার চেষ্টা করি। 

### Example 1:
```php
$x = 10;
$y = $x;
echo $y;
```
**ফলাফল**<br/>
> 10

প্রথমে $x variable এ 10 assign করেছিলাম। তারপর `$y = $x` লেখার কারনে `$y` variable এ `$x` variable এর মান 10 assign হয়েছে , তাই যখন `$y` কে `echo` করা হয় তখন 10 return হয়।


### Example 2:
```php
$a = ($b = 4) + 5 * 10 + ($c = 11);

echo "value of a is ".$a."<br/>";
echo "value of b is ".$b."<br/>";
echo "value of c is ".$c."<br/>";
```
**ফলাফল**<br/>
> value of a is 65<br/>value of b is 4<br/>value of c is 11<br/>

পূর্বেই বলেছিলাম assignment operator এর ডান পাশের সকল numeric value বাম পাশের variable এ জমা হয়।


### Example 3:
```php
$a = 3;
$a += 5; // sets $a to 8, as if we had said: $a = $a + 5;
echo $a;
```
**ফলাফল**<br/>
> 8

$a variable এর মান 5 বৃদ্ধি পায়। এখানে `$a += 5` মানে হচ্ছে `$a = $a + 5`। পূর্বে `$a` মান 5 ছিল , ২য় লাইনে `$a += 5` এর মাধ্যমে `$a` এর মান 5 বৃদ্ধি পেয়েছে।



একই রকমভাবে অন্যান্য assignment operator গুলিও কাজ করে।


### Example 4:
```php
$x = 50;
$x -= 30; // $x = $x - 30
echo $x;
```
**ফলাফল**<br/>
> 20


### Example 5:
```php
$x = 50;
$x *= 30; // $x = $x * 30;
echo $x;
```
**ফলাফল**<br/>
> 1500




### Example 6:
```php
$x = 20;
$x /= 2; // $x = $x / 2;
echo $x;
```
**ফলাফল**<br/>
> 10




### Example 6:
```php
$x = 21;
$x %= 2; // $x = $x % 2;
echo $x;
```
**ফলাফল**<br/>
> 1



### Example 7:
```html
<html>
   <head>
      <title>Assignment Operators</title>
   </head>
   <body>
      <?php
         $a = 42;
         $b = 20;
         
         $c = $a + $b;   /* Assignment operator */
         echo "Addtion Operation Result: $c <br/>";
         
         $c += $a;  /* c value was 42 + 20 = 62 */
         echo "Add AND Assigment Operation Result: $c <br/>";
         
         $c -= $a; /* c value was 42 + 20 + 42 = 104 */
         echo "Subtract AND Assignment Operation Result: $c <br/>";
         
         $c *= $a; /* c value was 104 - 42 = 62 */
         echo "Multiply AND Assignment Operation Result: $c <br/>";
         
         $c /= $a;  /* c value was 62 * 42 = 2604 */
         echo "Division AND Assignment Operation Result: $c <br/>";
         
         $c %= $a; /* c value was 2604/42 = 62*/
         echo "Modulus AND Assignment Operation Result: $c <br/>";
      ?>
   </body>
</html>
```
**ফলাফল**<br/>
> Addtion Operation Result: 62 <br/>Add AND Assigment Operation Result: 104 <br/>Subtract AND Assignment Operation Result: 62 <br/>Multiply AND Assignment Operation Result: 2604 <br/>Division AND Assignment Operation Result: 62 <br/>Modulus AND Assignment Operation Result: 20 <br/>


