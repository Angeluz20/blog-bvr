import TitlePage from "@/components/titlePage/page";

export default function Tourism() {

    return (
        <div className="flex flex-col min-h-screen mb-4">
            <div className="flex flex-col flex-grow w-full items-center">
                <header className="mb-4 flex flex-col w-full bg-[#e8ecec] items-center">
                    <TitlePage title="Turismo" subtitle="Explore as notícias da cidade" />
                </header>

                <main className="flex flex-grow w-full flex-col justify-center items-center">
                    <section className="flex flex-wrap gap-16 justify-center items-center mt-8 w-full max-w-7xl">

                    </section>
                </main>
            </div>
        </div>
    );
}
