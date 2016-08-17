module.exports={  
  entry: "./index.js",
  
  output:{
    filename:"./static/bundle.js"    
  },
  
  watch:true,
  
  watchOptions:{
    aggregateTimeout:100    
  },
  
  devtool:'source-map',
  
  module:{
    loaders:[{
      test:/\.js$/,
      loader:"babel"
    }]
  }
  
}