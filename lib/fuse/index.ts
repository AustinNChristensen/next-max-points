import Fuse from 'fuse.js';

export const fuzzySearch = (values: any[], searchValue: string, searchOptions: any) => {
    const fuzzySearch = new Fuse(values || [], searchOptions);
    return searchValue !== '' ? fuzzySearch.search(searchValue.replace(/ /g, '')).map((fsItem) => fsItem.item) : values || [];
};