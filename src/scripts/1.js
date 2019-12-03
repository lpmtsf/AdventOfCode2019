import modules from "./1input.js";

function calculateFuelRequirement(modules) {
  for (let i = 0; i < modules.length; i++) {
    sum += Math.floor(modules[i] / 3) - 2;
  }
  return;
}

calculateFuelRequirement(modules);
