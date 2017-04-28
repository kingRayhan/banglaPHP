# ucwords()
---

#### ফাংশন প্রোটোটাইপ:

> কোন স্ট্রিং এর প্রত্যেকটি শব্দের প্রথম অক্ষর কে বড় হাতের অক্ষরে রূপান্তত করার জন্য এই ফাংশন ব্যাবহার করা হয়।

```php
/**
 * Convert the first character of each word to uppercase
 * @param   string $string [Input string]
 * @return  string         [Return a string of capitalized first letter of every word of the inputed string]
 */
string ucwords( string $string );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $string | String | যে স্ট্রিং কে modified করতে চান|




#### রিটার্ন ভেল্যু
স্ট্রিং এর প্রতিটি শব্দ(word) এর প্রথম অক্ষর(letter) কে বড় হাতের অক্ষরে রূপান্তরিত করে modified স্ট্রিং কে রিটার্ন করে।


<b>উদাহরন :</b><br/>
```php
$str = "this is a string!";

echo ucwords($str);
```

> **ফলাফল:** <br/>
This Is A String

<a class="try-it" href="http://code.runnable.com/VtRRZPgrZPRxpG75/ucwords-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


#### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.ucwords.php)
* [W3schools](http://www.w3schools.com/php/func_string_ucwords.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_ucwords.htm)