"use strict";

async function initializeApplication() {
  // Initialize classes
  const template = new Template();
  const storage = new Storage();

  // Export classes
  window.template = template;
  window.storage = storage;

  // Check if browser supports Storage feature
  if (typeof Storage === "undefined") {
    alert("HTML5 Storage is not support on your Browser!");
    return;
  }

  // Load data from local storage
  window.storage.loadFromStorage();

  // Initialize templates
  await window.template.fetchTemplates();
}
