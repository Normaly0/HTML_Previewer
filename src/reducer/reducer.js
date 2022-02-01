let defaultState = {
    html: 
`
<h1>Welcome to the live markdown previewer!</h1>
<h2>Feel free to experiment around with it to your hearts content</h2>
                
This here is one of the main and most important html elements: &lt;div&gt;&lt;/div&gt;, you can use it to organize and wrap
other elements of your page.
<br><br>                
How about some inline styling then?
You could create <b>bold text</b>, <i>italize</i> it or even <strike>cross it out</strike>!
<br><br>
On the other hand you could use lists in order to better organize the information on your page.
<ol>
    <li> Just</li>
    <li> Like</li>
    <li> This</li>
</ol>

Just keep in mind that there are two different kinds of lists, ordered and unordered ones.
If you'd like to insert some code into your page that's possible as well!
<br><br>
<code>
    function print(text) {
        return console.log(text)
    };
</code>`
}

const UPDATE_HTML = 'UPDATE_HTML';

const mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case UPDATE_HTML:
            return {
                ...state, html: action.html
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;