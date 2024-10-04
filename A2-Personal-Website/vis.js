// Create and render the bar chart
// async function to load data from datasets/videogames_long.csv using d3.csv and then make visualizations
async function render() {
  // load data
  const games = await d3.csv("./dataset/videogames_long.csv");


 // create heat map
  const heatMap = vl
 .markRect()
 .data(games)
 .encode(
   vl.x().fieldN("platform"),
   vl.y().fieldN("genre"),
   vl.color()
   .fieldQ("global_sales").aggregate("sum")
   .scale({
        domain: [0, 100],  
        range: ["#c297e6", "#4b246b"] 
      }),
 )

 .width(600)
 .height(400)
 .toSpec();

 vegaEmbed("#heatMap", heatMap).then((result) => {
  const view = result.view;
  view.run();
 });

   // create stacked bar
   const stackedChart = vl
   .markBar()
   .data(games)
   
   .encode(
     vl.x().fieldN("year"),
     vl.y().fieldQ("sales_amount").aggregate("sum"), 
     vl.color().fieldN("genre"),
     vl.tooltip([vl.fieldN("platform")])
   )


   .width(800)
   .height(400)
   .toSpec();

 

 vegaEmbed("#stackedChart", stackedChart).then((result) => {
   const view = result.view;
   view.run();
 });


    // create a point chart
    const pointChart = vl
    .markPoint() 
    .data(games)
    .encode(
    vl.y().fieldQ("sales_amount").aggregate("sum"),
    vl.x().fieldN("platform"),
    vl.color().fieldN("sales_region")

  )
 
 
    .width(600)
    .height(400)
    .toSpec();
 
  
 
  vegaEmbed("#pointChart", pointChart).then((result) => {
    const view = result.view;
    view.run();
  });


      // create a circle chart
      const circleChart = vl
      .markCircle() 
      .data(games)
        .encode(
          vl.x().fieldN("year"),
          vl.y().fieldN("genre"),
          vl.size().aggregate("count")
  
    )
   
   
      .width(800)
      .height(400)
      .toSpec();
   
    
   
    vegaEmbed("#circleChart", circleChart).then((result) => {
      const view = result.view;
      view.run();
    });
 


}

render();
