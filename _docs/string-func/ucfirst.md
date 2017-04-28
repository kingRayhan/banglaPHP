# ucfirst()
---

> কোন স্ট্রিং এর প্রথম অক্ষর কে বড় হাতের অক্ষরে রূপানর করতে এই ফাংশন ব্যাবহার করার করা হয়।


#### ফাংশন প্রোটোটাইপ:
```php
/**
 * Make a string's first character uppercase
 * @param   string $string [Input string]
 * @return  string         [Return a string of capitalized first letter of the inputed string]
 */
string ucfirst ( string $string );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $string | String | যে স্ট্রিং কে modified করতে চান|




#### রিটার্ন ভেল্যু

এটি একটি string প্যারামিটার গ্রহন করে এবং ঐ string এর প্রথম অক্ষরকে বড় হাতের অক্ষরে রূপান্তন করে একটি স্ট্রিং রিটার্ন করে।


##### উদাহরন :<br/>
```php
$str = "this is a string";
echo ucfirst($str);
```

> **ফলাফল:** <br/>
This is a string

<a href="http://code.runnable.com/VtREu-epPe1vFkl2/ucfirst-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.ucfirst.php)
* [W3schools](http://www.w3schools.com/php/func_string_ucfirst.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_ucfirst.htm)
* [webcoachbd](http://www.webcoachbd.com/php-functions/ucfirst)

