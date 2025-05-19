const services = [
    { id:'01', title:'Web Design', description: 'Crafting visually stunning and user-friendly websites tailored to your brands identity and goals.'},
    { id:'02', title:'Data Analytics', description: 'Unleashing the power of Tableau to give you a stunning yet understandable dashboard'},
    { id: '03', title: 'Under Construction', description: 'Exciting new skills and services are on the way — stay tuned for updates as I continue to grow and expand my expertise.' }

]

export const Services = () => {

    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-[1/4] pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                </div>
                <div className="md:w-[3/4]">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>

                            <div>
                                <h3  className="text-2xl text-purple-300 font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}