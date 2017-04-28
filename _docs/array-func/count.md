# count()
---

> একটি array তে মোট কতগুলি উপাদান(element) আছে সেটা গননা করতে এই ফাংশন ব্যবহার করা হয়। 
নিম্নে এই ফাংশন এর প্যারামিটার গুলির সংক্ষিপ্ত বর্ণনা দেয়া হলো।

#### ফাংশন প্রোটোটাইপ:

```php
/**
 * This function counts total elements of an array belong to
 * @param     [array]    $array_or_countable  [array for counting element](Required)
 * @package   [constant] $mode                [for counting associative element as well](Optional)
 * @return    [int] [return how many element an array have]
 */
int count( mixed $array_or_countable [, int $mode = COUNT_NORMAL ] );
```

#### প্যারামিটার সমূহ:
| প্যারামিটার | ডাটা টাইপ | বর্ণনা |
| --- | :---: | --- |
| <span class="param-required">Required</span> $array_or_countable | String | যে array এর উপাদান গুনতে চান |
| <span class="param-optional">Optional</span> $mode | Integer  | বাই ডিফল্ট COUNT_NORMAL দেয়া থাকে। [মাল্টিডাইমেনশনাল অ্যারে](http://www.w3schools.com/php/php_arrays_multi.asp) count এর জন্য  COUNT_RECURSIVE দিতে হবে |


#### উদাহরন ১:

```php
$cars=array("Volvo","BMW","Toyota");
echo count($cars);
```

> **ফলাফল:**<br/>
3

<a class="try-it" href="http://code.runnable.com/VtRhgTp3cwF2Hjzc/count-example-1-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

#### উদাহরন ২:

```php
$arrayName = array(
				'element_1',
				'element_2',
				'element_3',
				'element_4',
				'element_5',
				'element_6',
				'element_7',
				'element_8',
				'element_9',
				'element_10',
			);
echo count($arrayName);
```
> **ফলাফল:** <br/>
10

<a class="try-it" href="http://code.runnable.com/VtRhzwbXiqF0ljFK/count-example-2-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

#### উদাহরন ৩:
```php
$food = array('fruits' => array('orange', 'banana', 'apple'),
              'veggie' => array('carrot', 'collard', 'pea'));

// normal count
$normal_count = count($food); // output 2

// recursive count
$recursive_count = count($food, COUNT_RECURSIVE); // output 8


echo $normal_count."<br />";
echo $recursive_count;


// ***(example from php menual)
```
> **ফলাফল:** <br/>
2<br>
8<br>

<a class="try-it" href="http://code.runnable.com/VtRh_Dp3cwF2Hj0F/count-example-3-for-php" target="_blank"><i class="fa fa-play"></i>&nbsp;&nbsp;যাচাই করে দেখুন</a>

$food array তে মুলত উপাদান(element) আছে দুইটি। আরও খেয়াল করলে দেখতে পাবেন যে আসলে এই array তে দুটি array key সহ মোট ৮ টি উপাদান আছে।

খেয়াল করুন আমি $normal_count ভেরিয়েবল এর count() ফাংশন এ $food array প্রদান করেছি। কিন্তু count() function এর ২য় প্যারামিটারটি ব্যবহার করিনি। তাই প্রথম ক্ষেত্রে `2` রিটার্ন পেয়েছি। 
 
আবার $recursive_count ভেরিয়েবল এর count() function এর ২য় প্যারামিটার এ `COUNT_RECURSIVE` প্রদান করেছি তাই আমি ৮ রিটার্ন পেয়েছি।



##### আরও জানতে দেখতে পারেন:
* [PHP Menual](http://php.net/manual/en/function.count.php)
* [W3schools](http://www.w3schools.com/php/func_array_count.asp)
* [Tutorial Point](http://www.tutorialspoint.com/php/php_function_count.htm)
* [webcoachbd](http://www.webcoachbd.com/php-functions/count)
