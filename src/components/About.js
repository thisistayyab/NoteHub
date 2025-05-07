import React from "react";

const About = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is NoteHub?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            NoteHub is a smart, simple, and powerful note-taking app designed to help you organize your thoughts, tasks, and ideas with ease. Whether you're jotting down quick reminders or managing detailed to-do lists, NoteHub is your digital hub for everything that matters.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why Choose NoteHub?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            Clean & Intuitive Design – Focus on your notes without distractions.

            Lightning-Fast Access – Create, update, and search notes in seconds.

            Privacy-First – Your data stays secure and private.

            Multi-Device Sync – Access your notes anywhere, anytime.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Who is NoteHub For?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
            Students taking lecture notes and organizing subjects

Professionals tracking meeting minutes and tasks

Writers & Creatives brainstorming ideas and outlines

Anyone who needs a personal space to think and plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
