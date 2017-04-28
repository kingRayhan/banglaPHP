# strtoupper() 
---

> কোন স্ট্রিং এর সবগুলি অক্ষর কে বড়হাতের অক্ষরে রূপান্তর করতে এই ফাংশন ব্যাবহার করা হওয়।

#### ফাংশন প্রোটোটাইপ:
```php
/**
 * Make a string uppercase
 * @param   string $string  [Input string]
 * @return  string          [Return uppercase string of inputed string]
 */
string strtoupper ( string $string );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $string | String | যে স্ট্রিং কে modified করতে চান|



#### রিটার্ন ভেল্যু
এটি একটি প্যারামিটার গ্রহন করে এবং সবগুলি অক্ষরকে বড় হাতের অক্ষরে রূপান্তন করে একটি স্ট্রিং রিটার্ন করে। 

#### উদাহরন:
```php
$str ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates impedit 
beatae provident corporis asperiores obcaecati odit laudantium! 
Rem quo perferendis modi ipsum, distinctio omnis inventore quasi 
unde, provident facere, cumque.";

echo strtoupper($str);
```

> **ফলাফল:** <br/>
LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. LIBERO IN NOBIS, VOLUPTATUM ID VERO EXPLICABO, OFFICIA MOLLITIA NISI NOSTRUM VOLUPTATIBUS, VITAE BEATAE EX APERIAM A! DOLORES LABORIOSAM A ODIT FACILIS!

<a href="http://code.runnable.com/VtRCagRfPxBvYefI/strtoupper-for-php" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>


#### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.strtoupper.php)
* [W3schools](http://www.w3schools.com/php/func_string_strtoupper.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_strtoupper.htm)
* [webcoachbd](http://www.webcoachbd.com/php-functions/strtoupper)