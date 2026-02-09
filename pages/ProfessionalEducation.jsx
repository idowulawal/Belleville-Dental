import React from 'react';
import { COURSES } from '../constants.js';

const ProfessionalEducation = () => {
  return (
    <div className="container mx-auto px-4 fade-in" aria-labelledby="pro-edu-heading">
      <header className="text-center mb-12">
        <h2 id="pro-edu-heading" className="text-4xl font-bold text-slate-900">Professional Education</h2>
        <p className="text-slate-500 mt-2">Accredited courses and faculty resources for clinicians.</p>
      </header>

      <section aria-label="Course list" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COURSES.map(course => (
          <article key={course.id} className="p-6 bg-white rounded-2xl shadow-sm" aria-labelledby={`course-${course.id}`}>
            <h3 id={`course-${course.id}`} className="font-bold text-lg mb-2">{course.title}</h3>
            <p className="text-sm text-slate-500">{course.duration} • {course.category}</p>
            <p className="mt-4 text-slate-600" id={`course-desc-${course.id}`}>{course.description}</p>

            <div className="mt-4">
              <p className="font-semibold text-sm text-slate-700 mb-2">Learning objectives</p>
              <ul className="list-disc list-inside text-slate-500">
                {(course.objectives || ['Overview of topic', 'Clinical indications', 'Technique guidance']).map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`/contact-us?course=${encodeURIComponent(course.title)}`}
                className="inline-block px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md font-semibold"
                aria-label={`Enroll in ${course.title}`}
              >
                Enroll
              </a>
              <a
                href={course.syllabus || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-50"
                aria-label={`Open syllabus for ${course.title}`}
              >
                View Syllabus
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ProfessionalEducation;
