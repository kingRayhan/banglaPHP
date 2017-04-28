# substr_compare()
---
> কো একটি স্ট্রিং এর সাথে অন্য একটি স্ট্রিং(সাবস্ট্রিং) এর তুলনা করার জন্য ব্যবহার করা হয় `substr_compare()` ফাংশন।

```php
/**
 * substr_compare — Binary safe comparison of two strings from an offset, up to length characters
 * @param  string   $main_str           [The main string being compared.]
 * @param  string   $str                [The secondary string being compared.]
 * @param  integer  $offset             [The start position for the comparison. If negative, it starts counting from the end of the string.]
 * @param  boolean  $case_insensitivity [If case_insensitivity is TRUE, comparison is case insensitive.]
 * @return integer Returns < 0 if main_str from position offset is less than str, > 0 if it is greater than str, and 0 if they are equal. If offset is equal to or greater than the length of main_str, or the length is set and is less than 1 (prior to PHP 5.6), substr_compare() prints a warning and returns FALSE.
 */
int substr_compare( string $main_str , string $str , int $offset [, int $length [, bool $case_insensitivity = false ]] )
```



