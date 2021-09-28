
async function fetchDemo() {
  const response =
        await fetch("https://360api.gordon.edu/api/events/25Live/Public");

  const myJson = await response.json();

  console.log(JSON.stringify(myJson[0]));
  console.log(myJson[0].Event_Name, "starting at",
              myJson[0].Occurrences[0]["StartDate"]);
}

fetchDemo();
