
/**
 * Get property from object via dot separated string
 * @param  {object} object
 * @param  {string} path
 * @return {any|undefined}
 */
export function get(object, path){
    var path = path.split('.');

    /**
     * @param  {object} object
     * @param  {array} path 
     * @return {any|undefined}
     */
    var get = function(object, path) {
        if(object === undefined){
            return object;
        }
        var current = path.shift();
        return path.length ? get(object[current], path) : object[current];
    }

    return get(object, path);
}
