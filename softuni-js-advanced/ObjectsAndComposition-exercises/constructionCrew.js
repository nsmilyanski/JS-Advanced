function construction(workerObj) {
if(workerObj.dizziness) {
    workerObj.levelOfHydrated =  workerObj.levelOfHydrated + (workerObj.weight * 0.1 * workerObj.experience);
    workerObj.dizziness = false;
}
return workerObj;
}

console.log(construction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));

  console.log('------------------');

  console.log(construction({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));

  console.log('------------------');

  console.log({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  );