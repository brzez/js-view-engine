import findBlock from '../find-block'
import renderable from '../renderable';

var ConditionalToken = {
    start: /{{#\s*(\w+)\s*}}/g,
    end: /{{#}}/g,

    match: function(template) {
        var match = this.start.exec(template.input);
        if(match === null || match.index != 0){
            return false;
        }

        this.start.lastIndex = this.end.lastIndex = 0;

        var block = findBlock(template.input, this.start, this.end);
        
        var condition = template.get(block.open[1]);

        template.consume(block.raw);
        template.output.push(
            renderable(
                condition ? block.inner /* todo: recursively parse this further */ : '',
                {token: 'conditional'}
            )
        )

        return true;
    }
};

export default ConditionalToken;
