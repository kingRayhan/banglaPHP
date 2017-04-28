# join()
---

> একটি Array  এর সবগুলি  element  কে জুড়ে দিয়ে একটি স্ট্রিং রিটার্ন পাওয়ার জন্য ব্যবহার করা হয় `join()` ফাংশন। 

#### ফাংশন প্রোটোটাইপ:

```php

string join( string $separator , array $array );

```


এই ফাংশনটি Array এর ইলিমেন্ট গুলিকে স্ট্রিং এর একেকটি শব্দ বানিয়ে দেয়।  

Seperator এ দেয়া স্ট্রিং এর মাধ্যমে প্রতিটি Array ইলিমেন্ট কে জুড়ে দিয়ে একটি সাধারণ স্ট্রিং তৈরি করে  রিটার্ন  করে । 


#### **রিটার্ন ভেল্যু** : 
Array element গুলিকে জুড়ে দিয়ে একটি স্ট্রিং তৈরি করে এবং সেই স্ট্রিং কে রিটার্ন করে 

#### প্যারামিটার সমূহ:

| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
| <span class="param-required">Required</span> $separator | String | এখানে হবে seperator অর্থাৎ array এর প্রতিটি ইলিমেন্ট এর মাঝে যে স্ট্রিংটি বসবে |
| <span class="param-required">Required</span> $array | Array | যে Array কে স্ট্রিং এর রূপান্তর করতে চান |





#### উদাহরণ ১ :

```
$arr = array('Hello','World!','Beautiful','Day!');
echo join(" ",$arr);
``` 

> **ফলাফল:**<br/>
Hello World! Beautiful Day!

<a class="try-it" href="http://code.runnable.com/VtRd5AbXiqF0ljCY/join-example-1-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

separator এ আমি একটি `ফাকা স্পেস` দিয়েছি তাই রিটার্নকৃত স্ট্রিং এর শব্দগুলির মাঝে `ফাকা স্পেস ` বসেছে । 
Seperator এ আপনি যে কোন স্ট্রিং বসাতে পারেন । 
#### উদাহরণ ২:

```php
$arr = array('Hello','World!','Beautiful','Day!');
echo join(" ",$arr)."<br>";
echo join("+",$arr)."<br>";
echo join("-",$arr)."<br>"; 
echo join("X",$arr);
```

> **ফলাফল** :<br/>
 Hello World! Beautiful Day!<br>
 Hello+World!+Beautiful+Day!<br>
 Hello-World!-Beautiful-Day!<br>
 HelloXWorld!XBeautifulXDay!<br>

<a class="try-it" href="http://code.runnable.com/VtReJWk1xZp0XHvB/join-example-2-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

#### উদাহরণ ৩:

```php
$array = array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');    
echo join('<br />', $array);

// example from PHP Menual
```
<a class="try-it" href="http://code.runnable.com/VtReWQbXiqF0ljC6/join-example-3-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

> **ফলাফল** :<br/>
1<br/>
2<br/>
3<br/>
4<br/>
5<br/>
6<br/>
7<br/>
8<br/>
9<br/>
10
