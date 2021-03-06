import sharp, { Color } from 'sharp';
import { StickerTypes } from './internal/Metadata/StickerTypes';
/** Sticker metadata config */
export interface IStickerConfig {
    /** Sticker Pack title*/
    pack?: string;
    /** Sticker Pack Author*/
    author?: string;
    /** Sticker Pack ID*/
    id?: string;
    /** Sticker Category*/
    categories?: Categories[];
}
export interface IStickerOptions extends IStickerConfig {
    /** How you want your sticker to look like
     * Can be crop or full. Defaults to 'default' (no changes)
     */
    type?: StickerTypes | string;
    /**
     * Quality of the output webp image. Must be an integer from 0 to 100 (defaults to 100
     */
    quality?: sharp.WebpOptions['quality'];
    /**
     * Background Color of the sticker (only for type full)
     */
    background?: Color;
}
export interface IRawMetadata {
    emojis: string[];
    'sticker-pack-id': string;
    'sticker-pack-name': string;
    'sticker-pack-publisher': string;
}
export declare type Metadata = IStickerConfig | IStickerOptions;
declare type Love = 'โค' | '๐' | '๐' | '๐' | '๐ป' | '๐' | '๐ฉโโคโ๐ฉ' | '๐จโโคโ๐จ' | '๐' | '๐ฉโโคโ๐โ๐ฉ' | '๐จโโคโ๐โ๐จ' | '๐งก' | '๐' | '๐' | '๐' | '๐' | '๐ค' | '๐' | 'โฃ' | '๐' | '๐' | '๐' | '๐' | '๐' | '๐' | '๐' | 'โฅ' | '๐' | '๐' | '๐ฉโโค๏ธโ๐โ๐ฉ' | '๐จโโค๏ธโ๐โ๐จ' | '๐ฉโโค๏ธโ๐จ' | '๐ฉโโค๏ธโ๐ฉ' | '๐จโโค๏ธโ๐จ' | '๐ฉโโค๏ธโ๐โ๐จ' | '๐ฌ' | '๐ญ' | '๐ซ' | '๐ฅฐ' | '๐' | '๐' | '๐' | '๐น' | '๐ฝ' | 'โฃ๏ธ' | 'โค๏ธ';
declare type Happy = '๐' | '๐' | '๐' | '๐' | '๐' | '๐' | '๐' | '๐คฃ' | '๐' | '๐' | '๐' | '๐' | '๐คช' | '๐ค' | '๐บ' | '๐ธ' | '๐น' | 'โบ' | '๐' | '๐' | '๐ค' | '๐';
declare type Sad = 'โน' | '๐ฃ' | '๐' | '๐ซ' | '๐ฉ' | '๐ข' | '๐ญ' | '๐' | '๐' | '๐' | '๐' | '๐ค' | '๐ ' | '๐ฅ' | '๐ฐ' | '๐จ' | '๐ฟ' | '๐พ' | '๐' | '๐โโ' | '๐โโ' | '๐' | '๐' | '๐ฅบ' | '๐ค' | 'โ๏ธ' | 'โ' | '๐ฉ' | '๐ง';
declare type Angry = '๐ฏ' | '๐ฆ' | '๐ง' | '๐ฎ' | '๐ฒ' | '๐' | '๐ฑ' | '๐คฏ' | '๐ณ' | 'โ' | 'โ' | '๐คฌ' | '๐ก' | '๐ ' | '๐' | '๐ฟ' | '๐พ' | '๐ค' | '๐ข' | '๐บ' | '๐ฏ๏ธ' | '๐' | '๐ฅต';
declare type Greet = '๐';
declare type Celebrate = '๐' | '๐' | '๐' | '๐' | '๐ฏโโ๏ธ' | '๐ฏ' | '๐ฏโโ๏ธ' | '๐' | '๐บ' | '๐ฅ' | 'โญ๏ธ' | 'โจ' | '๐ซ' | '๐' | '๐' | '๐ป' | '๐ฅ' | '๐พ' | '๐' | '๐ฐ';
/** Sticker Category. Learn More: https://github.com/WhatsApp/stickers/wiki/Tag-your-stickers-with-Emojis*/
export declare type Categories = Love | Happy | Sad | Angry | Greet | Celebrate;
export {};
