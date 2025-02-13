class ProjectSearch {
    constructor() {
        this.fuse = new Fuse([], {
            keys: ['name', 'author', 'tags'],
            threshold: 0.3
        });
    }

    async init() {
        const projects = await fetch('/.netlify/functions/directory');
        this.fuse.setCollection(projects);
    }

    search(query) {
        return this.fuse.search(query).map(r => r.item);
    }
}