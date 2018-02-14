const DataFrame = dfjs.DataFrame;

let df = DataFrame.fromJSON('https://data.cityofchicago.org/resource/psqp-6rmg.json').then(df => df);

df.then((val) => val.map(row => console.log(row) ))


