import { mkdirSync, writeFileSync } from "fs";

// The joke: "should" is the word that turns every want into a guilt trip.
// Erase it and nobody can ever be told what they ought to do again —
// no more shoulds, no more ought-tos, just people doing what they like.
// The whole language gets lighter overnight: every lecture, every chore
// list, every "you should really..." simply runs out of words to say it with.
const entry = "should";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
