// const Header = (title, date, temp) => {
//   // TASK 1
//   // ---------------------
//   // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
//   // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
//   // The text inside elements will be set using their `textContent` property (NOT `innerText`).
//   //
//   //  <div class="header">//DIV
//   //    <span class="date">{ date }</span>//SPAN
//    <h1>{ title }</h1>//H1
//   //    <span class="temp">{ temp }</span>//SPAN
//   //  </div>
//   //
// }
// 
// const headerAppender = (selector) => {
//   // TASK 2
//   // ---------------------
//   // Implement this function taking a css selector as its only argument.
//   // It should create a header using the Header component above, passing arguments of your choosing.
//   // It should append the header to the element in the DOM that matches the given selector.
//   //
// }
// 
// export { Header, headerAppender }

//----------------------------------------------------------------------------------
//Global vars:

let today = new Date();
let dd = String( today.getDate() ).padStart( 2, '0' );
let mm = String( today.getMonth() + 1 ).padStart( 2, '0' );
let yyyy = today.getFullYear();

console.log( today )
//----------------------------------------------------------------------------------
today = mm + '/' + dd + '/' + yyyy;


const fs = require( 'fs' );
let files = fs.readdirSync( './../../' );
console.log(files)




//----------------------------------------------------Actual Implementation---------------------------------------------
  // headerEle.appendChild( date );
  // headerEle.appendChild( title );
  // headerEle.appendChild( span );
const Header = ( title, date, temp ) => {
  let headerEle = document.createElement( "div" );
  let span = document.createElement( "span" );
  let date = document.createElement( "span" );
  let title = document.createElement( "h1" );

  headerEle.classList.add( "header" );
  date.classList.add( "date" );
  title.classList.add( "title" );
  temp.classList.add( "temp" );

  date.textContent = date;
  title.textContent = title;
  temp.textContent = temp;


  listElement.append( date, title, temp );
  return headerEle;
}

const headerAppender = ( selector ) => {


  let targetEle = document.querySelector( selector );
  let header = Header( "Sample Title", "2/12/2021", "I am temporarily a temp" );
  let header = Header( `Just try not to read this`, `${today}`, `` );

  targetEle.appendChild( header );

}

export {
  Header,
  headerAppender
}
