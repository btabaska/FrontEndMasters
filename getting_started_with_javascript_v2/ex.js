class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(String(bookName));
		}
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
}


function loadBooks( Bookshelf ) {
	var func = function(cb) {
		cb.forEach(element => {
			Bookshelf.addFavoriteBook(element)
		});
		Bookshelf.printFavoriteBooks()
	}
	fakeAjax(BOOK_API,func)
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

test = new Bookshelf()

loadBooks(test)
