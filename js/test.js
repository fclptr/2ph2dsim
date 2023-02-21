  onmessage = function(event) {        
    let sim=run_simualtion(event.data);
    postMessage({messageType: "Result", sim: sim});
  };

  function run_simualtion(sim) {
      
    for (let i=1; i<7; i++) {
      sim.steps+=1;
      postMessage({messageType: "Step", steps: i});
    }

    return sim  
  }
