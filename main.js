function checkIfDuplicateExists(arr) {
	return new Set(arr).size !== arr.length
}

function select(list, size = 2) {
	var charas = [];
	for (var i = 0; i < size; i++) {
		charas[i] = list[Math.floor(Math.random() * list.length)];
	}

	// 
	if (checkIfDuplicateExists(charas)) { return select(list, size); }
	return charas;
}

$("main > button").on("click", function() {
	$.ajax({
		url: "../assets/datasets/characters_faraway",
		success: function(result) {
			var split = result.split("\r\n");

			var charas = select(split, $("#polycule-size").val());
			$("main > h1").text(charas.join("/"));
		}
	})
})