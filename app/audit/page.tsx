import { SpendForm } from '@/components/spend-form';

export const metadata = {
  title: 'Audit Your AI Spend - SpendPilot',
  description:
    'Discover hidden savings across your AI stack in under 60 seconds.',
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto">
        <SpendForm />
      </div>
    </div>
  );
}
