import { Game } from "src/routes/sverdle/game";
import { describe, it, expect } from "vitest";

describe("game test", () => {
  it("returns true when a valid word is entered", () => {
    const game = new Game();
    expect(game.enter("zorro".split(""))).toBe(true);
  });
});
