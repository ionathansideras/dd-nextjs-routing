// when we have paralel pages, we can use a layout to share the same structure but we dont call the the childrn prop but the names of the routes
export default function ArchiveLayout({ archive, latest }) {
    return (
        <div>
            <h1>Archive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    );
}
