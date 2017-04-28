# array_change_key_case()
---

> associative array এর সব key গুলিকে uppercase বা lowercase e পরিবর্তন করার জন্য এই function ব্যবহার করা হয়।


#### ফাংশন প্রোটোটাইপ:
```php
array array_change_key_case ( array $array [, int $case = CASE_LOWER ] )
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
|<span class="param-required">Required</span> $array | array | প্রদানকৃত array  
|<span class="param-optional">Optional</span> $case | array | এখানে দুটি ভ্যালু হতে পারে। <br/>`CASE_UPPER` for uppercase(default) <br/>`CASE_LOWER` for lowercase |


#### রিটার্ন ভেল্যু
প্রদান কৃত array এর key গুলিকে uppercase বা lowercase এ রূপান্তর করে নতুন একটি array return করে।


#### উদাহরন ১:


```php
$age = array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

echo "<pre>";
var_dump( array_change_key_case($age , CASE_LOWER) );
echo "</pre>";
```

##### ফলাফল:
```
array(3) {
  ["peter"]=>
  string(2) "35"
  ["ben"]=>
  string(2) "37"
  ["joe"]=>
  string(2) "43"
}
```
<a href="http://code.runnable.com/me/V5D1I6JtmEZMo5p3" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>




### উদাহরন ২:


```php
$age = array("Peter"=>"35","Ben"=>"37","Joe"=>"43");

echo "<pre>";
var_dump( array_change_key_case($age , CASE_UPPER) );
echo "</pre>";
```

#### ফলাফল:
```
array(3) {
  ["PETER"]=>
  string(2) "35"
  ["BEN"]=>
  string(2) "37"
  ["JOE"]=>
  string(2) "43"
}
```
<a href="http://code.runnable.com/me/V5D2TDblrhtMRlkF" target="_blank" class="try-it"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>
