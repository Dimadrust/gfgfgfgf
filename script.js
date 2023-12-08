function calculate(){
    let expression = document.getElementById('expression').value;
    let result = eval(expression);
    document.getElementById('result').innerText = result;
}