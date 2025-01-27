# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE

# License: MIT. See LICENSE

import frappe

from frappe.model.document import Document

class BlogSettings(Document):

	def on_update(self):
		from frappe.website.utils import clear_cache
		clear_cache("blog")
		clear_cache("writers")

def get_feedback_limit():
	return frappe.db.get_single_value("Blog Settings", "feedback_limit") or 0