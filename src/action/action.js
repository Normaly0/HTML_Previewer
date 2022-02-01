export function updateHTML(input) {
    return  {
        type: 'UPDATE_HTML',
        html: input.target.value
    }
}