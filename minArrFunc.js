let min = function(list){
    let mini = list[0];
    for (let i = 0; i < list.length; i++) {
      if (mini > list[i]) mini = list[i];
    }
   return mini;
  }