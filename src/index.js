module.exports = function longestConsecutiveLength(array) {
	var arr=[];
	for(var i=0;i<array.length;i++){
		arr[[array[i]]]=i;
	}
	var max=0;
	for(var i=0;i<array.length;i++){
		if (arr[array[i]]>=0){
			var k=1;
			var h=array[i];
			while(arr[h-1]>=0){
				k++;
				h--;
				arr[h]=null;

			}
			var h=array[i];
			while(arr[h+1]>=0){
				k++;
				h++;
				arr[h]=null;
			}
			if (k>max){
				max=k;
			}
		}
	}
	return(max);
}
