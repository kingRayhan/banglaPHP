---
title: PHP Increment / Decrement Operators
---
PHP তে Increment/decrement operator ব্যবহার করা হয় কোন variable এর মান এক (১) বৃদ্ধি বা হ্রাস করার জন্য।

<br/><br/>

> **Increment operator(++):** কোন variable এর মান এক  বৃদ্ধি করে।

> **Decrement operator(--):** কোন variable এর মান এক  হ্রাস করে।

এই operator কে আবার দুই রকম। নিচে এর সামগ্রিক তালিকা দেয়া হল।
<br/><br/>

| অপারেটর | নাম | বর্ননা |
|---|---|---|
| ++$x | pre-increment | $x এর মান এক বৃদ্ধি পায় তারপর $x রিটার্ন হয় | 
| $x++ | post-increment | $x এর value আগে return হয় , তারপর এর মান এক বৃদ্ধি পায় | 
| --$ | pre-decrement | $x এর value আগে এক কমে তারপর $x return হয় | 
| $-- | post-decrement | $x এর value আগে return হয় , তারপর এর মান এক কমে |

<br/><br/>
<div style="font-size:25px">উদাহরন ১</div>
```php
$x = 5;
$x++;
echo $x;
```
ফলাফল:<br/>
> 6

প্রথমে আমি `$x` variable এ প্রথম 5 assign করেছিলাম। ২য় লাইনে `$x` variable এ post-increment অর্থাৎ `$x++` এর মাধ্যমে `$x` এর মান এক বৃদ্ধি পেয়েছে।
তাই যখন ৩য় লাইনে $x কে echo করলাম তখন `6` দেখাচ্ছে।




<br/><br/>
<div style="font-size:25px">উদাহরন ২</div>
```php
$x = 5;
echo $x++."<br/>";
echo $x;
```
ফলাফল:<br/>
> 5 <br/>
> 6

এই উদাহরনের ২য় লাইনে `$x` এর পুর্বের value return হয়েছে আবার একই সাথে $x এর মান এক বৃদ্ধি পেয়েছে , যা পরের লাইনে দেখা যাচ্ছে।

