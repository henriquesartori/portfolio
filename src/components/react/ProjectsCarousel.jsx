import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import { Autoplay, Navigation } from "swiper/modules";

export default function ProjectsCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }}
            loop
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            loopAddBlankSlides
            autoplay={{
                delay: 10000,
            }}
            className="rounded-lg"
        >
            <SwiperSlide>
                <img src='/projects/business.png' />
                <div className="text-center bg-base-100 p-5">
                    <h3 className="text-xl">Client Management System</h3>
                    <p className="opacity-70 mt-3 text-sm">
                        A business web application designed for tracking client form analyses and managing their ongoing statuses, utilizing various AWS and Firebase services, deployed and running on a debian-based VPS.
                    </p>
                    <div className="mt-6 flex gap-3 justify-center items-center">
                        {
                            ['nextjs', 'adonis', 'aws', 'firebase', 'mysql', 'docker', 'debian', 'nginx'].map(t =>
                                <img className="w-8" key={t} src={`https://skillicons.dev/icons?i=${t}`} />
                            )
                        }
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src='/projects/website.png' />
                <div className="text-center bg-base-100 p-5">
                    <h3 className="text-xl">Website / Landing Page</h3>
                    <p className="opacity-70 mt-3 text-sm">
                        The above is one of many landing pages I have developed throughout my career, often including blogs, deployed on web hosting services.
                    </p>
                    <div className="mt-6 flex gap-3 justify-center items-center">
                        {
                            ['html', 'css', 'javascript', 'tailwind', 'astro', 'react', 'php', 'mysql'].map(t =>
                                <img className="w-8" key={t} src={`https://skillicons.dev/icons?i=${t}`} />
                            )
                        }
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img src='/projects/immersive.png' />
                <div className="text-center bg-base-100 p-5">
                    <h3 className="text-xl">Immersive Fashion Brand Website</h3>
                    <p className="opacity-70 mt-3 text-sm">
                        A very fun project I developed to a fashion brand, utilyzing a bunch of 3D elements to immerse the viewer on the brand 'virus' aesthetic.
                    </p>
                    <div className="mt-6 flex gap-3 justify-center items-center">
                        {
                            ['vite', 'react'].map(t =>
                                <img className="w-8" key={t} src={`https://skillicons.dev/icons?i=${t}`} />
                            )
                        }
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >
    )
}
