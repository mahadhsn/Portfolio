import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "../../components/logs/Image";
import Header from "../../components/logs/Header";
import { styles } from "../../../data/consts";

const TD = () => {
  useEffect(() => {
    document.title = "My time @TD";
  });

  return (
    <div className="flex flex-col min-w-full space-y-8">
      <Header
        Title={"My time with TD"}
        Mins={"3"}
        Date={"February 2nd, 2026"}
      />
      <Helmet>
        <title>My time with TD</title>
        <meta name="description" content="Description of my TD internship" />
      </Helmet>

      <Image
        src="../../../images/logs/TD/TD_Table.jpg"
        imgStyle={styles.img}
        captionText="My desk (with the old laptop), May 7th 2025"
      />

      <p>
        It's about time I give an in-depth review of how my internship with TD
        went. It's now been more than 5 months since I finished and I still
        think about how nice my time there was. From playing on the PS5, to
        playing poker with the interns, to even exploring the Sky Garden, TD
        Terrace's ammenities were unmatched. This makes it sound like I did no
        work there but I promise I did!!
      </p>

      <Image
        src="../../../images/logs/TD/TD_PS5.jpg"
        imgStyle={styles.img}
        captionText="PS5 on the Arcade floor, May 7th 2025"
      />

      <div className="space-y-4">
        <h1 className="text-2xl font-bold underline">A little about Fraud</h1>
        <p>
          I was placed on the FRAM team which stood for "Fraud Response Action
          Manager". As you can probably guess, I was in the Fraud department so
          a lot of my work is very sensitive and confidential. Essentially,
          tackling fraud comes in a few stages:
        </p>
        <ol className="list-decimal space-y-2">
          <div className="space-y-2">
            <li className="font-bold">Mitigation</li>
            <p>
              This is the preliminary stage for fraud. Here we take measures to
              mitigate the amount of fraud that takes place in our daily lives.
              This is usually done by using marketing strategies to shine light
              on fraud tactics but some companies are adding additional measures
              to make it obvious when you are being scammed.
            </p>
            <p>
              For example, one of the most common cases of fraud is when you
              receive a phone call from someone pretending to be your bank.{" "}
              <a
                href="https://monzo.com/help/monzo-fraud-category/monzo-call-status-web"
                target="_blank"
                className="underline hover:text-accenthoverlight dark:hover:text-accenthoverdark transition-colors"
              >
                Monzo
              </a>{" "}
              has created a call status feature to tackle this. It's pretty
              cool.
            </p>
          </div>

          <div className="space-y-2">
            <li className="font-bold">Detection</li>
            <p>
              This stage focuses on how to detect fraud AFTER it has already
              occured. This is where your bank usualy does a good job.
            </p>
            <p>
              Common measures to tackle this include checks on your account
              based on your usual purchase patterns. For example, if you live in
              Canada with a monthly expense of around $4000, a transaction from
              India of 98724 Rupees is probably a scam.
            </p>
          </div>

          <div className="space-y-2">
            <li className="font-bold">Response</li>
            <p>This is where FRAM comes into the play.</p>
            <p>
              Let's say that person in India DID attempt to purchase something
              from your account. It would immediately get flagged in the system
              and go through the entire workflow to figure out that we should
              probably ask the owner of the account if they made this purchase
              before following through with it.
            </p>
            <p>
              Then you go ahead and respond with a "No I don't even live in
              India", we'd ask you if you'd like to block your account and go
              ahead with that process.
            </p>
          </div>

          <div className="space-y-2">
            <li className="font-bold">Monitoring</li>
            <p>
              Now that your account is unblocked and safe from that specific
              case of fraud, we'd keep extra eyes on it to make sure everything
              goes smoothly.
            </p>
          </div>
        </ol>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold underline">What is FRAM?</h1>
          <p>
            FRAM specifically is a microservice implementation in Java Spring
            hosted on Azure & uses Apache Kafka streams for data transfer.
          </p>

          <p>
            The team followed an Agile development cycle made of biweekly
            sprints where we would complete our tickets for that period. There
            were multiple pods which worked on various different things but I
            was placed on POD 2.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TD;
