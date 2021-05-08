frappe.ui.form.ControlText = class ControlText extends frappe.ui.form.ControlData {
	html_element = "textarea"
	horizontal = false
	make_wrapper() {
		super.make_wrapper();
		this.$wrapper.find(".like-disabled-input").addClass("for-description");
	}
	make_input() {
		super.make_input();
		this.$input.css({'height': '300px'});
	}
};

frappe.ui.form.ControlLongText = frappe.ui.form.ControlText;
frappe.ui.form.ControlSmallText = class ControlSmallText extends frappe.ui.form.ControlText {
	make_input() {
		super.make_input();
		this.$input.css({'height': '150px'});
	}
};
