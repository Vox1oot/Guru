export interface IFooter {
    id: string,
    oldPrice: string,
    price: string,
    title: string,
    locality: string,
    date: number,
}

export interface ICard extends IFooter {
    seen: boolean,
    onSetDownloaded: () => void,
}
