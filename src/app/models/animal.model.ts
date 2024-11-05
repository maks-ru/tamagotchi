// src/app/models/animal.model.ts
export interface Animal {
  id: number;
  name: string;
  species: string;
  imgUrl: string;
  needs: {
    food: number;
    fun: number;
    sleep: number;
  };
  isAlive: boolean;
}
