'use client';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Input AI Stack',
      description: 'Connect your AI tools and services in seconds. We support all major platforms.',
      icon: '⚙️',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      title: 'Analyze Spend',
      description: 'Our AI engine analyzes your usage patterns and spending across all tools.',
      icon: '🔍',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      number: '03',
      title: 'Unlock Savings',
      description: 'Get actionable recommendations and discover hidden savings opportunities.',
      icon: '🎯',
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            Three simple steps to audit your AI stack and unlock savings
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-transparent" />
              )}

              <div className="group h-full p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                {/* Number badge */}
                <div
                  className={`inline-block w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
