import { isImageFile } from '../utils';
import '@testing-library/jest-dom/extend-expect';

test('isImageFile', () => {
    expect(isImageFile({ url: 'https://a.jpg' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.jpeg' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.png' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.svg' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.gif' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.webp' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.jfif' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.bmp' })).toBeTruthy();
    expect(isImageFile({ url: 'https://a.dpg' })).toBeTruthy();
    expect(isImageFile({ content: 'data:image/xxx' })).toBeTruthy();
    expect(isImageFile({ content: 'data:application/xxx' })).toBeFalsy();
    expect(isImageFile({ isImage: true })).toBeTruthy();
    expect(isImageFile({})).toBeFalsy();
});
