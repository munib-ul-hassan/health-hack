import people from "../../../assets/banner2.svg";
import homeimage from "../../../assets/home-img.svg";
import homeimage2 from "../../../assets/home-img2.svg";
import rectangle from "../../../assets/home-rectangle.svg";
export const Component3 = () => {
  return (
    <div className="w-mainwidth px-[5rem] px-4">
      <div className="py-4 flex ">
        <div className="bg-[#E6F0EB] px-10 py-10 rounded-md w-full">
          <div>
            <img src={homeimage} />
          </div>
          <div className="mt-20">
            <div className="text-xl font-bold font-[Optima]">
              <div className="border-l-8 rounded-md  border-[#EA4335] h-auto">
                <h1 className="ml-4">Who This Is Not For:</h1>
              </div>
            </div>

            <div className="font-roboto mt-6">
              <ul className="list-disc pl-4 font-roboto text-[#161616CC] leading-8 capitalize">
                <li>people that want to maintain average health</li>
                <li>
                  people looking to cure instead of solving the root-cause
                </li>
                <li>
                  people that don't feel inspired by taking their health to the
                  next level
                </li>
                <li>
                  Result: Fatigue and struggles persist despite “healthy”
                  habits.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-10 ml-[-15rem]">
          <div className="p-5">
            <div className="text-xl font-bold font-[Optima]">
              <div className="border-l-8 rounded-md  border-[#EA4335] h-auto">
                <h1 className="ml-4">The Problem:</h1>
              </div>
            </div>

            <div className="mt-6">
              <ul className="list-disc pl-4 font-roboto text-[#161616CC] leading-8 capitalize">
                <li>
                  Symptoms Treated, Not Causes: Illness is managed, not
                  prevented.
                </li>
                <li>“Normal Healthy” Myth: Many guidelines mislead.</li>
                <li>
                  Misinformation Overload: Harmful, conflicting advice
                  dominates.
                </li>
                <li>
                  Result: Fatigue and struggles persist despite “healthy”
                  habits.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img src={homeimage2} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex px-12 py-8 space-x-20 ">
          <div>
            <div className="text-xl font-bold font-[Optima]">
              <div className="border-l-8 rounded-md  border-[#20EA6D] h-auto">
                <h1 className="ml-4">
                  A Cut-Like Community Where People Transform Inside-Out
                </h1>
              </div>
            </div>
            <div className="font-roboto mt-6">
              <ul className="list-disc pl-4 font-roboto text-[#161616CC] leading-8 capitalize">
                <li>groups driving mental, physical, and emotional change.</li>
                <li>Shared wins and challenges lasting transformation.</li>
                <li>Be seen, supported, and empowered to thrive.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <img src={rectangle} />
          </div>
          <div>
            <div className="text-xl font-bold font-[Optima]">
              <div className="border-l-8 rounded-md  border-[#20EA6D] h-auto">
                <h1 className="ml-4">
                  Hold each other accountable so you can't escape success
                </h1>
              </div>
            </div>

            <div className="font-roboto mt-6">
              <ul className="list-disc pl-4 font-roboto text-[#161616CC] leading-8 capitalize">
                <li>Accountability keeps everyone on track toward goals.</li>
                <li>Regular check-ins and support prevent falling behind.</li>
                <li>Collective progress ensures no one quits on success.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="rounded-xl" src={people} />
      </div>
    </div>
  );
};
