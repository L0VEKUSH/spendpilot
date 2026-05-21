'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface ToolEntry {
  id: string;
  tool: string;
  plan: string;
  monthlySpend: string;
  seats: string;
  teamSize: string;
  useCase: string;
}

const TOOLS_CONFIG: Record<string, { plans: string[] }> = {
  cursor: {
    plans: ['Hobby', 'Pro', 'Business', 'Enterprise'],
  },
  'github-copilot': {
    plans: ['Individual', 'Business', 'Enterprise'],
  },
  claude: {
    plans: ['Free', 'Pro', 'Max', 'Team', 'Enterprise', 'API Direct'],
  },
  chatgpt: {
    plans: ['Plus', 'Team', 'Enterprise', 'API Direct'],
  },
  'anthropic-api': {
    plans: ['API Direct'],
  },
  'openai-api': {
    plans: ['API Direct'],
  },
  gemini: {
    plans: ['Pro', 'Ultra', 'API'],
  },
  windsurf: {
    plans: ['Free', 'Pro', 'Teams'],
  },
};

const TOOLS = Object.keys(TOOLS_CONFIG).map((key) => ({
  value: key,
  label: key
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
}));

const USE_CASES = ['Coding', 'Writing', 'Research', 'Mixed', 'Data'];

export function SpendForm() {
  const [entries, setEntries] = useState<ToolEntry[]>([
    {
      id: '1',
      tool: 'cursor',
      plan: 'Pro',
      monthlySpend: '',
      seats: '1',
      teamSize: '1',
      useCase: 'Coding',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('spendpilot-form');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load form data', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('spendpilot-form', JSON.stringify(entries));
    }
  }, [entries, mounted]);

  const updateEntry = (id: string, field: keyof ToolEntry, value: string) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const addEntry = () => {
    const newId = String(Math.max(...entries.map((e) => parseInt(e.id)), 0) + 1);
    setEntries((prev) => [
      ...prev,
      {
        id: newId,
        tool: 'cursor',
        plan: 'Pro',
        monthlySpend: '',
        seats: '1',
        teamSize: '1',
        useCase: 'Coding',
      },
    ]);
  };

  const removeEntry = (id: string) => {
    if (entries.length > 1) {
      setEntries((prev) => prev.filter((entry) => entry.id !== id));
    }
  };

  const isValid = entries.every(
    (entry) =>
      entry.tool &&
      entry.plan &&
      entry.monthlySpend &&
      parseFloat(entry.monthlySpend) >= 0 &&
      parseInt(entry.seats) >= 1 &&
      parseInt(entry.teamSize) >= 1 &&
      entry.useCase
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to results
    window.location.href = '/results-demo';
  };

  if (!mounted) return null;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
          Audit Your AI Spend
        </h1>
        <p className="text-xl text-slate-600">
          Discover hidden savings across your AI stack in under 60 seconds.
        </p>
      </div>

      {/* Tool entries */}
      <div className="space-y-8 mb-8">
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className="p-8 rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-300 transition-colors duration-300"
          >
            {/* Entry header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Tool #{index + 1}
              </h3>
              {entries.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEntry(entry.id)}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Tool dropdown */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Tool
                </label>
                <select
                  value={entry.tool}
                  onChange={(e) => {
                    updateEntry(entry.id, 'tool', e.target.value);
                    // Reset plan to first available plan
                    const firstPlan = TOOLS_CONFIG[e.target.value]?.plans[0] || '';
                    updateEntry(entry.id, 'plan', firstPlan);
                  }}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 bg-white"
                >
                  {TOOLS.map((tool) => (
                    <option key={tool.value} value={tool.value}>
                      {tool.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Plan dropdown */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Plan
                </label>
                <select
                  value={entry.plan}
                  onChange={(e) => updateEntry(entry.id, 'plan', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 bg-white"
                >
                  {(TOOLS_CONFIG[entry.tool]?.plans || []).map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly spend */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Monthly Spend ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={entry.monthlySpend}
                  onChange={(e) =>
                    updateEntry(entry.id, 'monthlySpend', e.target.value)
                  }
                  placeholder="0.00"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
              </div>

              {/* Number of seats */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Number of Seats
                </label>
                <input
                  type="number"
                  min="1"
                  value={entry.seats}
                  onChange={(e) => updateEntry(entry.id, 'seats', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
              </div>

              {/* Team size */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Team Size
                </label>
                <input
                  type="number"
                  min="1"
                  value={entry.teamSize}
                  onChange={(e) =>
                    updateEntry(entry.id, 'teamSize', e.target.value)
                  }
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
              </div>

              {/* Use case */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Primary Use Case
                </label>
                <select
                  value={entry.useCase}
                  onChange={(e) =>
                    updateEntry(entry.id, 'useCase', e.target.value)
                  }
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 bg-white"
                >
                  {USE_CASES.map((useCase) => (
                    <option key={useCase} value={useCase}>
                      {useCase}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add another tool button */}
      <div className="mb-10">
        <button
          type="button"
          onClick={addEntry}
          className="px-6 py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:text-slate-900 hover:border-blue-400 font-medium transition-all duration-200"
        >
          + Add Another Tool
        </button>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        disabled={!isValid || loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white text-lg py-4 px-6 rounded-lg transition-all duration-300"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Generating Audit Report...
          </div>
        ) : (
          'Generate Audit Report'
        )}
      </Button>

      {/* Validation message */}
      {!isValid && (
        <p className="mt-4 text-sm text-red-600 text-center">
          Please fill in all required fields with valid values
        </p>
      )}
    </form>
  );
}
