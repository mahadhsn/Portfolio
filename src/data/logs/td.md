# My time with TD

_February 2, 2026 · 3 min read · work_

![My desk (with the old laptop), May 7th 2025](/images/logs/TD/TD_Table.jpg)
![PS5 on the Arcade floor, May 7th 2025](/images/logs/TD/TD_PS5.jpg)

It's about time I give an in-depth review of how my internship with TD went. It's now been more than 5 months since I finished and I still think about how nice my time there was. From playing on the PS5, to playing poker with the interns, to even exploring the Sky Garden, TD Terrace's amenities were unmatched. This makes it sound like I did no work there but I promise I did!!

## A little about Fraud

I was placed on the FRAM team which was in the Fraud department so a lot of my work is very sensitive and confidential. Essentially, tackling fraud comes in a few stages:

1. **Mitigation**

   This is the preliminary stage for fraud. Here we take measures to mitigate the amount of fraud that takes place in our daily lives. This is usually done by using marketing strategies to shine light on fraud tactics but some companies are adding additional measures to make it obvious when you are being scammed.

   For example, one of the most common cases of fraud is when you receive a phone call from someone pretending to be your bank. [Monzo](https://monzo.com/help/monzo-fraud-category/monzo-call-status-web) has created a call status feature to tackle this. It's pretty cool.

2. **Detection**

   This stage focuses on how to detect fraud AFTER it has already occurred. This is where your bank usually does a good job.

   Common measures to tackle this include checks on your account based on your usual purchase patterns. For example, if you live in Canada with a monthly expense of around $4,000, a transaction from India of 98,724 Rupees is probably a scam.

3. **Response**

   _This_ is where FRAM comes into the play.

   Let's say that person in India DID attempt to purchase something from your account. It would immediately get flagged in the system and go through the entire workflow to figure out that we should probably ask the owner of the account if they made this purchase before following through with it.

   Then you go ahead and respond with a "No I don't even live in India", we'd ask you if you'd like to block your account and go ahead with that process.

4. **Monitoring**

   Now that your account is unblocked and safe from that specific case of fraud, we'd keep extra eyes on it to make sure everything goes smoothly.

## What is FRAM?

**F**raud **R**esponse **A**ction **M**anager specifically is a microservice implementation in Java Spring hosted on Azure & uses Apache Kafka streams for data transfer.

The team followed an Agile development cycle made of biweekly sprints where we would complete our tickets for that period. There were multiple pods which worked on various different things but I was placed on POD 2.

## My role on FRAM

My internship was split into two main learning opportunities in the first and second halves respectively:

1. **Microservice Deployment & CI/CD**

   In order to get more familiar with the techonologies we used, the team decided to give the interns the task to oversee the deployment of numerous microservices into PROD.

   This aided us in, firstly achieving the goal the team had for us but also being able to point out the errors within services by performing forensic investigations using DataDog.

   We ended up deploying 7 total microservices, powering through Terraform files and GitHub workflows.

2. **Asynch Switch**

   Once the team deemed us worthy of working on code within the actual microservices themselves, they began assigning us much more complex work.

   I was assigned to convert one of the microservices to perform any API calls in non-blocking mode to increase efficiency enormously, leading to impressive cost cuts.

   Due to the overall fraud response the FRAM team deals with, my manager informed me that this jump in performance for this microservice resulted in an increase in the amount of requests the microservice could process within a certain time frame leading to roughly $1M of fraudulent transactions resolved.

## Things I liked

1. **Work Culture**

   TD very proudly flaunts their work culture and great work-life balance for good reason.

   I have not had much other work experience in the past but most interns around us would also side with us on that. From playing Poker at 1PM on a Monday

   ![Playing poker with the interns, May 12th 2025](/images/logs/TD/Poker.JPG)

   To randomly running FIFA tournaments, one of the defining qualities of TD is their amazing worklife balance, and by a huge factor. The arrival and departure hours were not monitored, only work (and tasks) were. If you got the job done, you could show up and leave whenever.

   Our team would have a few set meeting hours. Some were indiviual with mentors while others were team-wide meetings both of which we would have to attend. The rest of the time would be spent on grinding on work.

   When I worked there, they had a 2 days in person system which was also just so convenient for me. It was just enough time to be in person and see the team/other interns while also getting the chance to fully recharge at home and work virtually on the other 3 days.

2. **Hospitality**

   Not sure if this is a TD specific thing but everyone there is too damn nice.

   From the HR team who hosted intern events more often than necessary (in a good way), to any person from the 100,000 TD employees (yes thats a real fact) who I tried having a coffee chat with, I never once felt like an intern. I mean this in the sense that I never felt like I was a burden or wasting someone's time from their very busy days.

   I met interns, dev leads, managers, senior managers, and even associate VPs, and each was only more and more hospitable.

3. **Ammenities**

   On top of the arcade, the TD Terrace had a bunch of specialized floors. It included a garden room for fresh air, physical fitness areas, cafe's and restaurants, and the Terrace itself.

   I might've gotten lucky with my building but I am definitely not complaining.

4. **Location**

   Downtown Toronto, 5 minute walk from Union Station? Come on. The 2/5 days that I had to be in office for were very pleasant thanks to the singular train ride which I could sleep on.

5. **The Team** - Honourable Mention

   ![Farewell lunch for our Dev Lead, Aug 6th 2025](/images/logs/TD/Team.JPG)

   This is an honourable mention since it's not related to TD itself but would be unfair if I were to not give credit.

   I could not have asked for a more cooperative team. Despite it being their first time getting co op assignees, they supported us through every step of the way.

   On top of that, due to a restructure early on, our manager was let go but the team never let us feel that way. We were told we could rely on anyway throughout and they would always give us priority.

## Things I didn't like

1. **Legacy Code**

   Due to restrictions on the team and the fact that they're in a sensitive department, the team's codebase was pretty old which meant that there wasn't much room for innovation or advancements.

   This was likely a FRAM specific thing rather than TD specific.

2. **Restructure**

   Right when I first joined, TD underwent a large restructure which caused a lot of positions to get changed/removed. This caused my manager to change and get replaced with Jon from the States.

   The only reason this is a thing I didn't like is because I would have loved to meet Jon in person and worked with him in person. Genuinely could not have asked for a better manager so I guess the restructure actually worked out for the better for me.

## Overview

I think overall I'd give my experience with TD a 7/10. The place itself was great and I could not have asked for a better starter internship! It gave me the right taste of the workload while also giving me the chance to take my time with the move and be as flexible as possible.
