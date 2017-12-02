/*globals $, StockBlock, document*/

var addToLog = function(id, txt) {
	$(id + " .logs").append("<br>" + txt);
};

var numberOfPhotos = 0;

// ===========================
// Storage (IPFS) example
// ===========================
$(document).ready(function() {
	// automatic set if config/storage.json has "enabled": true and "provider": "ipfs"
	EmbarkJS.Storage.setProvider('ipfs',{server: 'localhost', port: '5001'});

	$("#upload .error").hide();
	EmbarkJS.Storage.ipfsConnection.ping()
		.then(function(){
				// $("#status-storage").addClass('status-online');
				// $("#storage-controls").show();
		})
		.catch(function(err) {
			if(err){
				console.log("IPFS Connection Error => " + err.message);
				// $("#storage .error").show();
				// $("#status-storage").addClass('status-offline');
				// $("#storage-controls").hide();
			}
		});

	// DONE
	$("#upload button.uploadFile").click(function() {
		var input = $("#upload input[type=file]");
		EmbarkJS.Storage.uploadFile(input).then(function(hash) {
			var webUrl = "https://ipfs.io/ipfs/" + hash;
			switch (numberOfPhotos) {
				case 0:
					$("img.gallery1").attr('src', webUrl);
					$("img.gallery1").attr('href', webUrl);
					$("img.gallery1").attr('title', "Price: " + 3);
					break;
				case 1:
					$("img.gallery2").attr('src', webUrl);
					$("img.gallery2").attr('href', webUrl);
					$("img.gallery2").attr('title', "Price: " + 3);
					break;
				case 2:
					$("img.gallery3").attr('src', webUrl);
					$("img.gallery3").attr('href', webUrl);
					$("img.gallery3").attr('title', "Price: " + 3);
					break;
				case 3:
					$("img.gallery4").attr('src', webUrl);
					$("img.gallery4").attr('href', webUrl);
					$("img.gallery4").attr('title', "Price: " + 3);
					break;
				case 4:
					$("img.gallery5").attr('src', webUrl);
					$("img.gallery5").attr('href', webUrl);
					$("img.gallery5").attr('title', "Price: " + 3);
					break;
				case 5:
					$("img.gallery6").attr('src', webUrl);
					$("img.gallery6").attr('href', webUrl);
					$("img.gallery6").attr('title', "Price: " + 3);
					break;
				case 6:
					$("img.gallery7").attr('src', webUrl);
					$("img.gallery7").attr('href', webUrl);
					$("img.gallery7").attr('title', "Price: " + 3);
					break;
				case 7:
					$("img.gallery8").attr('src', webUrl);
					$("img.gallery8").attr('href', webUrl);
					$("img.gallery8").attr('title', "Price: " + 3);
					break;
				case 8:
					$("img.gallery9").attr('src', webUrl);
					$("img.gallery9").attr('href', webUrl);
					$("img.gallery9").attr('title', "Price: " + 3);
					break;
				default:
					// Nothing
					break;
			}
			numberOfPhotos++;

			$("img.gallery").attr('src', webUrl);
			console.log(hash);
			// $("span.fileIpfsHash").html(hash);
			// $("input.fileIpfsHash").val(hash);

			if (EmbarkJS.isNewWeb3()) {
				// Keep these groups, photo and hash must have same index
				StockBlock.methods.setHash(hash).send({from:web3.eth.defaultAccount, gas:500000});
				StockBlock.methods.setPrice().send({from:web3.eth.defaultAccount, gas:500000});
			} else {
				// Keep these groups, photo and hash must have same index
				StockBlock.setHash(hash);
				StockBlock.setPrice();
			}
		})
		.catch(function(err) {
			if(err){
				console.log("IPFS uploadFile Error => " + err.message);
			}
		});
	});

	// function buyClicked(elem) {
	// 	var photoID = elem.id;
	//  	var hashVal;
	//  	console.log(photoID);
	// 	if (EmbarkJS.isNewWeb3()) {
	// 		StockBlock.methods.getHash(photoID).call(function(err, hash) {
	// 			hashVal = hash;
	// 			console.log(hashVal);
	// 		});
	// 		StockBlock.methods.increasePrice(photoID).send({from:web3.eth.defaultAccount, gas:500000});
	// 		// StockBlock.methods.buy("0x16d1f1AD7b3306Ce8FA8", photoID).send({from:web3.eth.defaultAccount, gas:500000});
	// 		// // Or pass a callback to start watching immediately
	// 		// var event = StockBlock.methods.Transfer(function(err, result) {
	// 		//     if (!err)
	// 		//         console.log(result);
	// 		// });
	// 	} else {
	// 		StockBlock.getHash(photoID).then(function(hash) {
	// 			hashVal = hash;
	// 		});
	// 		StockBlock.increasePrice(photoID);
	// 		// StockBlock.buy("0x16d1f1AD7b3306Ce8FA8", photoID).send({from:web3.eth.defaultAccount, gas:500000});
	// 		// // Or pass a callback to start watching immediately
	// 		// var event = StockBlock.Transfer(function(err, result) {
	// 		//     if (!err)
	// 		//         console.log(result);
	// 		// });
	// 	}

	// 	// var hash = $("#storage input.fileIpfsHash").val();
	// 	// var url = EmbarkJS.Storage.getUrl(hash);
	// 	var webUrl = "https://ipfs.io/ipfs/" + hashVal;
	// 	var downUrl = hashVal;
	// 	var webLink = '<a href="' + webUrl + '" target="_blank">' + webUrl + '</a>';
	// 	var downLink = '<a href="' + downUrl + '" download="_blank">' + downUrl + '</a>';
	// 	// $("span.ipfsWebUrl").html(webLink);
	// 	// $("span.ipfsDownUrl").html(downLink);
	// 	// $("img.ipfsImage").attr('src', webUrl);
	// }

});