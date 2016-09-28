import renderable from '../renderable';

/*
    escape inspired by
    https://github.com/janl/mustache.js/blob/master/mustache.js
 */

var entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};

function escapeHtml (string) {
return String(string).replace(/[&<>"'`=\/]/g, function(s){
  return entities[s];
});
}

function VariableToken(template) {
    var regex = /^{{(\$?)\s*([\w\.]+)\s*}}/;
    var match = template.input.match(regex);
    if(match === null) return false;

    var variable = template.get(match[2]); 
    var shouldEscape = (match[1] !== '$');

    template.consume(match[0]);
    template.output.push(
        renderable(
            shouldEscape ? escapeHtml(variable) : variable
        )
    );

    return true;
};

export default VariableToken;
