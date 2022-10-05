interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// solution 1
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => { // wrap in Promise on async function
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

//Solution 2 - a cast is a way to tell typescript that you know better than it does
export const fetchLukeSkywalker2 = async () => {
    const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
      return res.json();
    });

    return data as LukeSkywalker;
  };


// Solution 3
export const fetchLukeSkywalker3 = async () => {
    const data: LukeSkywalker = await fetch(
      "https://swapi.dev/api/people/1"
    ).then((res) => {
      return res.json();
    })
};
