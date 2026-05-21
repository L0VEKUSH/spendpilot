'use client';

import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            ✨ AI Stack Auditor
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900">
          Stop Overpaying for{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI Tools
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Instantly audit your AI stack and uncover hidden monthly savings in under 60 seconds.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Audit My Stack Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-slate-300 text-slate-900 hover:border-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-lg transition-all duration-300"
          >
            See Sample Audit
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="pt-12">
          <p className="text-sm text-slate-500 mb-4">Trusted by AI teams at:</p>
          <div className="flex justify-center gap-8 items-center flex-wrap">
            {['OpenAI', 'Anthropic', 'Mistral', 'Cohere'].map((company) => (
              <span
                key={company}
                className="text-slate-400 font-medium text-sm hover:text-slate-600 transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
