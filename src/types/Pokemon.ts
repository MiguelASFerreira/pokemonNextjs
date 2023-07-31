import { Sprites } from "./Sprites";
import { Status } from "./Status";
import { Types } from "./Types";

export interface Pokemon {
    id: number
    name: string;
    sprites: Sprites;
    types: Types;
    stats: Status;
  }
  