/****************************************************************************************************************** */

//I understand that this is the leadup to react and that's why Header is capitalized but in general this will probably sow confusion given that anyone
//not familliar with react only knows to capitalize classes.........!!!!!


/****************************************************************************************************************** */




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
/****************************************************************************************************************** */

//----------------------------------------------------------------------------------
//Global vars:

let today = new Date();
let dd = String( today.getDate() ).padStart( 2, '0' );
let mm = String( today.getMonth() + 1 ).padStart( 2, '0' );
let yyyy = today.getFullYear();

console.log( today )
//----------------------------------------------------------------------------------
today = mm + '/' + dd + '/' + yyyy;

// 
// const fs = require( 'fs' );
// let files = fs.readdirSync( './../' );
// console.log( files )




//----------------------------------------------------Actual Implementation---------------------------------------------

const Header = ( title, date, temp ) => {
  const header = document.createElement( 'div' );
  const dateEle = document.createElement( 'span' );
  const titleEle = document.createElement( 'h1' );
  const tempEle = document.createElement( 'span' );

  dateEle.classList.add( 'date' );
  titleEle.classList.add( 'temp' );
  tempEle.classList.add( 'title' );




  titleEle.textContent = title;
  dateEle.textContent = date;
  titleEle.textContent = temp;


  header.appendChild( dateEle );
  header.appendChild( titleEle );
  header.appendChild( tempEle );

  return header;
}

const headerAppender = ( selector ) => {
  const targetEle = document.querySelector( selector );
  let header = Header( `Just try not to read this`, `${ today }`, `something weird happened when I tried to use fs.readfile` );

  targetEle.appendChild( header );





}

export {
  Header,
  headerAppender
}
