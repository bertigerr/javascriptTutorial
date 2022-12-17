let max = function(list){
    let maxi = list[0]
      for (let i = 0; i < list.length; i++) {
       if (maxi < list[i]) maxi = list[i];
      }
     return maxi;
    }