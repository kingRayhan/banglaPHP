---
title: for loop
---

<div style="text-align:center;overflow:hidden;">
<img src="for-loop-thumbnail.jpg" style="width:100%;">
</div>



ইতিপূর্বে আমরা [while loop](while_loop.md) এর অধ্যায়ে দেখেছি যে লুপ আসলে কীভাবে কাজ করে এবং লুপ এর মেকানিজম সম্পর্কে একটা স্বচ্ছ ধারনা পেয়েছি। তাই এখানে খুব বেশি আলোচনা করব না। লুপের মেকানিজম সম্পর্কে যদি কোন confusion থাকে তবে আগে [while loop](while_loop.md) ভালো করে বুঝে আসুন।


চলুন এখন for কীভাবে কাজ করে সেটা বুজার চেষ্টা করি। PHP তে for loop এর
**systex:**
```php
for (initialization; condition; increment) {
    // code to be executed;
}
```

এখানে আমরা ৩টা এক্সপ্রেশন দিয়ে দেই

* প্রথমটা যখন প্রথমবার লুপ শুরু হবে তখন রান করা হবে ।
* ২য় টা হচ্ছে লুপের মূল শর্ত, [while](while_loop.md) লুপের মত প্রতিবার লুপ শুরু হওয়ার সময় এটা চেক করা হবে । এটার বুলিয়ান ভ্যালু true হলেই কেবল লুপটি চলবে ।
* ৩য়টা প্রতিবার কোড ব্লক শেষ করে রান করা হয় ।


নিম্নে for লুপের ৩ টি প্যারামিটার সম্পর্কে বর্ননা দেয়া হল।


<div style="font-size:25px">1.</div>
আপনাদের নিশ্চয় মনে আছে আমি যখন [while loop](while_loop.md) এর উদাহরন দিয়েছিলাম যখন শুরুতেই একটি [variable](../variable.md) নিয়েছিলাম। সেই [variable](../variable.md) কেই এখানে বলা হচ্ছে `initialization`। অর্থাৎ লুপিং কতবার হবে সেটা নির্দিষ্ট করে দেয়ার জন্য শুরুতেই আমাদের কে একটি প্রাথমিক variable নিয়ে ডুকতে হবে।

<div style="font-size:25px">2.</div>
২য় প্যারামিটার হচ্ছে `condition`। এই condition বা শর্ত যতক্ষন `true` return করবে [loop](loop.md) টি ততক্ষন পূনরাবৃত্তি হতে থাকবে।


<div style="font-size:25px">3.</div>
৩য় প্যারামিটারটিকে বলা হচ্ছে increment। নির্দিষ্টবার [loop](loop.md) চালানোর জন্য আমাদের কে ২য় প্যারামিটারের condition কে কোন এক সময় false বা মিথ্যা করতে হবে। এই জন্য initialization এ যে [variable](../variable.md) নেয়া হয়েছিল তার মান বৃদ্ধি বা হ্রাস করতে হবে।