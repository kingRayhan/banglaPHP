# strlen()
---

> কোন স্ট্রিং এ মোট কতটি character(ফাকা স্পেস সহ অক্ষর) আছে তা জানার জন্য ব্যবহার করা হয় `strlen()` ফাংশন।


#### ফাংশন প্রোটোটাইপ:
```php
/**
 * It is used for getting string length
 * @param  [string] $string  [string to finds the length] 
 * @return [int]             [length of the string]
 */
int strlen ( string $string );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $string | String | যে স্ট্রিং কে modified করতে চান|


#### রিটার্ন ভেল্যু
স্ট্রিং এ মোট কতগুলি character আছে তা integer সংখ্যা হিসেবে রিটার্ন করে।


#### উদাহরন ১:


```php
echo strlen("This is a string");
```

> ফলাফল:<br>
16

<a href="http://code.runnable.com/VtQ6aYsIPH9tDmxC/strlen-example-1-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

#### উদাহরন ২:
```php
echo strlen("This       is  a     string");
```
> ফলাফল:<br>
27

<a href="http://code.runnable.com/VtQsG8Jr0GBqwp1P/strlen-example2-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


#### উদাহরন ৩:
```php
$str ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates impedit 
beatae provident corporis asperiores obcaecati odit laudantium! 
Rem quo perferendis modi ipsum, distinctio omnis inventore quasi 
unde, provident facere, cumque.";

echo strlen($str);
```
> ফলাফল:<br>
237

<a href="http://code.runnable.com/VtQLkMYRXNBjbsf1/strlen-example-3-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>




#### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.strlen.php)
* [W3schools](http://www.w3schools.com/php/func_string_strlen.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_strlen.htm)