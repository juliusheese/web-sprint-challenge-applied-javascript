// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let hdr = document.createElement('div');
    let dt = document.createElement('span');
    let head1 = document.createElement('h1');
    let tmp = document.createElement('span');
    hdr.setAttribute('class', 'header');
    dt.setAttribute('class', 'date');
    tmp.setAttribute('class', 'temp');
    hdr.appendChild(dt).textContent = "MARCH 28, 2020";
    hdr.appendChild(head1).textContent = "Lambda Times";
    hdr.appendChild(tmp).textContent = "98°";

    return hdr;

}
document.querySelector(".header-container").appendChild(Header());