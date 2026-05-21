'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ResultsDemo() {
  const monthlySavings = 2456.80;
  const annualSavings = 29481.60;
  const savingsPercentage = 68;

  const optimizations = [
    {
      title: 'Downgrade ChatGPT',
      description: 'Switch from Enterprise to Plus for your current usage patterns.',
      savings: '$1,240/mo',
      icon: '📉',
    },
    {
      title: 'Consolidate Duplicate Tools',
      description: 'Claude and OpenAI overlap. Use Claude API Direct for 40% cost savings.',
      savings: '$840/mo',
      icon: '🔗',
    },
    {
      title: 'Optimize Cursor Seats',
      description: 'Reduce unused Pro seats to Business plan for occasional users.',
      savings: '$376/mo',
      icon: '👥',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Header */}
      <div className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">SpendPilot</h1>
            <Link href="/">
              <Button variant="outline">Back Home</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Title section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Audit Results
          </h2>
          <p className="text-xl text-slate-600">
            Discover where your AI spend can be optimized
          </p>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Monthly savings */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl mb-3">💚</div>
            <p className="text-slate-600 text-sm font-medium mb-2">Monthly Savings</p>
            <div className="text-5xl font-bold text-green-600 mb-2">
              ${monthlySavings.toFixed(2)}
            </div>
            <p className="text-slate-500 text-xs">From current spend</p>
          </div>

          {/* Annual savings */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl mb-3">📈</div>
            <p className="text-slate-600 text-sm font-medium mb-2">Annual Savings</p>
            <div className="text-5xl font-bold text-emerald-600 mb-2">
              ${annualSavings.toFixed(2)}
            </div>
            <p className="text-slate-500 text-xs">If implemented consistently</p>
          </div>

          {/* Savings percentage */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl mb-3">⚡</div>
            <p className="text-slate-600 text-sm font-medium mb-2">
              Optimization Potential
            </p>
            <div className="text-5xl font-bold text-blue-600 mb-2">
              {savingsPercentage}%
            </div>
            <p className="text-slate-500 text-xs">Cost reduction possible</p>
          </div>
        </div>

        {/* Optimization recommendations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">
            Top Optimization Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {optimizations.map((opt, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{opt.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {opt.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {opt.description}
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-lg font-bold text-green-600">{opt.savings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-8">
          <h3 className="text-2xl font-bold mb-3">Ready to save?</h3>
          <p className="mb-6 text-blue-100">
            This is a sample audit showing potential savings. Create a real audit with your actual AI stack to get personalized recommendations tailored to your usage.
          </p>
          <Link href="/audit">
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Run Your Real Audit
            </Button>
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-slate-500 text-sm">
            These are estimated savings based on typical usage patterns.
            <br />
            Actual savings may vary based on your specific implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
