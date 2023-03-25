onmessage = async (e) => {
    console.log("Message received from main script");
    const workerResult = `Result: ${e.data}`;
    console.log("Posting message back to main script");
    let data = JSON.stringify({"pixels":e.data.pixels});
    console.log("Proccesed json")

    await fetch("/predict", {
      method:'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: data,

    }
    ).then((response) => {console.log("COMPLETED REQUEST"); return response.json()})
    .then((data) => postMessage(data));

    
  };
  