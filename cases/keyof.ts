/**
 * P === 'x' | 'y'
 */
type Point = { x: number; y: number };
type P = keyof Point;

const temp: P = 'x';
