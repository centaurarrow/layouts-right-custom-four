import { createLayoutsWidget } from 'discourse/plugins/discourse-layouts/discourse/lib/layouts';
import { scheduleOnce } from "@ember/runloop";
import { h } from 'virtual-dom';

export default createLayoutsWidget('right-custom-html-four', {
  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_right_custom_html_four;

      const category = attrs.category;
      if (category && category.layouts_right_custom_html_four) {
        html = category.layouts_right_custom_html_four;
      }

      scheduleOnce('afterRender', this, function() {
        $("div.right-custom-html-four").append(`<div class='contents'>${html}</div>`);
      });
      state.renderScheduled = true;
    }
    return h('div.right-custom-html-four');
  }
});
