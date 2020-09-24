"use strict";

function Homepage() {
  return (
    <div>
      Hi! Welcome User!.
    
    <a href="/cards"> click here to view our trading cards  </a>
    <img src='/static/img/balloonicorn.jpg' />
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
