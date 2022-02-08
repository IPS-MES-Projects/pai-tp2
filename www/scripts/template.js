"use strict";

class Template {
  constructor() {
    // Attributes
    this.templates = {};
  }

  async fetchTemplates() {
    const promises = [];

    promises.push(this.fetchTemplate("./templates/class-rows.mustache"));
    promises.push(this.fetchTemplate("./templates/student-rows.mustache"));

    const templates = await Promise.all(promises);

    this.templates = {
      classRows: templates[0],
      studentRows: templates[1],
    };
  }

  async fetchTemplate(path) {
    try {
      const response = await fetch(path);
      const template = await response.text();
      return template;
    } catch (error) {
      console.error("Failed to fetch template: ", error);
    }
  }

  parseHTML(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content;
  }

  renderTemplate(template, data) {
    // Render the template
    const html = Mustache.render(this.templates[template], data);

    // Parse the text
    var document = this.parseHTML(html);

    return document;
  }
}
