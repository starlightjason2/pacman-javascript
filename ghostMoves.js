import { DIRECTIONS, OBJECT_TYPE } from './setup';

// movement function
export function randomMovement(position, direction, objectExist) {
    let dir = direction;
    let nextMovePos = position + dir.movement;

    // create array from directions object keys
    const keys = Object.keys(DIRECTIONS);

    while (
        objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
        objectExist(nextMovePos, OBJECT_TYPE.GHOST)
    ) {
        // get random key from key array
        const key = keys[Math.floor(Math.random() * keys.length)]

        // set next move
        dir = DIRECTIONS[key];
        nextMovePos = position + dir.movement;
    }

    return { nextMovePos, direction: dir };
}