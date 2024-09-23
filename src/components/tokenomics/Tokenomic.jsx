import circle from "../../assets/circle.png"

const Tokenomic = () => {
  return (
    <div className="w-full bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Tokenomics</h2>
        <p className="font-medium">Initial Distribution</p>
        <div className="grid grid-cols-[8.4rem_1fr] gap-3 items-center">
            <div>
                <img src={circle} alt="circle" className="w-32 mt-2"/>
            </div>
          <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-blue-600 rounded-full"/>
                <p>Crowdsale investors 80%</p>
                </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-[#FAA002] rounded-full"/>
                <p>Crowdsale investors 80%</p>
                </div>
          </div>
        </div>

        <p className=" text-sm py-2 pb-4">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
    </div>
  )
}

export default Tokenomic