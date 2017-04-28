#strtolower()
---

> কোন স্ট্রিং এর সবগুলি অক্ষর কে ছোট হাতের অক্ষরে রূপান্তর করতে এই ফাংশন ব্যাবহার করা হয়।

#### ফাংশন প্রোটোটাইপ:
```php
/**
 * Make a string lowercase
 * @param   string $string [Input string]
 * @return  string         [Return lowercase string of inputed string]
 */
string strtolower ( string $string );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $string | String | যে স্ট্রিং কে modified করতে চান|




#### রিটার্ন ভেল্যু
এটি একটি প্যারামিটার গ্রহন করে এবং সবগুলি অক্ষরকে ছোট হাতের অক্ষরে রূপান্তন করে একটি স্ট্রিং রিটার্ন করে।

<b>উদাহরন:</b><br />
```php
$str ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates impedit 
beatae provident corporis asperiores obcaecati odit laudantium! 
Rem quo perferendis modi ipsum, distinctio omnis inventore quasi 
unde, provident facere, cumque.";

echo strtolower($str);
```

> **ফলাফল:** <br/>
lorem ipsum dolor sit amet, consectetur adipisicing elit. libero in nobis, voluptatum id vero explicabo, officia mollitia nisi nostrum voluptatibus, vitae beatae ex aperiam a! dolores laboriosam a odit facilis!

<a href="http://code.runnable.com/VtRDMQx-QlhvZw3Z/strtolower-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.strtolower.php)
* [W3schools](http://www.w3schools.com/php/func_string_strtolower.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_strtolower.htm)
* [Tizag](http://www.tizag.com/phpT/php-string-strtoupper-strtolower.php)
* [webcoachbd](http://www.webcoachbd.com/php-functions/strtolower)