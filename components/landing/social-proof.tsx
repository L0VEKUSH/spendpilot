'use client';

export function SocialProof() {
  const stats = [
    {
      value: '4,000+',
      label: 'Audits Completed',
      icon: '📊',
    },
    {
      value: '$1.2M',
      label: 'Annual Savings Surfaced',
      icon: '💰',
    },
    {
      value: '94%',
      label: 'Optimization Opportunities Found',
      icon: '✅',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
