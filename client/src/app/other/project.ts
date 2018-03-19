export class Project {
    title: string;
    content: string;
    links: {
        link: string;
        name: string;
    }[];
    constructor(
        title: string,
        content: string,
        links: {
            link: string;
            name: string;
        }[]) {
            this.title = title;
            this.content = content;
            this.links = links;
        }
}
