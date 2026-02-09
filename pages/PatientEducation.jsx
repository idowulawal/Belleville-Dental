import React from 'react';

const PatientEducation = () => {
  return (
    <div className="container mx-auto px-4 fade-in" aria-labelledby="patient-edu-heading">
      <header className="text-center mb-12">
        <h2 id="patient-edu-heading" className="text-4xl font-bold text-slate-900">Patient Education</h2>
        <p className="text-slate-500 mt-2">Guides, tips, and resources for patients and caregivers.</p>
      </header>

      <section aria-labelledby="preventive-heading" className="mb-8">
        <h3 id="preventive-heading" className="font-bold text-2xl mb-4">Preventive Care</h3>
        <p className="text-slate-600 mb-4">Simple daily steps to protect your oral health.</p>
        <ul className="list-disc list-inside text-slate-500 space-y-2">
          <li>Brush twice daily for two minutes with fluoride toothpaste.</li>
          <li>Floss once a day to remove plaque between teeth.</li>
          <li>Limit sugary snacks and drinks; choose water and whole foods.</li>
          <li>Visit your dentist regularly for preventive checkups and cleanings.</li>
        </ul>
      </section>

      <section aria-labelledby="children-heading" className="mb-8">
        <h3 id="children-heading" className="font-bold text-2xl mb-4">Children's Oral Health</h3>
        <p className="text-slate-600 mb-4">Age-based guidance for parents and caregivers.</p>
        <ol className="list-decimal list-inside text-slate-500 space-y-2">
          <li>Start cleaning your baby's gums with a soft cloth after feedings.</li>
          <li>Introduce a pea-sized amount of fluoride toothpaste when the first tooth appears.</li>
          <li>Schedule the first dental visit by the child's first birthday.</li>
          <li>Model healthy habits — children learn by watching caregivers.</li>
        </ol>
        <a href="/assets/guides/children-oral-health.pdf" className="inline-block mt-4 text-sky-600 underline" aria-label="Download children's oral health guide (PDF)" rel="noopener noreferrer">Download printable guide (PDF)</a>
      </section>

      <section aria-labelledby="sensitivity-heading" className="mb-8">
        <h3 id="sensitivity-heading" className="font-bold text-2xl mb-4">Managing Sensitivity</h3>
        <p className="text-slate-600 mb-4">Practical tips for sensitive teeth and gums.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-bold mb-2">At-home care</h4>
            <p className="text-slate-500">Use a soft-bristled toothbrush and desensitizing toothpaste; avoid extreme temperature foods and drinks.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-bold mb-2">When to see a dentist</h4>
            <p className="text-slate-500">If sensitivity persists or worsens, book an appointment to rule out decay or gum disease.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="mb-8">
        <h3 id="faq-heading" className="font-bold text-2xl mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <details>
            <summary className="font-semibold">How often should I replace my toothbrush?</summary>
            <p className="text-slate-500 mt-2">Replace every 3 months or sooner if bristles are frayed.</p>
          </details>
          <details>
            <summary className="font-semibold">Is fluoride safe for children?</summary>
            <p className="text-slate-500 mt-2">Yes — use a pea-sized amount of fluoride toothpaste; ask your dentist for personalized advice.</p>
          </details>
        </div>
      </section>

      <footer className="mt-12">
        <p className="text-sm text-slate-500">If you need individualized advice, contact our team for a consultation.</p>
      </footer>
    </div>
  );
};

export default PatientEducation;
