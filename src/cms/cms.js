import CMS from "netlify-cms-app"
CMS.registerPreviewStyle("/css/index.css")

CMS.registerEditorComponent({
	id: "custombox",
	label: "customBox",
	fields: [
		{
			name: "customBox",
			label: "Custom Text",
			widget: "markdown",
		},
	],
	pattern: /^<div class="custombox"><small class="customsmall">(.*)<\/small><\/div>/,
	fromBlock: function(match) {
		return {
			customBox: match[1],
		}
	},
	toBlock: function(obj) {
		return (
			'<div class="custombox"><small class="customsmall">' +
			obj.customBox +
			"</small></div>"
		)
	},
	toPreview: function(obj) {
		return (
			'<div class="custombox"><small class="customsmall">' +
			obj.customBox +
			"</small></div>"
		)
	},
})
