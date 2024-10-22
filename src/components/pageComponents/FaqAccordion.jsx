import React, { useState } from 'react';

const FaqAccordion = () => {
  // FAQ data array
  const faqs = [
    {
      question: 'Are you registered officially?',
      answer:
        'Yes, Anjana Foundation is a registered nonprofit organization in Bangladesh, dedicated to uplifting marginalized communities through our various initiatives in education, healthcare, and social empowerment.',
    },
    {
      question: 'Which types of work does Anjana Foundation do?',
      answer:
        'Anjana Foundation focuses on several core areas, including:\n• Providing access to quality education for children and young adults.\n• Offering healthcare services and organizing health camps in underserved communities.\n• Implementing social empowerment programs to promote gender equality and economic independence, particularly for women and children.',
    },
    {
      question: 'How can I get involved?',
      answer:
        'There are several ways to get involved with Anjana Foundation:\n• Volunteer: Offer your time and skills to support our initiatives.\n• Donate: Contribute financially to help fund our programs and services.\n• Spread Awareness: Share our mission and activities within your community to help us reach more people.',
    },
    {
      question: 'Who is the Founder?',
      answer:
        'Anjana Foundation was founded by Anjana Biswas, who has a deep commitment to social justice and a vision of empowering marginalized communities in Bangladesh through education and healthcare initiatives.',
    },
    {
      question: 'Can I visit any branch?',
      answer:
        'Yes, we welcome visits to our branches! If you’re interested in visiting, please contact us in advance to arrange a suitable time. We would love to share our work and impact with you.',
    },
    {
      question: 'How do you manage accounts?',
      answer:
        'Anjana Foundation maintains transparency and accountability in financial management. Our accounts are regularly audited by independent auditors, and we provide detailed reports on our funding and expenditures to our stakeholders. We are committed to using every donation responsibly to maximize our impact.',
    },
    {
      question: 'What type of organization is Anjana Foundation?',
      answer:
        'Anjana Foundation is a nonprofit organization focused on social development. We operate with the goal of uplifting marginalized communities through various initiatives, ensuring sustainable change in education, healthcare, and social empowerment.',
    },
    {
      question: 'How can my organization support Anjana Foundation?',
      answer:
        'Organizations can support Anjana Foundation through partnerships, sponsorships, or collaborative projects. We welcome any contributions, whether financial, in-kind donations, or expertise that can help us further our mission. Please contact us to discuss potential collaborations.',
    },
    {
      question: 'Is my donation tax-deductible?',
      answer:
        'Yes, donations to Anjana Foundation are typically tax-deductible, subject to the regulations of your country. We recommend consulting with a tax professional for specific advice regarding your situation.',
    },
    {
      question: 'Are you collecting funds through street collection?',
      answer:
        'Anjana Foundation does not engage in street collection for fundraising. Our fundraising efforts primarily focus on partnerships, grant applications, and online donations to ensure transparency and accountability in how we collect and utilize funds.',
    },
  ];

  return (
    <section className='relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[70px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
              <span className='mb-2 block text-lg font-semibold text-primary'>
                FAQ
              </span>
              <h2 className='mb-4 text-3xl font-bold text-green-600 sm:text-[40px]/[48px]'>
                Any Questions? Look Here
              </h2>
              <p className='text-base text-body-color'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          {/* Map over the FAQ data and render AccordionItem components */}
          <div className='w-full px-4 lg:w-1/2'>
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index}
                header={faq.question}
                text={faq.answer}
              />
            ))}
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <AccordionItem
                key={index + Math.ceil(faqs.length / 2)}
                header={faq.question}
                text={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SVG Background */}
      <div className='absolute bottom-0 right-0 z-[-1]'>
        <svg
          width='1440'
          height='886'
          viewBox='0 0 1440 886'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.5'
            d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
            fill='url(#paint0_linear)'
          />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='1308.65'
              y1='1142.58'
              x2='602.827'
              y2='-418.681'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#3056D3' stopOpacity='0.36' />
              <stop offset='1' stopColor='#F5F2FD' stopOpacity='0' />
              <stop offset='1' stopColor='#F5F2FD' stopOpacity='0.096144' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FaqAccordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className='mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8'>
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary '>
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? 'rotate-180' : ''
            }`}
            width='17'
            height='10'
            viewBox='0 0 17 10'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
              fill=''
              stroke=''
            />
          </svg>
        </div>

        <div className='w-full'>
          <h4 className='mt-1 text-lg font-semibold text-dark'>{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className='py-3 text-base leading-relaxed text-body-color whitespace-pre-line'>
          {text}
        </p>
      </div>
    </div>
  );
};
