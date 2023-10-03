export interface iPost {
    header?: Header;
    body?: Body[];
    footer?: Footer;
    theme: string;
    dir?: string;
    width?: string;
    dev?: boolean;
    devTools?: boolean;
}
interface Footer {
    buttons: Button[];
    style: string;
}
interface Header {
    title: string;
    buttons: Button[];
    style: string;
}
interface Button {
    icon: string;
    url: string;
    openIn: string;
}
export interface Body {
    type: string;
    value?: list | message | posts | fieldset | img | card | string;
    children?: Body[];
    font?: string;
}
interface list {
    items: number[];
    style: string;
}
interface message {
    severity: string;
    content: string;
}
interface card {
    header: string;
    content: string;
    src: string;
    subheader: string;
}
interface img {
    src: string;
    header: string;
}
interface fieldset {
    header: string;
    content: string;
}
interface posts {
    items: Item[];
    openIn: string;
}
export interface Item {
    img: string;
    name: string;
    category: string;
    description: string;
    url: string;
}
