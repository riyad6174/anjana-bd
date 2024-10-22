import Link from 'next/link';
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        {/* About Us Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-green-600 text-center mb-6'>
            About Us
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto'>
            Anjana Foundation is a nonprofit organization based in Bangladesh,
            committed to uplifting marginalized communities through a holistic
            approach focused on education, healthcare, and social empowerment.
            With a strong belief in the potential of every individual, the
            foundation works tirelessly to break the cycle of poverty and
            inequality by addressing fundamental challenges faced by
            underprivileged sections of society. Our mission is rooted in the
            principles of equality, compassion, and sustainable development,
            aimed at fostering a brighter and more inclusive future for all.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-green-600 text-center mb-6'>
            Our Mission
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto'>
            At Anjana Foundation, we believe that meaningful social change is
            possible through collective effort and a commitment to empowering
            the most vulnerable members of society. Our mission is to improve
            the lives of marginalized individuals and communities by providing
            them with access to quality education, essential healthcare
            services, and opportunities for social and economic empowerment. We
            envision a world where everyone, regardless of their socio-economic
            background, has the tools and resources to realize their full
            potential and contribute meaningfully to society.
          </p>
        </section>

        {/* Core Initiatives Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-green-600 text-center mb-10'>
            Core Initiatives
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Education for All */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Education for All
              </h3>
              <p className='text-gray-600'>
                Education is the cornerstone of any sustainable development
                effort. Anjana Foundation focuses on providing access to quality
                education for children and young adults from marginalized
                backgrounds through scholarships, school infrastructure
                improvements, and vocational training programs.
              </p>
            </div>

            {/* Healthcare Access */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Healthcare Access
              </h3>
              <p className='text-gray-600'>
                Access to basic healthcare is a fundamental right, yet it
                remains out of reach for many in rural communities. Anjana
                Foundation organizes free health camps and provides essential
                medical supplies, prioritizing maternal and child health,
                nutrition, and preventive care.
              </p>
            </div>

            {/* Social Empowerment Programs */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Social Empowerment Programs
              </h3>
              <p className='text-gray-600'>
                Our social empowerment programs focus on improving the
                socio-economic conditions of vulnerable groups, especially women
                and children, through microfinance programs, skill-building
                workshops, and small business development support.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-green-600 text-center mb-6'>
            Our Approach
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto'>
            The Anjana Foundation follows a community-centered approach,
            ensuring that our programs are designed and implemented with the
            active participation of the communities we serve. By collaborating
            with local stakeholders, community leaders, and partner
            organizations, we develop solutions that are not only impactful but
            also sustainable in the long term.
          </p>
        </section>

        {/* Success Stories Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-green-600 text-center mb-10'>
            Success Stories
          </h2>
          <p className='text-lg mb-12 leading-relaxed text-gray-700 text-center max-w-4xl mx-auto'>
            Over the years, Anjana Foundation has touched the lives of countless
            individuals and families in Bangladesh. From young children gaining
            access to education for the first time, to women establishing small
            businesses that provide stable income for their families, our
            efforts have resulted in transformative changes across multiple
            communities. These stories of success serve as a testament to the
            power of compassion, resilience, and the collective will to create a
            better future.
          </p>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Success Story 1 */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Fatema’s Journey
              </h3>
              <p className='text-gray-600'>
                Fatema, a young girl from a rural village, became the first in
                her family to complete high school and attend college with the
                support of our educational scholarships. Now studying to become
                a teacher, she hopes to give back to her community by educating
                the next generation.
              </p>
            </div>

            {/* Success Story 2 */}
            <div className='bg-white shadow-md p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Empowering Women Artisans
              </h3>
              <p className='text-gray-600'>
                A group of women artisans started their own small enterprise
                producing handmade crafts through our microfinance program and
                business training. These women achieved financial independence,
                contributing to their families and uplifting their community.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-green-600 text-center mb-6'>
            Get Involved
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto mb-6'>
            Everyone has a role to play in building a better future. Whether
            through donations, volunteering, or spreading awareness, your
            support can make a real difference in the lives of those who need it
            most. Join hands with Anjana Foundation in our mission to eradicate
            poverty, promote equality, and uplift marginalized communities.
          </p>
          <Link href={'/contact-us'} className='flex justify-center'>
            <button className='bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300'>
              Get Involved
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
