// app/blog/10-places-to-visit-in-san-antonio/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

// Cloudinary loader (just returns the URL you pass in)
const cloudinaryLoader = ({ src }: { src: string }) => src

// Cloudinary assets (swap version IDs once uploaded)
// Tip: keep these as stable IDs and only replace the Cloudinary public IDs when you upload the real images
const CLOUDINARY_HERO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055734/River_Walk_Museum_Reach_Pearl_2023_c8c1709b-563c-45c2-9554-eff64c5314ec_rgocdt.jpg'

const CLOUDINARY_ALAMO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770054988/csm_favorite_alamo_29649f9bee_t6c95f.jpg'

const CLOUDINARY_RIVERWALK =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055544/Go_Rio_Cruises_8fdef33b-7f30-46a9-add7-eeca246f17c0_dc0zvn.jpg'

const CLOUDINARY_MISSIONS =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055475/Mission_Concepcion_San_Antonio_eknnnt.jpg'

const CLOUDINARY_ZOO =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055070/zoo_pkmbkh.jpg'

const CLOUDINARY_PEARL =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055119/Pearl-Farmers-Market-Lawn_e8vep8.jpg'

const CLOUDINARY_BRACKENRIDGE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055149/brackenridgepark_xtuawr.jpg'

const CLOUDINARY_JAPANESE_TEA_GARDEN =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055449/0Ep5C86ZkDUFT159Qt_NQviKXGQrvmfQmemUfPohYpHalV6E0_-euY0Y8w3fHryTYGfaBiF396VWYqs67X6uUEAlrbXI6IJwl9BJPMyXbp4_if07gr.jpg'

const CLOUDINARY_FIESTA_TEXAS =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055387/Six-Flags-Fiesta-Texas-Banner_CCB99C8A-5056-BFCE-A81EF5BBB0A6AB83-ccb99a785056bfc_ccb99f7e-5056-bfce-a859b44366f09900_qpgkmb.jpg'

const CLOUDINARY_NATURAL_BRIDGE_CAVERNS =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055457/lTPk_EaSd7fBbb6nNElnEm_aTZ0jiTQ72Hv38oilLBXBDe7SGVrj7B5w5Si91P_m1QzPNXe7s0znM1NPrdw2aDZPjphKNTi0BtYxtuajwmU_qwtn4t.jpg'

const CLOUDINARY_MARKET_SQUARE =
  'https://res.cloudinary.com/dzlmoyomq/image/upload/v1770055203/market-square-3_pcqmmt.jpg'

