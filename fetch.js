
async function fetchDemo() {
  const response =
        await fetch("https://360api.gordon.edu/api/events/public",
		    { mode: 'no-cors'})
                .then(response => console.log(response))
                .catch(error => console.error(error));
  return;
  const myJson = await response.json();

  /*
  console.log(JSON.stringify(myJson[0]));
  console.log(myJson[0].Event_Name, "starting at",
              myJson[0].Occurrences[0]["StartDate"]);
  */
}

fetchDemo();
