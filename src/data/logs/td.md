# My time with TD

_February 2, 2026 · 3 min read · work_

![My desk (with the old laptop), May 7th 2025](/images/logs/TD/TD_Table.jpg)

![PS5 on the Arcade floor, May 7th 2025](/images/logs/TD/TD_PS5.jpg)

It's about time I give an in-depth review of how my internship with TD went. It's now been more than 5 months since I finished and I still think about how nice my time there was. From playing on the PS5, to playing poker with the interns, to even exploring the Sky Garden, TD Terrace's amenities were unmatched. This makes it sound like I did no work there but I promise I did!!

## A little about Fraud

I was placed on the FRAM team which stood for "Fraud Response Action Manager". As you can probably guess, I was in the Fraud department so a lot of my work is very sensitive and confidential. Essentially, tackling fraud comes in a few stages:

1. **Mitigation**

   This is the preliminary stage for fraud. Here we take measures to mitigate the amount of fraud that takes place in our daily lives. This is usually done by using marketing strategies to shine light on fraud tactics but some companies are adding additional measures to make it obvious when you are being scammed.

   For example, one of the most common cases of fraud is when you receive a phone call from someone pretending to be your bank. [Monzo](https://monzo.com/help/monzo-fraud-category/monzo-call-status-web) has created a call status feature to tackle this. It's pretty cool.

2. **Detection**

   This stage focuses on how to detect fraud AFTER it has already occurred. This is where your bank usually does a good job.

   Common measures to tackle this include checks on your account based on your usual purchase patterns. For example, if you live in Canada with a monthly expense of around $4000, a transaction from India of 98724 Rupees is probably a scam.

3. **Response**

   This is where FRAM comes into the play.

   Let's say that person in India DID attempt to purchase something from your account. It would immediately get flagged in the system and go through the entire workflow to figure out that we should probably ask the owner of the account if they made this purchase before following through with it.

   Then you go ahead and respond with a "No I don't even live in India", we'd ask you if you'd like to block your account and go ahead with that process.

4. **Monitoring**

   Now that your account is unblocked and safe from that specific case of fraud, we'd keep extra eyes on it to make sure everything goes smoothly.

## What is FRAM?

FRAM specifically is a microservice implementation in Java Spring hosted on Azure & uses Apache Kafka streams for data transfer.

The team followed an Agile development cycle made of biweekly sprints where we would complete our tickets for that period. There were multiple pods which worked on various different things but I was placed on POD 2.
