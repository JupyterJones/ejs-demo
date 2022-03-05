
const people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', { people: people });
// With jQuery:
$('#output').html(html);
// Vanilla JS:
document.getElementById('output').innerHTML = html;
export default people;