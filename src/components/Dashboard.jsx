function Dashboard({ resumeData }) {

  return (

    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black mb-16 text-center">

          Resume Analysis Report

        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-[32px] p-8">

            <div className="mb-16">

              <h3 className="text-6xl font-black text-violet-400 mb-4">

                {resumeData.score}%

              </h3>

              <p className="text-2xl">

                Resume Health: {resumeData.health}

              </p>

            </div>

            <div className="mb-14">

              <h3 className="text-3xl font-bold mb-8">

                Strong Points

              </h3>

              <div className="space-y-4">

                {resumeData.strengths.map((item, index) => (

                  <div
                    key={index}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

            <div>

              <h3 className="text-3xl font-bold mb-8">

                Mistakes Found

              </h3>

              <div className="space-y-4">

                {resumeData.weaknesses.map((item, index) => (

                  <div
                    key={index}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-5"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

          <div className="space-y-8">

            <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8">

              <h3 className="text-3xl font-bold mb-6">

                Suggestions

              </h3>

              <div className="space-y-4">

                {resumeData.suggestions.map((item, index) => (

                  <div
                    key={index}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-8">

              <h3 className="text-3xl font-bold mb-6">

                Keyword Match

              </h3>

              <div className="space-y-4">

                {resumeData.keywords.map((item, index) => (

                  <div
                    key={index}
                    className="flex justify-between bg-slate-950 border border-slate-800 rounded-2xl p-4"
                  >

                    <span>
                      {item.word}
                    </span>

                    <span>

                      {item.status}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Dashboard
