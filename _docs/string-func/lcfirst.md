# lcfirst()
---


> কোন স্ট্রিং এর প্রথম অক্ষর কে ছোট হাতের অক্ষরে রূপানর করতে এই ফাংশন ব্যাবহার করা করা হয়।

#### ফাংশন প্রোটোটাইপ:
```php
/**
 * Make a string's first character lowercase
 * @param   string $string [Input string]
 * @return  string         [Return a string of lowercased first letter of the inputed string]
 */
string lcfirst( string $string );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $string | String | যে স্ট্রিং কে modified করতে চান|



#### রিটার্ন ভেল্যু
এটি একটি string প্যারামিটার গ্রহন করে এবং ঐ string এর প্রথম অক্ষরকে ছোট হাতের অক্ষরে রূপান্তন করে একটি স্ট্রিং রিটার্ন করে।

<b>উদাহরন :</b><br/>
```php
$str = "THIS IS A STRING";
echo lcfirst($str);
```

> **ফলাফল:** <br/>
tHIS IS A STRING

<a class="try-it" href="http://code.runnable.com/VtRGrRhZ0bpwaRN_/lcfirst-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

#### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.lcfirst.php)
* [W3schools](http://www.w3schools.com/php/func_string_lcfirst.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_lcfirst.htm)