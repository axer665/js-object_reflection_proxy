import orderByProps from "../app";

const swordman = {
    name: "Swordsman",
    health: 10,
    level: 2,
    atack: 80,
    defence: 40
};

const expected = [
    {key: "name", value: "Swordsman"},
    {key: "level", value: 2},
    {key: "atack", value: 80},
    {key: "defence", value: 40},
    {key: "health", value: 10}
];

test("Sorted test", () => {
    expect(orderByProps(swordman, ["name", "level"])).toEqual(expected);
});