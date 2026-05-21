'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does an audit take?',
      answer:
        'A complete AI stack audit takes less than 60 seconds. Simply connect your tools and our AI engine instantly analyzes your spending patterns and usage to generate a comprehensive report.',
    },
    {
      question: 'Is my data secure and private?',
      answer:
        'Yes. We use enterprise-grade encryption and never store your actual data. We only analyze usage patterns and billing information. Your credentials are securely handled and can be revoked at any time.',
    },
    {
      question: 'Which AI tools do you support?',
      answer:
        'We support all major AI platforms including OpenAI, Anthropic Claude, Google Gemini, Mistral, Cohere, and many others. New integrations are added weekly based on user demand.',
    },
    {
      question: 'What if I implement your recommendations?',
      answer:
        'On average, users who follow our optimization recommendations see a 60-75% reduction in AI tool spending. Results vary based on your current stack and usage patterns.',
    },
    {
      question: 'Do you offer ongoing optimization?',
      answer:
        'Yes. Premium users get continuous monitoring and monthly optimization reports. We track your spending patterns and alert you to new savings opportunities as they arise.',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about SpendPilot
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 ml-4 text-2xl text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 md:px-8 md:py-5 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6">
            Our team is ready to help. Contact us or schedule a demo with a SpendPilot expert.
          </p>
          <button className="px-6 py-2 bg-white text-blue-600 hover:bg-slate-100 font-semibold rounded-lg transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
