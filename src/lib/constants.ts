import { Howl, Howler } from "howler";

export const keymap = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

let sound1 = new Howl({
  src: ["sfx/keypress_01.mp3"],
});

let sound2 = new Howl({
  src: ["sfx/keypress_02.mp3"],
});

let sound3 = new Howl({
  src: ["sfx/keypress_03.mp3"],
});

let sound4 = new Howl({
  src: ["sfx/keypress_04.mp3"],
});

export const soundMap = [sound1, sound2, sound3, sound4];
