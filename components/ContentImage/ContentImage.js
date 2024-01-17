import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Our Mission",
        content:"Our mission at Medico Magic is to empower healthcare providers with the latest cutting-edge medical equipment, enabling them to deliver exceptional care and improve patient outcomes. We aim to contribute significantly to the advancement of the healthcare sector by providing innovative, reliable, and cost-effective solutions",
        align: "left",
        image: "/hero_image1.webp"
    },
    {
        id: uuid(),
        title: "Our Team",
        content:"Meet the dedicated professionals behind Medico Magic. Our team comprises experts in the medical equipment field, including skilled technicians, knowledgeable sales representatives, and customer service specialists. Together, we work tirelessly to ensure that our clients receive top-quality products and exceptional service.",
        align: "left",
        image: "/doctor-nurses.webp"
    },
    {
        id: uuid(),
        title: "Partnerships",
        content:"Medico Magic collaborates with leading global manufacturers and suppliers to bring you a diverse range of high-quality medical equipment. Our partnerships enable us to offer cutting-edge solutions that meet the evolving needs of the healthcare industry.",
        align: "left",
        image: "/service-slide-2.webp"
    },
     {
        id: uuid(),
        title: "Community Involvement",
        content:"We believe in giving back to the community. Medico Magic actively participates in initiatives that support healthcare awareness, education, and charitable endeavors, contributing to the well-being of society. ",
        align: "left",
        image: "/comm3.webp"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16 bo">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
