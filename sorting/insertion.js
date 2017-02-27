module.exports = {
     message: function message(str){
	return 'echo: '+str;
    },

    sort: function sort(array){
	var key;
	var i;
	for(var index = 1; index < array.length ; index++){
	    key = array[index];
	    i = index -1;
	    while ( i >= 0 && array[i] > key){
		array[i+1] = array[i];
		i--;
	    }
	    array[i+1] = key;
	}
    }
}

