const data = [
    {width: 500, height: 400, fill: 'purple'}
  ];
  
  // select the svg container first
  const svg = d3.select('svg');
  
  svg.select('rect')
    .data(data)
    .attr('width', function(d,i,n){ return d.width })
    .attr('height', function(d){ return d.height })
    .attr('fill', function(d){ return d.fill });
  
  