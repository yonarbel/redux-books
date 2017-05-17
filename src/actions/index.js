export function selectBook(book){
//selectBook is an action creator it needds ato return an action
return {
	type : 'BOOK_SELECTED',
	payload: book

};
}