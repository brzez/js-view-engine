/*
    Should search for [start]
    Then it should search the text for start||end keeping
    [start found] - level++
    [end found]   - level--
    if(level === 0) block ended

    should return the whole matched text,
    also the whole matched text w/o [start] & [end]
 */

var findAll = function(input, regex, transform) {
    //todo: regexes need to have 'g' flag (maybe it should test for that)
    var matches = [];
    var match;
    while((match = regex.exec(input)) !== null){
        matches.push(transform(match));
    }
    return matches;
}


var findBlock = function(input, startRegex, endRegex) {
    var all = [];
    all.push.apply(all, findAll(input, startRegex, function(m) {
        return {type: 'start', match: m };
    }));
    all.push.apply(all, findAll(input, endRegex, function(m) {
        return {type: 'end', match: m };
    }));
    // sort them by index
    var sorted = all.sort(function(a, b) {
        return a.match.index - b.match.index;
    });

    var level = 0;
    var first, last;
    // find toplevel block
    for(let i=0;i < sorted.length; i++){
        var current = sorted[i];
        if(current.type == 'start'){
            level++;
            first = first || current;
        }else{
            level--;
            if(level == 0){
                last = current;
                break;
            }
        }
    }

    return {
        raw: input.substring(first.match.index, last.match.index + last.match[0].length),
        inner:  input.substring(first.match.index + first.match[0].length, last.match.index),
        open: first.match,
        close: last.match
    }
};

export default findBlock;
