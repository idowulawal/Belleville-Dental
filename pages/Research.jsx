import React, { useState } from 'react';
import { RESEARCH } from '../constants.js';

const Research = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(RESEARCH.map(r => r.category || 'General')))];

  const filtered = filter === 'All' ? RESEARCH : RESEARCH.filter(r => (r.category || 'General') === filter);

  return (
    <div className="container mx-auto px-4 fade-in" aria-labelledby="research-heading">
      <header className="text-center mb-12">
        <h2 id="research-heading" className="text-4xl font-bold text-slate-900">Research Library</h2>
        <p className="text-slate-500 mt-2">Latest publications and multimedia resources from our research arm.</p>
      </header>

      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-600">Browse peer-reviewed articles, clinical studies, and multimedia.</p>
        <label className="flex items-center space-x-2">
          <span className="text-sm text-slate-500">Filter:</span>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="ml-2 px-3 py-2 rounded border border-slate-200"
            aria-label="Filter research by category"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-live="polite">
        {filtered.map(item => (
          <article key={item.id} className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.author} • {item.date}</p>
            <details className="mt-4 text-slate-600">
              <summary className="font-semibold">Abstract</summary>
              <p className="mt-2">{item.abstract}</p>
            </details>

            <div className="mt-4 flex gap-3">
              <a
                href={item.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md"
                aria-label={`Read full paper: ${item.title}`}
              >
                Read Full Paper
              </a>
              {item.pdf && (
                <a
                  href={item.pdf}
                  download
                  className="inline-block px-4 py-2 border border-slate-200 rounded-md text-slate-700"
                  aria-label={`Download PDF for ${item.title}`}
                >
                  Download PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Research;
