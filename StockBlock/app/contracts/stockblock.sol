pragma solidity ^0.4.7;

/**
 * The StockBlock contract
 */
contract StockBlock {
	uint constant increaseFactor = 1;
	uint constant decreaseFactor = 1;
	uint public absoluteInitial;
	//uint public price;

	uint[] public prices;
	string[] public hashes;

	// Constrcutor
	function StockBlock(uint initialPrice) public {
		absoluteInitial = initialPrice;
	}	

	// Increase the price of a photo for every download
	function increasePrice(uint photoID) public {
		uint currentPrice = prices[photoID];
		uint factor1 = uint(3)/uint(2);
		uint factor2 = uint(17)/uint(10);
		uint factor3 = 3;
		// 1.5*1.7*3
		require(currentPrice <= (factor1*factor2*factor3)*absoluteInitial && currentPrice > 0);

		if ((currentPrice == absoluteInitial*factor1) 
			|| (currentPrice == absoluteInitial*factor1*factor2)
			|| (currentPrice == (absoluteInitial*factor1*factor2*factor3)-increaseFactor)) {
			currentPrice += increaseFactor; 
		}

		prices[photoID] = currentPrice;
	}

	// Decrease the price of a photo at any time
	function decreasePrice(uint photoID) public {
		require(prices[photoID] > (decreaseFactor*2));

		uint decrease = prices[photoID] - decreaseFactor;

		prices[photoID] = decrease;
	}

	// Add a new photo to the list with initial price
	function setPrice() public {
		append_num(prices, absoluteInitial);	
	}

	// Return the price of the photo
	function getPrice(uint photoID) external view returns (uint) {
		return prices[photoID];
	}

	function setHash(string hash) public {
		append_str(hashes, hash);
	}

	function getHash(uint photoID) external view returns(string hash) {
		return hashes[photoID];
	}

	// Append uint to a list with data
	function append_num(uint[] storage arr, uint data) internal {
		arr.push(data);
	}

	// Append string to a list with data
	function append_str(string[] storage arr, string data) internal {
		arr.push(data);
	}

	event Transfer(address buyer, address owner, uint amount);

    function buy(address receiver, uint photoID) public {
        Transfer(msg.sender, receiver, prices[photoID]);
    }
	


}