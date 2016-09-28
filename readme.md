# Simple template engine for js

Works in node & browsers.

Written for the a-k-apart.com contest as a part of a different project.
The main goal was to take as low space as possible. Minified it takes around 2kb which is ok.

It might be a bit bugged. The aim was to write it well enough so the other project is working.

** This shouldn't probably be used by anyone. just use hbs / mustache / whatever **

## spec
1. Render variable (escaped)
```
{{ variable }}
```
2. Conditionals
Data:
```js
{
    thing: 123
}
```
```
{{# thing}} will render {{/}}
{{#! thing}} won't render {{/}}
```
3. loops
```js
something = [
    {value: 1},
    {value: 2}
];
```
```
{{@ something}}
    {{ value }}
{{@}}
```
There is no support for array items in loops.

