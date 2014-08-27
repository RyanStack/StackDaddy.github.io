// function antHive(antConstructor) {
//   this.ant = antConstructor
//   this.ants = [];
// }

// antHive.prototype = {
//   createAnt: function() {
//     this.ants.push(new this.ant());
//   },
//   moveAnts: function() {
//     for (var i = 0; i<this.ants.length; i++) {
//       this.ants[i].moveAnt();
//     }
//   }
// }



function Ant() {
  this.top = 200
  this.left = 300
}

Ant.prototype = {
  moveAnt: function() {
    var myArray = ["top", "bottom", "left", "right"];
    var direction = myArray[Math.floor(Math.random() * myArray.length)];
    if (direction == "top") {
      return ["lat", -5];
    }
    else if (direction == "bottom") {
      return ["lat", 5]
    }
    else if (direction == "left") {
      return ["long", -5]
    }
    else if (direction == "right") {
      return ["long", 5]
    }
  },
  hitAnt: function(strArr) {
    console.log(strArr)
    var c = strArr  //.match(/[-\d]+/g);
    var r1x1 = Math.min(c[0],c[2],c[4],c[6]);
    var r1x2 = Math.max(c[0],c[2],c[4],c[6]);
    var r1y1 = Math.min(c[1],c[3],c[5],c[7]);
    var r1y2 = Math.max(c[1],c[3],c[5],c[7]);

    var r2x1 = Math.min(c[8],c[10],c[12],c[14]);
    var r2x2 = Math.max(c[8],c[10],c[12],c[14]);
    var r2y1 = Math.min(c[9],c[11],c[13],c[15]);
    var r2y2 = Math.max(c[9],c[11],c[13],c[15]);

    var ox = Math.max(0, Math.min(r1x2,r2x2) - Math.max(r1x1,r2x1))
    var oy = Math.max(0, Math.min(r1y2,r2y2) - Math.max(r1y1,r2y1))

    if (ox >  0 && oy > 0) {
      return true;
    }

    return false;

  }
  }







// var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);


// Need Click algorithm -- this then needs to fade
//Need overlap algorithm -- iterate through all of the ants positions


function OverlappingRectangles(strArr) {
  //var nums = strArr.replace(/\(/g,"").replace(/\)/g,"").split(",");
  var nums = strArr.join('').match(/-?\d+/g);
  for (var i=0; i<nums.length; i++)
    nums[i] = parseInt(nums[i]);
  // code goes here
  console.log(nums)
  var low_x = Math.min(nums[0],nums[2],nums[4], nums[6]);
  var low_y = Math.min(nums[1],nums[3],nums[5], nums[7]);
  var high_x = Math.max(nums[0],nums[2],nums[4], nums[6]);
  var high_y = Math.max(nums[1],nums[3],nums[5], nums[7]);

  var low_x2 = Math.min(nums[8],nums[10],nums[12], nums[14]);
  var low_y2 = Math.min(nums[9],nums[11],nums[13], nums[15]);
  var high_x2 = Math.max(nums[8],nums[10],nums[12], nums[14]);
  var high_y2= Math.max(nums[9],nums[11],nums[13], nums[15]);

  var area1 = (high_x-low_x) * (high_y-low_y);
  var area2 = (high_x2-low_x2)*(high_y2-low_y2);

  if (Math.min(high_x,high_x2)<= Math.max(low_x,low_x2)  ||
                Math.min(high_y,high_y2)<=Math.max(low_y,low_y2))
    return 0;
    var overlap = (Math.min(high_x,high_x2)-Math.max(low_x,low_x2) )*
                (Math.min(high_y,high_y2)-Math.max(low_y,low_y2));
  //return Math.min(area1,area2)/overlap; // low_x: 0 high_x:2 low_y:0 high_y:2
  return Math.floor(area1/overlap);
  //area1 2 overlap 2
         //debug area1=10, overlap=3
}
