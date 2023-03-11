function fromJsonToHtml(jsonString) {
    const result = [];

    const obj = JSON.parse(jsonString);

    const array = [];

    for (const a of obj) {
        array.push(Object.entries(a));
    }

   

    result.push('<table>');
    result .push(makeKeyRow(array));
    makeValueRow(array, result);

    result.push('</table>');

    console.log(result.join("\n"));

    function makeKeyRow(arr) {

        for (const e of arr) {
            const result =  '';
            result += '    <tr>';
            for (const a of e) {
                let current = Object.keys(a);
                current.forEach(element => {
                    result += `<th>${element}</th>`
                });
            }
        }
        result += '/tr>';

    }

    function makeValueRow(array, result) {
        for (const e of arr) {
            const sb =  '';
            sb += '    <tr>';
            for (const a of e) {
                let current = Object.keys(a);
                current.forEach(element => {
                    sb += `<th>${element}</th>`
                });
                result.push(sb);
                sb = '';
            }
        }
    }
}


fromJsonToHtml(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)

console.log('-------');

fromJsonToHtml(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)