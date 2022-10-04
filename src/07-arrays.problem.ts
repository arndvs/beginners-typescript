interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[]; // simple solution
  pickles: Array<Pickle>; // another solution useful for generics, promises, maps
}

interface Post {
  id: number;
  title: string;
}

interface Pickle {
    id: number;
    title: string;
  }


export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
    pickles: [
    {
        id: 1,
        title: "How I eat so many pickles",
    },
    {
        id: 2,
        title: "Why I don't eat more bananas",

}
    ]
};
