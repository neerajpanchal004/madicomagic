import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { Button } from "@components/Button";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="NutriTrack - A landing page template 🚀"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup> */}
                            {/* <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Simplify Your Nutrition Journey with NutriTrack
                            </PageTitle> */}
                            {/* <Content className="text-center" alignment="center">
                                <p>
                                    Hey there! Welcome to NutriTrack, the
                                    ultimate nutrition meal planner powered by
                                    Notion. We&apos;ve got some awesome features
                                    lined up to make your nutrition journey a
                                    piece of cake (pun intended). Check them
                                    out:
                                </p>
                            </Content> */}
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Master Your Meal Planning and Nutrition Journey
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Our comprehensive Notion template designed
                                    to empower you on your meal planning and
                                    nutrition journey. With our user-friendly
                                    features, customizable layouts, and seamless
                                    recipe integration, taking control of your
                                    meals has never been easier.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/city-hospital-building.webp"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Customer Support
                                        </CardHeader>
                                        <p>
                                            At Medico Magic, exceptional customer service is our priority. Our dedicated support team is available to assist you with any inquiries, technical support, or guidance you may require. We strive to ensure a smooth and satisfactory experience throughout your journey with us.


                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/doctor-consultation.webp"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
Ready to get started?
                                        </CardHeader>
                                        <p>
                                            Have a query or need assistance? Click on the button below and Fill out the form below, and our team will promptly get back to you..

                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    < Button className="w-40 text-2xl mx-auto p-4">Contact</Button>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            {/* <BadgeGroup alignment="left"> */}
                                {/* <BadgeMessage>Testimonials</BadgeMessage> */}
                                {/* <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup> */}
                            <PageTitle className="" type="default">
                               Why Choose <span className="text-red-600">Medico Magic?</span> 

                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                {/* Got some burning questions about NutriTrack?{" "}
                                <br></br> */}
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
