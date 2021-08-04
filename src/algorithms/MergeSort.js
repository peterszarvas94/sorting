const MergeSort = (items) => {

	
	const original = [...items];
	// console.log(original);

	let current = [...original];
	const result = [[...current]];

	const save = (arr) => {
		const original_indexes = [];
		
		for (let i = 0; i < arr.length; i++)  {
			original_indexes.push(original.indexOf(arr[i]));
		}

		const min = Math.min(...original_indexes);
		const max = Math.max(...original_indexes);

		const temp = [...current.slice(0, min), ...arr, ...original.slice(max+1)];
		current = [...temp];		

		result.push([...current]);
	}

	function merge(left, right) {
		let sortedArr = []; // the sorted elements will go here
	  
		while (left.length && right.length) {
		  // insert the smallest element to the sortedArr
		  if (left[0] < right[0]) {
			sortedArr.push(left.shift());
		  } else {
			sortedArr.push(right.shift());
		  }
		}
		// console.log(sortedArr);

		save([...sortedArr, ...left, ...right]);
		// use spread operator and create a new array, combining the three arrays
		return [...sortedArr, ...left, ...right];
	  }
	  
	  function sort(arr) {
		const half = arr.length / 2;
	  
		// the base case is array length <=1
		if (arr.length <= 1) {
		  return arr;
		}
	  
		const left = arr.splice(0, half); // the first half of the array
		const right = arr;

		
		return merge(sort(left), sort(right));

	  }
	  
	  sort(items);
	return result;
}

export default MergeSort;