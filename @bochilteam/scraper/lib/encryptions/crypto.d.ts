/// <reference types="node" />
import crypto from 'crypto';
export declare function randomUUID(opts: {
    disableEntropyCache: boolean;
}): Promise<string> | string;
export declare function randomBytes(size: number): string;
export declare function createHash(algorithm: string, data: crypto.BinaryLike): string;
