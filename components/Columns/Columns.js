import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
// import Image from "next/image";

const ColumnData = [
    {
        id: uuid(),
        title: "Quality Assurance",
        content:"We uphold the highest standards of quality in all our products, ensuring their efficacy and reliability."
    },
    {
        id: uuid(),
        title: "Customer-Centric Approach",
        // icon: "carbon:user-avatar-filled-alt",
        content:"Your satisfaction is our priority, and we strive to exceed your expectations by delivering exceptional service."
    },
    {
        id: uuid(),
        title: "Reliability and Trust",
        // icon: "carbon:user-avatar-filled-alt",
        content:"With a reputation built on trust and reliability, we are your dependable partner in healthcare equipment"
    },
    {
        id: uuid(),
        title: "Innovation and Technology",
        // icon: "carbon:user-avatar-filled-alt",
        content:"We stay abreast of the latest advancements in medical technology to offer you the most innovative solutions."
    },
     {
        id: uuid(),
        title: "Comprehensive Support",
        // icon: "carbon:user-avatar-filled-alt",
        content:"Our commitment extends beyond product delivery. We provide comprehensive support services, including installation, training, maintenance, and after-sales assistance, ensuring a seamless experience."
    },
     {
        id: uuid(),
        title: "Customized Solutions",
        // icon: <Image src="/Code.svg" width="10" height="10" />,
        content:"Understanding that every healthcare facility is unique, we tailor our solutions to meet your specific requirements, offering personalized and adaptable options for your needs. "
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