export default function TenPlacesSanAntonioBlogPage() {
  return (
    <div className="bg-white py-30">
      <article className="mx-auto prose prose-blue max-w-3xl prose-xl">
        {/* Header */}
        <header className="space-y-6">
          <Image
            loader={cloudinaryLoader}
            src={CLOUDINARY_HERO}
            alt="San Antonio skyline and downtown attractions"
            width={1200}
            height={800}
            className="rounded-lg shadow-md mx-auto my-12"
            priority
          />

          <h1 className="text-4xl font-bold leading-tight">10 Places to Visit in San Antonio</h1>

          <p className="text-gray-600 text-xl italic mt-2">
            A local guide to history, culture, food, and outdoor favorites
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm">
            <p>By Jerome Sterling</p>
            <time dateTime="2026-02-02">February 2, 2026</time>
          </div>
        </header>

        {/* Intro */}
        <section className="mt-8 mb-12">
          <p>
            San Antonio is one of Texas’s most culturally rich cities, blending centuries of
            history with modern attractions, diverse neighborhoods, and a strong sense of local
            identity. Whether you’re visiting for a weekend or rediscovering the city you live in,
            there’s always something worth exploring.
          </p>

          <p>
            From historic landmarks and riverfront walks to lively districts and scenic outdoor
            escapes, the city offers a mix of experiences that appeal to just about everyone. Below
            are ten destinations that represent some of the most notable and worthwhile places to
            visit in and around San Antonio.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 1 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">1. The Alamo</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_ALAMO}
              alt="The Alamo in downtown San Antonio"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A historic mission and one of the most recognized landmarks in Texas
            </figcaption>
          </figure>

          <p>
            The Alamo is one of the most historically significant landmarks in the United States
            and a defining symbol of San Antonio. Originally established in the early 1700s as a
            Spanish mission, it later became the site of the Battle of the Alamo during the Texas
            Revolution. That blend of mission history and Texas identity makes it an essential stop
            for first time visitors.
          </p>

          <p>
            Today, you can explore the mission grounds, view exhibits and artifacts, and get a
            clearer sense of how the area developed over time. Because it is located downtown, it
            is easy to pair a visit with nearby attractions like the River Walk, museums, and local
            dining.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 2 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">2. The San Antonio River Walk</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_RIVERWALK}
              alt="San Antonio River Walk with restaurants and river boats"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A walkable river corridor lined with dining, shops, and shaded paths
            </figcaption>
          </figure>

          <p>
            The River Walk is one of San Antonio’s most iconic attractions and a central gathering
            place for locals and tourists alike. Winding through downtown, it features pedestrian
            pathways lined with restaurants, cafes, hotels, and shops. It’s a great place to slow
            down, take in the scenery, and experience the city’s energy from street level.
          </p>

          <p>
            Visitors can enjoy a leisurely stroll, dine alongside the river, or take a guided boat
            tour to learn more about the city’s history. The River Walk also connects to quieter
            sections north and south of downtown, giving you options for both lively and more
            peaceful riverfront walks.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 3 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">3. San Antonio Missions National Historical Park</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_MISSIONS}
              alt="Spanish colonial mission architecture in San Antonio"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              Four historic missions preserved as a UNESCO World Heritage Site
            </figcaption>
          </figure>

          <p>
            This national park preserves four Spanish colonial missions that date back to the 18th
            century and collectively form a UNESCO World Heritage Site. The missions Concepción,
            San José, San Juan, and Espada were established along the river and still reflect the
            architecture and planning of early settlement in South Texas.
          </p>

          <p>
            Visitors can explore restored churches and stone structures while learning about the
            history of the region. The park also includes walking and biking trails, making it a
            great option if you want a mix of history and outdoor time in one visit.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 4 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">4. San Antonio Zoo</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_ZOO}
              alt="Entrance and exhibits at the San Antonio Zoo"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A family friendly attraction with wildlife exhibits and educational programs
            </figcaption>
          </figure>

          <p>
            The San Antonio Zoo is a popular family destination located inside Brackenridge Park.
            It is home to thousands of animals and features exhibits that highlight habitats from
            around the world. The zoo’s focus on conservation and education makes it both
            entertaining and informative.
          </p>

          <p>
            Plan to spend a few hours exploring themed areas, shaded walking paths, and interactive
            exhibits. Its location near other attractions also makes it easy to combine with a park
            visit or a stop at the Japanese Tea Garden.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 5 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">5. The Pearl District</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_PEARL}
              alt="The Pearl District in San Antonio with restaurants and historic buildings"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A modern neighborhood built around the historic Pearl Brewery complex
            </figcaption>
          </figure>

          <p>
            The Pearl District is a vibrant area known for its restaurants, boutique shopping, and
            community events. Built around the former Pearl Brewery complex, it blends historic
            structures with modern development in a way that feels distinctly San Antonio.
          </p>

          <p>
            The Pearl is a favorite spot for weekend farmers markets, patio dining, and riverfront
            walks. It also connects to the River Walk, so it is easy to explore on foot if you want
            a slower, neighborhood style experience outside the busiest downtown areas.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 6 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">6. Brackenridge Park</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_BRACKENRIDGE}
              alt="Trails and green space at Brackenridge Park in San Antonio"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A large central park with trails, picnic areas, and access to nearby attractions
            </figcaption>
          </figure>

          <p>
            Brackenridge Park is one of San Antonio’s most well known public parks and an easy place
            to enjoy outdoor time close to downtown. It includes walking trails, open green space,
            picnic areas, and river access, offering a more relaxed side of the city.
          </p>

          <p>
            Because several attractions sit within or near the park, it works well for visitors who
            want to keep travel time short while seeing multiple places. Many people pair it with
            the zoo or the Japanese Tea Garden for a full day of sightseeing.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 7 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">7. Japanese Tea Garden</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_JAPANESE_TEA_GARDEN}
              alt="Japanese Tea Garden with stone bridges and koi ponds in San Antonio"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A peaceful garden setting with ponds, stone bridges, and shaded walkways
            </figcaption>
          </figure>

          <p>
            The Japanese Tea Garden is a calm, scenic destination located within Brackenridge Park.
            It features stone walkways, koi ponds, waterfalls, and lush landscaping that makes it a
            quiet break from the city’s busier areas. It is also one of the most photographed places
            in San Antonio.
          </p>

          <p>
            The garden’s design and layout make it ideal for a slow walk and casual sightseeing. If
            you enjoy architecture, landscaping, or simply want a peaceful stop, this is one of the
            easiest places to visit while staying close to downtown.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 8 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">8. Six Flags Fiesta Texas</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_FIESTA_TEXAS}
              alt="Roller coasters and quarry wall setting at Six Flags Fiesta Texas"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A major theme park with rides, shows, and seasonal events
            </figcaption>
          </figure>

          <p>
            Six Flags Fiesta Texas is one of the top entertainment destinations in the area, offering
            a mix of roller coasters, live shows, and family rides. Built into a former limestone
            quarry, the park has a unique layout that adds dramatic scenery to many of its
            attractions.
          </p>

          <p>
            Seasonal events and holiday themed celebrations keep the park active year round. It is a
            strong choice if you are visiting with family, traveling with a group, or simply want a
            high energy day of attractions outside the downtown core.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 9 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">9. Natural Bridge Caverns</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_NATURAL_BRIDGE_CAVERNS}
              alt="Underground formations at Natural Bridge Caverns near San Antonio"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A guided underground tour through large caverns and natural rock formations
            </figcaption>
          </figure>

          <p>
            Natural Bridge Caverns is located just northeast of San Antonio and offers one of the
            most unique experiences in the region. Guided tours take visitors through large chambers
            filled with natural formations such as stalactites and stalagmites, providing a look at
            geology and natural history up close.
          </p>

          <p>
            The caverns are also a great option in warmer months because the underground temperature
            stays cooler than the surface. Many visitors plan a half day or full day here, depending
            on which tours and above ground attractions they choose.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* 10 */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold">10. Market Square</h2>

          <figure className="my-16">
            <Image
              loader={cloudinaryLoader}
              src={CLOUDINARY_MARKET_SQUARE}
              alt="Market Square in San Antonio with shops, culture, and food"
              width={1200}
              height={700}
              className="rounded-lg shadow-sm"
            />
            <figcaption className="text-center text-gray-500 mt-2">
              A cultural marketplace with traditional goods, food, and community events
            </figcaption>
          </figure>

          <p>
            Market Square, also known as El Mercado, is a lively cultural destination that celebrates
            San Antonio’s Mexican heritage. Shops offer handmade crafts, clothing, and souvenirs, and
            the surrounding restaurants serve traditional Mexican cuisine that draws both locals and
            tourists.
          </p>

          <p>
            Live music and seasonal events often fill the plaza, making it a fun place to visit even
            if you are only stopping briefly. If you want a location that feels energetic, colorful,
            and deeply connected to local culture, Market Square is a strong choice.
          </p>
        </section>

        <hr className="my-16 border-gray-300" />

        {/* Closing */}
        <section className="mb-12 space-y-6">
          <h2 className="text-4xl font-semibold">Closing Thoughts</h2>

          <p>
            San Antonio’s character is shaped by its history, culture, and diverse attractions. From
            iconic landmarks and riverfront walks to parks, neighborhoods, and underground caverns,
            the city offers experiences for every type of visitor.
          </p>

          <p>
            If you are planning a trip, these ten locations provide a well rounded introduction to
            San Antonio. If you live here, they are a great reminder of how much variety the city
            offers across just a short drive.
          </p>
        </section>

        {/* CTA */}
        <div className="not-prose mt-10">
          <div className="rounded-xl border bg-blue-50 p-6">
            <h3 className="text-2xl font-semibold mb-2">Read more content</h3>

            <div className="mt-4 flex flex-wrap gap-3">

              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-900"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
