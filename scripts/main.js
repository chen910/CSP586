// import Chart from 'chart.js';
const DataFrame = dfjs.DataFrame;

let df = DataFrame.fromCSV('https://data.cityofchicago.org/api/views/x8fc-8rcq/rows.csv').then(df => df);

data = df.then((val) => val.map(row => console.log(row) ));

console.log(data);

function clickButton() {
	document.getElementById("demo").innerHTML = "My First JavaScript";
}
