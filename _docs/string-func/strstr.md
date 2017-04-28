# strstr()
---

> একটি স্ট্রিং এর ভেতর অন্য একটি স্ট্রিং এর প্রথম উপস্থিতির পর থেকে শেষ পর্যন্ত ফিরে পাওয়ার জন্য এই ফাংশন ব্যবহার করা হয়।

#### ফাংশন প্রোটোটাইপ:
```php
/**
 * Find the first occurrence of a string
 * @param string    $haystack      [string to process](Required)
 * @param mixed     $niddle        [substring for sreach](Required)
 * @param boolean   $before_needle [If TRUE, strstr() returns the part of the haystack
 *                                 before the first occurrence 
 *                                 of the needle (excluding the needle)]
 * 
 */
string strstr ( string $haystack , mixed $needle [, bool $before_needle = false ] );
```





#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ |বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $haystack | String | যে স্ট্রিং কে mofied করতে  |
|<span class="param-required">Required</span> $niddle | String | যে স্ট্রিং কে দিয়ে খুজবেন|
|<span class="param-optional">Optional</span> $before_needle | Boolean | বাই ডিফল্ট false থাকে। যদি true দেন তবে খুজে পাওয়া স্ট্রিং এর অংশ থেকে আগের অংশ রিটার্ন করবে। |



#### রিটার্ন ভেল্যু:
*	প্রদানকৃত স্ট্রিং এর ভেতর সার্চ করার উদ্দেশ্যে দেয়া স্ট্রিং এর প্রথম যে অবস্থানে মিলে যাবে ঠিক সেই অংশ থেকে প্রদানকৃত স্ট্রিং এর বাকি অংশ রিটার্ন করবে।
*	তৃতীয় প্যারামিটার($before_niddle) এ true দিলে , প্রদানকৃত স্ট্রিং এর সাথে সার্চ স্ট্রিং যে অবস্থানে মিলে যাবে সেই অংশের অবস্থান থেকে পূর্বের অংশ রিটার্ন করবে।


#### উদাহরন ১:
```php
 $str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus impedit dicta cupiditate recusandae asperiores assumenda 
            dolore perspiciatis a itaque quas, quidem architecto facere 
            ullam suscipit debitis eaque modi nemo fugiat.";
 echo strstr($str,"sit");
```

>**ফলাফল:**<br/>
sit amet, consectetur adipisicing elit. Voluptatibus impedit dicta cupiditate recusandae asperiores assumenda dolore perspiciatis a itaque quas, quidem architecto facere ullam suscipit debitis eaque modi nemo fugiat.

<a class="try-it" href="http://code.runnable.com/VtRTUOUDs9hx6jVL/strstr-example-1-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

সার্চ স্ট্রিং `sit` এর অবস্থান থেকে প্রদানকৃত স্ট্রিং এর বাকি অংশ রিটার্ন হয়েছে।



#### উদাহরন ২:
```php
 $str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus impedit dicta cupiditate recusandae asperiores assumenda 
            dolore perspiciatis a itaque quas, quidem architecto facere 
            ullam suscipit debitis eaque modi nemo fugiat.";
 echo strstr($str,"consectetur");
```

> **ফলাফল:** <br/>
consectetur adipisicing elit. Voluptatibus impedit dicta cupiditate recusandae asperiores assumenda dolore perspiciatis a itaque quas, quidem architecto facere ullam suscipit debitis eaque modi nemo fugiat.

<a class="try-it" href="http://code.runnable.com/VtRVQ1IoKv9yRiBf/strstr-example-2-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

সার্চ স্ট্রিং `consectetur` এর অবস্থান থেকে প্রদানকৃত স্ট্রিং এর বাকি অংশ রিটার্ন হয়েছে।


#### উদাহরন ৩:
```php
 $str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Voluptatibus impedit dicta cupiditate recusandae asperiores assumenda 
            dolore perspiciatis a itaque quas, quidem architecto facere 
            ullam suscipit debitis eaque modi nemo fugiat.";
 echo strstr($str,"consectetur",true);
```

> **ফলাফল:** <br/>
Lorem ipsum dolor sit amet,

<a class="try-it" href="http://code.runnable.com/VtRcoQbXiqF0ljBR/strstr-example-3-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

তৃতীয় প্যারামিটার এ true দেয়ায় , `consectetur` এর পূর্বের অংশ রিটার্ন হয়েছে।


#### উদাহরন ৪:
```php
$email  = 'name@example.com';
$domain = strstr($email, '@');
$user = strstr($email, '@', true);
echo $domain."<br />";
echo $user;

// ***(Example from PHP Menual)***
```

> **ফলাফল:** <br/>
@example.com<br>
name

<a class="try-it" href="http://code.runnable.com/VtRdIgVHoah0HlI-/strstr-example-4-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


#### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.strstr.php)
* [W3schools](http://www.w3schools.com/php/func_string_strstr.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_strstr.htm)
