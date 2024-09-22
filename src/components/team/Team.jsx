import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';

const teams = [
    {
        id:'432',
        name:"John Smith",
        subtitle:"CEO",
        image:team1,
        desc:"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
        id:'432re',
        name:"Ellina Willinams",
        subtitle:"web developer",
        image:team2,
        desc:"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    },
    {
        id:'4tgs32',
        name:"John Smith",
        subtitle:"CEO",
        image:team3,
        desc:"Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu"
    }
]
const Team = () => {
  return (
    <div className='w-full p-4 rounded-md my-3 bg-white'>
       <div className="mb-6">
         <h1 className='text-xl font-semibold  mb-3'>Our Team</h1>
         <p className='text-gray-900 text-sm font-medium'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
       </div>

        <div className="space-y-4">
            {
                teams.map((team)=>(
                    <div key={team.id} className="grid md:grid-cols-[7rem_1fr] gap-3 items-center bg-sky-200 md:p-2 p-4 rounded-md">
                        <div className="grid place-content-center text-center ">
                            <img src={team.image} alt={team.name} className=' w-16 mb-2 object-cover rounded-md mx-auto'/>
                            <h1 className='text-sm font-semibold'>{team.name}</h1>
                            <p className='text-xs text-gray-800'>{team.subtitle}</p>
                        </div>
                        <p>{team.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team