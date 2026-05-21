'use client';

import Link from 'next/link';

export function SavingsPreview() {
  const examples = [
    {
      company: 'AI Research Startup',
      before: '$12,450',
      after: '$4,320',
      savings: '65%',
      icon: '🔬',
    },
    {
      company: 'Design Agency',
      before: '$8,900',
      after: '$2,150',
      savings: '76%',
      icon: '🎨',
    },
    {
      company: 'Tech Consultant',
      before: '$5,600',
      after: '$1,800',
      savings: '68%',
      icon: '💼',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Real Savings, Real Results
          </h2>
          <p className="text-xl text-slate-600">
            See how others are cutting their AI spending
          </p>
        </div>

        {/* Examples grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Icon */}
              <div className="text-5xl mb-4">{example.icon}</div>

              {/* Company name */}
              <h3 className="text-xl font-bold text-slate-900 mb-6">{example.company}</h3>

              {/* Before/After section */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Monthly Spend</p>
                  <p className="text-2xl font-bold text-slate-900">{example.before}</p>
                  <p className="text-xs text-slate-500">Before audit</p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="h-px flex-grow bg-gradient-to-r from-slate-300 to-transparent" />
                  <span>→</span>
                  <div className="h-px flex-grow bg-gradient-to-l from-slate-300 to-transparent" />
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-1">Optimized Spend</p>
                  <p className="text-2xl font-bold text-green-600">{example.after}</p>
                  <p className="text-xs text-slate-500">After optimization</p>
                </div>
              </div>

              {/* Savings badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-lg">
                {example.savings} savings
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            These are real metrics from our audit engine
          </p>
          <Link href="/audit">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Your Audit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
