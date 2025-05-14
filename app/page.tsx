import Image from "next/image";
import HealthTip from "./components/HealthTip";
import BMILimitation from "./components/BMILimitation";
import manEating from "@/public/image-man-eating.webp";
import CurvedLine from "./components/CurvedLine";
import BMICalculator from "./components/BMICalculator";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <>
      <header>
        <Logo />
        <BMICalculator />
      </header>

      <main>
        <article>
          <section id="bmi-meaning">
            <div className="relative mx-auto box-content flex max-w-[72.5rem] flex-col gap-600 pb-600 md:flex-row md:items-center md:gap-900 md:pr-500 xl:items-end xl:gap-[8rem] xl:px-500">
              <div className="mx-auto md:mx-0 md:ml-[-7rem] md:flex-[1.25] xl:ml-0 xl:flex-[1.206] xl:pt-[3.25rem]">
                <Image
                  src={manEating}
                  alt="A photo of a man eating sushi."
                  className="w-full max-w-[30rem]"
                  quality={100}
                  priority
                />
              </div>

              <div className="flex flex-col gap-400 px-300 md:flex-1 md:px-0 xl:pb-[2.625rem]">
                <h2 className="text-preset-2">What your BMI result means</h2>
                <p>
                  A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                  Maintaining a healthy weight may lower your chances of
                  experiencing health issues later on, such as obesity and type
                  2 diabetes. Aim for a nutritious diet with reduced fat and
                  sugar content, incorporating ample fruits and vegetables.
                  Additionally, strive for regular physical activity, ideally
                  about 30 minutes daily for five days a week.
                </p>
              </div>

              <CurvedLine
                direction="left"
                className="absolute top-0 right-700 hidden xl:block"
              />
            </div>
          </section>

          <section id="health-tips" className="relative">
            {/* Transparent background gradient */}
            <div className="absolute -z-10 h-full w-full opacity-25 xl:left-[-0.875rem] xl:p-[0.625rem]">
              <div className="gradient mx-auto h-full w-full max-w-[80rem] xl:rounded-[2rem]"></div>
            </div>

            <div className="mx-auto box-content max-w-[72.5rem] px-300 py-600 md:px-500 md:py-[3.125rem] xl:py-1200">
              <ul className="flex flex-col gap-500 xl:flex-row xl:gap-400">
                <li>
                  <HealthTip
                    image="./icon-eating.svg"
                    title="Healthy eating"
                    description="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
                  />
                </li>
                <li>
                  <HealthTip
                    image="./icon-exercise.svg"
                    title="Regular exercise"
                    description="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
                  />
                </li>
                <li>
                  <HealthTip
                    image="./icon-sleep.svg"
                    title="Adequate sleep"
                    description="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
                  />
                </li>
              </ul>
            </div>
          </section>

          <section id="limitations-of-bmi">
            <div className="relative mx-auto box-content grid max-w-[72.5rem] grid-cols-1 gap-y-700 px-300 pt-1100 pb-1200 md:px-500 xl:grid-cols-12 xl:py-1300">
              <div className="flex flex-col gap-400 text-center xl:col-span-6 xl:col-start-1 xl:row-start-1 xl:max-w-[35.25rem] xl:text-start">
                <h2 className="text-preset-2">Limitations of BMI</h2>
                <p>
                  Although BMI is often a practical indicator of healthy weight,
                  it is not suited for every person. Specific groups should
                  carefully consider their BMI outcomes, and in certain cases,
                  the measurement may not be beneficial to use.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-y-200 md:grid-cols-12 md:gap-x-200 md:gap-y-300 xl:col-span-10 xl:col-start-3 xl:row-start-1 xl:grid-cols-10">
                <li className="md:col-span-6 xl:col-span-4 xl:col-start-6">
                  <BMILimitation
                    image="./icon-gender.svg"
                    title="Gender"
                    description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
                  />
                </li>
                <li className="md:col-span-6 xl:col-span-4 xl:col-start-3">
                  <BMILimitation
                    image="./icon-age.svg"
                    title="Age"
                    description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
                  />
                </li>
                <li className="md:col-span-6 xl:col-span-4">
                  <BMILimitation
                    image="./icon-muscle.svg"
                    title="Muscle"
                    description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
                  />
                </li>
                <li className="md:col-span-6 xl:col-span-4">
                  <BMILimitation
                    image="./icon-pregnancy.svg"
                    title="Pregnancy"
                    description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
                  />
                </li>
                <li className="md:col-span-6 md:col-start-4 xl:col-span-4">
                  <BMILimitation
                    image="./icon-race.svg"
                    title="Race"
                    description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
                  />
                </li>
              </ul>

              <CurvedLine
                direction="right"
                className="absolute top-[22rem] left-[13rem] hidden xl:block"
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
