
module.exports = function(selector) {
	
	// options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
	var bold = '<strong>' + selector.fn(this) + '</strong>';
	
	return bold;

};
