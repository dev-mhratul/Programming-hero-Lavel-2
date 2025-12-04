// Constraint

type student= {
    name: string,
    id: number
}

const createfuncWithGen = <T extends student>(value: T) => {
  return {
    course: "programming hero",
    ...value
  };
};

const data1 = {
    name : "MH Ratul",
    id: 4343,
    roll: 923092,
    isMarrid: false
}

const exm3 = createfuncWithGen(data1)
console.log(exm3)