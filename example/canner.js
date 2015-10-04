examples = [
  {
    "link": "container",
    "title": "Container"
  },
  {
    "link": "grid",
    "title": "Grid"
  },
  {
    "link": "blank_chart",
    "title": "Blank Chart"
  },
  {
    "link": "label",
    "title": "Label"
  },
  {
    "link": "legend",
    "title": "Legend"
  },
  {
    "link": "xaxis",
    "title": "Xaxis"
  },
  {
    "link": "yaxis",
    "title": "Yaxis"
  }
];


var canner = examples.map(function(d) {
  return {
    "layout": "./layout.hbs",
    "filename": './example/' + d.link + '.html',
    "data": {
      "link": d.link,
      "title": d.title
    }
  }
})

module.exports = canner;
