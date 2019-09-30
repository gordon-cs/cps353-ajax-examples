async function xmlHttpRequestDemo() {
  let httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = (() => {
    /* This will be called when response comes back. */
    /* TODO: oddly, it gets called multiple times.  Why?  */
    console.log("Got a response");
  });

  httpRequest.open("GET", "https://360api.gordon.edu/api/events/25Live/Public");
  httpRequest.send();

}

xmlHttpRequestDemo();
