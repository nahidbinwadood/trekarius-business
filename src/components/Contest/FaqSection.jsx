import { Accordion } from '@/components/ui/accordion';
import Container from '../container/Container';
import SingleAccordion from './SingleAccordion';

const faqData = [
  {
    id: 1,
    question: 'How do I qualify for a double the dollars Awards payout?',
    answer:
      'Eligibility criteria for the double the dollars Awards payout are defined in the Trekarius guidelines. Please refer to the official rules to see if your submission qualifies.',
  },
  {
    id: 2,
    question: 'I just bought a backpack. Where do I start?',
    answer:
      'Start by registering your backpack purchase on the Trekarius platform and following the guidelines to submit content for the Awards program.',
  },
  {
    id: 3,
    question: 'What kind of photos, clips, and videos can I submit?',
    answer:
      'You can submit photos, clips, and videos that highlight your use of Trekarius products. Ensure they meet the submission guidelines outlined on the Trekarius website.',
  },
  {
    id: 4,
    question: 'How do I submit into Trekarius Awards?',
    answer:
      "Submit your content via the Trekarius website's upload page. Follow the step-by-step instructions provided to complete your submission.",
  },
  {
    id: 5,
    question: 'How many times can I submit?',
    answer:
      'You can submit as many times as you like, provided each submission adheres to the content guidelines and is unique.',
  },
  {
    id: 6,
    question: 'How will I be notified about my submissions?',
    answer:
      "Trekarius will use the email associated with your Trekarius account for all communications. Make sure your contact info is current to ensure proper delivery of Trekarius notifications.\n\nA visual confirmation will appear on the upload page once your submission is complete. You'll also receive an email confirmation from Awards@Trekarius.com. (If you upload multiple pieces of content in the same day, you will receive one email confirmation for the first submission, but no additional messages.) All notifications will be sent to the email address associated with your Trekarius account.",
  },
];

function FaqSection() {
  return (
    <section className="faq-area py-[120px] custom-md:py-[80px] custom-sm:py-[60px] custom-xs:py-[60px] w-[1490px] max-md:w-full custom-xl:w-full custom-2xl:w-full custom-lg:w-full mx-auto">
      <Container>
        <div>
          <h3
            className="text--xl custom-md:text-[34px] custom-sm:text-[30px] custom-xs:text-[26px] text-headingColor mb-[30px] custom-xs:mb-3"
            data-aos="fade-up"
          >
            Treakrius Awards FAQ
          </h3>
        </div>
        <div>
          <Accordion type="single" collapsible>
            {faqData.map((faq, index) => (
              <div key={faq.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <SingleAccordion item={faq} />
              </div>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
