import React from "react";

export function FaqsLists({Question, Answer, HId, BId, Target}){
      return(
            <div class="accordion-item bg-white p-4 mt-2">
            <h2 class="accordion-header" id={HId}>
              <button class="accordion-button collapsed question" type="button" data-bs-toggle="collapse" data-bs-target={Target} aria-expanded="true" aria-controls={BId}>
               {Question}
              </button>
            </h2>
            <div id={BId} class="accordion-collapse collapse" aria-labelledby={HId} data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p className="mt-3 answer">{Answer}</p>
              </div>
            </div>
          </div>
      )
  }