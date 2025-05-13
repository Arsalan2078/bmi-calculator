import Image from "next/image";
import HealthTip from "./components/HealthTip";

export default function Home() {
  return (
    <main>
      <article>
        <section id="health-tips">
          <div className="mx-auto max-w-[80rem] px-300 py-600 md:px-500 md:py-[3.125rem] xl:py-1200">
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
      </article>
    </main>
  );
}
