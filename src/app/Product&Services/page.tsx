import React from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from "next/link";
import Image from "next/image";

function Productpage() {
  return (
    <div className=" bg-black text-grey-500  mt-20">
      <div className=' max-w-full mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2 pd-4 sm:pd-6 lg:pd-6 text-center'>
        <div>
          <div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  BMW 5 Series
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  This iconic luxury sedan is expected to receive a design refresh, featuring an updated front grille, new headlights, and potentially a revised rear end. Inside
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://unsplash.com/photos/black-bmw-m-3-coupe-parked-on-forest-during-daytime-94lAQc7ipNg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20 text-center">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className=" py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Book now →
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>

          </div>
        </div>
        <div>
          <div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  BMW 5 Series
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  This iconic luxury sedan is expected to receive a design refresh, featuring an updated front grille, new headlights, and potentially a revised rear end. Inside
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://unsplash.com/photos/black-bmw-m-3-coupe-parked-on-forest-during-daytime-94lAQc7ipNg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20 text-center">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className=" py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Book now →
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>

          </div>
        </div>
        <div>
          <div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  BMW 5 Series
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  This iconic luxury sedan is expected to receive a design refresh, featuring an updated front grille, new headlights, and potentially a revised rear end. Inside
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://unsplash.com/photos/black-bmw-m-3-coupe-parked-on-forest-during-daytime-94lAQc7ipNg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20 text-center">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className=" py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Book now →
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>

          </div>
        </div>
        <div>
          <div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  BMW 5 Series
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  This iconic luxury sedan is expected to receive a design refresh, featuring an updated front grille, new headlights, and potentially a revised rear end. Inside
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="https://unsplash.com/photos/black-bmw-m-3-coupe-parked-on-forest-during-daytime-94lAQc7ipNg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20 text-center">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className=" py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Book now →
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>

          </div>
        </div>
        
      </div>
    </div>

  )
}

export default Productpage



